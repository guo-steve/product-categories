import { config } from '../config/env'
import { Attribute, Category, PaginatedResult } from '../types'

// Backend response types
export interface BackendCategory {
  id: string
  name: string
  children: BackendCategory[]
  attributeCount: string
  productCount: string
}

// Utility functions
const formatDate = (isoString: string): string => {
  try {
    const date = new Date(isoString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString().slice(-2)
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const seconds = date.getSeconds().toString().padStart(2, '0')

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
  } catch (error) {
    console.error('Error formatting date:', error)
    return isoString
  }
}

const transformCategory = (backendCategory: BackendCategory): Category => {
  return {
    id: backendCategory.id,
    name: backendCategory.name,
    children: backendCategory.children.map(transformCategory),
    attributeCount: parseInt(backendCategory.attributeCount, 10),
    productCount: parseInt(backendCategory.productCount, 10),
    isLeaf: backendCategory.children.length === 0,
    isExpanded: false, // Default to collapsed
  }
}

export interface AttributeFilter {
  page?: number
  pageSize?: number
  nameLike?: string
  categories?: string[] // Array of category IDs
  orderBy?: string // e.g. "name:asc" or "createdOn:desc"
}

// API functions
export const fetchAttributes = async (
  filter: AttributeFilter,
): Promise<PaginatedResult<Attribute>> => {
  try {
    const queryParams = new URLSearchParams(
      Object.fromEntries(
        Object.entries(filter ?? {}).filter(
          ([_, value]) => value !== undefined,
        ),
      ),
    ).toString()

    const response = await fetch(
      `${config.apiBaseUrl}/attributes?${queryParams}`,
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result: PaginatedResult<Attribute> = await response.json()

    const attributes: Attribute[] = result.data.map((attr: Attribute) => ({
      id: attr.id,
      name: attr.name,
      type: attr.type as Attribute['type'],
      categories: attr.categories,
      productsInUse: attr.productsInUse,
      createdOn: formatDate(attr.createdOn),
      updatedOn: formatDate(attr.updatedOn),
      isGlobal: attr.categories.length === 0, // Global if no categories
    }))

    return {
      data: attributes,
      pagination: result.pagination,
    }
  } catch (error) {
    console.error('Error fetching attributes:', error)
    throw error
  }
}

export const fetchCategoriesTree = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${config.apiBaseUrl}/categories/tree`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const backendCategories: BackendCategory[] = await response.json()

    // Transform to frontend format
    return backendCategories.map(transformCategory)
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}
