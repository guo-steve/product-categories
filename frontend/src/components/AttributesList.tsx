import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, X } from 'lucide-react';
import { Attribute, Category, FlatCategory, SortConfig, FilterState } from '../types';
import { useAttributes } from '../hooks/useAttributes';
import { useCategories } from '../hooks/useCategories';

interface AttributesListProps {
  title: string;
}

// Helper function to flatten categories for selection
const flattenCategories = (categories: Category[], prefix = ''): FlatCategory[] => {
  const result: FlatCategory[] = [];

  categories.forEach(category => {
    const fullPath = prefix ? `${prefix} > ${category.name}` : category.name;
    result.push({
      id: category.id,
      name: category.name,
      fullPath,
      isLeaf: category.isLeaf || category.children.length === 0
    });

    if (category.children && category.children.length > 0) {
      result.push(...flattenCategories(category.children, fullPath));
    }
  });

  return result;
};

// Helper function to get category display name using the categories field
const getCategoryDisplayName = (attribute: Attribute): string => {
  if (!attribute.categories || attribute.categories.length === 0) {
    return '';
  }

  // Use the categories field directly (array of category names)
  return attribute.categories.join(', ');
};

export const AttributesList: React.FC<AttributesListProps> = ({ title }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ field: 'name', direction: 'asc' });

  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    linkTypes: {
      direct: true,
      inherited: true,
      global: true
    },
    showNotApplicable: false,
    keyword: '',
    categorySearch: ''
  });

  // Fetch attributes and categories from backend
  const { attributes: backendAttributes, loading: attributesLoading, error: attributesError, refetch: refetchAttributes } = useAttributes();
  const { categories: backendCategories, loading: categoriesLoading, error: categoriesError } = useCategories();

  const flatCategories = useMemo(() => flattenCategories(backendCategories), [backendCategories]);

  // Filter categories based on search
  const filteredCategories = useMemo(() => {
    if (!filters.categorySearch.trim()) {
      return flatCategories;
    }

    const searchTerm = filters.categorySearch.toLowerCase();
    return flatCategories.filter(category =>
      category.name.toLowerCase().includes(searchTerm) ||
      category.fullPath.toLowerCase().includes(searchTerm)
    );
  }, [flatCategories, filters.categorySearch]);

  // Enhanced filtering logic based on business requirements
  const filteredAndSortedAttributes = useMemo(() => {
    let filtered = [...backendAttributes];

    // Keyword search
    if (filters.keyword.trim()) {
      const keyword = filters.keyword.toLowerCase();
      filtered = filtered.filter(attr =>
        attr.name.toLowerCase().includes(keyword) ||
        attr.type.toLowerCase().includes(keyword) ||
        getCategoryDisplayName(attr).toLowerCase().includes(keyword)
      );
    }

    // Category-based filtering using category names instead of IDs
    if (filters.categories.length > 0) {
      // Get selected category names from IDs
      const selectedCategoryNames = filters.categories.map(catId => {
        const category = flatCategories.find(c => c.id === catId);
        return category ? category.name : catId;
      });

      filtered = filtered.filter(attr => {
        if (filters.showNotApplicable) {
          // Show attributes NOT applicable to selected categories
          return !attr.isGlobal && !(attr.categories || []).some((catName: string) =>
            selectedCategoryNames.includes(catName)
          );
        } else {
          // Show attributes applicable to selected categories
          if (attr.isGlobal && filters.linkTypes.global) return true;
          if ((attr.categories || []).some((catName: string) =>
            selectedCategoryNames.includes(catName)
          ) && filters.linkTypes.direct) return true;
          return false;
        }
      });
    } else {
      // When no categories selected, show all attributes based on their global nature
      filtered = filtered.filter(attr => {
        if (attr.isGlobal) {
          return filters.linkTypes.global;
        } else {
          return filters.linkTypes.direct;
        }
      });
    }

    // Sorting
    filtered.sort((a, b) => {
      let aValue: string | number | Date;
      let bValue: string | number | Date;

      switch (sortConfig.field) {
        case 'category':
          aValue = getCategoryDisplayName(a);
          bValue = getCategoryDisplayName(b);
          break;
        case 'productsInUse':
          aValue = Number(a.productsInUse);
          bValue = Number(b.productsInUse);
          break;
        case 'createdOn':
        case 'updatedOn':
          // Handle both ISO date strings and formatted date strings
          aValue = a[sortConfig.field].includes('T') ?
            new Date(a[sortConfig.field]) :
            new Date(a[sortConfig.field].replace(/(\d{2})\/(\d{2})\/(\d{2})/, '20$3-$2-$1'));
          bValue = b[sortConfig.field].includes('T') ?
            new Date(b[sortConfig.field]) :
            new Date(b[sortConfig.field].replace(/(\d{2})\/(\d{2})\/(\d{2})/, '20$3-$2-$1'));
          break;
        default:
          aValue = String(a[sortConfig.field] || '').toLowerCase();
          bValue = String(b[sortConfig.field] || '').toLowerCase();
      }

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [backendAttributes, filters, sortConfig, flatCategories]);

  const totalPages = Math.ceil(filteredAndSortedAttributes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAttributes = filteredAndSortedAttributes.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterChange = (key: keyof FilterState, value: FilterState[keyof FilterState]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleLinkTypeChange = (type: keyof FilterState['linkTypes']) => {
    setFilters(prev => ({
      ...prev,
      linkTypes: {
        ...prev.linkTypes,
        [type]: !prev.linkTypes[type]
      }
    }));
    setCurrentPage(1);
  };

  const handleCategoryToggle = (categoryId: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId],
      showNotApplicable: false
    }));
    setCurrentPage(1);
  };

  const handleSort = (field: SortConfig['field']) => {
    setSortConfig(prev => ({
      field,
      direction: prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      linkTypes: {
        direct: true,
        inherited: true,
        global: true
      },
      showNotApplicable: false,
      keyword: '',
      categorySearch: ''
    });
    setCurrentPage(1);
  };

  const getSortIcon = (field: SortConfig['field']) => {
    if (sortConfig.field !== field) return null;
    return sortConfig.direction === 'asc' ?
      <ChevronUp className="w-4 h-4 inline ml-1" /> :
      <ChevronDown className="w-4 h-4 inline ml-1" />;
  };

  const activeFiltersCount = filters.categories.length +
    (filters.keyword ? 1 : 0) +
    (filters.showNotApplicable ? 1 : 0) +
    (Object.values(filters.linkTypes).filter(v => !v).length > 0 ? 1 : 0);

  // Helper function to determine attribute's link type for display
  const getAttributeLinkType = (attribute: Attribute, selectedCategories: string[]) => {
    if (attribute.isGlobal || !attribute.categories || attribute.categories.length === 0) {
      return 'global';
    }

    if (selectedCategories.length === 0) {
      return 'direct'; // Default when no category context
    }

    // Check if attribute is linked to any selected categories
    const selectedCategoryNames = selectedCategories.map(catId => {
      const category = flatCategories.find(c => c.id === catId);
      return category ? category.name : catId;
    });

    const hasDirectLink = (attribute.categories || []).some((catName: string) =>
      selectedCategoryNames.includes(catName)
    );

    return hasDirectLink ? 'direct' : 'inherited';
  };

  // Show loading state
  if (attributesLoading || categoriesLoading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <p className="text-gray-600 mt-1">Loading attributes...</p>
        </div>
        <div className="px-6 py-12 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="text-gray-500 mt-2">Loading attributes...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (attributesError || categoriesError) {
    return (
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <p className="text-gray-600 mt-1">Error loading data</p>
        </div>
        <div className="px-6 py-12 text-center">
          <div className="text-red-600 mb-4">
            <X className="w-8 h-8 mx-auto" />
          </div>
          <p className="text-red-600 font-medium mb-2">Failed to load data</p>
          <p className="text-gray-500 mb-4">{attributesError || categoriesError}</p>
          <button
            onClick={refetchAttributes}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <p className="text-gray-600 mt-1">{backendAttributes.length} attribute(s)</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Add New Attribute
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              Browse Attributes
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search attributes by name, type, or category"
              value={filters.keyword}
              onChange={(e) => handleFilterChange('keyword', e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 border rounded-md transition-colors ${showFilters || activeFiltersCount > 0
              ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
              : 'text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
          >
            <Filter className="w-4 h-4" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
            {activeFiltersCount > 0 && (
              <span className="bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>
          {activeFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {showFilters && (
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="space-y-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Filter by Category Nodes
              </label>

              {/* Category Search Field */}
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={filters.categorySearch}
                  onChange={(e) => handleFilterChange('categorySearch', e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                />
                {filters.categorySearch && (
                  <button
                    onClick={() => handleFilterChange('categorySearch', '')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Category List */}
              <div className="max-h-48 overflow-y-auto border border-gray-200 rounded-md bg-white">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                    >
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category.id)}
                        onChange={() => handleCategoryToggle(category.id)}
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {category.fullPath}
                        {category.isLeaf && <span className="text-indigo-600 ml-1">(leaf)</span>}
                      </span>
                    </label>
                  ))
                ) : (
                  <div className="px-3 py-4 text-sm text-gray-500 text-center">
                    No categories found matching "{filters.categorySearch}"
                  </div>
                )}
              </div>

              {/* Search Results Info */}
              {filters.categorySearch && (
                <p className="text-xs text-gray-500 mt-2">
                  Showing {filteredCategories.length} of {flatCategories.length} categories
                </p>
              )}

              {/* Selected Categories */}
              {filters.categories.length > 0 && (
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">Selected Categories:</p>
                  <div className="flex flex-wrap gap-2">
                    {filters.categories.map(catId => {
                      const category = flatCategories.find(c => c.id === catId);
                      return category ? (
                        <span
                          key={catId}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-sm"
                        >
                          {category.name}
                          <button
                            onClick={() => handleCategoryToggle(catId)}
                            className="hover:text-indigo-900"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Link Type Filter - Only show when categories are selected */}
            {filters.categories.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Filter by Link Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(filters.linkTypes).map(([type, isSelected]) => (
                    <button
                      key={type}
                      onClick={() => handleLinkTypeChange(type as keyof FilterState['linkTypes'])}
                      className={`px-3 py-1 rounded text-sm font-medium transition-colors ${isSelected
                        ? 'bg-indigo-100 text-indigo-700 border border-indigo-300'
                        : 'bg-gray-100 text-gray-600 border border-gray-300 hover:bg-gray-200'
                        }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Direct: linked directly to selected categories |
                  Inherited: linked to ancestor categories |
                  Global: applies to all categories
                </p>
              </div>
            )}

            {/* Not Applicable Filter - Only show when categories are selected */}
            {filters.categories.length > 0 && (
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.showNotApplicable}
                    onChange={(e) => handleFilterChange('showNotApplicable', e.target.checked)}
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-900">
                    Show attributes NOT applicable to selected categories
                  </span>
                </label>
                <p className="text-xs text-gray-500 mt-1 ml-6">
                  Use this to find attributes that can be linked to the selected categories
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Wider table with smaller font option */}
      <div className="overflow-x-auto">
        <div className="min-w-[1200px]"> {/* Force minimum width for wider table */}
          <table className="w-full text-sm"> {/* Smaller font size */}
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('name')}
                >
                  Attribute Name {getSortIcon('name')}
                </th>
                <th
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('category')}
                >
                  Product Category {getSortIcon('category')}
                </th>
                <th
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('productsInUse')}
                >
                  Products in use {getSortIcon('productsInUse')}
                </th>
                <th
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('type')}
                >
                  Type {getSortIcon('type')}
                </th>
                <th
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('createdOn')}
                >
                  Created On {getSortIcon('createdOn')}
                </th>
                <th
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('updatedOn')}
                >
                  Updated On {getSortIcon('updatedOn')}
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedAttributes.map((attribute) => {
                const linkType = getAttributeLinkType(attribute, filters.categories);
                const categoryDisplay = getCategoryDisplayName(attribute);

                return (
                  <tr key={attribute.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="text-indigo-600 font-medium">{attribute.name}</span>
                        {linkType === 'inherited' && (
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                            Inherited
                          </span>
                        )}
                        {linkType === 'global' && (
                          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
                            Global
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                      {categoryDisplay}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="text-indigo-600 font-medium">{attribute.productsInUse}</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                      {attribute.type}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                      {attribute.createdOn}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                      {attribute.updatedOn}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                          More
                        </button>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredAndSortedAttributes.length)} of {filteredAndSortedAttributes.length} attribute(s)
          {filteredAndSortedAttributes.length !== backendAttributes.length && (
            <span className="text-gray-500"> (filtered from {backendAttributes.length} total)</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {/* Previous Page Button */}
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded transition-colors"
            >
              ←
            </button>
          )}

          {/* Page Numbers */}
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            let pageNumber;
            if (totalPages <= 5) {
              pageNumber = i + 1;
            } else if (currentPage <= 3) {
              pageNumber = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNumber = totalPages - 4 + i;
            } else {
              pageNumber = currentPage - 2 + i;
            }

            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`px-3 py-1 rounded transition-colors ${pageNumber === currentPage
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* Next Page Button */}
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded transition-colors"
            >
              →
            </button>
          )}

          {/* Items Per Page Selector */}
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="ml-4 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value={10}>10 / page</option>
            <option value={25}>25 / page</option>
            <option value={50}>50 / page</option>
            <option value={100}>100 / page</option>
          </select>
        </div>
      </div>
    </div>
  );
};
