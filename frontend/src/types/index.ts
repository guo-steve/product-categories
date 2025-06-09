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

// Updated Attribute interface to match backend response
export interface Attribute {
  id: string;
  name: string;
  type: 'Short Text' | 'Long Text' | 'Dropdown' | 'Multi Select' | 'URL';
  categories: string[]; // Changed from categoryIds to categories (array of category names)
  productsInUse: number;
  createdOn: string; // ISO date string from backend
  updatedOn: string; // ISO date string from backend
  isInherited?: boolean; // Computed based on context
  isGlobal?: boolean; // Computed: true if categories array is empty
}

export interface AttributeFilter {
  direct: boolean;
  inherited: boolean;
  global: boolean;
}

// API-related types for backend integration
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

export interface AttributeApiParams {
  search?: string;
  categories?: string[];
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Flattened category for UI purposes
export interface FlatCategory {
  id: string;
  name: string;
  fullPath: string;
  isLeaf: boolean;
}

// Sort configuration
export interface SortConfig {
  field: 'name' | 'type' | 'category' | 'productsInUse' | 'createdOn' | 'updatedOn';
  direction: 'asc' | 'desc';
}

// Filter state for attributes list
export interface FilterState {
  categories: string[];
  linkTypes: {
    direct: boolean;
    inherited: boolean;
    global: boolean;
  };
  showNotApplicable: boolean;
  keyword: string;
  categorySearch: string;
}

// Type alias for any - with ESLint disable
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;
