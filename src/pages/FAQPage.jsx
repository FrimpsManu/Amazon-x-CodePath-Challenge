import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl md-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">How does ZAMANI work?</h2>
            <p className="text-gray-600">ZAMANI connects you with local restaurants and markets offering surplus food at reduced prices. Browse available items, make reservations, and pick up your food during the designated time slot.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Is the food safe to eat?</h2>
            <p className="text-gray-600">Yes! All our partner establishments follow strict food safety guidelines. The food is perfectly good to eat but would otherwise go to waste due to overstocking or approaching best-by dates.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">How do I make a reservation?</h2>
            <p className="text-gray-600">Simply browse available items, select what you want, choose a pickup time, and confirm your reservation. You'll receive a confirmation email with all the details.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">What happens if I can't pick up my order?</h2>
            <p className="text-gray-600">Please cancel your reservation at least 2 hours before the pickup time. Repeated no-shows may affect your ability to make future reservations.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">How are the prices determined?</h2>
            <p className="text-gray-600">Partners set their own prices, typically offering 50-70% off regular prices. This helps cover their costs while making quality food more accessible.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;