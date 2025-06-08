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
          { id: '111', name: 'Facial Cleanser', children: [], attributeCount: 3, productCount: 12 },
          { id: '112', name: 'Moisturizers', children: [], attributeCount: 2, productCount: 8 },
          { id: '113', name: 'Serums', children: [], attributeCount: 4, productCount: 15 },
          { id: '114', name: 'Sunscreen', children: [], attributeCount: 2, productCount: 6 }
        ],
        attributeCount: 5,
        productCount: 41
      },
      {
        id: '12',
        name: 'Makeup',
        children: [
          { id: '121', name: 'Foundation', children: [], attributeCount: 3, productCount: 18 },
          { id: '122', name: 'Lipstick', children: [], attributeCount: 2, productCount: 25 },
          { id: '123', name: 'Eyeshadow', children: [], attributeCount: 4, productCount: 32 },
          { id: '124', name: 'Mascara', children: [], attributeCount: 2, productCount: 14 }
        ],
        attributeCount: 6,
        productCount: 89
      },
      {
        id: '13',
        name: 'Hair Care',
        children: [
          { id: '131', name: 'Shampoo', children: [], attributeCount: 3, productCount: 22 },
          { id: '132', name: 'Conditioner', children: [], attributeCount: 2, productCount: 18 },
          { id: '133', name: 'Hair Styling', children: [], attributeCount: 4, productCount: 16 }
        ],
        attributeCount: 4,
        productCount: 56
      }
    ],
    attributeCount: 8,
    productCount: 186
  },
  {
    id: '2',
    name: 'Children & Toys',
    children: [
      {
        id: '21',
        name: 'Educational Toys',
        children: [
          { id: '211', name: 'Building Blocks', children: [], attributeCount: 2, productCount: 15 },
          { id: '212', name: 'Puzzles', children: [], attributeCount: 3, productCount: 28 },
          { id: '213', name: 'Science Kits', children: [], attributeCount: 4, productCount: 12 }
        ],
        attributeCount: 5,
        productCount: 55
      },
      {
        id: '22',
        name: 'Action Figures',
        children: [
          { id: '221', name: 'Superheroes', children: [], attributeCount: 3, productCount: 42 },
          { id: '222', name: 'Dolls', children: [], attributeCount: 4, productCount: 38 },
          { id: '223', name: 'Collectibles', children: [], attributeCount: 2, productCount: 24 }
        ],
        attributeCount: 6,
        productCount: 104
      },
      {
        id: '23',
        name: 'Baby Products',
        children: [
          { id: '231', name: 'Baby Clothing', children: [], attributeCount: 5, productCount: 67 },
          { id: '232', name: 'Baby Food', children: [], attributeCount: 3, productCount: 45 },
          { id: '233', name: 'Baby Care', children: [], attributeCount: 4, productCount: 52 }
        ],
        attributeCount: 7,
        productCount: 164
      }
    ],
    attributeCount: 12,
    productCount: 323
  },
  {
    id: '3',
    name: 'Fashion',
    children: [
      {
        id: '31',
        name: 'Men\'s Clothing',
        children: [
          { id: '311', name: 'Shirts', children: [], attributeCount: 4, productCount: 85 },
          { id: '312', name: 'Pants', children: [], attributeCount: 3, productCount: 62 },
          { id: '313', name: 'Jackets', children: [], attributeCount: 5, productCount: 34 },
          { id: '314', name: 'Shoes', children: [], attributeCount: 6, productCount: 78 }
        ],
        attributeCount: 8,
        productCount: 259
      },
      {
        id: '32',
        name: 'Women\'s Clothing',
        children: [
          { id: '321', name: 'Dresses', children: [], attributeCount: 5, productCount: 124 },
          { id: '322', name: 'Tops', children: [], attributeCount: 4, productCount: 98 },
          { id: '323', name: 'Skirts', children: [], attributeCount: 3, productCount: 56 },
          { id: '324', name: 'Shoes', children: [], attributeCount: 6, productCount: 142 }
        ],
        attributeCount: 9,
        productCount: 420
      },
      {
        id: '33',
        name: 'Accessories',
        children: [
          { id: '331', name: 'Bags', children: [], attributeCount: 4, productCount: 67 },
          { id: '332', name: 'Jewelry', children: [], attributeCount: 5, productCount: 89 },
          { id: '333', name: 'Watches', children: [], attributeCount: 6, productCount: 45 },
          { id: '334', name: 'Belts', children: [], attributeCount: 2, productCount: 23 }
        ],
        attributeCount: 7,
        productCount: 224
      }
    ],
    attributeCount: 15,
    productCount: 903
  },
  {
    id: '4',
    name: 'Food & Grocery',
    children: [
      {
        id: '5',
        name: 'Beverages',
        children: [
          { id: '6', name: 'Carbonated Drinks', children: [], attributeCount: 0, productCount: 0 },
          { id: '7', name: 'Cocoa & Malted Drinks', children: [], attributeCount: 0, productCount: 0 },
          { id: '8', name: 'Coffee', children: [], attributeCount: 0, productCount: 0 },
          { id: '9', name: 'Flavoured Drinks', children: [], attributeCount: 2, productCount: 2 },
          { id: '10', name: 'Health & Energy Drinks', children: [], attributeCount: 0, productCount: 0 }
        ],
        attributeCount: 4,
        productCount: 0
      }
    ],
    attributeCount: 1,
    productCount: 7,
    isExpanded: true
  }
];

