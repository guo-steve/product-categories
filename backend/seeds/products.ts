import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes specific products (e.g., with IDs 1, 2, 3)
  await knex('product').whereIn('id', [1, 2, 3]).del()

  await knex('product').insert([
    { id: 1, name: 'Moisturizing Facial Cleanser', category_id: 3 },
    { id: 2, name: 'XiangPiaoPiao Milk Tea', category_id: 37 },
    { id: 3, name: 'Organic Green Tea', category_id: 37 },
  ])
}
