import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, Trash2 } from 'lucide-react';
import { Attribute, AttributeFilter } from '../types';

interface CategoryAttributesProps {
  attributes: Attribute[];
  categoryName: string;
  categoryId: string;
  onBack: () => void;
}

export const CategoryAttributes: React.FC<CategoryAttributesProps> = ({ 
  attributes, 
  categoryName, 
  categoryId,
  onBack 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filter, setFilter] = useState<AttributeFilter>({
    direct: true,
    inherited: true,
    global: true
  });

  const filteredAttributes = attributes.filter(attr => {
    const matchesSearch = attr.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = 
      (filter.direct && !attr.isInherited && !attr.isGlobal) ||
      (filter.inherited && attr.isInherited) ||
      (filter.global && attr.isGlobal);
    
    return matchesSearch && matchesFilter;
  });

  const handleFilterChange = (key: keyof AttributeFilter) => {
    setFilter(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const applyFilters = () => {
    setShowFilters(false);
  };

  const resetFilters = () => {
    setFilter({ direct: true, inherited: true, global: true });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Applicable Attributes in {categoryName}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Category ID: {categoryId}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Create new Attribute
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              Browse Attributes
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <p className="text-gray-600">Total {filteredAttributes.length} attributes</p>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search attributes"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-4 h-4" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter attributes by
              </label>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Attribute Types
                </label>
                <div className="flex gap-2 mb-4">
                  {Object.entries(filter).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => handleFilterChange(key as keyof AttributeFilter)}
                      className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                        value
                          ? 'bg-indigo-100 text-indigo-700 border border-indigo-300'
                          : 'bg-gray-100 text-gray-600 border border-gray-300'
                      }`}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                      {value && ' ×'}
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={applyFilters}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Apply Filters
                  </button>
                  <button
                    onClick={resetFilters}
                    className="px-4 py-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Attribute Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Products in Use
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAttributes.map((attribute) => (
              <tr key={attribute.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600 font-medium">{attribute.name}</span>
                    {attribute.isInherited && (
                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                        Inherited
                      </span>
                    )}
                    {attribute.isGlobal && (
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
                        Global
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {attribute.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-indigo-600 font-medium">{attribute.productsInUse}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Total {filteredAttributes.length} attribute(s)
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 bg-indigo-600 text-white rounded">1</button>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option value={25}>25 / page</option>
            <option value={50}>50 / page</option>
            <option value={100}>100 / page</option>
          </select>
        </div>
      </div>
    </div>
  );
};