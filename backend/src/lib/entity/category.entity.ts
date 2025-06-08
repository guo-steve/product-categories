export interface Category {
  id: string
  name: string
  children: Category[]
  attributeCount?: number
  productCount?: number
  parent?: Category | null
}
