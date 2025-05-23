import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Package, Users, Leaf, DollarSign } from 'lucide-react';

const data = [
  { month: 'Jan', meals: 450, waste: 2000 },
  { month: 'Feb', meals: 600, waste: 2400 },
  { month: 'Mar', meals: 750, waste: 2800 },
  { month: 'Apr', meals: 900, waste: 3200 },
  { month: 'May', meals: 1200, waste: 3600 },
  { month: 'Jun', meals: 1500, waste: 4000 },
];


const ImpactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Impact</h1>
        
        <div className="grid grid-cols-1 md-cols-2 lg-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Package className="w-8 h-8 text-orange-500" />
              <h3 className="text-xl font-semibold ml-3">7,500+</h3>
            </div>
            <p className="text-gray-600">Meals Rescued</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-blue-500" />
              <h3 className="text-xl font-semibold ml-3">120+</h3>
            </div>
            <p className="text-gray-600">Partner Businesses</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Leaf className="w-8 h-8 text-green-500" />
              <h3 className="text-xl font-semibold ml-3">5 tons</h3>
            </div>
            <p className="text-gray-600">CO₂ Emissions Saved</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <DollarSign className="w-8 h-8 text-purple-500" />
              <h3 className="text-xl font-semibold ml-3">$25,000+</h3>
            </div>
            <p className="text-gray-600">Customer Savings</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-6">Growth Metrics</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="meals"
                  name="Meals Rescued"
                  stroke="#f97316"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="waste"
                  name="Food Waste Prevented (lbs)"
                  stroke="#22c55e"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-6">Environmental Impact</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></span>
                <p className="text-gray-600">Reduced methane emissions from landfills</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></span>
                <p className="text-gray-600">Conserved water and energy resources</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></span>
                <p className="text-gray-600">Decreased transportation emissions</p>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-6">Social Impact</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full mr-3"></span>
                <p className="text-gray-600">Improved food accessibility in local communities</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full mr-3"></span>
                <p className="text-gray-600">Supported local businesses and jobs</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full mr-3"></span>
                <p className="text-gray-600">Raised awareness about food waste</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-gray-600 mb-6">
            Help us create a more sustainable future by reducing food waste in your community.
          </p>
          <button className="bg-orange-500 hover-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors">
            Get Started Today
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ImpactPage;