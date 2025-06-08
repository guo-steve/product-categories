import { Category } from '../entity/category.entity'

export interface CategoryRepository {
  getCategoryTree(): Promise<Category[]>
}
