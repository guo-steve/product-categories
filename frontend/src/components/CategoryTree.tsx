import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronDown, Plus, Minus, MoreHorizontal, Link, Edit, FolderPlus, Trash2 } from 'lucide-react';
import { Category } from '../types';

interface CategoryTreeProps {
  categories: Category[];
}

interface CategoryItemProps {
  category: Category;
  level?: number;
}

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  categoryName: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, onClose, categoryName }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const menuItems = [
    { icon: Link, label: 'Associate Attribute', action: () => console.log('Associate Attribute', categoryName) },
    { icon: Edit, label: 'Rename', action: () => console.log('Rename', categoryName) },
    { icon: FolderPlus, label: 'Add Child', action: () => console.log('Add Child', categoryName) },
    { icon: Trash2, label: 'Delete', action: () => console.log('Delete', categoryName), danger: true }
  ];

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
    >
      <div className="py-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              item.action();
              onClose();
            }}
            className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left transition-colors ${
              item.danger
                ? 'text-red-600 hover:bg-red-50'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const CategoryItem: React.FC<CategoryItemProps> = ({ category, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(category.isExpanded || false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const hasChildren = category.children.length > 0;

  const toggleExpanded = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 py-4 px-6 hover:bg-gray-50 transition-colors border-b border-gray-100">
        <div className="col-span-4 flex items-center">
          <div style={{ marginLeft: `${level * 24}px` }} className="flex items-center gap-2">
            {hasChildren ? (
              <button
                onClick={toggleExpanded}
                className="p-1 hover:bg-gray-200 rounded transition-colors"
              >
                {isExpanded ? (
                  <Minus className="w-4 h-4 text-gray-600" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-600" />
                )}
              </button>
            ) : (
              <div className="w-6" />
            )}
            <span className={`${level === 0 ? 'font-medium text-gray-900' : 'text-indigo-600'}`}>
              {category.name}
            </span>
          </div>
        </div>
        
        <div className="col-span-3 flex items-center text-gray-600">
          {category.attributeCount > 0 ? category.attributeCount : '—'}
        </div>
        
        <div className="col-span-2 flex items-center text-gray-900 font-medium">
          {category.productCount > 0 ? category.productCount : '—'}
        </div>
        
        <div className="col-span-3 flex items-center justify-end">
          <div className="relative">
            <button
              onClick={handleMoreClick}
              className="flex items-center gap-2 px-3 py-1 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded transition-colors"
            >
              More
              <ChevronDown className="w-4 h-4" />
            </button>
            <DropdownMenu
              isOpen={isDropdownOpen}
              onClose={() => setIsDropdownOpen(false)}
              categoryName={category.name}
            />
          </div>
        </div>
      </div>

      {hasChildren && isExpanded && (
        <div>
          {category.children.map((child) => (
            <CategoryItem key={child.id} category={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const CategoryTree: React.FC<CategoryTreeProps> = ({ categories }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['4'])); // Food & Grocery expanded by default

  // Update categories with expansion state and handle expansion toggle
  const updateCategoryExpansion = (categories: Category[], expandedSet: Set<string>): Category[] => {
    return categories.map(category => ({
      ...category,
      isExpanded: expandedSet.has(category.id),
      children: updateCategoryExpansion(category.children, expandedSet)
    }));
  };

  const categoriesWithExpansion = updateCategoryExpansion(categories, expandedCategories);

  // Calculate total categories for display
  const totalCategories = categories.reduce((total, category) => {
    const countChildren = (cat: Category): number => {
      return 1 + cat.children.reduce((sum, child) => sum + countChildren(child), 0);
    };
    return total + countChildren(category);
  }, 0);

  // Simple pagination - just slice the top-level categories
  const totalPages = Math.ceil(categoriesWithExpansion.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCategories = categoriesWithExpansion.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  // Handle expansion state changes
  const handleToggleExpansion = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  // Enhanced CategoryItem that handles expansion state
  const EnhancedCategoryItem: React.FC<CategoryItemProps> = ({ category, level = 0 }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const hasChildren = category.children.length > 0;
    const isExpanded = expandedCategories.has(category.id);

    const toggleExpanded = () => {
      if (hasChildren) {
        handleToggleExpansion(category.id);
      }
    };

    const handleMoreClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsDropdownOpen(!isDropdownOpen);
    };

    return (
      <div>
        <div className="grid grid-cols-12 gap-4 py-4 px-6 hover:bg-gray-50 transition-colors border-b border-gray-100">
          <div className="col-span-4 flex items-center">
            <div style={{ marginLeft: `${level * 24}px` }} className="flex items-center gap-2">
              {hasChildren ? (
                <button
                  onClick={toggleExpanded}
                  className="p-1 hover:bg-gray-200 rounded transition-colors"
                >
                  {isExpanded ? (
                    <Minus className="w-4 h-4 text-gray-600" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-600" />
                  )}
                </button>
              ) : (
                <div className="w-6" />
              )}
              <span className={`${level === 0 ? 'font-medium text-gray-900' : 'text-indigo-600'}`}>
                {category.name}
              </span>
            </div>
          </div>
          
          <div className="col-span-3 flex items-center text-gray-600">
            {category.attributeCount > 0 ? category.attributeCount : '—'}
          </div>
          
          <div className="col-span-2 flex items-center text-gray-900 font-medium">
            {category.productCount > 0 ? category.productCount : '—'}
          </div>
          
          <div className="col-span-3 flex items-center justify-end">
            <div className="relative">
              <button
                onClick={handleMoreClick}
                className="flex items-center gap-2 px-3 py-1 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded transition-colors"
              >
                More
                <ChevronDown className="w-4 h-4" />
              </button>
              <DropdownMenu
                isOpen={isDropdownOpen}
                onClose={() => setIsDropdownOpen(false)}
                categoryName={category.name}
              />
            </div>
          </div>
        </div>

        {hasChildren && isExpanded && (
          <div>
            {category.children.map((child) => (
              <EnhancedCategoryItem key={child.id} category={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Your Category Tree</h2>
        <p className="text-gray-600 mt-1">{totalCategories} Categories & Subcategories</p>
      </div>

      <div className="border-b border-gray-200">
        <div className="grid grid-cols-12 gap-4 py-3 px-6 bg-gray-50 text-sm font-medium text-gray-700">
          <div className="col-span-4">Categories & Subcategories</div>
          <div className="col-span-3">Associated Attributes</div>
          <div className="col-span-2">Products</div>
          <div className="col-span-3 text-right">Action</div>
        </div>
      </div>

      <div>
        {paginatedCategories.map((category) => (
          <EnhancedCategoryItem key={category.id} category={category} level={0} />
        ))}
      </div>

      {/* Pagination Footer */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, categoriesWithExpansion.length)} of {categoriesWithExpansion.length} top-level categories
        </div>
        <div className="flex items-center gap-2">
          {/* Previous Page Button */}
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
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
                onClick={() => handlePageChange(pageNumber)}
                className={`px-3 py-1 rounded transition-colors ${
                  pageNumber === currentPage
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
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded transition-colors"
            >
              →
            </button>
          )}

          {/* Items Per Page Selector */}
          <select
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
            className="ml-4 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value={5}>5 / page</option>
            <option value={10}>10 / page</option>
            <option value={15}>15 / page</option>
            <option value={25}>25 / page</option>
            <option value={50}>50 / page</option>
          </select>
        </div>
      </div>
    </div>
  );
};