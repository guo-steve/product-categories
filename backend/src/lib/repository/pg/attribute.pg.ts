import { Pool } from 'pg'
import {
  AttributeOrderBy,
  AttributeRepository,
  ListAttributesFilter,
} from '../attribute.repository'
import { Attribute } from '../../entity/attribute.entity'
import { PagingatedResult } from '../../../types'

// Whitelist of allowed column names to prevent SQL injection
const fieldsMap: Record<keyof Omit<Attribute, 'id'>, string> = {
  name: 'name',
  type: 'type',
  productsInUse: 'products_in_use',
  categories: 'categories',
  createdOn: 'created_on',
  updatedOn: 'updated_on',
}

function mapOrderBy(orderBy?: AttributeOrderBy): string {
  const column = fieldsMap[orderBy?.field || 'name'] || 'name'
  const direction = orderBy?.direction === 'desc' ? 'DESC' : 'ASC'

  return `${column} ${direction.toUpperCase()}`
}

export class PgAttributeRepository implements AttributeRepository {
  constructor(private readonly pool: Pool) {
    // insert other initialization code if needed
  }

  async listAttributes(
    filter: ListAttributesFilter,
  ): Promise<PagingatedResult<Attribute>> {
    const limit = filter.pageSize || 10
    const offset = ((filter.page || 1) - 1) * limit

    const orderBy = mapOrderBy(filter.orderBy)

    const attributesQuery = `
      SELECT
          a.id,
          a."name",
          ARRAY_AGG(DISTINCT c."name") FILTER (WHERE c."name" IS NOT NULL) AS categories,
          COUNT(DISTINCT p.id) AS products_in_use,
          a."type",
          a.created_on,
          a.updated_on
      FROM "attribute" a
      LEFT JOIN attribute_link al ON al.attribute_id = a.id
      LEFT JOIN category c ON c.id = al.category_id
      LEFT JOIN product p ON p.category_id = c.id
      WHERE ($1::text IS NULL OR a."name" ILIKE '%' || $1 || '%')
      AND ($2::bigint[] IS NULL OR c.id = ANY($2))
      GROUP BY a.id, a."name", a."type", a.created_on, a.updated_on
      ORDER BY ${orderBy}, a.id
      OFFSET $3 LIMIT $4
    `
    const attributesResult = await this.pool.query(attributesQuery, [
      filter.nameLike ?? null,
      filter.categories ?? null,
      offset,
      limit,
    ])

    const result = attributesResult.rows.map((row) => ({
      id: row.id,
      name: row.name,
      type: row.type,
      categories: row.categories ?? [],
      productsInUse: parseInt(row.products_in_use, 10),
      createdOn: new Date(row.created_on),
      updatedOn: new Date(row.updated_on),
    })) as Attribute[]

    return {
      data: result,
      pagination: {
        page: filter.page ?? 1,
        pageSize: limit,
        hasNextPage: result.length === limit,
      },
    }
  }
}
