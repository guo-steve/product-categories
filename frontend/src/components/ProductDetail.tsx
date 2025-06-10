import React, { useState } from 'react'
import { Edit2, Plus, Star } from 'lucide-react'
import { Product } from '../types'

interface ProductDetailProps {
  product: Product
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold text-gray-900">Basic Info</h2>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            Edit
          </button>
        </div>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <label className="block text-sm font-medium text-indigo-600 mb-2">
              Product Name
            </label>
            {isEditing ? (
              <input
                type="text"
                defaultValue={product.name}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 font-medium">{product.name}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Product Category
            </label>
            {isEditing ? (
              <input
                type="text"
                defaultValue={product.category}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-700">{product.category}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-4">
            Images
          </label>
          <div className="flex gap-4">
            {product.images.map((image) => (
              <div key={image.id} className="relative">
                <div className="w-32 h-40 border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                  <img
                    src={image.url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {image.isCover && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-indigo-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                      <Star className="w-3 h-3 fill-current" />
                      Cover
                    </div>
                  </div>
                )}
                <div className="mt-2 text-center">
                  <p className="text-xs text-gray-500">{image.size}</p>
                  <p className="text-xs text-gray-600 font-medium">
                    {image.filename}
                  </p>
                  <p className="text-xs text-gray-500">{image.fileSize}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium text-indigo-600 mb-2">
              Color
            </label>
            {isEditing ? (
              <input
                type="text"
                defaultValue={product.color}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900">{product.color}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-indigo-600 mb-2">
              Flavour
            </label>
            {isEditing ? (
              <input
                type="text"
                defaultValue={product.flavour.join(' • ')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900">{product.flavour.join(' • ')}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
