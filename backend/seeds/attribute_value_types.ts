import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('attribute_value_type').del()

  // Inserts seed entries
  await knex('attribute_value_type').insert([
    { id: 1, name: 'Short Text' },
    { id: 2, name: 'Long Text' },
    { id: 3, name: 'Dropdown' },
    { id: 4, name: 'Multi Select' },
    { id: 5, name: 'URL' },
  ])
}
