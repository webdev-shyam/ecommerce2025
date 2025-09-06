'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import ProductGrid from '@/components/ProductGrid';
import ProductFilters from '@/components/ProductFilters';
import { products } from '@/data/products';
import { ChevronDown, Package } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/data/categories';

export default function CategoryPage() {
  const params = useParams();
  const categoryId = parseInt(params.id as string);
  const category = categories.find(c => c.id === categoryId);
  
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  // Filter products by category
  const categoryProducts = products.filter(product => {
    if (!category) return false;
    return product.category.toLowerCase() === category.name.toLowerCase() ||
           product.category.toLowerCase().includes(category.name.toLowerCase().split(' ')[0]);
  });
  
  const [filteredProducts, setFilteredProducts] = useState(categoryProducts);

  const handleSort = (value: string) => {
    setSortBy(value);
    let sorted = [...filteredProducts];
    
    switch (value) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        sorted = categoryProducts;
    }
    
    setFilteredProducts(sorted);
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <Package className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Category Not Found</h1>
          <p className="text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Category Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
            <p className="text-xl text-blue-100 mb-4">{category.description}</p>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {filteredProducts.length} products
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">All {category.name} Products</h2>
            <p className="text-gray-600 mt-1">{filteredProducts.length} products found</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Filters
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            <select
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <Package className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500 mb-6">We're working on adding more {category.name.toLowerCase()} products soon!</p>
          </div>
        ) : (
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            {showFilters && (
              <div className="w-64 shrink-0">
                <ProductFilters 
                  products={categoryProducts} 
                  onFilter={setFilteredProducts} 
                />
              </div>
            )}

            {/* Product Grid */}
            <div className="flex-1">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}