import { Pool } from 'pg'
import {
  AttributeOrderBy,
  AttributeRepository,
  ListAttributesFilter,
} from '../attribute.repository'
import { Attribute } from '../../entity/attribute.entity'
import { Any, PagingatedResult } from '../../../types'
import { fetchCount } from './common'

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

    const linkTypes = filter.linkTypes || {
      global: true,
      direct: true,
      inherited: true,
    }

    let query = `
      WITH RECURSIVE category_ancestors AS (
        SELECT id, parent_id, 0 as level
        FROM category
        WHERE ($2::bigint[] IS NULL OR id = ANY($2))
        UNION ALL
        SELECT c.id, c.parent_id, a.level + 1
        FROM category c
        JOIN category_ancestors a ON c.id = a.parent_id
      ),
      base AS (
        SELECT
          a.id AS attribute_id,
          a."name",
          a."type",
          a.created_on,
          a.updated_on,
          al.attribute_id IS NULL AS is_global,
          ca.level,
          c_all."name" AS category_name,
          p.id AS product_id
        FROM attribute a
        LEFT JOIN attribute_link al ON al.attribute_id = a.id
        LEFT JOIN category c_all ON c_all.id = al.category_id
        LEFT JOIN product p ON p.category_id = c_all.id
        LEFT JOIN category_ancestors ca ON ca.id = c_all.id
        WHERE ($1::text IS NULL OR a."name" ILIKE '%' || $1 || '%')
      ),
      aggregated as (
	      SELECT
	      attribute_id AS id,
	      "name",
	      ARRAY_AGG(DISTINCT category_name) FILTER (WHERE category_name IS NOT NULL) AS categories,
	      COUNT(DISTINCT product_id) AS products_in_use,
	      "type",
	      created_on,
	      updated_on,
	      CASE
	        WHEN BOOL_AND(is_global) THEN 'global'
	        WHEN MIN(level) = 0 THEN 'direct'
	        WHEN MIN(level) IS NOT NULL THEN 'inherited'
	        ELSE NULL
	      END AS link_type
	      FROM base
	      GROUP BY attribute_id, "name", "type", created_on, updated_on
	    )
	    SELECT
	      *
	    FROM aggregated
	    WHERE (($3::boolean AND link_type = 'global')
	    OR ($4::boolean AND link_type = 'inherited')
	    OR ($5::boolean AND link_type = 'direct'))
      ORDER BY ${orderBy} NULLS LAST, id
    `
    const params: Any[] = [
      filter.nameLike || null,
      filter.categories ?? null,
      linkTypes.global ?? false,
      linkTypes.inherited ?? false,
      linkTypes.direct ?? false,
    ]

    const totalCount = await fetchCount(this.pool, query, params)

    query += `OFFSET $6 LIMIT $7`
    params.push(offset, limit)

    const attributesResult = await this.pool.query(query, params)

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
        totalCount,
      },
    }
  }
}
