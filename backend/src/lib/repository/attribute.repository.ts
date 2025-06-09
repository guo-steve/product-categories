import { OrderBy, PagingatedResult } from '../../types'
import { Attribute } from '../entity/attribute.entity'

export type CreateAttributeParams = Pick<Attribute, 'name' | 'type'>

export type AttributeOrderBy = OrderBy<Omit<Attribute, 'id'>>

export interface ListAttributesFilter {
  page?: number
  pageSize?: number
  nameLike?: string
  categories?: string[]
  orderBy?: AttributeOrderBy
}

export interface AttributeRepository {
  // LinkAttributeToCategory(
  //   attributeId: string,
  //   categoryId: string,
  // ): Promise<void>
  //
  // CreateAttribute(): Promise<string>

  listAttributes(
    filter: ListAttributesFilter,
  ): Promise<PagingatedResult<Attribute>>
}
