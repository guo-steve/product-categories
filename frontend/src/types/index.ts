export interface Product {
  id: string;
  name: string;
  category: string;
  images: ProductImage[];
  color: string;
  flavour: string[];
  attributes: Record<string, any>;
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
  attributeCount: number;
  productCount: number;
  isExpanded?: boolean;
}

export interface Attribute {
  id: string;
  name: string;
  type: 'Short Text' | 'Long Text' | 'Dropdown' | 'Multi Select' | 'URL';
  category?: string;
  productsInUse: number;
  createdOn: string;
  updatedOn: string;
  isInherited?: boolean;
  isGlobal?: boolean;
}

export interface AttributeFilter {
  direct: boolean;
  inherited: boolean;
  global: boolean;
}