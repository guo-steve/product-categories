import { Attribute } from './attribute.entity'

export interface Image {
  url: string
  size: string
}

export interface Product {
  id: number
  name: string
  category_id: number
  images: Image[]
  attributes: Record<string, Attribute>
}
