import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Plus, Minus, Link, Edit } from 'lucide-react';
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
    { icon: Edit, label: 'Rename', action: () => console.log('Rename', categoryName) }
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
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export const CategoryItem: React.FC<CategoryItemProps> = ({ category, level = 0 }) => {
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
          {category.attributeCount > 0 ? category.attributeCount : '-'}
        </div>

        <div className="col-span-2 flex items-center text-gray-900 font-medium">
          {category.productCount > 0 ? category.productCount : '-'}
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

  // Render all categories directly without pagination
  const paginatedCategories = categoriesWithExpansion;

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
    </div>
  );
};
