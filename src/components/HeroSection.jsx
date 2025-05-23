import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';



const HeroSection = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Delicious food" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md-5xl font-bold text-white leading-tight animate-fadeIn">
            Rescue Food, <span className="text-orange-400">Save Money</span>, Feed Community
          </h1>
          <p className="mt-4 text-lg text-gray-200 animate-fadeInDelayed">
            Connect with local restaurants and markets to access quality surplus food at reduced prices while reducing waste.
          </p>
          
          <form onSubmit={handleSearch} className="mt-8 bg-white rounded-full shadow-lg p-2 flex items-center animate-slideUp">
            <div className="bg-gray-100 rounded-full flex items-center flex-grow px-4 py-2">
              <Search className="w-5 h-5 text-gray-500 mr-2" />
              <input 
                type="text" 
                placeholder="Search for food, restaurants, or cuisines" 
                className="bg-transparent outline-none flex-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="hidden md items-center mx-2 text-gray-600">
              <span className="mx-2">|</span>
              <MapPin className="w-5 h-5 text-orange-500 mr-2" />
              <span>Current Location</span>
            </div>
            <button 
              type="submit"
              className="bg-orange-500 hover-orange-600 transition-colors text-white font-medium px-6 py-2 rounded-full"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;