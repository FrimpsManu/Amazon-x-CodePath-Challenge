import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FilterBar from '../components/FilterBar';
import FoodCard from '../components/FoodCard';
import FoodItemDetail from '../components/FoodItemDetail';
import FeaturedProviders from '../components/FeaturedProviders';
import HowItWorks from '../components/HowItWorks';
import ImpactStats from '../components/ImpactStats';
import CulturalSection from '../components/CulturalSection';
import Footer from '../components/Footer';
import { foodItems } from '../data/mockData';

const HomePage = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    dietary: [],
    cuisine: [],
    maxDistance: 10, // You can change this default
    maxPrice: 100,   // You can change this default
    sortBy: 'distance'
  });

  const handleFoodClick = (food) => {
    setSelectedFood(food);
  };

  const handleCloseDetail = () => {
    setSelectedFood(null);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredFoodItems = foodItems
    .filter(food => {
      if (searchQuery) {
        const searchTerms = searchQuery.toLowerCase().split(' ');
        const searchableText = `${food.name} ${food.provider} ${food.description} ${food.cuisine}`.toLowerCase();
        if (!searchTerms.every(term => searchableText.includes(term))) {
          return false;
        }
      }

      if (filters.dietary.length > 0 && !filters.dietary.some(diet => food.dietary.includes(diet))) {
        return false;
      }

      if (filters.cuisine.length > 0 && !filters.cuisine.includes(food.cuisine)) {
        return false;
      }

      if (food.distance > filters.maxDistance) {
        return false;
      }

      if (food.price > filters.maxPrice) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case 'distance':
          return a.distance - b.distance;
        case 'price':
          return a.price - b.price;
        case 'expiresAt':
          return new Date(a.expiresAt).getTime() - new Date(b.expiresAt).getTime();
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection onSearch={handleSearch} />

      <div className="pt-6 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:3xl font-bold text-gray-800">Available Near You</h2>
            <div className="text-sm text-gray-500">
              Showing {filteredFoodItems.length} of {foodItems.length} items
            </div>
          </div>
        </div>

        <FilterBar filters={filters} onFilterChange={handleFilterChange} />

        <div className="container mx-auto px-4 mt-6">
          {filteredFoodItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredFoodItems.map(food => (
                <FoodCard
                  key={food.id}
                  food={food}
                  onClick={handleFoodClick}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No food items match your current filters.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  handleFilterChange({
                    dietary: [],
                    cuisine: [],
                    maxDistance: 10,
                    maxPrice: 100,
                    sortBy: 'distance'
                  });
                }}
                className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <HowItWorks />
      <FeaturedProviders />
      <ImpactStats />
      <CulturalSection />
      <Footer />

      {selectedFood && (
        <FoodItemDetail
          food={selectedFood}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
};

export default HomePage;
