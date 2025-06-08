import React, { useState } from 'react';
import { Search, Filter, ChevronDown, MoreHorizontal } from 'lucide-react';
import { Attribute } from '../types';

interface AttributesListProps {
  attributes: Attribute[];
  title: string;
  totalCount: number;
}

export const AttributesList: React.FC<AttributesListProps> = ({ 
  attributes, 
  title, 
  totalCount 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  const filteredAttributes = attributes.filter(attr =>
    attr.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAttributes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAttributes = filteredAttributes.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <p className="text-gray-600 mt-1">{totalCount} attribute(s)</p>
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

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Attribute Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Products in use
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created On
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Updated On
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedAttributes.map((attribute) => (
              <tr key={attribute.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
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
                  {attribute.category || '—'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-indigo-600 font-medium">{attribute.productsInUse}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {attribute.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                  {attribute.createdOn}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                  {attribute.updatedOn}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                      More
                    </button>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
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
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded ${
                page === currentPage
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              } transition-colors`}
            >
              {page}
            </button>
          ))}
          <select
            value={itemsPerPage}
            className="ml-4 border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value={25}>25 / page</option>
            <option value={50}>50 / page</option>
            <option value={100}>100 / page</option>
          </select>
        </div>
      </div>
    </div>
  );
};