import { Pool } from 'pg'
import { AttributeRepository } from '../attribute.repository'
import { Attribute } from '../../entity/attribute.entity'

export class PgAttributeRepository implements AttributeRepository {
  constructor(private readonly pool: Pool) {
    // insert other initialization code if needed
  }

  async ListAttributes(): Promise<Attribute[]> {
    const attributesQuery = `
      SELECT 
        a.id, 
        a.name, 
        avt.name AS type,
        COUNT(DISTINCT al.category_id) AS "productsInUse",
        a.created_on AS "createdOn",
        a.updated_on AS "updatedOn"
      FROM attribute a
      JOIN attribute_value_type avt ON a.attribute_value_type_id = avt.id
      LEFT JOIN attribute_link al ON a.id = al.attribute_id
      GROUP BY a.id, a.name, avt.name, a.created_on, a.updated_on
    `;
    const attributesResult = await this.pool.query(attributesQuery);

    const categoriesQuery = `
      SELECT al.attribute_id, c.id, c.name
      FROM attribute_link al
      JOIN category c ON al.category_id = c.id
    `;
    const categoriesResult = await this.pool.query(categoriesQuery);

    const categoriesByAttributeId = categoriesResult.rows.reduce((acc, row) => {
      if (!acc[row.attribute_id]) acc[row.attribute_id] = [];
      acc[row.attribute_id].push({ id: row.id, name: row.name });
      return acc;
    }, {});

    return attributesResult.rows.map(row => ({
      id: row.id,
      name: row.name,
      type: row.type,
      categories: categoriesByAttributeId[row.id] || [],
      productsInUse: parseInt(row.productsInUse, 10),
      createdOn: row.createdOn,
      updatedOn: row.updatedOn
    })) as Attribute[];
  }
}
