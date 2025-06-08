import { Knex } from 'knex'

const attributes = [
  {
    id: '1',
    name: 'Organic Flavour',
    type: 'Dropdown',
    createdOn: '25/04/28 14:51:53',
    updatedOn: '25/05/18 23:32:18',
  },
  {
    id: '2',
    name: 'Flavour',
    type: 'Dropdown',
    createdOn: '25/03/26 13:24:08',
    updatedOn: '25/05/18 23:15:45',
  },
  {
    id: '3',
    name: 'Preferred URL',
    type: 'URL',
    createdOn: '25/03/24 12:08:25',
    updatedOn: '25/03/24 12:09:20',
  },
  {
    id: '4',
    name: 'Color',
    type: 'Short Text',
    createdOn: '25/03/21 14:03:37',
    updatedOn: '25/05/18 23:16:37',
  },
  {
    id: '5',
    name: 'Pocket Number',
    type: 'Short Text',
    createdOn: '25/03/21 14:01:33',
    updatedOn: '25/03/25 15:20:52',
  },
  {
    id: '6',
    name: 'Product Dimensions',
    type: 'Short Text',
    createdOn: '25/03/21 13:14:22',
    updatedOn: '25/03/21 14:16:15',
  },
  {
    id: '7',
    name: 'Tags',
    type: 'Multi Select',
    createdOn: '25/03/21 13:14:14',
    updatedOn: '25/03/21 13:14:14',
  },
  {
    id: '8',
    name: 'Usage Instructions',
    type: 'Long Text',
    createdOn: '25/03/21 13:14:07',
    updatedOn: '25/04/14 14:56:30',
  },
  {
    id: '9',
    name: 'Product Benefits',
    type: 'Short Text',
    createdOn: '25/03/21 13:14:02',
    updatedOn: '25/05/18 23:11:05',
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
