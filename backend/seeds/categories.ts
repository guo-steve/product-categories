import { Knex } from 'knex'

const categories = [
  { id: 1, name: 'Beauty', parent_id: null },
  { id: 2, name: 'Skincare', parent_id: 1 },
  { id: 3, name: 'Facial Cleanser', parent_id: 2 },
  { id: 4, name: 'Moisturizers', parent_id: 2 },
  { id: 5, name: 'Serums', parent_id: 2 },
  { id: 6, name: 'Sunscreen', parent_id: 2 },
  { id: 7, name: 'Makeup', parent_id: 1 },
  { id: 8, name: 'Children & Toys', parent_id: null },
  { id: 9, name: 'Educational Toys', parent_id: 8 },
  { id: 10, name: 'Building Blocks', parent_id: 9 },
  { id: 11, name: 'Puzzles', parent_id: 9 },
  { id: 12, name: 'Science Kits', parent_id: 9 },
  { id: 13, name: 'Action Figures', parent_id: 8 },
  { id: 14, name: 'Superheroes', parent_id: 13 },
  { id: 15, name: 'Dolls', parent_id: 13 },
  { id: 16, name: 'Collectibles', parent_id: 13 },
  { id: 17, name: 'Baby Products', parent_id: 8 },
  { id: 18, name: 'Baby Clothing', parent_id: 17 },
  { id: 19, name: 'Baby Food', parent_id: 17 },
  { id: 20, name: 'Baby Care', parent_id: 17 },
  { id: 21, name: 'Fashion', parent_id: null },
  { id: 22, name: "Men's Clothing", parent_id: 21 },
  { id: 23, name: 'Shirts', parent_id: 22 },
  { id: 24, name: 'Pants', parent_id: 22 },
  { id: 25, name: 'Jackets', parent_id: 22 },
  { id: 26, name: 'Shoes', parent_id: 22 },
  { id: 27, name: "Women's Clothing", parent_id: 21 },
  { id: 28, name: 'Dresses', parent_id: 27 },
  { id: 29, name: 'Tops', parent_id: 27 },
  { id: 30, name: 'Skirts', parent_id: 27 },
  { id: 31, name: 'Shoes', parent_id: 27 },
  { id: 32, name: 'Accessories', parent_id: 21 },
  { id: 33, name: 'Bags', parent_id: 32 },
  { id: 34, name: 'Jewelry', parent_id: 32 },
  { id: 35, name: 'Watches', parent_id: 32 },
  { id: 36, name: 'Belts', parent_id: 32 },
  { id: 37, name: 'Food & Grocery', parent_id: null },
  { id: 38, name: 'Beverages', parent_id: 37 },
  { id: 39, name: 'Carbonated Drinks', parent_id: 38 },
  { id: 40, name: 'Cocoa & Malted Drinks', parent_id: 38 },
  { id: 41, name: 'Coffee', parent_id: 38 },
  { id: 42, name: 'Flavoured Drinks', parent_id: 38 },
  { id: 43, name: 'Health & Energy Drinks', parent_id: 38 },
]

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('category')
    .whereIn(
      'id',
      categories.map((c) => c.id),
    )
    .del()

  // Inserts seed entries
  await knex('category').insert(
    categories.map((category) => ({
      id: category.id,
      name: category.name,
      parent_id: category.parent_id,
    })),
  )
}
