import { Product } from '../entity/product.entity'

export interface ProductRepository {
  getProductById(productId: string): Promise<Product | null>
}
