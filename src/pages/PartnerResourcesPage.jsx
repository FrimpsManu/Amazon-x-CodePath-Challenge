import React from 'react';

const PartnerResourcesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm-6 lg-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Partner Resources</h1>
        <div className="grid gap-8 md-cols-2 lg-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Marketing Materials</h2>
            <p className="text-gray-600 mb-4">Access our collection of marketing materials to help promote your partnership.</p>
            <button className="text-indigo-600 hover-indigo-800 font-medium">
              Download Resources →
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Training Guides</h2>
            <p className="text-gray-600 mb-4">Comprehensive training materials for your team to ensure smooth operations.</p>
            <button className="text-indigo-600 hover-indigo-800 font-medium">
              View Guides →
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Partner Support</h2>
            <p className="text-gray-600 mb-4">Get in touch with our dedicated partner support team for assistance.</p>
            <button className="text-indigo-600 hover-indigo-800 font-medium">
              Contact Support →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerResourcesPage;