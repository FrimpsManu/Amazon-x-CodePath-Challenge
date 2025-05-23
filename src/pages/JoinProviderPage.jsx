import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const JoinProviderPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl md-4xl font-bold text-gray-900 mb-8">Join as a Provider</h1>
        <div className="max-w-3xl">
          <p className="text-lg text-gray-600 mb-8">
            Partner with ZAMANI to reduce food waste, increase revenue, and make a positive impact in your community.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Join ZAMANI?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full mr-3"></span>
                <p className="text-gray-600">Reduce food waste and associated costs</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full mr-3"></span>
                <p className="text-gray-600">Generate additional revenue from surplus food</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full mr-3"></span>
                <p className="text-gray-600">Attract new customers and increase brand visibility</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full mr-3"></span>
                <p className="text-gray-600">Make a positive environmental and social impact</p>
              </li>
            </ul>
          </div>
          
          <form className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get Started</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-2 focus-orange-500 focus-transparent"
                  placeholder="Enter your business name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-2 focus-orange-500 focus-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-2 focus-orange-500 focus-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-2 focus-orange-500 focus-transparent">
                  <option value="">Select business type</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="cafe">Café</option>
                  <option value="bakery">Bakery</option>
                  <option value="grocery">Grocery Store</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-2 focus-orange-500 focus-transparent"
                  rows={4}
                  placeholder="Tell us about your business and what interests you about ZAMANI"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover-orange-600 text-white font-medium py-2 rounded-lg transition-colors"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JoinProviderPage;