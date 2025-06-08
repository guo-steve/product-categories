import { Category } from './category.entity'

export enum AttributeValueType {
  ShortText = 'Short Text',
  LongText = 'Long Text',
  Dropdown = 'Dropdown',
  MultiSelect = 'Multi Select',
  URL = 'URL',
}

export interface Attribute {
  id: number
  name: string
  type: AttributeValueType
  categories: Category[]
  productsInUse: number
  createdOn: Date
  updatedOn: Date
}
