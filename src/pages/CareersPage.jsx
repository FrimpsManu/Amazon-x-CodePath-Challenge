import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Briefcase, Users, Heart, Star } from 'lucide-react';

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-600 mb-12">
            Help us build a more sustainable future for food. We're looking for passionate individuals who want to make a difference.
          </p>

          <div className="grid grid-cols-1 md-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Briefcase className="w-8 h-8 text-orange-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">Meaningful Work</h2>
              </div>
              <p className="text-gray-600">
                Make a real impact on food sustainability and community well-being through your work.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">Great Team</h2>
              </div>
              <p className="text-gray-600">
                Join a diverse, passionate team committed to making a difference in the world.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-red-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">Benefits</h2>
              </div>
              <p className="text-gray-600">
                Competitive salary, health benefits, flexible work arrangements, and growth opportunities.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Star className="w-8 h-8 text-yellow-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">Growth</h2>
              </div>
              <p className="text-gray-600">
                Continuous learning opportunities and clear career progression paths.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Open Positions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Senior Full Stack Developer</h3>
                <p className="text-gray-600 mb-4">
                  Help build and scale our platform to serve more communities and reduce food waste.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Remote</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Full-time</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Engineering</span>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Manager</h3>
                <p className="text-gray-600 mb-4">
                  Build and nurture relationships with our food provider partners and community members.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Hybrid</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Full-time</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Operations</span>
                </div>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Designer</h3>
                <p className="text-gray-600 mb-4">
                  Create intuitive and delightful experiences for our users across all platforms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Remote</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Full-time</span>
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Design</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Don't see the right role?</h2>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute.
            </p>
            <button className="bg-orange-500 hover-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors">
              Submit General Application
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;