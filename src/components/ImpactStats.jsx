import React from 'react';
import { Utensils, Clock, Users, Leaf } from 'lucide-react';

const ImpactStats = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-orange-500">
      <div className="container mx-auto px-4 text-white">
        <h2 className="text-3xl font-extrabold text-center mb-12">Our Community Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Stat Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 transform transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold">7,500+</h3>
            <p className="text-white/80">Meals Rescued</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 transform transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold">3,200+</h3>
            <p className="text-white/80">Volunteer Hours</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 transform transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold">120+</h3>
            <p className="text-white/80">Partner Businesses</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 transform transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold">5 tons</h3>
            <p className="text-white/80">CO₂ Emissions Saved</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block bg-white text-orange-600 font-semibold rounded-full px-8 py-3 shadow-md hover:bg-white/90 transition-colors"
          >
            Join Our Community Efforts
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
