import { Product, Category } from '../types'

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
      isCover: true,
    },
  ],
  color: 'Original',
  flavour: ['FL4', 'Classic'],
  attributes: {},
}

// Updated attributes with proper categoryIds instead of category strings
// Helper function to get all ancestor category IDs
export const getAncestorIds = (
  categoryId: string,
  categories: Category[],
): string[] => {
  const findAncestors = (
    cats: Category[],
    targetId: string,
    ancestors: string[] = [],
  ): string[] => {
    for (const cat of cats) {
      if (cat.id === targetId) {
        return ancestors
      }
      if (cat.children.length > 0) {
        const found = findAncestors(cat.children, targetId, [
          ...ancestors,
          cat.id,
        ])
        if (
          found.length > 0 ||
          cat.children.some((child) => child.id === targetId)
        ) {
          return found.length > 0 ? found : [...ancestors, cat.id]
        }
      }
    }
    return []
  }

  return findAncestors(categories, categoryId)
}
