import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <HowItWorks />
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;