// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any

export interface Product {
  id: string;
  name: string;
  category: string;
  images: ProductImage[];
  color: string;
  flavour: string[];
  attributes: Record<string, Any>;
}

export interface ProductImage {
  id: string;
  url: string;
  filename: string;
  size: string;
  dimensions: string;
  fileSize: string;
  isCover: boolean;
}

export interface Category {
  id: string;
  name: string;
  parentId?: string;
  children: Category[];
  attributeCount: number; // Count of directly linked attributes
  productCount: number;
  isExpanded?: boolean;
  isLeaf?: boolean; // True if this is a leaf node (can have products)
}

export interface Attribute {
  id: string;
  name: string;
  type: 'Short Text' | 'Long Text' | 'Dropdown' | 'Multi Select' | 'URL';
  categoryIds?: string[]; // Categories this attribute is directly linked to
  productsInUse: number;
  createdOn: string;
  updatedOn: string;
  isInherited?: boolean; // Computed based on context
  isGlobal?: boolean; // True if not linked to any category
}

export interface AttributeFilter {
  direct: boolean;
  inherited: boolean;
  global: boolean;
}

// API-related types for future REST endpoints
export interface AttributeListParams {
  categoryNodes?: string[]; // Array of category IDs
  linkTypes?: ('direct' | 'inherited' | 'global')[]; // Only applicable when categoryNodes is provided
  notApplicable?: boolean; // Show attributes NOT linked to categoryNodes (bonus feature)
  keyword?: string; // Search term
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface CategoryTreeParams {
  includeAttributeCount?: boolean; // Include count of directly linked attributes
  includeProductCount?: boolean; // Include count of products
}

export interface ApiResponse<T> {
  data: T;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
