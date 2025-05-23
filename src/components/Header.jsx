import React, { useState, useEffect } from 'react';
import { Menu, Search, MapPin, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import NotificationBell from './NotificationBell';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-2' 
            : 'bg-gradient-to-b from-black/50 to-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-2 text-2xl font-bold">
                <span className={`transition-colors duration-300 ${
                  isScrolled ? 'text-orange-500' : 'text-white'
                }`}>
                  ZAMANI
                </span>
              </div>
            </div>
            
            <div className={`hidden md items-center rounded-full px-4 py-2 transition-all duration-300 ${
              isScrolled ? 'bg-gray-100' : 'bg-white/90'
            }`}>
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <input 
                type="text" 
                placeholder="Search for food or restaurants" 
                className="bg-transparent outline-none w-64"
              />
            </div>
            
            <nav className="flex items-center space-x-5">
              <button className={`hidden md items-center transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                <MapPin className="w-5 h-5 mr-1" />
                <span className="text-sm">Nearby</span>
              </button>
              
              <NotificationBell />
              
              <button 
                onClick={handleAuthClick}
                className={`flex items-center transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {user ? (
                  <LogOut className="w-5 h-5" />
                ) : (
                  <User className="w-5 h-5" />
                )}
              </button>
              
              <button className={`md transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                <Menu className="w-6 h-6" />
              </button>
            </nav>
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  );
};

export default Header;