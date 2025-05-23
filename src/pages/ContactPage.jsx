import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-12">
            Have questions or feedback? We're here to help. Get in touch with our team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-orange-500 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">support@zamani.com</p>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <Phone className="w-6 h-6 text-orange-500 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-orange-500 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">123 Food Street, Sustainability City, 12345</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-orange-500 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-800">Hours</h3>
                  <p className="text-gray-600">Mon-Fri - 6pm EST</p>
                </div>
              </div>
            </div>

            <form className="bg-white rounded-xl p-6 shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-2 focus-orange-500 focus-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-2 focus-orange-500 focus-transparent"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-2 focus-orange-500 focus-transparent"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-2 focus-orange-500 focus-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 hover-orange-600 text-white font-medium py-2 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How quickly can I expect a response?</h3>
                <p className="text-gray-600">
                  We typically respond to inquiries within 24 business hours.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">I'm having technical issues. What should I do?</h3>
                <p className="text-gray-600">
                  For immediate technical support, please email support@zamani.com with details about the issue.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How do I become a food provider?</h3>
                <p className="text-gray-600">
                  Visit our "Join as Provider" page or contact our partnerships team at partners@zamani.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;