import { Knex } from 'knex'

const products = [
  { id: 1, name: 'Moisturizing Facial Cleanser', category_id: 3 },
  { id: 2, name: 'XiangPiaoPiao Milk Tea', category_id: 99 },
  { id: 3, name: 'Organic Green Tea', category_id: 99 },
]

export async function seed(knex: Knex): Promise<void> {
  await knex('product')
    .whereIn(
      'id',
      products.map((p) => p.id),
    )
    .del()

  await knex('product').insert(products)
}
