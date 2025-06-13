import { OrderBy, PagingatedResult } from '../../types'
import { Attribute } from '../entity/attribute.entity'

export type CreateAttributeParams = Pick<Attribute, 'name' | 'type'>

export type AttributeOrderBy = OrderBy<Omit<Attribute, 'id'>>

export type LinkTypes = {
  global?: boolean
  direct?: boolean
  inherited?: boolean
}

export interface ListAttributesFilter {
  page?: number
  pageSize?: number
  nameLike?: string
  categories?: string[]
  orderBy?: AttributeOrderBy
  linkTypes?: LinkTypes
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
