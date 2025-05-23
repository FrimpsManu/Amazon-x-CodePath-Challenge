import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Newspaper, Download, Mail } from 'lucide-react';

const PressPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Press & Media</h1>
          <p className="text-lg text-gray-600 mb-12">
            Get the latest news and updates about ZAMANI's mission to reduce food waste and create sustainable communities.
          </p>

          <div className="bg-white rounded-xl p-8 shadow-md mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent News</h2>
            
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-8">
                <span className="text-sm text-orange-600 font-medium">March 15, 2025</span>
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3">
                  ZAMANI Expands to 10 New Cities, Helping More Communities Fight Food Waste
                </h3>
                <p className="text-gray-600 mb-4">
                  Our platform's successful expansion brings sustainable food solutions to more neighborhoods across the country.
                </p>
                <a href="#" className="text-blue-600 hover-blue-800 font-medium">
                  Read More →
                </a>
              </div>

              <div className="border-b border-gray-200 pb-8">
                <span className="text-sm text-orange-600 font-medium">February 28, 2025</span>
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3">
                  Partnership with Local Governments Boosts Food Waste Reduction
                </h3>
                <p className="text-gray-600 mb-4">
                  New initiatives with city governments help streamline food donation processes and increase impact.
                </p>
                <a href="#" className="text-blue-600 hover-blue-800 font-medium">
                  Read More →
                </a>
              </div>

              <div className="pb-8">
                <span className="text-sm text-orange-600 font-medium">January 10, 2025</span>
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3">
                  ZAMANI Reaches Milestone Million Meals Saved
                </h3>
                <p className="text-gray-600 mb-4">
                  A significant achievement in our mission to reduce food waste and support communities.
                </p>
                <a href="#" className="text-blue-600 hover-blue-800 font-medium">
                  Read More →
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Download className="w-8 h-8 text-green-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">Media Kit</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Download our press kit including logos, photos, and fact sheets.
              </p>
              <button className="bg-green-500 hover-green-600 text-white font-medium px-6 py-2 rounded-lg transition-colors">
                Download Kit
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Mail className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">Media Inquiries</h2>
              </div>
              <p className="text-gray-600 mb-4">
                For press inquiries and interview requests, please contact our media team.
              </p>
              <button className="bg-blue-500 hover-blue-600 text-white font-medium px-6 py-2 rounded-lg transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          <div className="bg-orange-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Impact by the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600">7,500+</div>
                <div className="text-gray-600">Meals Rescued</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">120+</div>
                <div className="text-gray-600">Partner Businesses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">5 tons</div>
                <div className="text-gray-600">CO₂ Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">10</div>
                <div className="text-gray-600">Cities Served</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PressPage;