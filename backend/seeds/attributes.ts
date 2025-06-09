import { Knex } from 'knex'

const attributes = [
  {
    id: '1',
    name: 'Organic Flavour',
    type: 'Dropdown',
    createdOn: '2025-04-28T14:51:53Z',
    updatedOn: '2025-05-18T23:32:18Z',
  },
  {
    id: '2',
    name: 'Flavour',
    type: 'Dropdown',
    createdOn: '2025-03-26T13:24:08Z',
    updatedOn: '2025-05-18T23:15:45Z',
  },
  {
    id: '3',
    name: 'Preferred URL',
    type: 'URL',
    createdOn: '2025-03-24T12:08:25Z',
    updatedOn: '2025-03-24T12:09:20Z',
  },
  {
    id: '4',
    name: 'Color',
    type: 'Short Text',
    createdOn: '2025-03-21T14:03:37Z',
    updatedOn: '2025-05-18T23:16:37Z',
  },
  {
    id: '5',
    name: 'Pocket Number',
    type: 'Short Text',
    createdOn: '2025-03-21T14:01:33Z',
    updatedOn: '2025-03-25T15:20:52Z',
  },
  {
    id: '6',
    name: 'Product Dimensions',
    type: 'Short Text',
    createdOn: '2025-03-21T13:14:22Z',
    updatedOn: '2025-03-21T14:16:15Z',
  },
  {
    id: '7',
    name: 'Tags',
    type: 'Multi Select',
    createdOn: '2025-03-21T13:14:14Z',
    updatedOn: '2025-03-21T13:14:14Z',
  },
  {
    id: '8',
    name: 'Usage Instructions',
    type: 'Long Text',
    createdOn: '2025-03-21T13:14:07Z',
    updatedOn: '2025-04-14T14:56:30Z',
  },
  {
    id: '9',
    name: 'Product Benefits',
    type: 'Short Text',
    createdOn: '2025-03-21T13:14:02Z',
    updatedOn: '2025-05-18T23:11:05Z',
  },
]

export async function seed(knex: Knex): Promise<void> {
  // Deletes all existing attributes
  await knex('attribute')
    .whereIn(
      'id',
      attributes.map((a) => a.id),
    )
    .del()

  // Inserts mock attributes
  await knex('attribute').insert(
    attributes.map((attr) => ({
      id: attr.id,
      name: attr.name,
      type: attr.type,
      created_on: new Date(attr.createdOn),
      updated_on: new Date(attr.updatedOn),
    })),
  )
}
