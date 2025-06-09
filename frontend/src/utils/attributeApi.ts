import { Attribute, Category, AttributeListParams, CategoryTreeParams, ApiResponse } from '../types';
import { mockAttributes, mockCategories, isAttributeApplicableToCategory } from '../data/mockData';

/**
 * Simulated REST API endpoint: GET /api/attributes
 * Returns the list of attributes with optional filtering, pagination, and sorting
 */
export const getAttributes = async (params: AttributeListParams = {}): Promise<ApiResponse<Attribute[]>> => {
  const {
    categoryNodes = [],
    linkTypes = ['direct', 'inherited', 'global'],
    notApplicable = false,
    keyword = '',
    page = 1,
    limit = 25,
    sortBy = 'name',
    sortOrder = 'asc'
  } = params;

  let filtered = [...mockAttributes];

  // Keyword search
  if (keyword.trim()) {
    const searchTerm = keyword.toLowerCase();
    filtered = filtered.filter(attr =>
      attr.name.toLowerCase().includes(searchTerm) ||
      attr.type.toLowerCase().includes(searchTerm) ||
      (attr.categoryIds && attr.categoryIds.some(catId => {
        const category = findCategoryById(catId, mockCategories);
        return category?.name.toLowerCase().includes(searchTerm);
      }))
    );
  }

  // Category-based filtering
  if (categoryNodes.length > 0) {
    filtered = filtered.filter(attr => {
      const applicabilityResults = categoryNodes.map(categoryId => 
        isAttributeApplicableToCategory(attr, categoryId, mockCategories)
      );

      if (notApplicable) {
        // Show attributes NOT applicable to ANY of the selected categories
        return applicabilityResults.every(result => !result.applicable);
      } else {
        // Show attributes applicable to AT LEAST ONE of the selected categories
        const applicableResults = applicabilityResults.filter(result => result.applicable);
        
        if (applicableResults.length === 0) {
          return false;
        }

        // Apply link type filters
        return applicableResults.some(result => linkTypes.includes(result.linkType));
      }
    });
  } else {
    // When no categories selected, filter by global nature
    filtered = filtered.filter(attr => {
      if (attr.isGlobal || !attr.categoryIds) {
        return linkTypes.includes('global');
      } else {
        return linkTypes.includes('direct');
      }
    });
  }

  // Sorting
  filtered.sort((a, b) => {
    let aValue: any;
    let bValue: any;

    switch (sortBy) {
      case 'productsInUse':
        aValue = Number(a.productsInUse);
        bValue = Number(b.productsInUse);
        break;
      case 'createdOn':
      case 'updatedOn':
        aValue = new Date(a[sortBy].replace(/(\d{2})\/(\d{2})\/(\d{2})/, '20$3-$2-$1'));
        bValue = new Date(b[sortBy].replace(/(\d{2})\/(\d{2})\/(\d{2})/, '20$3-$2-$1'));
        break;
      default:
        aValue = String(a[sortBy as keyof Attribute] || '').toLowerCase();
        bValue = String(b[sortBy as keyof Attribute] || '').toLowerCase();
    }

    if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  // Pagination
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const paginatedResults = filtered.slice(startIndex, startIndex + limit);

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));

  return {
    data: paginatedResults,
    pagination: {
      page,
      limit,
      total,
      totalPages
    }
  };
};

/**
 * Simulated REST API endpoint: GET /api/categories
 * Returns the category tree with optional attribute and product counts
 */
export const getCategoryTree = async (params: CategoryTreeParams = {}): Promise<ApiResponse<Category[]>> => {
  const {
    includeAttributeCount = true,
    includeProductCount = true
  } = params;

  let categories = JSON.parse(JSON.stringify(mockCategories)); // Deep clone

  if (!includeAttributeCount) {
    categories = removeCounts(categories, 'attributeCount');
  }

  if (!includeProductCount) {
    categories = removeCounts(categories, 'productCount');
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));

  return {
    data: categories
  };
};

// Helper functions
function findCategoryById(id: string, categories: Category[]): Category | null {
  for (const category of categories) {
    if (category.id === id) {
      return category;
    }
    if (category.children.length > 0) {
      const found = findCategoryById(id, category.children);
      if (found) return found;
    }
  }
  return null;
}

function removeCounts(categories: Category[], countField: 'attributeCount' | 'productCount'): Category[] {
  return categories.map(category => {
    const { [countField]: _, ...categoryWithoutCount } = category;
    return {
      ...categoryWithoutCount,
      children: removeCounts(category.children, countField)
    };
  });
}

// Example usage functions for testing
export const exampleUsage = {
  // Get all attributes
  getAllAttributes: () => getAttributes(),
  
  // Get attributes for specific categories
  getAttributesForCategories: (categoryIds: string[]) => 
    getAttributes({ categoryNodes: categoryIds }),
  
  // Get only direct attributes for categories
  getDirectAttributesForCategories: (categoryIds: string[]) => 
    getAttributes({ categoryNodes: categoryIds, linkTypes: ['direct'] }),
  
  // Get attributes NOT applicable to categories (for linking)
  getAttributesNotApplicableToCategories: (categoryIds: string[]) => 
    getAttributes({ categoryNodes: categoryIds, notApplicable: true }),
  
  // Search attributes with pagination
  searchAttributes: (keyword: string, page: number = 1) => 
    getAttributes({ keyword, page, limit: 10 }),
  
  // Get category tree without counts
  getCategoryTreeMinimal: () => 
    getCategoryTree({ includeAttributeCount: false, includeProductCount: false })
};