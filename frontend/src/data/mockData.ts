import { Product, Category, Attribute } from '../types';

export const mockProduct: Product = {
  id: '1',
  name: 'XiangPiaoPiao Milk Tea',
  category: 'Food & Grocery > Beverages > Flavoured Drinks',
  images: [
    {
      id: '1',
      url: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
      filename: '6da4d497-2a2f-...',
      size: '750 x 950 px',
      dimensions: '750x950',
      fileSize: '188.43 KB',
      isCover: true
    }
  ],
  color: 'Original',
  flavour: ['FL4', 'Classic'],
  attributes: {}
};

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Beauty',
    children: [
      {
        id: '11',
        name: 'Skincare',
        children: [
          { id: '111', name: 'Facial Cleanser', children: [], attributeCount: 3, productCount: 12, isLeaf: true },
          { id: '112', name: 'Moisturizers', children: [], attributeCount: 2, productCount: 8, isLeaf: true },
          { id: '113', name: 'Serums', children: [], attributeCount: 4, productCount: 15, isLeaf: true },
          { id: '114', name: 'Sunscreen', children: [], attributeCount: 2, productCount: 6, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0, // Parent nodes don't have direct products
        isLeaf: false
      },
      {
        id: '12',
        name: 'Makeup',
        children: [
          { id: '121', name: 'Foundation', children: [], attributeCount: 3, productCount: 18, isLeaf: true },
          { id: '122', name: 'Lipstick', children: [], attributeCount: 2, productCount: 25, isLeaf: true },
          { id: '123', name: 'Eyeshadow', children: [], attributeCount: 4, productCount: 32, isLeaf: true },
          { id: '124', name: 'Mascara', children: [], attributeCount: 2, productCount: 14, isLeaf: true }
        ],
        attributeCount: 6,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '13',
        name: 'Hair Care',
        children: [
          { id: '131', name: 'Shampoo', children: [], attributeCount: 3, productCount: 22, isLeaf: true },
          { id: '132', name: 'Conditioner', children: [], attributeCount: 2, productCount: 18, isLeaf: true },
          { id: '133', name: 'Hair Styling', children: [], attributeCount: 4, productCount: 16, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 8,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '2',
    name: 'Children & Toys',
    children: [
      {
        id: '21',
        name: 'Educational Toys',
        children: [
          { id: '211', name: 'Building Blocks', children: [], attributeCount: 2, productCount: 15, isLeaf: true },
          { id: '212', name: 'Puzzles', children: [], attributeCount: 3, productCount: 28, isLeaf: true },
          { id: '213', name: 'Science Kits', children: [], attributeCount: 4, productCount: 12, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '22',
        name: 'Action Figures',
        children: [
          { id: '221', name: 'Superheroes', children: [], attributeCount: 3, productCount: 42, isLeaf: true },
          { id: '222', name: 'Dolls', children: [], attributeCount: 4, productCount: 38, isLeaf: true },
          { id: '223', name: 'Collectibles', children: [], attributeCount: 2, productCount: 24, isLeaf: true }
        ],
        attributeCount: 6,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '23',
        name: 'Baby Products',
        children: [
          { id: '231', name: 'Baby Clothing', children: [], attributeCount: 5, productCount: 67, isLeaf: true },
          { id: '232', name: 'Baby Food', children: [], attributeCount: 3, productCount: 45, isLeaf: true },
          { id: '233', name: 'Baby Care', children: [], attributeCount: 4, productCount: 52, isLeaf: true }
        ],
        attributeCount: 7,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 12,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '3',
    name: 'Fashion',
    children: [
      {
        id: '31',
        name: 'Men\'s Clothing',
        children: [
          { id: '311', name: 'Shirts', children: [], attributeCount: 4, productCount: 85, isLeaf: true },
          { id: '312', name: 'Pants', children: [], attributeCount: 3, productCount: 62, isLeaf: true },
          { id: '313', name: 'Jackets', children: [], attributeCount: 5, productCount: 34, isLeaf: true },
          { id: '314', name: 'Shoes', children: [], attributeCount: 6, productCount: 78, isLeaf: true }
        ],
        attributeCount: 8,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '32',
        name: 'Women\'s Clothing',
        children: [
          { id: '321', name: 'Dresses', children: [], attributeCount: 5, productCount: 124, isLeaf: true },
          { id: '322', name: 'Tops', children: [], attributeCount: 4, productCount: 98, isLeaf: true },
          { id: '323', name: 'Skirts', children: [], attributeCount: 3, productCount: 56, isLeaf: true },
          { id: '324', name: 'Shoes', children: [], attributeCount: 6, productCount: 142, isLeaf: true }
        ],
        attributeCount: 9,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '33',
        name: 'Accessories',
        children: [
          { id: '331', name: 'Bags', children: [], attributeCount: 4, productCount: 67, isLeaf: true },
          { id: '332', name: 'Jewelry', children: [], attributeCount: 5, productCount: 89, isLeaf: true },
          { id: '333', name: 'Watches', children: [], attributeCount: 6, productCount: 45, isLeaf: true },
          { id: '334', name: 'Belts', children: [], attributeCount: 2, productCount: 23, isLeaf: true }
        ],
        attributeCount: 7,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 15,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '4',
    name: 'Food & Grocery',
    children: [
      {
        id: '5',
        name: 'Beverages',
        children: [
          { id: '6', name: 'Carbonated Drinks', children: [], attributeCount: 0, productCount: 0, isLeaf: true },
          { id: '7', name: 'Cocoa & Malted Drinks', children: [], attributeCount: 0, productCount: 0, isLeaf: true },
          {
            id: '8',
            name: 'Coffee',
            children: [
              { id: '81', name: 'Instant Coffee', children: [], attributeCount: 3, productCount: 24, isLeaf: true },
              { id: '82', name: 'Ground Coffee', children: [], attributeCount: 4, productCount: 18, isLeaf: true },
              { id: '83', name: 'Coffee Beans', children: [], attributeCount: 5, productCount: 32, isLeaf: true },
              { id: '84', name: 'Coffee Pods', children: [], attributeCount: 2, productCount: 15, isLeaf: true },
              { id: '85', name: 'Cold Brew Coffee', children: [], attributeCount: 3, productCount: 12, isLeaf: true }
            ],
            attributeCount: 6,
            productCount: 0,
            isLeaf: false
          },
          { id: '9', name: 'Flavoured Drinks', children: [], attributeCount: 2, productCount: 2, isLeaf: true },
          { id: '10', name: 'Health & Energy Drinks', children: [], attributeCount: 0, productCount: 0, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 1,
    productCount: 0,
    isLeaf: false,
    isExpanded: true
  }
];

// Updated attributes with proper categoryIds instead of category strings
export const mockAttributes: Attribute[] = [
  {
    id: '1',
    name: 'Organic Flavour',
    type: 'Dropdown',
    productsInUse: 1,
    createdOn: '25/04/28 14:51:53',
    updatedOn: '25/05/18 23:32:18',
    isGlobal: true // Not linked to any specific category
  },
  {
    id: '2',
    name: 'Flavour',
    type: 'Dropdown',
    categoryIds: ['9'], // Directly linked to Flavoured Drinks
    productsInUse: 4,
    createdOn: '25/03/26 13:24:08',
    updatedOn: '25/05/18 23:15:45'
  },
  {
    id: '3',
    name: 'Preferred URL',
    type: 'URL',
    productsInUse: 0,
    createdOn: '25/03/24 12:08:25',
    updatedOn: '25/03/24 12:09:20',
    isGlobal: true
  },
  {
    id: '4',
    name: 'Color',
    type: 'Short Text',
    categoryIds: ['9'], // Directly linked to Flavoured Drinks
    productsInUse: 7,
    createdOn: '25/03/21 14:03:37',
    updatedOn: '25/05/18 23:16:37'
  },
  {
    id: '5',
    name: 'Pocket Number',
    type: 'Short Text',
    productsInUse: 4,
    createdOn: '25/03/21 14:01:33',
    updatedOn: '25/03/25 15:20:52',
    isGlobal: true
  },
  {
    id: '6',
    name: 'Product Dimensions',
    type: 'Short Text',
    productsInUse: 6,
    createdOn: '25/03/21 13:14:22',
    updatedOn: '25/03/21 14:16:15',
    isGlobal: true
  },
  {
    id: '7',
    name: 'Tags',
    type: 'Multi Select',
    productsInUse: 0,
    createdOn: '25/03/21 13:14:14',
    updatedOn: '25/03/21 13:14:14',
    isGlobal: true
  },
  {
    id: '8',
    name: 'Usage Instructions',
    type: 'Long Text',
    productsInUse: 6,
    createdOn: '25/03/21 13:14:07',
    updatedOn: '25/04/14 14:56:30',
    isGlobal: true
  },
  {
    id: '9',
    name: 'Product Benefits',
    type: 'Short Text',
    categoryIds: ['111', '4'], // Linked to Facial Cleanser and Food & Grocery
    productsInUse: 6,
    createdOn: '25/03/21 13:14:02',
    updatedOn: '25/05/18 23:11:05'
  },
  {
    id: '10',
    name: 'Skin Type',
    type: 'Dropdown',
    categoryIds: ['11'], // Linked to Skincare (parent category)
    productsInUse: 12,
    createdOn: '25/03/15 10:30:00',
    updatedOn: '25/05/10 16:45:22'
  },
  {
    id: '11',
    name: 'SPF Level',
    type: 'Short Text',
    categoryIds: ['114'], // Linked to Sunscreen
    productsInUse: 6,
    createdOn: '25/03/10 09:15:30',
    updatedOn: '25/04/20 14:22:18'
  },
  {
    id: '12',
    name: 'Brand',
    type: 'Short Text',
    productsInUse: 0,
    createdOn: '25/03/21 13:14:02',
    updatedOn: '25/05/18 23:11:05',
    isGlobal: true
  },
  // New coffee-specific attributes
  {
    id: '13',
    name: 'Roast Level',
    type: 'Dropdown',
    categoryIds: ['8'], // Linked to Coffee (parent category)
    productsInUse: 45,
    createdOn: '25/02/15 11:20:30',
    updatedOn: '25/05/12 09:45:15'
  },
  {
    id: '14',
    name: 'Caffeine Content',
    type: 'Short Text',
    categoryIds: ['81', '82', '83'], // Linked to specific coffee types
    productsInUse: 67,
    createdOn: '25/02/20 14:35:22',
    updatedOn: '25/05/08 16:20:40'
  },
  {
    id: '15',
    name: 'Origin Country',
    type: 'Dropdown',
    categoryIds: ['82', '83'], // Linked to Ground Coffee and Coffee Beans
    productsInUse: 38,
    createdOn: '25/01/28 10:15:45',
    updatedOn: '25/04/25 13:30:18'
  }
];

// Helper function to get all ancestor category IDs
export const getAncestorIds = (categoryId: string, categories: Category[]): string[] => {
  const findAncestors = (cats: Category[], targetId: string, ancestors: string[] = []): string[] => {
    for (const cat of cats) {
      if (cat.id === targetId) {
        return ancestors;
      }
      if (cat.children.length > 0) {
        const found = findAncestors(cat.children, targetId, [...ancestors, cat.id]);
        if (found.length > 0 || cat.children.some(child => child.id === targetId)) {
          return found.length > 0 ? found : [...ancestors, cat.id];
        }
      }
    }
    return [];
  };
  
  return findAncestors(categories, categoryId);
};

// Helper function to determine if an attribute is applicable to a category
export const isAttributeApplicableToCategory = (
  attribute: Attribute, 
  categoryId: string, 
  categories: Category[]
): { applicable: boolean; linkType: 'direct' | 'inherited' | 'global' } => {
  // Global attributes apply to all categories
  if (attribute.isGlobal || !attribute.categoryIds) {
    return { applicable: true, linkType: 'global' };
  }
  
  // Check for direct link
  if (attribute.categoryIds.includes(categoryId)) {
    return { applicable: true, linkType: 'direct' };
  }
  
  // Check for inherited link (attribute linked to ancestor)
  const ancestorIds = getAncestorIds(categoryId, categories);
  const hasInheritedLink = attribute.categoryIds.some(attrCatId => 
    ancestorIds.includes(attrCatId)
  );
  
  if (hasInheritedLink) {
    return { applicable: true, linkType: 'inherited' };
  }
  
  return { applicable: false, linkType: 'direct' };
};

// Mock data for category-specific views
export const mockCategoryAttributes: Attribute[] = [
  {
    id: '4',
    name: 'Color',
    type: 'Short Text',
    productsInUse: 7,
    createdOn: '25/03/21 14:03:37',
    updatedOn: '25/05/18 23:16:37'
  },
  {
    id: '2',
    name: 'Flavour',
    type: 'Dropdown',
    productsInUse: 4,
    createdOn: '25/03/26 13:24:08',
    updatedOn: '25/05/18 23:15:45'
  },
  {
    id: '9',
    name: 'Product Benefits',
    type: 'Short Text',
    productsInUse: 6,
    createdOn: '25/03/21 13:14:02',
    updatedOn: '25/05/18 23:11:05',
    isInherited: true
  }
];

export const mockGlobalAttributes: Attribute[] = [
  {
    id: '1',
    name: 'Organic Flavour',
    type: 'Dropdown',
    productsInUse: 1,
    createdOn: '25/04/28 14:51:53',
    updatedOn: '25/05/18 23:32:18',
    isGlobal: true
  },
  {
    id: '3',
    name: 'Preferred URL',
    type: 'URL',
    productsInUse: 0,
    createdOn: '25/03/24 12:08:25',
    updatedOn: '25/03/24 12:09:20',
    isGlobal: true
  },
  {
    id: '12',
    name: 'Brand',
    type: 'Short Text',
    productsInUse: 0,
    createdOn: '25/03/21 13:14:02',
    updatedOn: '25/05/18 23:11:05',
    isGlobal: true
  }
];