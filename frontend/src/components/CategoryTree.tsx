import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Plus, Minus, X, Eye } from 'lucide-react'
import { Category } from '../types'
import { useCategories } from '../hooks/useCategories'

interface CategoryTreeProps {
  onViewAttributes?: (categoryId: string, categoryName: string) => void
}

interface CategoryItemProps {
  category: Category
  level?: number
  expandedCategories: Set<string>
  onToggleExpansion: (categoryId: string) => void
  onViewAttributes?: (categoryId: string, categoryName: string) => void
}

interface DropdownMenuProps {
  isOpen: boolean
  onClose: () => void
  categoryId: string
  categoryName: string
  onViewAttributes?: (categoryId: string, categoryName: string) => void
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpen,
  onClose,
  categoryId,
  categoryName,
  onViewAttributes,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const menuItems = [
    {
      icon: Eye,
      label: 'View Attributes',
      action: () => {
        if (onViewAttributes) {
          onViewAttributes(categoryId, categoryName)
        }
      },
    },
  ]

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
              item.action()
              onClose()
            }}
            className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left transition-colors ${'text-gray-700 hover:bg-gray-50'}`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  level = 0,
  expandedCategories,
  onToggleExpansion,
  onViewAttributes,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const hasChildren = category.children.length > 0
  const isExpanded = expandedCategories.has(category.id)

  const toggleExpanded = () => {
    if (hasChildren) {
      onToggleExpansion(category.id)
    }
  }

  const handleMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 py-4 px-6 hover:bg-gray-50 transition-colors border-b border-gray-100">
        <div className="col-span-4 flex items-center">
          <div
            style={{ marginLeft: `${level * 24}px` }}
            className="flex items-center gap-2"
          >
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
            <span
              className={`${level === 0 ? 'font-medium text-gray-900' : 'text-indigo-600'}`}
            >
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
              categoryId={category.id}
              categoryName={category.name}
              onViewAttributes={onViewAttributes}
            />
          </div>
        </div>
      </div>

      {hasChildren && isExpanded && (
        <div>
          {category.children.map((child) => (
            <CategoryItem
              key={child.id}
              category={child}
              level={level + 1}
              expandedCategories={expandedCategories}
              onToggleExpansion={onToggleExpansion}
              onViewAttributes={onViewAttributes}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export const CategoryTree: React.FC<CategoryTreeProps> = ({
  onViewAttributes,
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(),
  )

  // Fetch categories from backend
  const {
    categories: backendCategories,
    loading,
    error,
    refetch,
  } = useCategories()

  // Handle expansion state changes
  const handleToggleExpansion = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId)
      } else {
        newSet.add(categoryId)
      }
      return newSet
    })
  }

  // Calculate total categories for display
  const totalCategories = backendCategories.reduce((total, category) => {
    const countChildren = (cat: Category): number => {
      return (
        1 + cat.children.reduce((sum, child) => sum + countChildren(child), 0)
      )
    }
    return total + countChildren(category)
  }, 0)

  // Show loading state
  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Your Category Tree
          </h2>
          <p className="text-gray-600 mt-1">Loading categories...</p>
        </div>
        <div className="px-6 py-12 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="text-gray-500 mt-2">Loading categories...</p>
        </div>
      </div>
    )
  }

  // Show error state
  if (error) {
    return (
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Your Category Tree
          </h2>
          <p className="text-gray-600 mt-1">Error loading categories</p>
        </div>
        <div className="px-6 py-12 text-center">
          <div className="text-red-600 mb-4">
            <X className="w-8 h-8 mx-auto" />
          </div>
          <p className="text-red-600 font-medium mb-2">
            Failed to load categories
          </p>
          <p className="text-gray-500 mb-4">{error}</p>
          <button
            onClick={refetch}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">
          Your Category Tree
        </h2>
        <p className="text-gray-600 mt-1">
          {totalCategories} Categories & Subcategories
        </p>
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
        {backendCategories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            level={0}
            expandedCategories={expandedCategories}
            onToggleExpansion={handleToggleExpansion}
            onViewAttributes={onViewAttributes}
          />
        ))}
      </div>
    </div>
  )
}
