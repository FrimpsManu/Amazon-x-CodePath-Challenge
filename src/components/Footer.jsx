import React from 'react';
import { Utensils, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <div className="flex items-center mb-4">
              <Utensils className="w-6 h-6 text-orange-500 mr-2" />
              <h2 className="text-xl font-bold text-white">ZAMANI</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting communities through surplus food. Reducing waste while increasing access to quality, affordable meals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Customers</h3>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How it Works</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/food-safety" className="text-gray-400 hover:text-white transition-colors">Food Safety</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Businesses</h3>
            <ul className="space-y-2">
              <li><Link to="/join-as-provider" className="text-gray-400 hover:text-white transition-colors">Join as Provider</Link></li>
              <li><Link to="/business-benefits" className="text-gray-400 hover:text-white transition-colors">Business Benefits</Link></li>
              <li><Link to="/success-stories" className="text-gray-400 hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link to="/tax-benefits" className="text-gray-400 hover:text-white transition-colors">Food Donation Tax Benefits</Link></li>
              <li><Link to="/partner-resources" className="text-gray-400 hover:text-white transition-colors">Partner Resources</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/mission" className="text-gray-400 hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link to="/impact" className="text-gray-400 hover:text-white transition-colors">Impact Report</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-white transition-colors">Press</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2025 ZAMANI. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
