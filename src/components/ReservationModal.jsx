import React, { useState } from 'react';
import { X, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { FoodItem, ReservationFormData } from '../types';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';



const ReservationModal = ({ food, isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    quantity: 1,
    pickup_time: format(new Date(Date.now() + 2 * 60 * 60 * 1000), "yyyy-MM-dd'T'HH"),
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleQuantityChange = (delta) => {
    const newQuantity = formData.quantity + delta;
    if (newQuantity >= 1 && newQuantity <= food.quantity) {
      setFormData({ ...formData, quantity });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { error } = await supabase
        .from('reservations')
        .insert({
          food_id: food.id,
          quantity: formData.quantity,
          pickup_time: new Date(formData.pickup_time).toISOString(),
        });

      if (reservationError) throw reservationError;

      toast.success('Reservation successful!');
      onSuccess();
      onClose();
    } catch (err) {
      setError(err.message);
      toast.error('Failed to make reservation');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark-gray-800 rounded-xl max-w-md w-full p-6 relative animate-scaleIn">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover-gray-600 dark-gray-300"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 dark-white mb-6">
          Reserve {food.name}
        </h2>

        {error && (
          <div className="bg-red-50 dark-red-900/50 text-red-600 dark-red-200 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark-gray-300 mb-2">
              Quantity
            </label>
            <div className="flex items-center">
              <button 
                type="button"
                onClick={() => handleQuantityChange(-1)}
                className="w-10 h-10 bg-gray-100 dark-gray-700 rounded-full flex items-center justify-center text-gray-600 dark-gray-300 hover-gray-200 dark-gray-600 transition-colors"
              >
                -
              </button>
              <span className="mx-4 font-medium text-gray-900 dark-white">{formData.quantity}</span>
              <button 
                type="button"
                onClick={() => handleQuantityChange(1)}
                className="w-10 h-10 bg-gray-100 dark-gray-700 rounded-full flex items-center justify-center text-gray-600 dark-gray-300 hover-gray-200 dark-gray-600 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark-gray-300 mb-2">
              Pickup Time
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="datetime-local"
                value={formData.pickup_time}
                onChange={(e) => setFormData({ ...formData, pickup_time: e.target.value })}
                min={format(new Date(), "yyyy-MM-dd'T'HH")}
                max={format(new Date(food.expiresAt), "yyyy-MM-dd'T'HH")}
                className="pl-10 w-full px-4 py-2 border border-gray-300 dark-gray-600 rounded-lg focus-2 focus-orange-500 focus-transparent dark-gray-700 dark-white"
              />
            </div>
          </div>

          <div className="border-t border-gray-200 dark-gray-700 pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 dark-gray-400">Price per item</span>
              <span className="text-gray-900 dark-white font-medium">${food.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 dark-gray-400">Quantity</span>
              <span className="text-gray-900 dark-white font-medium">x{formData.quantity}</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold">
              <span className="text-gray-900 dark-white">Total</span>
              <span className="text-orange-600 dark-orange-400">${(food.price * formData.quantity).toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover-orange-600 text-white font-medium py-2 rounded-lg transition-colors disabled-50 disabled-not-allowed"
          >
            {loading ? 'Processing...' : 'Confirm Reservation'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;