import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DollarSign, Leaf, Users, TrendingUp } from 'lucide-react';

const BusinessBenefitsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl md-4xl font-bold text-gray-900 mb-4">Business Benefits</h1>
        <p className="text-lg text-gray-600 mb-12">
          Discover how partnering with ZAMANI can help your business thrive while making a positive impact.
        </p>

        <div className="grid grid-cols-1 md-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <DollarSign className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Additional Revenue</h2>
            </div>
            <p className="text-gray-600">Generate income from surplus food that would otherwise go to waste. Our platform helps you maximize your inventory's value.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Leaf className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Sustainability</h2>
            </div>
            <p className="text-gray-600">Reduce food waste and environmental impact. Show your commitment to sustainability and attract environmentally conscious customers.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-orange-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">New Customers</h2>
            </div>
            <p className="text-gray-600">Reach new audiences and turn them into regular customers. Our platform introduces your business to sustainability-minded consumers.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-purple-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Brand Growth</h2>
            </div>
            <p className="text-gray-600">Enhance your brand's reputation and visibility. Stand out as a leader in sustainable business practices.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Partner Success Stories</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <img
                src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg"
                alt="Fresh Market"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Fresh Market</h3>
                <p className="text-gray-600 mt-2">
                  "Since joining ZAMANI, we've reduced our food waste by 60% and generated additional revenue from surplus inventory. It's a win-win situation for our business and the environment."
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="https://images.pexels.com/photos/2253642/pexels-photo-2253642.jpeg"
                alt="Green Earth Co-op"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Green Earth Co-op</h3>
                <p className="text-gray-600 mt-2">
                  "ZAMANI has helped us connect with new customers who appreciate our commitment to sustainability. Our community impact has grown significantly."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/join-as-provider"
            className="inline-block bg-orange-500 hover-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Join ZAMANI Today
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessBenefitsPage;