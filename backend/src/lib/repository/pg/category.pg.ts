import { Pool } from 'pg'
import { CategoryRepository } from '../category.repository'
import type { Category } from '../../entity/category.entity'

export class PgCategoryRepository implements CategoryRepository {
  constructor(private readonly pool: Pool) {
    // insert other initialization code if needed
  }

  async getCategoryTree(): Promise<Category[]> {
    const query = `
      WITH RECURSIVE category_tree AS (
        SELECT
          c.id,
          c.name,
          c.parent_id,
          (SELECT COUNT(*) FROM attribute_link al WHERE al.category_id = c.id) AS attribute_count,
          (SELECT COUNT(*) FROM product p WHERE p.category_id = c.id) AS product_count
        FROM category c
        WHERE c.parent_id IS NULL
        UNION ALL
        SELECT
          c.id,
          c.name,
          c.parent_id,
          (SELECT COUNT(*) FROM attribute_link al WHERE al.category_id = c.id) AS attribute_count,
          (SELECT COUNT(*) FROM product p WHERE p.category_id = c.id) AS product_count
        FROM category c
        JOIN category_tree ct ON c.parent_id = ct.id
      )
      SELECT * FROM category_tree
    `
    const result = await this.pool.query(query)

    // Transform flat list into nested structure
    const categoriesMap = new Map<string, Category>()
    const rootCategories: Category[] = []

    result.rows.forEach((row) => {
      const category: Category = {
        id: row.id,
        name: row.name,
        children: [],
        attributeCount: row.attribute_count || 0,
        productCount: row.product_count || 0,
      }
      categoriesMap.set(row.id, category)

      if (!row.parent_id) {
        rootCategories.push(category)
      } else {
        const parent = categoriesMap.get(row.parent_id)
        if (parent) {
          parent.children.push(category)
        }
      }
    })

    return rootCategories
  }
}
