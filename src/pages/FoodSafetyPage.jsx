import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Clock, ThermometerSun, Users } from 'lucide-react';

const FoodSafetyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl md-4xl font-bold text-gray-900 mb-4">Food Safety Standards</h1>
        <p className="text-lg text-gray-600 mb-12">At ZAMANI, food safety is our top priority. Learn about our comprehensive safety measures and guidelines.</p>
        
        <div className="grid grid-cols-1 md-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Partner Verification</h2>
            </div>
            <p className="text-gray-600">All food providers undergo thorough verification and must maintain valid food safety certifications. We regularly audit our partners to ensure compliance.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Time Control</h2>
            </div>
            <p className="text-gray-600">We strictly monitor food holding times and expiration dates. Items are only available for reservation within safe time windows.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <ThermometerSun className="w-8 h-8 text-orange-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Temperature Management</h2>
            </div>
            <p className="text-gray-600">Partners must maintain proper food storage temperatures and use appropriate packaging to ensure food safety during pickup and transport.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-purple-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Staff Training</h2>
            </div>
            <p className="text-gray-600">All partner staff receive food safety training and must follow strict hygiene protocols when handling and packaging food items.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Food Safety Guidelines for Customers</h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-800 mb-2">1. Check Pickup Times</h3>
              <p className="text-gray-600">Always pick up your food during the designated time slot to ensure optimal food safety and quality.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-800 mb-2">2. Transport Safely</h3>
              <p className="text-gray-600">Use insulated bags for temperature-sensitive items and transport food directly home.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-800 mb-2">3. Check Packaging</h3>
              <p className="text-gray-600">Ensure packaging is intact and sealed properly before accepting your order.</p>
            </div>
            
            <div className="pb-4">
              <h3 className="font-semibold text-gray-800 mb-2">4. Consume Promptly</h3>
              <p className="text-gray-600">Follow the provided consumption guidelines and store food appropriately if not consuming immediately.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FoodSafetyPage;