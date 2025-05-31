import React, { useState } from 'react';
import { MapPin, Clock, Star, ChevronLeft, Heart, Share2, Tag } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const FoodItemDetail = ({ food, onClose }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const discount = Math.round(((food.originalPrice - food.price) / food.originalPrice) * 100);
  const expiresAt = new Date(food.expiresAt);
  const now = new Date();
  const hoursRemaining = Math.max(0, Math.round((expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60)));

  const getExpiryColor = () => {
    if (hoursRemaining <= 6) return 'bg-red-100 text-red-700';
    if (hoursRemaining <= 12) return 'bg-orange-100 text-orange-700';
    return 'bg-green-100 text-green-700';
  };

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= food.quantity) {
      setQuantity(newQuantity);
    }
  };

  const handleReserve = async () => {
    if (!user) {
      setError('Please sign in to make a reservation');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.from('reservations').insert({
        user_id: user.id,
        food_id: food.id,
        quantity,
        pickup_time: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
        status: 'pending',
      });

      if (error) throw error;

      toast.success('Reservation successful!');
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to make reservation');
      toast.error('Failed to make reservation');
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites');
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: food.name,
        text: `Check out ${food.name} at ${food.provider}!`,
        url: window.location.href,
      });
    } catch {
      toast.error('Failed to share');
    }
  };

  const getEmbedUrl = (url) => {
  if (!url) return '';
  // Handle standard YouTube watch URLs
  if (url.includes('watch?v=')) {
    const videoId = url.split('watch?v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  // Handle youtu.be short links
  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  // Handle shorts
  if (url.includes('shorts/')) {
    const videoId = url.split('shorts/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  // Already an embed link or unknown format
  return url;
};
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <button className="absolute top-4 left-4 z-10 bg-white rounded-full p-2 shadow-md" onClick={onClose}>
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="absolute top-4 right-4 z-10 flex space-x-2">
            <button className="bg-white rounded-full p-2 shadow-md" onClick={toggleFavorite}>
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
            </button>
            <button className="bg-white rounded-full p-2 shadow-md" onClick={handleShare}>
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <img src={food.image} alt={food.name} className="w-full h-64 object-cover rounded-t-xl" />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between">
            <h2 className="text-2xl font-bold text-gray-800">{food.name}</h2>
            <div className="flex items-center bg-orange-500 text-white px-3 py-1 rounded-full font-medium">
              <Tag className="w-4 h-4 mr-1" />
              {discount}% OFF
            </div>
          </div>

          <div className="flex items-center mt-2">
            <div className="flex items-center text-yellow-500">
              <Star className="w-5 h-5 fill-yellow-500" />
              <span className="ml-1 font-medium">{food.rating}</span>
            </div>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-gray-600">{food.provider}</span>
          </div>

          <div className="mt-2 flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            {food.distance} miles away
          </div>

          <div className="mt-2 flex items-center">
            <div className={`flex items-center rounded-full px-3 py-1 ${getExpiryColor()}`}>
              <Clock className="w-4 h-4 mr-1" />
              <span className="font-medium">
                {hoursRemaining > 0 ? `${hoursRemaining} hours left` : 'Expiring soon'}
              </span>
            </div>
          </div>

          <p className="mt-4 text-gray-700">{food.description}</p>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-800 mb-2">Dietary Information</h3>
            <div className="flex flex-wrap gap-2">
              {food.dietary.map((tag, i) => (
                <span key={i} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </span>
              ))}
              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {food.cuisine.charAt(0).toUpperCase() + food.cuisine.slice(1)} Cuisine
              </span>
            </div>
          </div>

          {food.cooking_instructions && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How to Prepare</h3>
              <p className="text-gray-700 whitespace-pre-line">{food.cooking_instructions}</p>
            </div>
          )}

          {food.video_url && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Video Tutorial</h3>
              <div className="w-full aspect-[16/9]">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={getEmbedUrl(food.video_url)}
                  title="Cooking Tutorial"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="mt-6">
            <div className="flex items-end justify-between">
              <p className="text-sm text-gray-500">Current Price</p>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-orange-600">${(food.price * quantity).toFixed(2)}</span>
                <span className="ml-2 text-gray-400 line-through">${(food.originalPrice * quantity).toFixed(2)}</span>
              </div>
            </div>

            <div className="flex items-center mt-4">
              <div className="mr-4">
                <p className="text-sm text-gray-500">Quantity</p>
                <div className="flex items-center">
                  <button onClick={() => handleQuantityChange(-1)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200">-</button>
                  <span className="mx-3 font-medium text-gray-900">{quantity}</span>
                  <button onClick={() => handleQuantityChange(1)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200">+</button>
                </div>
              </div>

              <button onClick={handleReserve} disabled={loading} className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-medium px-8 py-3 rounded-xl disabled:opacity-50">
                {loading ? 'Reserving...' : 'Reserve Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemDetail;
