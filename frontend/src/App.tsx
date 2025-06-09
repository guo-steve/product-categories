import { useState, useEffect } from 'react';
import { fetchAttributes, fetchCategoryTree } from './services/api';
import { Layout } from './components/Layout';
import { ProductDetail } from './components/ProductDetail';
import { CategoryTree } from './components/CategoryTree';
import { AttributesList } from './components/AttributesList';
import { CategoryAttributes } from './components/CategoryAttributes';
import {
  mockProduct,
  mockCategories,
  mockAttributes,
  mockCategoryAttributes
} from './data/mockData';
import { Attribute, Category } from './types';

type View = 'product' | 'categories' | 'attributes' | 'category-attributes';


function App() {
  const [currentView, setCurrentView] = useState<View>('product');
  const [selectedCategory, setSelectedCategory] = useState('Flavoured Drinks');
  
  // Attributes state
  const [attributes, setAttributes] = useState<Attribute[]>([]);
  const [attributesLoading, setAttributesLoading] = useState<boolean>(false);
  const [attributesError, setAttributesError] = useState<string | null>(null);
  
  // Categories state
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState<boolean>(false);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);

  // Fetch attributes
  useEffect(() => {
    const getAttributes = async () => {
      setAttributesLoading(true);
      setAttributesError(null);
      try {
        const data = await fetchAttributes();
        setAttributes(data.length > 0 ? data : mockAttributes); // Fallback to mock data if empty
      } catch (err) {
        console.error('Failed to fetch attributes:', err);
        setAttributesError('Failed to load attributes. Using mock data instead.');
        setAttributes(mockAttributes); // Fallback to mock data on error
      } finally {
        setAttributesLoading(false);
      }
    };

    getAttributes();
  }, []);

  // Fetch category tree
  useEffect(() => {
    const getCategoryTree = async () => {
      setCategoriesLoading(true);
      setCategoriesError(null);
      try {
        const data = await fetchCategoryTree();
        setCategories(data.length > 0 ? data : mockCategories); // Fallback to mock data if empty
      } catch (err) {
        console.error('Failed to fetch category tree:', err);
        setCategoriesError('Failed to load categories. Using mock data instead.');
        setCategories(mockCategories); // Fallback to mock data on error
      } finally {
        setCategoriesLoading(false);
      }
    };

    getCategoryTree();
  }, []);

  const handleViewCategoryAttributes = () => {
    setCurrentView('category-attributes');
  };

  const handleBackToAttributes = () => {
    setCurrentView('attributes');
  };

  const renderNavigation = () => (
    <div className="bg-white border-b border-gray-200 mb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex space-x-8">
          <button
            onClick={() => setCurrentView('product')}
            className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${currentView === 'product'
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            Product Details
          </button>
          <button
            onClick={() => setCurrentView('categories')}
            className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${currentView === 'categories'
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            Category Tree
          </button>
          <button
            onClick={() => setCurrentView('attributes')}
            className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${currentView === 'attributes' || currentView === 'category-attributes'
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            Attributes
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'product':
        return <ProductDetail product={mockProduct} />;

      case 'categories':
        return (
          <div>
            {categoriesLoading && <p className="text-gray-500">Loading categories...</p>}
            {categoriesError && <p className="text-red-500">{categoriesError}</p>}
            <CategoryTree categories={categories} />
          </div>
        );

      case 'attributes':
        return (
          <div className="space-y-8">
            {attributesLoading && <p className="text-gray-500">Loading attributes...</p>}
            {attributesError && <p className="text-red-500">{attributesError}</p>}
            <AttributesList
              attributes={attributes}
              title="Manage Product Attributes"
              totalCount={attributes.length}
            />
            <button
              onClick={handleViewCategoryAttributes}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              View Category Attributes
            </button>
          </div>
        );

      case 'category-attributes': {
        const allCategoryAttributes = [...mockCategoryAttributes, ...mockCategoryAttributes];
        return (
          <CategoryAttributes
            attributes={allCategoryAttributes}
            categoryName={selectedCategory}
            onBack={handleBackToAttributes}
          />
        );
      }

      default:
        return <ProductDetail product={mockProduct} />;
    }
  };

  return (
    <Layout>
      {renderNavigation()}
      <div className="px-6 pb-8">
        {renderContent()}
      </div>
    </Layout>
  );
}

export default App;
