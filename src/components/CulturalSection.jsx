import React from 'react';

const CulturalSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Celebrating Food Culture</h2>
          <p className="text-lg text-gray-600">
            Food is more than sustenance—it's a connection to our heritage, community, and shared experiences.
            Discover cultural dishes and traditions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all">
            <img
              src="https://images.pexels.com/photos/5965861/pexels-photo-5965861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Community Cooking Classes"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Community Cooking Classes</h3>
              <p className="text-gray-600 mb-4">
                Join local chefs and home cooks as they share traditional recipes and cooking techniques from
                diverse cultural backgrounds.
              </p>
              <a href="#" className="text-orange-600 font-medium hover:text-orange-700">
                Explore Classes →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all">
            <img
              src="https://images.pexels.com/photos/6248742/pexels-photo-6248742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Food Stories & Heritage"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Food Stories & Heritage</h3>
              <p className="text-gray-600 mb-4">
                Read touching stories about family recipes, cultural traditions, and how food creates lasting
                connections across generations.
              </p>
              <a href="#" className="text-orange-600 font-medium hover:text-orange-700">
                Read Stories →
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all">
            <img
              src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Community Dinners"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Community Dinners</h3>
              <p className="text-gray-600 mb-4">
                Experience the joy of shared meals at our community dining events, celebrating diversity
                through food and conversation.
              </p>
              <a href="#" className="text-orange-600 font-medium hover:text-orange-700">
                Find Events →
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="bg-green-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-700 transition-colors shadow"
          >
            Share Your Food Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default CulturalSection;
