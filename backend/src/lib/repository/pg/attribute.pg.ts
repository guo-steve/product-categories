import { Pool } from 'pg'
import { AttributeRepository } from '../attribute.repository'
import { Attribute } from '../../entity/attribute.entity'

export class PgAttributeRepository implements AttributeRepository {
  constructor(private readonly pool: Pool) {
    // insert other initialization code if needed
  }

  async listAttributes(): Promise<Attribute[]> {
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
      GROUP BY a.id, a."name", a."type", a.created_on, a.updated_on
      ORDER BY a.id
    `
    const attributesResult = await this.pool.query(attributesQuery)

    return attributesResult.rows.map((row) => ({
      id: row.id,
      name: row.name,
      type: row.type,
      categories: row.categories ?? [],
      productsInUse: parseInt(row.products_in_use, 10),
      createdOn: new Date(row.created_on),
      updatedOn: new Date(row.updated_on),
    })) as Attribute[]
  }
}
