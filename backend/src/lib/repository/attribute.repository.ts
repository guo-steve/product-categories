import { Attribute } from '../entity/attribute.entity'

export type CreateAttributeParams = Pick<Attribute, 'name' | 'type'>

export interface AttributeRepository {
  // LinkAttributeToCategory(
  //   attributeId: string,
  //   categoryId: string,
  // ): Promise<void>
  //
  // CreateAttribute(): Promise<string>

  ListAttributes(): Promise<Attribute[]>
}
