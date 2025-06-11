import { useState } from 'react'
import { Layout } from './components/Layout'
import { ProductDetail } from './components/ProductDetail'
import { CategoryTree } from './components/CategoryTree'
import { AttributesList } from './components/AttributesList'
import { CategoryAttributes } from './components/CategoryAttributes'
import { mockProduct } from './data/mockData'

type View = 'product' | 'categories' | 'attributes' | 'category-attributes'

function App() {
  const [currentView, setCurrentView] = useState<View>('product')
  const [selectedCategory, setSelectedCategory] = useState<{
    id: string
    name: string
  } | null>(null)

  const handleViewCategoryAttributes = (
    categoryId?: string,
    categoryName?: string,
  ) => {
    if (categoryId && categoryName) {
      setSelectedCategory({ id: categoryId, name: categoryName })
    }
    setCurrentView('category-attributes')
  }

  const handleBackToCategories = () => {
    setCurrentView('categories')
    setSelectedCategory(null)
  }

  const renderNavigation = () => (
    <div className="bg-white border-b border-gray-200 mb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex space-x-8">
          <button
            onClick={() => setCurrentView('product')}
            className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
              currentView === 'product'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Product Details
          </button>
          <button
            onClick={() => setCurrentView('categories')}
            className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
              currentView === 'categories' ||
              currentView === 'category-attributes'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Category Tree
          </button>
          <button
            onClick={() => setCurrentView('attributes')}
            className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
              currentView === 'attributes'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Attributes
          </button>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (currentView) {
      case 'product':
        return <ProductDetail product={mockProduct} />

      case 'categories':
        return <CategoryTree onViewAttributes={handleViewCategoryAttributes} />

      case 'attributes':
        return <AttributesList title="Manage Product Attributes" />

      case 'category-attributes':
        return (
          <CategoryAttributes
            attributes={[]}
            categoryName={selectedCategory?.name || 'Selected Category'}
            categoryId={selectedCategory?.id || ''}
            onBack={handleBackToCategories}
          />
        )

      default:
        return <ProductDetail product={mockProduct} />
    }
  }

  return (
    <Layout>
      {renderNavigation()}
      <div className="px-6 pb-8">{renderContent()}</div>
    </Layout>
  )
}

export default App
