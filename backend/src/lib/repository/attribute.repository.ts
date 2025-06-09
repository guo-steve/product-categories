import { Attribute } from '../entity/attribute.entity'

export type CreateAttributeParams = Pick<Attribute, 'name' | 'type'>

export const OrderByOptions = {}

export interface ListAttributesFilter {
  page?: number
  pageSize?: number
  like?: string
  orderBy?: 'name-asc' | 'name-desc'
}

export interface AttributeRepository {
  // LinkAttributeToCategory(
  //   attributeId: string,
  //   categoryId: string,
  // ): Promise<void>
  //
  // CreateAttribute(): Promise<string>

  listAttributes(): Promise<Attribute[]>
}