export const mockAttributes: Attribute[] = [
  {
    id: '1',
    name: 'Organic Flavour',
    type: 'Dropdown',
    productsInUse: 1,
    createdOn: '25/04/28 14:51:53',
    updatedOn: '25/05/18 23:32:18'
  },
  {
    id: '2',
    name: 'Flavour',
    type: 'Dropdown',
    category: 'Noodles, Flavoured Drinks',
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
    updatedOn: '25/03/24 12:09:20'
  },
  {
    id: '4',
    name: 'Color',
    type: 'Short Text',
    category: 'Noodles, Flavoured Drinks',
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
    updatedOn: '25/03/25 15:20:52'
  },
  {
    id: '6',
    name: 'Product Dimensions',
    type: 'Short Text',
    productsInUse: 6,
    createdOn: '25/03/21 13:14:22',
    updatedOn: '25/03/21 14:16:15'
  },
  {
    id: '7',
    name: 'Tags',
    type: 'Multi Select',
    productsInUse: 0,
    createdOn: '25/03/21 13:14:14',
    updatedOn: '25/03/21 13:14:14'
  },
  {
    id: '8',
    name: 'Usage Instructions',
    type: 'Long Text',
    productsInUse: 6,
    createdOn: '25/03/21 13:14:07',
    updatedOn: '25/04/14 14:56:30'
  },
  {
    id: '9',
    name: 'Product Benefits',
    type: 'Short Text',
    category: 'Facial Cleanser, Food & Grocery',
    productsInUse: 6,
    createdOn: '25/03/21 13:14:02',
    updatedOn: '25/05/18 23:11:05'
  }
];

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
    id: '11',
    name: 'ASIN',
    type: 'Short Text',
    productsInUse: 0,
    createdOn: '25/03/21 13:14:02',
    updatedOn: '25/05/18 23:11:05',
    isGlobal: true
  },
  {
    id: '12',
    name: 'Allow Reviews',
    type: 'Dropdown',
    productsInUse: 0,
    createdOn: '25/03/21 13:14:02',
    updatedOn: '25/05/18 23:11:05',
    isGlobal: true
  },
  {
    id: '13',
    name: 'Backorders',
    type: 'Dropdown',
    productsInUse: 0,
    createdOn: '25/03/21 13:14:02',
    updatedOn: '25/05/18 23:11:05',
    isGlobal: true
  },
  {
    id: '14',
    name: 'Brand',
    type: 'Short Text',
    productsInUse: 0,
    createdOn: '25/03/21 13:14:02',
    updatedOn: '25/05/18 23:11:05',
    isGlobal: true
  },
  {
    id: '15',
    name: 'Collection',
    type: 'Multi Select',
    productsInUse: 0,
    createdOn: '25/03/21 13:14:02',
    updatedOn: '25/05/18 23:11:05',
    isGlobal: true
  }
];
