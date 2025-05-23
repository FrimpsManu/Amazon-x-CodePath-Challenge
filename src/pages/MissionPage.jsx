import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Leaf, Heart, Globe } from 'lucide-react';

const MissionPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-green-600">Our Mission</h1>
          
          <div className="prose prose-lg mx-auto mb-12">
            <p className="text-gray-600 text-center text-xl mb-12">
              We're on a mission to reduce food waste while making quality food accessible to everyone,
              creating a more sustainable and equitable food system for all.
            </p>
          </div>

          <div className="grid md-cols-3 gap-8 mb-16">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-green-600">
                <Leaf className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-700">Environmental Impact</h3>
              <p className="text-gray-600">
                Reducing food waste to minimize environmental impact and combat climate change.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-green-600">
                <Heart className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-700">Community Support</h3>
              <p className="text-gray-600">
                Making quality food accessible while supporting local businesses and communities.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-green-600">
                <Globe className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-700">Global Vision</h3>
              <p className="text-gray-600">
                Creating a sustainable food ecosystem that benefits everyone on our planet.
              </p>
            </div>
          </div>

          <div className="bg-green-100 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-semibold mr-2">Sustainability:</span>
                <span className="text-gray-700">We prioritize environmental responsibility in everything we do.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Accessibility:</span>
                <span className="text-gray-700">Quality food should be available to everyone, regardless of their circumstances.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Community:</span>
                <span className="text-gray-700">We believe in building strong, supportive relationships with our partners and users.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Innovation:</span>
                <span className="text-gray-700">We continuously seek better ways to serve our community and protect our planet.</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Join Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Whether you're a food provider, consumer, or supporter, there's a place for you in our community.
              Together, we can make a difference.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover-green-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MissionPage;