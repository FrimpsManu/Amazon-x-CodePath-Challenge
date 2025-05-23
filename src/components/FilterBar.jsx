import React, { useState } from 'react';
import { Filter, ChevronDown, X } from 'lucide-react';
import { dietaryOptions, cuisineOptions } from '../data/mockData';


const FilterBar = ({ filters, onFilterChange }) => {
  const [showFilters, setShowFilters] = useState(false);
  
  const handleDietaryChange = (value) => {
    let newDietary;
    if (filters.dietary.includes(value)) {
      newDietary = filters.dietary.filter(item => item !== value);
    } else {
      newDietary = [...filters.dietary, value];
    }
    onFilterChange({ ...filters, dietary: newDietary });
  };
  
  const handleCuisineChange = (value) => {
    let newCuisine;
    if (filters.cuisine.includes(value)) {
      newCuisine = filters.cuisine.filter(item => item !== value);
    } else {
      newCuisine = [...filters.cuisine, value];
    }
    onFilterChange({ ...filters, cuisine });
  };
  
  const handleDistanceChange = (e) => {
    onFilterChange({ ...filters, maxDistance: Number(e.target.value) });
  };
  
  const handlePriceChange = (e) => {
    onFilterChange({ ...filters, maxPrice: Number(e.target.value) });
  };
  
  const handleSortChange = (value) => {
    onFilterChange({ ...filters, sortBy: value });
  };
  
  const clearFilters = () => {
    onFilterChange({
      dietary: [],
      cuisine: [],
      maxDistance,
      maxPrice,
      sortBy: 'distance'
    });
  };

  const hasActiveFilters = filters.dietary.length > 0 || 
                         filters.cuisine.length > 0 || 
                         filters.maxDistance < 5 ||
                         filters.maxPrice < 20 ||
                         filters.sortBy !== 'distance';
  
  return (
    <div className="sticky top-16 bg-white z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="py-3 flex items-center justify-between">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-gray-700 hover-orange-500 transition-colors"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filters
            <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
            {hasActiveFilters && (
              <span className="ml-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {filters.dietary.length + filters.cuisine.length + (filters.maxDistance < 5 ? 1 : 0) + 
                 (filters.maxPrice < 20 ? 1 : 0) + (filters.sortBy !== 'distance' ? 1 : 0)}
              </span>
            )}
          </button>
          
          <div className="flex space-x-4">
            <button 
              className={`text-sm px-3 py-1 rounded-full transition-colors ${
                filters.sortBy === 'distance' 
                  ? 'bg-orange-100 text-orange-600' 
                  : 'bg-gray-100 text-gray-600 hover-gray-200'
              }`}
              onClick={() => handleSortChange('distance')}
            >
              Nearest
            </button>
            <button 
              className={`text-sm px-3 py-1 rounded-full transition-colors ${
                filters.sortBy === 'price' 
                  ? 'bg-orange-100 text-orange-600' 
                  : 'bg-gray-100 text-gray-600 hover-gray-200'
              }`}
              onClick={() => handleSortChange('price')}
            >
              Cheapest
            </button>
            <button 
              className={`text-sm px-3 py-1 rounded-full transition-colors ${
                filters.sortBy === 'expiresAt' 
                  ? 'bg-orange-100 text-orange-600' 
                  : 'bg-gray-100 text-gray-600 hover-gray-200'
              }`}
              onClick={() => handleSortChange('expiresAt')}
            >
              Expiring Soon
            </button>
          </div>
        </div>
        
        {showFilters && (
          <div className="py-4 border-t border-gray-200 animate-slideDown">
            <div className="grid md-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Dietary Preferences</h3>
                <div className="flex flex-wrap gap-2">
                  {dietaryOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleDietaryChange(option.value)}
                      className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                        filters.dietary.includes(option.value)
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-600 hover-gray-200'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Cuisines</h3>
                <div className="flex flex-wrap gap-2">
                  {cuisineOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleCuisineChange(option.value)}
                      className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                        filters.cuisine.includes(option.value)
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600 hover-gray-200'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Maximum Distance</h3>
                  <div className="flex items-center">
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="0.5"
                      value={filters.maxDistance}
                      onChange={handleDistanceChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                    <span className="ml-2 text-sm">{filters.maxDistance} mi</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Maximum Price</h3>
                  <div className="flex items-center">
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={filters.maxPrice}
                      onChange={handlePriceChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                    <span className="ml-2 text-sm">${filters.maxPrice}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={clearFilters}
                className="flex items-center text-gray-600 hover-gray-800 text-sm mr-4"
              >
                <X className="w-4 h-4 mr-1" />
                Clear Filters
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover-orange-600 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;