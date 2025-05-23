import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calculator, FileCheck, DollarSign, TrendingUp } from 'lucide-react';

const TaxBenefitsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl md-4xl font-bold text-gray-900 mb-4">Food Donation Tax Benefits</h1>
        <p className="text-lg text-gray-600 mb-12">
          Learn how your business can benefit from tax incentives while making a positive impact through food donations.
        </p>

        <div className="grid grid-cols-1 md-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Calculator className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Enhanced Tax Deductions</h2>
            </div>
            <p className="text-gray-600">
              Businesses can deduct the cost basis of donated food plus half the difference between the cost basis and fair market value, up to twice the cost basis.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <FileCheck className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Documentation Requirements</h2>
            </div>
            <p className="text-gray-600">
              Learn about the necessary documentation and receipts needed to claim food donation tax deductions properly.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <DollarSign className="w-8 h-8 text-orange-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">State Tax Incentives</h2>
            </div>
            <p className="text-gray-600">
              Many states offer additional tax incentives for food donations. Check your local regulations for extra benefits.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-purple-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Financial Impact</h2>
            </div>
            <p className="text-gray-600">
              Calculate the potential tax savings and financial benefits your business could realize through food donations.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How It Works</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-semibold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Register as a Food Donor</h3>
                <p className="text-gray-600">
                  Sign up with ZAMANI and complete the necessary documentation to become a registered food donor.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Track Your Donations</h3>
                <p className="text-gray-600">
                  Use our platform to maintain detailed records of all food donations, including quantities and fair market values.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 font-semibold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Receive Documentation</h3>
                <p className="text-gray-600">
                  Get automated receipts and documentation for all your donations to support tax deduction claims.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-semibold">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Claim Your Deductions</h3>
                <p className="text-gray-600">
                  Work with your tax professional to claim the enhanced deductions during tax season.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Our team can help you understand the tax benefits available to your business and guide you through the process.
          </p>
          <button className="bg-orange-500 hover-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TaxBenefitsPage;