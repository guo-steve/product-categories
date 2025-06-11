import { Knex } from 'knex'

const attributeLinks = [
  {
    attribute_id: 2,
    category_id: 99,
  },
  {
    attribute_id: 2,
    category_id: 450,
  },
  {
    attribute_id: 4,
    category_id: 99,
  },
  {
    attribute_id: 4,
    category_id: 450,
  },
]

export async function seed(knex: Knex): Promise<void> {
  // Deletes all existing attributes
  await knex('attribute_link')
    .whereIn(
      ['attribute_id', 'category_id'],
      attributeLinks.map(({ attribute_id, category_id }) => [
        attribute_id,
        category_id,
      ]),
    )
    .del()

  // Inserts mock attributes
  await knex('attribute_link').insert(attributeLinks)
}
