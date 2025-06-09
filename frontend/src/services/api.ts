import { config } from '../config/env';
import { Attribute, Category, Attribute } from '../types';

// Backend response types
export interface BackendCategory {
  id: string;
  name: string;
  children: BackendCategory[];
  attributeCount: string;
  productCount: string;
}

// Utility functions
const formatDate = (isoString: string): string => {
  try {
    const date = new Date(isoString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  } catch (error) {
    console.error('Error formatting date:', error);
    return isoString;
  }
};

const transformCategory = (backendCategory: BackendCategory): Category => {
  return {
    id: backendCategory.id,
    name: backendCategory.name,
    children: backendCategory.children.map(transformCategory),
    attributeCount: parseInt(backendCategory.attributeCount, 10),
    productCount: parseInt(backendCategory.productCount, 10),
    isLeaf: backendCategory.children.length === 0,
    isExpanded: false, // Default to collapsed
  };
};

// API functions
export const fetchAttributes = async (): Promise<Attribute[]> => {
  try {
    const response = await fetch(`${config.apiBaseUrl}/attributes`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const attributes: Attribute[] = await response.json();

    // Transform to frontend format
    return attributes.map(attr => ({
      id: attr.id,
      name: attr.name,
      type: attr.type as Attribute['type'],
      categories: attr.categories,
      productsInUse: attr.productsInUse,
      createdOn: formatDate(attr.createdOn),
      updatedOn: formatDate(attr.updatedOn),
      isGlobal: attr.categories.length === 0, // Global if no categories
    }));
  } catch (error) {
    console.error('Error fetching attributes:', error);
    throw error;
  }
};

export const fetchCategoriesTree = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${config.apiBaseUrl}/categories/tree`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const backendCategories: BackendCategory[] = await response.json();

    // Transform to frontend format
    return backendCategories.map(transformCategory);
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
