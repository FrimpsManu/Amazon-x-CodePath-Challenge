import React from 'react';
import { providers } from '../data/mockData';
import { Star, ExternalLink } from 'lucide-react';

const FeaturedProviders = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Local Heroes</h2>
        <p className="text-gray-600 mb-8">Amazing partners committed to reducing food waste in our community</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((provider) => (
            <div 
              key={provider.id}
              className="bg-white rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg"
            >
              {/* Image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={provider.image} 
                  alt={provider.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-lg">{provider.name}</h3>
                    <p className="text-sm text-gray-200">{provider.address}</p>
                  </div>
                </div>
              </div>

              {/* Rating and button */}
              <div className="p-4 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="font-medium text-gray-800">{provider.rating}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span>{provider.distance} mi</span>
                </div>

                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-600 font-medium text-sm flex items-center"
                >
                  Visit <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;
