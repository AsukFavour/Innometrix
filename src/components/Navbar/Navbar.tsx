import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import InnometrixLogo from '/Innmtx_logo.png';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  // Helper function to check if link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Navbar - Rounded */}
      <nav className="bg-blue-950 rounded-3xl mx-2 sm:mx-4 my-6 hidden md:block">
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <div className="bg-white p-2 rounded-lg">
                <img 
                  src={InnometrixLogo} 
                  alt="Innometrix" 
                  className="h-10 md:h-12 w-auto" 
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-12">
              <Link 
                to="/" 
                className={`font-inter font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-orange-400' 
                    : 'text-white hover:text-gray-300'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-inter font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-orange-400' 
                    : 'text-white hover:text-gray-300'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/solutions" 
                className={`font-inter font-medium transition-colors ${
                  isActive('/solutions') 
                    ? 'text-orange-400' 
                    : 'text-white hover:text-gray-300'
                }`}
              >
                Our Solutions
              </Link>
            </div>

            {/* Contact Button */}
            <div>
              <Link 
                to="/contact" 
                className={`px-6 py-2 rounded-2xl font-poppins font-semibold transition-colors ${
                  isActive('/contact')
                    ? 'bg-orange-400 text-blue-950'
                    : 'bg-white text-blue-950 hover:bg-gray-100'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar - Full Width */}
      <nav className="bg-blue-950 mx-2 sm:mx-4 my-6 rounded-2xl md:hidden">
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <div className="bg-white p-2 rounded-lg">
                <img 
                  src={InnometrixLogo} 
                  alt="Innometrix" 
                  className="h-8 w-auto" 
                />
              </div>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white z-50 relative"
              aria-label="Toggle menu"
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-950 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-24 px-6">
          <Link 
            to="/" 
            className={`block py-4 font-inter font-medium transition-colors border-b border-blue-900 ${
              isActive('/') 
                ? 'text-orange-400' 
                : 'text-white hover:text-gray-300'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`block py-4 font-inter font-medium transition-colors border-b border-blue-900 ${
              isActive('/about') 
                ? 'text-orange-400' 
                : 'text-white hover:text-gray-300'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/solutions" 
            className={`block py-4 font-inter font-medium transition-colors border-b border-blue-900 ${
              isActive('/solutions') 
                ? 'text-orange-400' 
                : 'text-white hover:text-gray-300'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Solutions
          </Link>
          
          <Link 
            to="/contact" 
            className={`block mt-6 px-6 py-3 rounded-full font-poppins font-semibold text-center transition-colors ${
              isActive('/contact')
                ? 'bg-orange-400 text-blue-950'
                : 'bg-white text-blue-950 hover:bg-gray-100'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;