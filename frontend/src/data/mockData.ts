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
          { id: '114', name: 'Sunscreen', children: [], attributeCount: 2, productCount: 6, isLeaf: true },
          { id: '115', name: 'Toners', children: [], attributeCount: 3, productCount: 18, isLeaf: true },
          { id: '116', name: 'Exfoliants', children: [], attributeCount: 2, productCount: 9, isLeaf: true },
          { id: '117', name: 'Face Masks', children: [], attributeCount: 5, productCount: 22, isLeaf: true },
          { id: '118', name: 'Eye Care', children: [], attributeCount: 4, productCount: 14, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '12',
        name: 'Makeup',
        children: [
          { id: '121', name: 'Foundation', children: [], attributeCount: 3, productCount: 18, isLeaf: true },
          { id: '122', name: 'Lipstick', children: [], attributeCount: 2, productCount: 25, isLeaf: true },
          { id: '123', name: 'Eyeshadow', children: [], attributeCount: 4, productCount: 32, isLeaf: true },
          { id: '124', name: 'Mascara', children: [], attributeCount: 2, productCount: 14, isLeaf: true },
          { id: '125', name: 'Concealer', children: [], attributeCount: 3, productCount: 16, isLeaf: true },
          { id: '126', name: 'Blush', children: [], attributeCount: 2, productCount: 11, isLeaf: true },
          { id: '127', name: 'Bronzer', children: [], attributeCount: 2, productCount: 8, isLeaf: true },
          { id: '128', name: 'Highlighter', children: [], attributeCount: 3, productCount: 13, isLeaf: true },
          { id: '129', name: 'Eyeliner', children: [], attributeCount: 2, productCount: 19, isLeaf: true },
          { id: '130', name: 'Lip Gloss', children: [], attributeCount: 2, productCount: 21, isLeaf: true }
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
          { id: '133', name: 'Hair Styling', children: [], attributeCount: 4, productCount: 16, isLeaf: true },
          { id: '134', name: 'Hair Treatments', children: [], attributeCount: 3, productCount: 12, isLeaf: true },
          { id: '135', name: 'Hair Color', children: [], attributeCount: 5, productCount: 9, isLeaf: true },
          { id: '136', name: 'Dry Shampoo', children: [], attributeCount: 2, productCount: 7, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '14',
        name: 'Fragrance',
        children: [
          { id: '141', name: 'Perfume', children: [], attributeCount: 4, productCount: 35, isLeaf: true },
          { id: '142', name: 'Cologne', children: [], attributeCount: 3, productCount: 28, isLeaf: true },
          { id: '143', name: 'Body Spray', children: [], attributeCount: 2, productCount: 15, isLeaf: true },
          { id: '144', name: 'Essential Oils', children: [], attributeCount: 3, productCount: 12, isLeaf: true }
        ],
        attributeCount: 5,
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
          { id: '213', name: 'Science Kits', children: [], attributeCount: 4, productCount: 12, isLeaf: true },
          { id: '214', name: 'Art Supplies', children: [], attributeCount: 3, productCount: 24, isLeaf: true },
          { id: '215', name: 'Musical Instruments', children: [], attributeCount: 4, productCount: 18, isLeaf: true },
          { id: '216', name: 'Learning Games', children: [], attributeCount: 2, productCount: 16, isLeaf: true }
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
          { id: '223', name: 'Collectibles', children: [], attributeCount: 2, productCount: 24, isLeaf: true },
          { id: '224', name: 'Anime Figures', children: [], attributeCount: 3, productCount: 31, isLeaf: true },
          { id: '225', name: 'Military Figures', children: [], attributeCount: 2, productCount: 19, isLeaf: true }
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
          { id: '233', name: 'Baby Care', children: [], attributeCount: 4, productCount: 52, isLeaf: true },
          { id: '234', name: 'Diapers', children: [], attributeCount: 3, productCount: 28, isLeaf: true },
          { id: '235', name: 'Baby Toys', children: [], attributeCount: 4, productCount: 34, isLeaf: true },
          { id: '236', name: 'Feeding Accessories', children: [], attributeCount: 3, productCount: 22, isLeaf: true }
        ],
        attributeCount: 7,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '24',
        name: 'Outdoor Toys',
        children: [
          { id: '241', name: 'Sports Equipment', children: [], attributeCount: 4, productCount: 29, isLeaf: true },
          { id: '242', name: 'Bicycles', children: [], attributeCount: 5, productCount: 18, isLeaf: true },
          { id: '243', name: 'Playground Equipment', children: [], attributeCount: 3, productCount: 12, isLeaf: true },
          { id: '244', name: 'Water Toys', children: [], attributeCount: 2, productCount: 15, isLeaf: true }
        ],
        attributeCount: 6,
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
          { id: '314', name: 'Shoes', children: [], attributeCount: 6, productCount: 78, isLeaf: true },
          { id: '315', name: 'Suits', children: [], attributeCount: 5, productCount: 23, isLeaf: true },
          { id: '316', name: 'Ties', children: [], attributeCount: 2, productCount: 45, isLeaf: true },
          { id: '317', name: 'Underwear', children: [], attributeCount: 3, productCount: 56, isLeaf: true },
          { id: '318', name: 'Socks', children: [], attributeCount: 2, productCount: 67, isLeaf: true }
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
          { id: '324', name: 'Shoes', children: [], attributeCount: 6, productCount: 142, isLeaf: true },
          { id: '325', name: 'Pants', children: [], attributeCount: 4, productCount: 89, isLeaf: true },
          { id: '326', name: 'Blouses', children: [], attributeCount: 3, productCount: 73, isLeaf: true },
          { id: '327', name: 'Lingerie', children: [], attributeCount: 4, productCount: 45, isLeaf: true },
          { id: '328', name: 'Activewear', children: [], attributeCount: 5, productCount: 67, isLeaf: true }
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
          { id: '334', name: 'Belts', children: [], attributeCount: 2, productCount: 23, isLeaf: true },
          { id: '335', name: 'Hats', children: [], attributeCount: 3, productCount: 34, isLeaf: true },
          { id: '336', name: 'Scarves', children: [], attributeCount: 2, productCount: 28, isLeaf: true },
          { id: '337', name: 'Sunglasses', children: [], attributeCount: 4, productCount: 52, isLeaf: true }
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
              { id: '85', name: 'Cold Brew Coffee', children: [], attributeCount: 3, productCount: 12, isLeaf: true },
              { id: '86', name: 'Espresso', children: [], attributeCount: 4, productCount: 21, isLeaf: true },
              { id: '87', name: 'Decaf Coffee', children: [], attributeCount: 3, productCount: 16, isLeaf: true }
            ],
            attributeCount: 6,
            productCount: 0,
            isLeaf: false
          },
          { id: '9', name: 'Flavoured Drinks', children: [], attributeCount: 2, productCount: 2, isLeaf: true },
          { id: '10', name: 'Health & Energy Drinks', children: [], attributeCount: 0, productCount: 0, isLeaf: true },
          { id: '51', name: 'Juices', children: [], attributeCount: 3, productCount: 45, isLeaf: true },
          { id: '52', name: 'Water', children: [], attributeCount: 2, productCount: 28, isLeaf: true },
          { id: '53', name: 'Tea', children: [], attributeCount: 4, productCount: 67, isLeaf: true },
          { id: '54', name: 'Sports Drinks', children: [], attributeCount: 3, productCount: 19, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '55',
        name: 'Snacks',
        children: [
          { id: '551', name: 'Chips', children: [], attributeCount: 3, productCount: 78, isLeaf: true },
          { id: '552', name: 'Cookies', children: [], attributeCount: 4, productCount: 56, isLeaf: true },
          { id: '553', name: 'Crackers', children: [], attributeCount: 2, productCount: 34, isLeaf: true },
          { id: '554', name: 'Nuts', children: [], attributeCount: 3, productCount: 42, isLeaf: true },
          { id: '555', name: 'Candy', children: [], attributeCount: 2, productCount: 89, isLeaf: true },
          { id: '556', name: 'Chocolate', children: [], attributeCount: 4, productCount: 67, isLeaf: true },
          { id: '557', name: 'Popcorn', children: [], attributeCount: 2, productCount: 23, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '56',
        name: 'Dairy Products',
        children: [
          { id: '561', name: 'Milk', children: [], attributeCount: 3, productCount: 45, isLeaf: true },
          { id: '562', name: 'Cheese', children: [], attributeCount: 4, productCount: 78, isLeaf: true },
          { id: '563', name: 'Yogurt', children: [], attributeCount: 3, productCount: 56, isLeaf: true },
          { id: '564', name: 'Butter', children: [], attributeCount: 2, productCount: 23, isLeaf: true },
          { id: '565', name: 'Ice Cream', children: [], attributeCount: 4, productCount: 67, isLeaf: true }
        ],
        attributeCount: 6,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 1,
    productCount: 0,
    isLeaf: false,
    isExpanded: true
  },
  {
    id: '57',
    name: 'Electronics',
    children: [
      {
        id: '571',
        name: 'Smartphones',
        children: [
          { id: '5711', name: 'iPhone', children: [], attributeCount: 5, productCount: 45, isLeaf: true },
          { id: '5712', name: 'Samsung Galaxy', children: [], attributeCount: 5, productCount: 38, isLeaf: true },
          { id: '5713', name: 'Google Pixel', children: [], attributeCount: 4, productCount: 22, isLeaf: true },
          { id: '5714', name: 'OnePlus', children: [], attributeCount: 4, productCount: 18, isLeaf: true }
        ],
        attributeCount: 8,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '572',
        name: 'Laptops',
        children: [
          { id: '5721', name: 'Gaming Laptops', children: [], attributeCount: 6, productCount: 34, isLeaf: true },
          { id: '5722', name: 'Business Laptops', children: [], attributeCount: 5, productCount: 28, isLeaf: true },
          { id: '5723', name: 'Ultrabooks', children: [], attributeCount: 4, productCount: 42, isLeaf: true },
          { id: '5724', name: 'Chromebooks', children: [], attributeCount: 3, productCount: 19, isLeaf: true }
        ],
        attributeCount: 7,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '573',
        name: 'Audio',
        children: [
          { id: '5731', name: 'Headphones', children: [], attributeCount: 4, productCount: 67, isLeaf: true },
          { id: '5732', name: 'Speakers', children: [], attributeCount: 5, productCount: 45, isLeaf: true },
          { id: '5733', name: 'Earbuds', children: [], attributeCount: 3, productCount: 89, isLeaf: true },
          { id: '5734', name: 'Sound Systems', children: [], attributeCount: 6, productCount: 23, isLeaf: true }
        ],
        attributeCount: 6,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '574',
        name: 'Gaming',
        children: [
          { id: '5741', name: 'Gaming Consoles', children: [], attributeCount: 5, productCount: 12, isLeaf: true },
          { id: '5742', name: 'Video Games', children: [], attributeCount: 4, productCount: 234, isLeaf: true },
          { id: '5743', name: 'Gaming Accessories', children: [], attributeCount: 3, productCount: 78, isLeaf: true },
          { id: '5744', name: 'VR Headsets', children: [], attributeCount: 5, productCount: 8, isLeaf: true }
        ],
        attributeCount: 7,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 10,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '58',
    name: 'Home & Garden',
    children: [
      {
        id: '581',
        name: 'Furniture',
        children: [
          { id: '5811', name: 'Living Room', children: [], attributeCount: 6, productCount: 89, isLeaf: true },
          { id: '5812', name: 'Bedroom', children: [], attributeCount: 5, productCount: 67, isLeaf: true },
          { id: '5813', name: 'Dining Room', children: [], attributeCount: 4, productCount: 45, isLeaf: true },
          { id: '5814', name: 'Office', children: [], attributeCount: 5, productCount: 34, isLeaf: true },
          { id: '5815', name: 'Outdoor', children: [], attributeCount: 4, productCount: 28, isLeaf: true }
        ],
        attributeCount: 8,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '582',
        name: 'Kitchen',
        children: [
          { id: '5821', name: 'Cookware', children: [], attributeCount: 4, productCount: 78, isLeaf: true },
          { id: '5822', name: 'Small Appliances', children: [], attributeCount: 5, productCount: 56, isLeaf: true },
          { id: '5823', name: 'Dinnerware', children: [], attributeCount: 3, productCount: 89, isLeaf: true },
          { id: '5824', name: 'Kitchen Tools', children: [], attributeCount: 3, productCount: 123, isLeaf: true }
        ],
        attributeCount: 6,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '583',
        name: 'Garden',
        children: [
          { id: '5831', name: 'Plants', children: [], attributeCount: 4, productCount: 156, isLeaf: true },
          { id: '5832', name: 'Garden Tools', children: [], attributeCount: 3, productCount: 67, isLeaf: true },
          { id: '5833', name: 'Outdoor Decor', children: [], attributeCount: 4, productCount: 45, isLeaf: true },
          { id: '5834', name: 'Lawn Care', children: [], attributeCount: 5, productCount: 34, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 9,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '59',
    name: 'Sports & Outdoors',
    children: [
      {
        id: '591',
        name: 'Fitness',
        children: [
          { id: '5911', name: 'Exercise Equipment', children: [], attributeCount: 5, productCount: 45, isLeaf: true },
          { id: '5912', name: 'Weights', children: [], attributeCount: 3, productCount: 67, isLeaf: true },
          { id: '5913', name: 'Yoga', children: [], attributeCount: 3, productCount: 34, isLeaf: true },
          { id: '5914', name: 'Cardio Equipment', children: [], attributeCount: 4, productCount: 23, isLeaf: true }
        ],
        attributeCount: 6,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '592',
        name: 'Outdoor Recreation',
        children: [
          { id: '5921', name: 'Camping', children: [], attributeCount: 5, productCount: 78, isLeaf: true },
          { id: '5922', name: 'Hiking', children: [], attributeCount: 4, productCount: 56, isLeaf: true },
          { id: '5923', name: 'Fishing', children: [], attributeCount: 4, productCount: 89, isLeaf: true },
          { id: '5924', name: 'Hunting', children: [], attributeCount: 3, productCount: 34, isLeaf: true }
        ],
        attributeCount: 7,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '593',
        name: 'Team Sports',
        children: [
          { id: '5931', name: 'Basketball', children: [], attributeCount: 3, productCount: 45, isLeaf: true },
          { id: '5932', name: 'Football', children: [], attributeCount: 4, productCount: 67, isLeaf: true },
          { id: '5933', name: 'Soccer', children: [], attributeCount: 3, productCount: 78, isLeaf: true },
          { id: '5934', name: 'Baseball', children: [], attributeCount: 4, productCount: 56, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 8,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '60',
    name: 'Books & Media',
    children: [
      {
        id: '601',
        name: 'Books',
        children: [
          { id: '6011', name: 'Fiction', children: [], attributeCount: 3, productCount: 234, isLeaf: true },
          { id: '6012', name: 'Non-Fiction', children: [], attributeCount: 3, productCount: 189, isLeaf: true },
          { id: '6013', name: 'Children\'s Books', children: [], attributeCount: 4, productCount: 156, isLeaf: true },
          { id: '6014', name: 'Textbooks', children: [], attributeCount: 4, productCount: 89, isLeaf: true },
          { id: '6015', name: 'Comics', children: [], attributeCount: 3, productCount: 67, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '602',
        name: 'Movies & TV',
        children: [
          { id: '6021', name: 'DVDs', children: [], attributeCount: 3, productCount: 123, isLeaf: true },
          { id: '6022', name: 'Blu-ray', children: [], attributeCount: 3, productCount: 89, isLeaf: true },
          { id: '6023', name: 'Digital Movies', children: [], attributeCount: 2, productCount: 456, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '603',
        name: 'Music',
        children: [
          { id: '6031', name: 'CDs', children: [], attributeCount: 3, productCount: 234, isLeaf: true },
          { id: '6032', name: 'Vinyl Records', children: [], attributeCount: 4, productCount: 156, isLeaf: true },
          { id: '6033', name: 'Digital Music', children: [], attributeCount: 2, productCount: 789, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 6,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '61',
    name: 'Automotive',
    children: [
      {
        id: '611',
        name: 'Car Parts',
        children: [
          { id: '6111', name: 'Engine Parts', children: [], attributeCount: 5, productCount: 123, isLeaf: true },
          { id: '6112', name: 'Brake Parts', children: [], attributeCount: 4, productCount: 89, isLeaf: true },
          { id: '6113', name: 'Suspension', children: [], attributeCount: 4, productCount: 67, isLeaf: true },
          { id: '6114', name: 'Electrical', children: [], attributeCount: 5, productCount: 145, isLeaf: true }
        ],
        attributeCount: 7,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '612',
        name: 'Car Accessories',
        children: [
          { id: '6121', name: 'Interior', children: [], attributeCount: 4, productCount: 78, isLeaf: true },
          { id: '6122', name: 'Exterior', children: [], attributeCount: 4, productCount: 56, isLeaf: true },
          { id: '6123', name: 'Electronics', children: [], attributeCount: 5, productCount: 89, isLeaf: true }
        ],
        attributeCount: 6,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '613',
        name: 'Maintenance',
        children: [
          { id: '6131', name: 'Oil & Fluids', children: [], attributeCount: 3, productCount: 45, isLeaf: true },
          { id: '6132', name: 'Filters', children: [], attributeCount: 3, productCount: 67, isLeaf: true },
          { id: '6133', name: 'Tools', children: [], attributeCount: 4, productCount: 89, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 8,
    productCount: 0,
    isLeaf: false
  },
  // NEW FIRST-LEVEL CATEGORIES START HERE
  {
    id: '70',
    name: 'Health & Wellness',
    children: [
      {
        id: '701',
        name: 'Vitamins & Supplements',
        children: [
          { id: '7011', name: 'Multivitamins', children: [], attributeCount: 4, productCount: 89, isLeaf: true },
          { id: '7012', name: 'Protein Supplements', children: [], attributeCount: 5, productCount: 67, isLeaf: true },
          { id: '7013', name: 'Omega-3', children: [], attributeCount: 3, productCount: 45, isLeaf: true },
          { id: '7014', name: 'Probiotics', children: [], attributeCount: 4, productCount: 34, isLeaf: true },
          { id: '7015', name: 'Herbal Supplements', children: [], attributeCount: 3, productCount: 56, isLeaf: true }
        ],
        attributeCount: 6,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '702',
        name: 'Medical Devices',
        children: [
          { id: '7021', name: 'Blood Pressure Monitors', children: [], attributeCount: 4, productCount: 23, isLeaf: true },
          { id: '7022', name: 'Thermometers', children: [], attributeCount: 3, productCount: 34, isLeaf: true },
          { id: '7023', name: 'Glucose Meters', children: [], attributeCount: 5, productCount: 18, isLeaf: true },
          { id: '7024', name: 'Pulse Oximeters', children: [], attributeCount: 3, productCount: 15, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '703',
        name: 'Personal Care',
        children: [
          { id: '7031', name: 'Oral Care', children: [], attributeCount: 3, productCount: 78, isLeaf: true },
          { id: '7032', name: 'First Aid', children: [], attributeCount: 4, productCount: 45, isLeaf: true },
          { id: '7033', name: 'Pain Relief', children: [], attributeCount: 3, productCount: 67, isLeaf: true },
          { id: '7034', name: 'Sleep Aids', children: [], attributeCount: 2, productCount: 29, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 7,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '71',
    name: 'Pet Supplies',
    children: [
      {
        id: '711',
        name: 'Dog Supplies',
        children: [
          { id: '7111', name: 'Dog Food', children: [], attributeCount: 5, productCount: 123, isLeaf: true },
          { id: '7112', name: 'Dog Toys', children: [], attributeCount: 3, productCount: 89, isLeaf: true },
          { id: '7113', name: 'Dog Collars & Leashes', children: [], attributeCount: 4, productCount: 67, isLeaf: true },
          { id: '7114', name: 'Dog Beds', children: [], attributeCount: 3, productCount: 45, isLeaf: true },
          { id: '7115', name: 'Dog Grooming', children: [], attributeCount: 4, productCount: 56, isLeaf: true }
        ],
        attributeCount: 6,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '712',
        name: 'Cat Supplies',
        children: [
          { id: '7121', name: 'Cat Food', children: [], attributeCount: 5, productCount: 98, isLeaf: true },
          { id: '7122', name: 'Cat Toys', children: [], attributeCount: 3, productCount: 67, isLeaf: true },
          { id: '7123', name: 'Cat Litter', children: [], attributeCount: 3, productCount: 45, isLeaf: true },
          { id: '7124', name: 'Cat Furniture', children: [], attributeCount: 4, productCount: 34, isLeaf: true },
          { id: '7125', name: 'Cat Grooming', children: [], attributeCount: 3, productCount: 28, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '713',
        name: 'Bird Supplies',
        children: [
          { id: '7131', name: 'Bird Food', children: [], attributeCount: 4, productCount: 56, isLeaf: true },
          { id: '7132', name: 'Bird Cages', children: [], attributeCount: 5, productCount: 23, isLeaf: true },
          { id: '7133', name: 'Bird Toys', children: [], attributeCount: 3, productCount: 34, isLeaf: true },
          { id: '7134', name: 'Bird Accessories', children: [], attributeCount: 3, productCount: 18, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '714',
        name: 'Fish & Aquarium',
        children: [
          { id: '7141', name: 'Fish Food', children: [], attributeCount: 3, productCount: 45, isLeaf: true },
          { id: '7142', name: 'Aquarium Equipment', children: [], attributeCount: 5, productCount: 67, isLeaf: true },
          { id: '7143', name: 'Aquarium Decorations', children: [], attributeCount: 3, productCount: 34, isLeaf: true },
          { id: '7144', name: 'Water Treatment', children: [], attributeCount: 4, productCount: 28, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 8,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '72',
    name: 'Office & Business',
    children: [
      {
        id: '721',
        name: 'Office Supplies',
        children: [
          { id: '7211', name: 'Pens & Pencils', children: [], attributeCount: 3, productCount: 156, isLeaf: true },
          { id: '7212', name: 'Paper Products', children: [], attributeCount: 4, productCount: 234, isLeaf: true },
          { id: '7213', name: 'Binders & Folders', children: [], attributeCount: 3, productCount: 89, isLeaf: true },
          { id: '7214', name: 'Desk Accessories', children: [], attributeCount: 4, productCount: 67, isLeaf: true },
          { id: '7215', name: 'Staplers & Clips', children: [], attributeCount: 2, productCount: 45, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '722',
        name: 'Office Equipment',
        children: [
          { id: '7221', name: 'Printers', children: [], attributeCount: 6, productCount: 45, isLeaf: true },
          { id: '7222', name: 'Scanners', children: [], attributeCount: 4, productCount: 23, isLeaf: true },
          { id: '7223', name: 'Shredders', children: [], attributeCount: 3, productCount: 18, isLeaf: true },
          { id: '7224', name: 'Calculators', children: [], attributeCount: 3, productCount: 34, isLeaf: true },
          { id: '7225', name: 'Laminators', children: [], attributeCount: 3, productCount: 15, isLeaf: true }
        ],
        attributeCount: 6,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '723',
        name: 'Business Furniture',
        children: [
          { id: '7231', name: 'Office Chairs', children: [], attributeCount: 5, productCount: 78, isLeaf: true },
          { id: '7232', name: 'Office Desks', children: [], attributeCount: 4, productCount: 56, isLeaf: true },
          { id: '7233', name: 'Filing Cabinets', children: [], attributeCount: 3, productCount: 34, isLeaf: true },
          { id: '7234', name: 'Conference Tables', children: [], attributeCount: 4, productCount: 23, isLeaf: true },
          { id: '7235', name: 'Bookcases', children: [], attributeCount: 3, productCount: 45, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 7,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '73',
    name: 'Tools & Hardware',
    children: [
      {
        id: '731',
        name: 'Hand Tools',
        children: [
          { id: '7311', name: 'Screwdrivers', children: [], attributeCount: 3, productCount: 89, isLeaf: true },
          { id: '7312', name: 'Hammers', children: [], attributeCount: 3, productCount: 67, isLeaf: true },
          { id: '7313', name: 'Wrenches', children: [], attributeCount: 4, productCount: 78, isLeaf: true },
          { id: '7314', name: 'Pliers', children: [], attributeCount: 3, productCount: 56, isLeaf: true },
          { id: '7315', name: 'Measuring Tools', children: [], attributeCount: 4, productCount: 45, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '732',
        name: 'Power Tools',
        children: [
          { id: '7321', name: 'Drills', children: [], attributeCount: 5, productCount: 67, isLeaf: true },
          { id: '7322', name: 'Saws', children: [], attributeCount: 4, productCount: 45, isLeaf: true },
          { id: '7323', name: 'Sanders', children: [], attributeCount: 4, productCount: 34, isLeaf: true },
          { id: '7324', name: 'Grinders', children: [], attributeCount: 4, productCount: 28, isLeaf: true },
          { id: '7325', name: 'Routers', children: [], attributeCount: 5, productCount: 23, isLeaf: true }
        ],
        attributeCount: 6,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '733',
        name: 'Hardware',
        children: [
          { id: '7331', name: 'Screws & Bolts', children: [], attributeCount: 3, productCount: 234, isLeaf: true },
          { id: '7332', name: 'Nails', children: [], attributeCount: 2, productCount: 156, isLeaf: true },
          { id: '7333', name: 'Hinges', children: [], attributeCount: 3, productCount: 89, isLeaf: true },
          { id: '7334', name: 'Locks', children: [], attributeCount: 4, productCount: 67, isLeaf: true },
          { id: '7335', name: 'Handles & Knobs', children: [], attributeCount: 3, productCount: 78, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 6,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '74',
    name: 'Travel & Luggage',
    children: [
      {
        id: '741',
        name: 'Luggage',
        children: [
          { id: '7411', name: 'Suitcases', children: [], attributeCount: 5, productCount: 89, isLeaf: true },
          { id: '7412', name: 'Carry-on Bags', children: [], attributeCount: 4, productCount: 67, isLeaf: true },
          { id: '7413', name: 'Backpacks', children: [], attributeCount: 4, productCount: 123, isLeaf: true },
          { id: '7414', name: 'Duffel Bags', children: [], attributeCount: 3, productCount: 45, isLeaf: true },
          { id: '7415', name: 'Garment Bags', children: [], attributeCount: 3, productCount: 28, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '742',
        name: 'Travel Accessories',
        children: [
          { id: '7421', name: 'Travel Pillows', children: [], attributeCount: 3, productCount: 56, isLeaf: true },
          { id: '7422', name: 'Luggage Tags', children: [], attributeCount: 2, productCount: 78, isLeaf: true },
          { id: '7423', name: 'Travel Adapters', children: [], attributeCount: 4, productCount: 34, isLeaf: true },
          { id: '7424', name: 'Packing Cubes', children: [], attributeCount: 3, productCount: 67, isLeaf: true },
          { id: '7425', name: 'Travel Locks', children: [], attributeCount: 3, productCount: 23, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '743',
        name: 'Travel Gear',
        children: [
          { id: '7431', name: 'Travel Bottles', children: [], attributeCount: 3, productCount: 45, isLeaf: true },
          { id: '7432', name: 'Money Belts', children: [], attributeCount: 2, productCount: 34, isLeaf: true },
          { id: '7433', name: 'Travel Wallets', children: [], attributeCount: 3, productCount: 56, isLeaf: true },
          { id: '7434', name: 'Passport Holders', children: [], attributeCount: 2, productCount: 67, isLeaf: true }
        ],
        attributeCount: 3,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 5,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '75',
    name: 'Musical Instruments',
    children: [
      {
        id: '751',
        name: 'String Instruments',
        children: [
          { id: '7511', name: 'Guitars', children: [], attributeCount: 6, productCount: 89, isLeaf: true },
          { id: '7512', name: 'Violins', children: [], attributeCount: 5, productCount: 34, isLeaf: true },
          { id: '7513', name: 'Cellos', children: [], attributeCount: 5, productCount: 18, isLeaf: true },
          { id: '7514', name: 'Basses', children: [], attributeCount: 5, productCount: 23, isLeaf: true },
          { id: '7515', name: 'Ukuleles', children: [], attributeCount: 4, productCount: 45, isLeaf: true }
        ],
        attributeCount: 7,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '752',
        name: 'Wind Instruments',
        children: [
          { id: '7521', name: 'Flutes', children: [], attributeCount: 4, productCount: 28, isLeaf: true },
          { id: '7522', name: 'Clarinets', children: [], attributeCount: 4, productCount: 23, isLeaf: true },
          { id: '7523', name: 'Saxophones', children: [], attributeCount: 5, productCount: 18, isLeaf: true },
          { id: '7524', name: 'Trumpets', children: [], attributeCount: 4, productCount: 34, isLeaf: true },
          { id: '7525', name: 'Trombones', children: [], attributeCount: 4, productCount: 15, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '753',
        name: 'Percussion',
        children: [
          { id: '7531', name: 'Drum Sets', children: [], attributeCount: 6, productCount: 45, isLeaf: true },
          { id: '7532', name: 'Cymbals', children: [], attributeCount: 3, productCount: 67, isLeaf: true },
          { id: '7533', name: 'Tambourines', children: [], attributeCount: 2, productCount: 34, isLeaf: true },
          { id: '7534', name: 'Bongos', children: [], attributeCount: 3, productCount: 28, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '754',
        name: 'Keyboards',
        children: [
          { id: '7541', name: 'Digital Pianos', children: [], attributeCount: 5, productCount: 34, isLeaf: true },
          { id: '7542', name: 'Synthesizers', children: [], attributeCount: 6, productCount: 28, isLeaf: true },
          { id: '7543', name: 'Organs', children: [], attributeCount: 4, productCount: 15, isLeaf: true },
          { id: '7544', name: 'MIDI Controllers', children: [], attributeCount: 5, productCount: 45, isLeaf: true }
        ],
        attributeCount: 6,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 8,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '76',
    name: 'Arts & Crafts',
    children: [
      {
        id: '761',
        name: 'Drawing & Painting',
        children: [
          { id: '7611', name: 'Pencils & Charcoal', children: [], attributeCount: 3, productCount: 89, isLeaf: true },
          { id: '7612', name: 'Paints', children: [], attributeCount: 4, productCount: 123, isLeaf: true },
          { id: '7613', name: 'Brushes', children: [], attributeCount: 3, productCount: 67, isLeaf: true },
          { id: '7614', name: 'Canvas & Paper', children: [], attributeCount: 3, productCount: 78, isLeaf: true },
          { id: '7615', name: 'Easels', children: [], attributeCount: 4, productCount: 34, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '762',
        name: 'Crafting Supplies',
        children: [
          { id: '7621', name: 'Glue & Adhesives', children: [], attributeCount: 3, productCount: 156, isLeaf: true },
          { id: '7622', name: 'Scissors & Cutters', children: [], attributeCount: 3, productCount: 89, isLeaf: true },
          { id: '7623', name: 'Fabric & Textiles', children: [], attributeCount: 4, productCount: 234, isLeaf: true },
          { id: '7624', name: 'Beads & Jewelry Making', children: [], attributeCount: 4, productCount: 67, isLeaf: true },
          { id: '7625', name: 'Scrapbooking', children: [], attributeCount: 3, productCount: 45, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '763',
        name: 'Sewing & Knitting',
        children: [
          { id: '7631', name: 'Sewing Machines', children: [], attributeCount: 5, productCount: 23, isLeaf: true },
          { id: '7632', name: 'Threads & Yarns', children: [], attributeCount: 3, productCount: 234, isLeaf: true },
          { id: '7633', name: 'Needles & Pins', children: [], attributeCount: 2, productCount: 156, isLeaf: true },
          { id: '7634', name: 'Patterns', children: [], attributeCount: 2, productCount: 89, isLeaf: true },
          { id: '7635', name: 'Knitting Needles', children: [], attributeCount: 3, productCount: 67, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 6,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '77',
    name: 'Jewelry & Watches',
    children: [
      {
        id: '771',
        name: 'Fine Jewelry',
        children: [
          { id: '7711', name: 'Diamond Jewelry', children: [], attributeCount: 6, productCount: 45, isLeaf: true },
          { id: '7712', name: 'Gold Jewelry', children: [], attributeCount: 5, productCount: 89, isLeaf: true },
          { id: '7713', name: 'Silver Jewelry', children: [], attributeCount: 4, productCount: 123, isLeaf: true },
          { id: '7714', name: 'Platinum Jewelry', children: [], attributeCount: 5, productCount: 23, isLeaf: true },
          { id: '7715', name: 'Gemstone Jewelry', children: [], attributeCount: 5, productCount: 67, isLeaf: true }
        ],
        attributeCount: 7,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '772',
        name: 'Fashion Jewelry',
        children: [
          { id: '7721', name: 'Costume Jewelry', children: [], attributeCount: 3, productCount: 156, isLeaf: true },
          { id: '7722', name: 'Beaded Jewelry', children: [], attributeCount: 3, productCount: 89, isLeaf: true },
          { id: '7723', name: 'Statement Pieces', children: [], attributeCount: 4, productCount: 67, isLeaf: true },
          { id: '7724', name: 'Vintage Jewelry', children: [], attributeCount: 4, productCount: 45, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '773',
        name: 'Watches',
        children: [
          { id: '7731', name: 'Luxury Watches', children: [], attributeCount: 6, productCount: 34, isLeaf: true },
          { id: '7732', name: 'Sports Watches', children: [], attributeCount: 5, productCount: 78, isLeaf: true },
          { id: '7733', name: 'Smart Watches', children: [], attributeCount: 6, productCount: 89, isLeaf: true },
          { id: '7734', name: 'Fashion Watches', children: [], attributeCount: 4, productCount: 123, isLeaf: true },
          { id: '7735', name: 'Vintage Watches', children: [], attributeCount: 5, productCount: 28, isLeaf: true }
        ],
        attributeCount: 6,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 8,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '78',
    name: 'Industrial & Scientific',
    children: [
      {
        id: '781',
        name: 'Laboratory Equipment',
        children: [
          { id: '7811', name: 'Microscopes', children: [], attributeCount: 5, productCount: 23, isLeaf: true },
          { id: '7812', name: 'Centrifuges', children: [], attributeCount: 4, productCount: 15, isLeaf: true },
          { id: '7813', name: 'Scales & Balances', children: [], attributeCount: 4, productCount: 34, isLeaf: true },
          { id: '7814', name: 'Pipettes', children: [], attributeCount: 3, productCount: 67, isLeaf: true },
          { id: '7815', name: 'Glassware', children: [], attributeCount: 3, productCount: 89, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '782',
        name: 'Safety Equipment',
        children: [
          { id: '7821', name: 'Safety Goggles', children: [], attributeCount: 3, productCount: 78, isLeaf: true },
          { id: '7822', name: 'Hard Hats', children: [], attributeCount: 3, productCount: 56, isLeaf: true },
          { id: '7823', name: 'Safety Gloves', children: [], attributeCount: 4, productCount: 123, isLeaf: true },
          { id: '7824', name: 'Respirators', children: [], attributeCount: 4, productCount: 45, isLeaf: true },
          { id: '7825', name: 'Safety Vests', children: [], attributeCount: 3, productCount: 67, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '783',
        name: 'Industrial Tools',
        children: [
          { id: '7831', name: 'Pneumatic Tools', children: [], attributeCount: 5, productCount: 34, isLeaf: true },
          { id: '7832', name: 'Hydraulic Tools', children: [], attributeCount: 5, productCount: 28, isLeaf: true },
          { id: '7833', name: 'Welding Equipment', children: [], attributeCount: 6, productCount: 45, isLeaf: true },
          { id: '7834', name: 'Cutting Tools', children: [], attributeCount: 4, productCount: 67, isLeaf: true }
        ],
        attributeCount: 6,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 7,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '79',
    name: 'Collectibles & Antiques',
    children: [
      {
        id: '791',
        name: 'Coins & Currency',
        children: [
          { id: '7911', name: 'Ancient Coins', children: [], attributeCount: 5, productCount: 23, isLeaf: true },
          { id: '7912', name: 'Modern Coins', children: [], attributeCount: 4, productCount: 67, isLeaf: true },
          { id: '7913', name: 'Paper Money', children: [], attributeCount: 4, productCount: 45, isLeaf: true },
          { id: '7914', name: 'Commemorative Coins', children: [], attributeCount: 4, productCount: 34, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '792',
        name: 'Stamps',
        children: [
          { id: '7921', name: 'Vintage Stamps', children: [], attributeCount: 4, productCount: 89, isLeaf: true },
          { id: '7922', name: 'First Day Covers', children: [], attributeCount: 3, productCount: 56, isLeaf: true },
          { id: '7923', name: 'International Stamps', children: [], attributeCount: 4, productCount: 78, isLeaf: true },
          { id: '7924', name: 'Thematic Stamps', children: [], attributeCount: 3, productCount: 45, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '793',
        name: 'Vintage Items',
        children: [
          { id: '7931', name: 'Vintage Furniture', children: [], attributeCount: 5, productCount: 34, isLeaf: true },
          { id: '7932', name: 'Vintage Clothing', children: [], attributeCount: 4, productCount: 67, isLeaf: true },
          { id: '7933', name: 'Vintage Electronics', children: [], attributeCount: 4, productCount: 28, isLeaf: true },
          { id: '7934', name: 'Vintage Toys', children: [], attributeCount: 4, productCount: 45, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '794',
        name: 'Trading Cards',
        children: [
          { id: '7941', name: 'Sports Cards', children: [], attributeCount: 4, productCount: 123, isLeaf: true },
          { id: '7942', name: 'Gaming Cards', children: [], attributeCount: 4, productCount: 89, isLeaf: true },
          { id: '7943', name: 'Entertainment Cards', children: [], attributeCount: 3, productCount: 67, isLeaf: true },
          { id: '7944', name: 'Vintage Cards', children: [], attributeCount: 4, productCount: 45, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 6,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '80',
    name: 'Outdoor & Recreation',
    children: [
      {
        id: '801',
        name: 'Camping & Hiking',
        children: [
          { id: '8011', name: 'Tents', children: [], attributeCount: 5, productCount: 67, isLeaf: true },
          { id: '8012', name: 'Sleeping Bags', children: [], attributeCount: 4, productCount: 89, isLeaf: true },
          { id: '8013', name: 'Backpacking Gear', children: [], attributeCount: 5, productCount: 123, isLeaf: true },
          { id: '8014', name: 'Camping Stoves', children: [], attributeCount: 4, productCount: 45, isLeaf: true },
          { id: '8015', name: 'Lanterns & Lighting', children: [], attributeCount: 3, productCount: 78, isLeaf: true }
        ],
        attributeCount: 6,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '802',
        name: 'Water Sports',
        children: [
          { id: '8021', name: 'Kayaks', children: [], attributeCount: 5, productCount: 23, isLeaf: true },
          { id: '8022', name: 'Surfboards', children: [], attributeCount: 4, productCount: 34, isLeaf: true },
          { id: '8023', name: 'Life Jackets', children: [], attributeCount: 4, productCount: 67, isLeaf: true },
          { id: '8024', name: 'Snorkeling Gear', children: [], attributeCount: 3, productCount: 45, isLeaf: true },
          { id: '8025', name: 'Water Skis', children: [], attributeCount: 4, productCount: 28, isLeaf: true }
        ],
        attributeCount: 5,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '803',
        name: 'Cycling',
        children: [
          { id: '8031', name: 'Road Bikes', children: [], attributeCount: 6, productCount: 45, isLeaf: true },
          { id: '8032', name: 'Mountain Bikes', children: [], attributeCount: 6, productCount: 67, isLeaf: true },
          { id: '8033', name: 'Electric Bikes', children: [], attributeCount: 7, productCount: 34, isLeaf: true },
          { id: '8034', name: 'Bike Accessories', children: [], attributeCount: 4, productCount: 123, isLeaf: true },
          { id: '8035', name: 'Bike Parts', children: [], attributeCount: 5, productCount: 89, isLeaf: true }
        ],
        attributeCount: 7,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 8,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '81',
    name: 'Party & Events',
    children: [
      {
        id: '811',
        name: 'Party Supplies',
        children: [
          { id: '8111', name: 'Balloons', children: [], attributeCount: 3, productCount: 156, isLeaf: true },
          { id: '8112', name: 'Party Decorations', children: [], attributeCount: 4, productCount: 234, isLeaf: true },
          { id: '8113', name: 'Tableware', children: [], attributeCount: 3, productCount: 189, isLeaf: true },
          { id: '8114', name: 'Party Favors', children: [], attributeCount: 3, productCount: 123, isLeaf: true },
          { id: '8115', name: 'Banners & Signs', children: [], attributeCount: 3, productCount: 89, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '812',
        name: 'Wedding Supplies',
        children: [
          { id: '8121', name: 'Wedding Decorations', children: [], attributeCount: 4, productCount: 67, isLeaf: true },
          { id: '8122', name: 'Wedding Favors', children: [], attributeCount: 3, productCount: 89, isLeaf: true },
          { id: '8123', name: 'Bridal Accessories', children: [], attributeCount: 4, productCount: 45, isLeaf: true },
          { id: '8124', name: 'Wedding Invitations', children: [], attributeCount: 3, productCount: 78, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '813',
        name: 'Holiday Decorations',
        children: [
          { id: '8131', name: 'Christmas Decorations', children: [], attributeCount: 4, productCount: 234, isLeaf: true },
          { id: '8132', name: 'Halloween Decorations', children: [], attributeCount: 3, productCount: 156, isLeaf: true },
          { id: '8133', name: 'Easter Decorations', children: [], attributeCount: 3, productCount: 89, isLeaf: true },
          { id: '8134', name: 'Birthday Decorations', children: [], attributeCount: 3, productCount: 123, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 5,
    productCount: 0,
    isLeaf: false
  },
  {
    id: '82',
    name: 'Religious & Spiritual',
    children: [
      {
        id: '821',
        name: 'Religious Books',
        children: [
          { id: '8211', name: 'Bibles', children: [], attributeCount: 4, productCount: 89, isLeaf: true },
          { id: '8212', name: 'Qurans', children: [], attributeCount: 3, productCount: 67, isLeaf: true },
          { id: '8213', name: 'Torah', children: [], attributeCount: 3, productCount: 23, isLeaf: true },
          { id: '8214', name: 'Buddhist Texts', children: [], attributeCount: 3, productCount: 34, isLeaf: true },
          { id: '8215', name: 'Hindu Texts', children: [], attributeCount: 3, productCount: 45, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '822',
        name: 'Religious Items',
        children: [
          { id: '8221', name: 'Crosses & Crucifixes', children: [], attributeCount: 3, productCount: 78, isLeaf: true },
          { id: '8222', name: 'Prayer Beads', children: [], attributeCount: 3, productCount: 56, isLeaf: true },
          { id: '8223', name: 'Religious Jewelry', children: [], attributeCount: 4, productCount: 89, isLeaf: true },
          { id: '8224', name: 'Candles & Incense', children: [], attributeCount: 3, productCount: 123, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      },
      {
        id: '823',
        name: 'Spiritual Wellness',
        children: [
          { id: '8231', name: 'Meditation Supplies', children: [], attributeCount: 3, productCount: 67, isLeaf: true },
          { id: '8232', name: 'Crystals & Stones', children: [], attributeCount: 4, productCount: 89, isLeaf: true },
          { id: '8233', name: 'Essential Oils', children: [], attributeCount: 4, productCount: 123, isLeaf: true },
          { id: '8234', name: 'Yoga Accessories', children: [], attributeCount: 3, productCount: 78, isLeaf: true }
        ],
        attributeCount: 4,
        productCount: 0,
        isLeaf: false
      }
    ],
    attributeCount: 5,
    productCount: 0,
    isLeaf: false
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
  // Coffee-specific attributes
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
  },
  // Beauty-specific attributes
  {
    id: '16',
    name: 'Shade Range',
    type: 'Multi Select',
    categoryIds: ['121', '122'], // Foundation and Lipstick
    productsInUse: 89,
    createdOn: '25/01/15 09:30:00',
    updatedOn: '25/04/18 14:20:30'
  },
  {
    id: '17',
    name: 'Coverage',
    type: 'Dropdown',
    categoryIds: ['121', '125'], // Foundation and Concealer
    productsInUse: 34,
    createdOn: '25/02/10 11:45:15',
    updatedOn: '25/05/05 16:30:45'
  },
  {
    id: '18',
    name: 'Hair Type',
    type: 'Multi Select',
    categoryIds: ['13'], // Hair Care (parent category)
    productsInUse: 56,
    createdOn: '25/01/20 14:15:30',
    updatedOn: '25/04/22 10:45:20'
  },
  // Fashion-specific attributes
  {
    id: '19',
    name: 'Size',
    type: 'Dropdown',
    categoryIds: ['31', '32'], // Men's and Women's Clothing
    productsInUse: 234,
    createdOn: '25/01/05 08:30:00',
    updatedOn: '25/05/15 12:20:15'
  },
  {
    id: '20',
    name: 'Material',
    type: 'Multi Select',
    categoryIds: ['3'], // Fashion (parent category)
    productsInUse: 189,
    createdOn: '25/01/12 10:15:45',
    updatedOn: '25/05/08 15:30:20'
  },
  {
    id: '21',
    name: 'Care Instructions',
    type: 'Long Text',
    categoryIds: ['31', '32'], // Men's and Women's Clothing
    productsInUse: 167,
    createdOn: '25/02/01 13:20:30',
    updatedOn: '25/04/28 09:45:10'
  },
  // Electronics-specific attributes
  {
    id: '22',
    name: 'Screen Size',
    type: 'Short Text',
    categoryIds: ['571', '572'], // Smartphones and Laptops
    productsInUse: 78,
    createdOn: '25/01/25 11:30:45',
    updatedOn: '25/05/12 14:15:30'
  },
  {
    id: '23',
    name: 'Battery Life',
    type: 'Short Text',
    categoryIds: ['571', '572', '573'], // Smartphones, Laptops, Audio
    productsInUse: 145,
    createdOn: '25/02/05 09:45:20',
    updatedOn: '25/05/18 16:30:45'
  },
  {
    id: '24',
    name: 'Warranty',
    type: 'Dropdown',
    categoryIds: ['57'], // Electronics (parent category)
    productsInUse: 234,
    createdOn: '25/01/18 12:15:30',
    updatedOn: '25/04/30 10:45:15'
  },
  // Home & Garden attributes
  {
    id: '25',
    name: 'Room Type',
    type: 'Multi Select',
    categoryIds: ['581'], // Furniture
    productsInUse: 123,
    createdOn: '25/02/12 14:30:45',
    updatedOn: '25/05/10 11:20:30'
  },
  {
    id: '26',
    name: 'Assembly Required',
    type: 'Dropdown',
    categoryIds: ['581', '582'], // Furniture and Kitchen
    productsInUse: 89,
    createdOn: '25/01/30 10:15:20',
    updatedOn: '25/04/25 15:45:30'
  },
  {
    id: '27',
    name: 'Plant Care Level',
    type: 'Dropdown',
    categoryIds: ['5831'], // Plants
    productsInUse: 67,
    createdOn: '25/02/18 13:45:15',
    updatedOn: '25/05/05 09:30:45'
  },
  // Sports & Outdoors attributes
  {
    id: '28',
    name: 'Skill Level',
    type: 'Dropdown',
    categoryIds: ['59'], // Sports & Outdoors (parent category)
    productsInUse: 156,
    createdOn: '25/01/22 11:20:30',
    updatedOn: '25/04/15 14:45:20'
  },
  {
    id: '29',
    name: 'Weight Capacity',
    type: 'Short Text',
    categoryIds: ['591', '592'], // Fitness and Outdoor Recreation
    productsInUse: 78,
    createdOn: '25/02/08 15:30:45',
    updatedOn: '25/05/02 12:15:30'
  },
  {
    id: '30',
    name: 'Weather Resistance',
    type: 'Dropdown',
    categoryIds: ['592'], // Outdoor Recreation
    productsInUse: 45,
    createdOn: '25/01/28 09:45:15',
    updatedOn: '25/04/20 16:30:20'
  },
  // Books & Media attributes
  {
    id: '31',
    name: 'Author',
    type: 'Short Text',
    categoryIds: ['601'], // Books
    productsInUse: 456,
    createdOn: '25/01/10 08:15:30',
    updatedOn: '25/05/08 13:45:20'
  },
  {
    id: '32',
    name: 'Publication Year',
    type: 'Short Text',
    categoryIds: ['601'], // Books
    productsInUse: 456,
    createdOn: '25/01/10 08:20:30',
    updatedOn: '25/05/08 13:50:20'
  },
  {
    id: '33',
    name: 'Genre',
    type: 'Multi Select',
    categoryIds: ['60'], // Books & Media (parent category)
    productsInUse: 789,
    createdOn: '25/01/15 10:30:45',
    updatedOn: '25/05/12 15:20:30'
  },
  {
    id: '34',
    name: 'Rating',
    type: 'Dropdown',
    categoryIds: ['602'], // Movies & TV
    productsInUse: 234,
    createdOn: '25/02/02 12:45:15',
    updatedOn: '25/04/28 11:30:45'
  },
  // Automotive attributes
  {
    id: '35',
    name: 'Vehicle Compatibility',
    type: 'Multi Select',
    categoryIds: ['61'], // Automotive (parent category)
    productsInUse: 345,
    createdOn: '25/01/08 09:30:20',
    updatedOn: '25/05/15 14:45:30'
  },
  {
    id: '36',
    name: 'Installation Difficulty',
    type: 'Dropdown',
    categoryIds: ['611', '612'], // Car Parts and Car Accessories
    productsInUse: 167,
    createdOn: '25/02/15 11:15:45',
    updatedOn: '25/04/30 16:20:15'
  },
  {
    id: '37',
    name: 'OEM Part Number',
    type: 'Short Text',
    categoryIds: ['611'], // Car Parts
    productsInUse: 234,
    createdOn: '25/01/20 13:30:30',
    updatedOn: '25/05/05 10:45:45'
  },
  // Additional global attributes
  {
    id: '38',
    name: 'Price Range',
    type: 'Dropdown',
    productsInUse: 0,
    createdOn: '25/03/01 10:00:00',
    updatedOn: '25/05/01 15:30:00',
    isGlobal: true
  },
  {
    id: '39',
    name: 'Availability',
    type: 'Dropdown',
    productsInUse: 0,
    createdOn: '25/03/01 10:05:00',
    updatedOn: '25/05/01 15:35:00',
    isGlobal: true
  },
  {
    id: '40',
    name: 'Customer Reviews',
    type: 'Long Text',
    productsInUse: 0,
    createdOn: '25/03/01 10:10:00',
    updatedOn: '25/05/01 15:40:00',
    isGlobal: true
  },
  // NEW ATTRIBUTES FOR NEW CATEGORIES
  // Health & Wellness attributes
  {
    id: '41',
    name: 'Dosage',
    type: 'Short Text',
    categoryIds: ['701'], // Vitamins & Supplements
    productsInUse: 234,
    createdOn: '25/01/05 09:30:00',
    updatedOn: '25/04/15 14:20:30'
  },
  {
    id: '42',
    name: 'Active Ingredients',
    type: 'Multi Select',
    categoryIds: ['70'], // Health & Wellness (parent category)
    productsInUse: 189,
    createdOn: '25/01/12 11:15:45',
    updatedOn: '25/04/22 16:30:20'
  },
  {
    id: '43',
    name: 'FDA Approved',
    type: 'Dropdown',
    categoryIds: ['702'], // Medical Devices
    productsInUse: 67,
    createdOn: '25/02/08 13:45:30',
    updatedOn: '25/05/02 10:20:15'
  },
  // Pet Supplies attributes
  {
    id: '44',
    name: 'Pet Age',
    type: 'Dropdown',
    categoryIds: ['71'], // Pet Supplies (parent category)
    productsInUse: 345,
    createdOn: '25/01/15 08:30:45',
    updatedOn: '25/04/28 15:45:20'
  },
  {
    id: '45',
    name: 'Breed Size',
    type: 'Dropdown',
    categoryIds: ['711', '712'], // Dog and Cat Supplies
    productsInUse: 267,
    createdOn: '25/01/22 10:15:30',
    updatedOn: '25/05/05 12:30:45'
  },
  {
    id: '46',
    name: 'Nutritional Content',
    type: 'Long Text',
    categoryIds: ['7111', '7121'], // Dog Food and Cat Food
    productsInUse: 156,
    createdOn: '25/02/01 14:20:15',
    updatedOn: '25/04/18 11:45:30'
  },
  // Office & Business attributes
  {
    id: '47',
    name: 'Paper Size',
    type: 'Dropdown',
    categoryIds: ['7212'], // Paper Products
    productsInUse: 234,
    createdOn: '25/01/08 09:15:45',
    updatedOn: '25/04/25 16:30:20'
  },
  {
    id: '48',
    name: 'Ink Type',
    type: 'Dropdown',
    categoryIds: ['7211'], // Pens & Pencils
    productsInUse: 156,
    createdOn: '25/01/18 11:30:30',
    updatedOn: '25/05/08 14:45:15'
  },
  {
    id: '49',
    name: 'Print Speed',
    type: 'Short Text',
    categoryIds: ['7221'], // Printers
    productsInUse: 45,
    createdOn: '25/02/12 13:15:45',
    updatedOn: '25/04/30 10:30:20'
  },
  // Tools & Hardware attributes
  {
    id: '50',
    name: 'Tool Material',
    type: 'Dropdown',
    categoryIds: ['73'], // Tools & Hardware (parent category)
    productsInUse: 456,
    createdOn: '25/01/10 08:45:30',
    updatedOn: '25/05/12 15:20:45'
  },
  {
    id: '51',
    name: 'Power Source',
    type: 'Dropdown',
    categoryIds: ['732'], // Power Tools
    productsInUse: 123,
    createdOn: '25/01/25 12:30:15',
    updatedOn: '25/04/15 09:45:30'
  },
  {
    id: '52',
    name: 'Thread Size',
    type: 'Short Text',
    categoryIds: ['7331'], // Screws & Bolts
    productsInUse: 234,
    createdOn: '25/02/05 14:15:45',
    updatedOn: '25/05/01 11:30:20'
  },
  // Travel & Luggage attributes
  {
    id: '53',
    name: 'Luggage Capacity',
    type: 'Short Text',
    categoryIds: ['741'], // Luggage
    productsInUse: 189,
    createdOn: '25/01/12 10:45:30',
    updatedOn: '25/04/22 13:20:15'
  },
  {
    id: '54',
    name: 'TSA Approved',
    type: 'Dropdown',
    categoryIds: ['7425'], // Travel Locks
    productsInUse: 23,
    createdOn: '25/02/18 15:30:45',
    updatedOn: '25/05/05 12:15:30'
  },
  {
    id: '55',
    name: 'Wheel Type',
    type: 'Dropdown',
    categoryIds: ['7411', '7412'], // Suitcases and Carry-on Bags
    productsInUse: 156,
    createdOn: '25/01/28 11:15:20',
    updatedOn: '25/04/30 14:45:45'
  },
  // Musical Instruments attributes
  {
    id: '56',
    name: 'Instrument Material',
    type: 'Dropdown',
    categoryIds: ['75'], // Musical Instruments (parent category)
    productsInUse: 234,
    createdOn: '25/01/05 09:30:15',
    updatedOn: '25/04/18 16:45:30'
  },
  {
    id: '57',
    name: 'String Count',
    type: 'Short Text',
    categoryIds: ['751'], // String Instruments
    productsInUse: 89,
    createdOn: '25/01/20 13:45:30',
    updatedOn: '25/05/08 10:20:45'
  },
  {
    id: '58',
    name: 'Key Signature',
    type: 'Dropdown',
    categoryIds: ['752'], // Wind Instruments
    productsInUse: 67,
    createdOn: '25/02/10 12:15:45',
    updatedOn: '25/04/25 15:30:20'
  },
  // Arts & Crafts attributes
  {
    id: '59',
    name: 'Paint Type',
    type: 'Dropdown',
    categoryIds: ['7612'], // Paints
    productsInUse: 123,
    createdOn: '25/01/15 14:30:45',
    updatedOn: '25/05/02 11:15:30'
  },
  {
    id: '60',
    name: 'Brush Size',
    type: 'Short Text',
    categoryIds: ['7613'], // Brushes
    productsInUse: 67,
    createdOn: '25/02/01 10:45:15',
    updatedOn: '25/04/20 13:30:45'
  },
  {
    id: '61',
    name: 'Fabric Weight',
    type: 'Short Text',
    categoryIds: ['7623'], // Fabric & Textiles
    productsInUse: 234,
    createdOn: '25/01/08 12:20:30',
    updatedOn: '25/04/28 09:45:15'
  },
  // Jewelry & Watches attributes
  {
    id: '62',
    name: 'Metal Purity',
    type: 'Dropdown',
    categoryIds: ['771'], // Fine Jewelry
    productsInUse: 156,
    createdOn: '25/01/22 11:30:45',
    updatedOn: '25/05/10 14:15:20'
  },
  {
    id: '63',
    name: 'Gemstone Type',
    type: 'Multi Select',
    categoryIds: ['7715'], // Gemstone Jewelry
    productsInUse: 67,
    createdOn: '25/02/05 13:45:30',
    updatedOn: '25/04/15 16:20:45'
  },
  {
    id: '64',
    name: 'Movement Type',
    type: 'Dropdown',
    categoryIds: ['773'], // Watches
    productsInUse: 234,
    createdOn: '25/01/12 15:15:45',
    updatedOn: '25/05/05 12:30:20'
  },
  // Industrial & Scientific attributes
  {
    id: '65',
    name: 'Magnification',
    type: 'Short Text',
    categoryIds: ['7811'], // Microscopes
    productsInUse: 23,
    createdOn: '25/02/15 09:30:15',
    updatedOn: '25/04/30 14:45:30'
  },
  {
    id: '66',
    name: 'Safety Rating',
    type: 'Dropdown',
    categoryIds: ['782'], // Safety Equipment
    productsInUse: 189,
    createdOn: '25/01/25 11:45:20',
    updatedOn: '25/05/12 16:30:45'
  },
  {
    id: '67',
    name: 'Pressure Rating',
    type: 'Short Text',
    categoryIds: ['7831', '7832'], // Pneumatic and Hydraulic Tools
    productsInUse: 67,
    createdOn: '25/02/08 14:20:30',
    updatedOn: '25/04/22 11:45:15'
  },
  // Collectibles & Antiques attributes
  {
    id: '68',
    name: 'Year of Issue',
    type: 'Short Text',
    categoryIds: ['791', '792'], // Coins & Currency, Stamps
    productsInUse: 345,
    createdOn: '25/01/10 10:15:45',
    updatedOn: '25/05/08 13:30:20'
  },
  {
    id: '69',
    name: 'Condition Grade',
    type: 'Dropdown',
    categoryIds: ['79'], // Collectibles & Antiques (parent category)
    productsInUse: 456,
    createdOn: '25/01/18 12:45:30',
    updatedOn: '25/04/25 15:20:45'
  },
  {
    id: '70',
    name: 'Rarity Level',
    type: 'Dropdown',
    categoryIds: ['7941', '7942'], // Sports Cards, Gaming Cards
    productsInUse: 234,
    createdOn: '25/02/02 14:30:15',
    updatedOn: '25/05/01 11:45:30'
  },
  // Outdoor & Recreation attributes
  {
    id: '71',
    name: 'Tent Capacity',
    type: 'Short Text',
    categoryIds: ['8011'], // Tents
    productsInUse: 67,
    createdOn: '25/01/28 09:15:45',
    updatedOn: '25/04/18 16:30:20'
  },
  {
    id: '72',
    name: 'Temperature Rating',
    type: 'Short Text',
    categoryIds: ['8012'], // Sleeping Bags
    productsInUse: 89,
    createdOn: '25/02/12 11:30:30',
    updatedOn: '25/05/05 14:45:15'
  },
  {
    id: '73',
    name: 'Bike Frame Size',
    type: 'Short Text',
    categoryIds: ['803'], // Cycling
    productsInUse: 156,
    createdOn: '25/01/15 13:45:45',
    updatedOn: '25/04/30 10:20:30'
  },
  // Party & Events attributes
  {
    id: '74',
    name: 'Party Theme',
    type: 'Multi Select',
    categoryIds: ['81'], // Party & Events (parent category)
    productsInUse: 345,
    createdOn: '25/01/05 08:30:20',
    updatedOn: '25/05/12 15:45:35'
  },
  {
    id: '75',
    name: 'Balloon Material',
    type: 'Dropdown',
    categoryIds: ['8111'], // Balloons
    productsInUse: 156,
    createdOn: '25/02/18 12:15:30',
    updatedOn: '25/04/15 09:30:45'
  },
  {
    id: '76',
    name: 'Decoration Style',
    type: 'Multi Select',
    categoryIds: ['8131', '8132'], // Christmas and Halloween Decorations
    productsInUse: 234,
    createdOn: '25/01/22 14:45:15',
    updatedOn: '25/05/08 11:20:30'
  },
  // Religious & Spiritual attributes
  {
    id: '77',
    name: 'Religious Tradition',
    type: 'Dropdown',
    categoryIds: ['82'], // Religious & Spiritual (parent category)
    productsInUse: 456,
    createdOn: '25/01/08 10:30:45',
    updatedOn: '25/04/28 13:15:20'
  },
  {
    id: '78',
    name: 'Translation Version',
    type: 'Dropdown',
    categoryIds: ['821'], // Religious Books
    productsInUse: 234,
    createdOn: '25/02/05 15:20:30',
    updatedOn: '25/05/02 12:45:15'
  },
  {
    id: '79',
    name: 'Crystal Properties',
    type: 'Multi Select',
    categoryIds: ['8232'], // Crystals & Stones
    productsInUse: 89,
    createdOn: '25/01/25 11:15:45',
    updatedOn: '25/04/20 16:30:30'
  },
  {
    id: '80',
    name: 'Meditation Duration',
    type: 'Short Text',
    categoryIds: ['8231'], // Meditation Supplies
    productsInUse: 67,
    createdOn: '25/02/10 13:30:20',
    updatedOn: '25/05/15 10:45:45'
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