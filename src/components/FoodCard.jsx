import React from 'react';
import { Clock, MapPin, Star } from 'lucide-react';


const FoodCard = ({ food, onClick }) => {
  const discount = Math.round(((food.originalPrice - food.price) / food.originalPrice) * 100);
  
  // Calculate time remaining
  const expiresAt = new Date(food.expiresAt);
  const now = new Date();
  const hoursRemaining = Math.max(0, Math.round((expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60)));
  
  const getExpiryColor = () => {
    if (hoursRemaining <= 6) return 'text-red-500 bg-red-100';
    if (hoursRemaining <= 12) return 'text-orange-500 bg-orange-100';
    return 'text-green-500 bg-green-100';
  };

  return (
    <div 
      className="rounded-xl overflow-hidden bg-white shadow-md hover-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(food)}
    >
      <div className="relative">
        <img 
          src={food.image} 
          alt={food.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 left-0 bg-orange-500 text-white px-2 py-1 rounded-br-lg font-medium">
          {discount}% OFF
        </div>
        {food.quantity <= 2 && (
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-bl-lg font-medium">
            Only {food.quantity} left!
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">{food.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1 fill-yellow-500" />
            <span className="text-sm font-medium">{food.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{food.description}</p>
        
        <div className="mt-3 flex items-center text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="line-clamp-1">{food.provider} • {food.distance} mi</span>
        </div>
        
        <div className="mt-1 flex items-center text-sm">
          <div className={`flex items-center rounded-full px-2 py-0.5 ${getExpiryColor()}`}>
            <Clock className="w-3 h-3 mr-1" />
            <span className="text-xs font-medium">
              {hoursRemaining > 0 ? `${hoursRemaining}h left` : 'Expiring soon'}
            </span>
          </div>
        </div>
        
        <div className="mt-3 flex justify-between items-end">
          
            <span className="text-xl font-bold text-orange-600">${food.price.toFixed(2)}</span>
            <span className="text-sm text-gray-400 line-through ml-2">${food.originalPrice.toFixed(2)}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {food.dietary.slice(0, 2).map((tag, index) => (
              <span 
                key={index} 
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </div>
  );
};

export default FoodCard;