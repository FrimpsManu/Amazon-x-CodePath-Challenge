import React from 'react';
import { Search, Calendar, MapPin, ShoppingBag } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">How ZAMANI Works</h2>
          <p className="text-lg text-gray-600">
            Our platform makes it easy to find affordable, quality food while reducing waste
            and supporting local businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Step Line - Desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-orange-200 transform -translate-y-1/2 z-0" />

          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 relative z-10 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <Search className="w-8 h-8 text-orange-500" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Browse Food</h3>
            <p className="text-gray-600">
              Discover surplus food from local restaurants, bakeries, and grocery stores at reduced prices.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 relative z-10 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <MapPin className="w-8 h-8 text-green-500" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Find Nearby</h3>
            <p className="text-gray-600">
              Locate available food near you and filter by distance, cuisine type, or dietary preferences.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 relative z-10 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <Calendar className="w-8 h-8 text-blue-500" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Reserve Items</h3>
            <p className="text-gray-600">
              Reserve your food and choose a pickup time that works for your schedule.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 relative z-10 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <ShoppingBag className="w-8 h-8 text-purple-500" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Pickup & Enjoy</h3>
            <p className="text-gray-600">
              Pick up your food during the designated time and enjoy quality meals at a fraction of the cost.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold rounded-full px-8 py-3"
          >
            Get Started Now
          </a>
          <p className="mt-4 text-gray-500 text-sm">
            Join thousands of people reducing food waste while enjoying great deals
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
