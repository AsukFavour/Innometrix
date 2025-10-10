import React from "react";
import { Link } from "react-router-dom";
import InnometrixLogo from "/Innmtx_logo.png"; // Add this import

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-950 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12">
        {/* Top Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-6 md:mb-0">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <img
                  src={InnometrixLogo}
                  alt="Innometrix Logo"
                  className="h-8 md:h-10 w-auto"
                />
              </div>
            </Link>
            <p className="text-blue-200 text-xs md:text-sm font-inter">
              Offering intelligent digital solutions that redefine the future of
              living and business operations through effortless convenience
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-poppins font-semibold mb-3 md:mb-4 text-sm md:text-base text-white">
              Company
            </h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-blue-200 hover:text-white transition-colors text-xs md:text-sm font-inter"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-blue-200 hover:text-white transition-colors text-xs md:text-sm font-inter"
                >
                  Our Solutions
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-blue-200 hover:text-white transition-colors text-xs md:text-sm font-inter"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <h3 className="font-poppins font-semibold mb-3 md:mb-4 text-sm md:text-base text-white">
              Legal
            </h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-blue-200 hover:text-white transition-colors text-xs md:text-sm font-inter"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-blue-200 hover:text-white transition-colors text-xs md:text-sm font-inter"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-2 sm:col-span-1 mt-6 md:mt-0">
            <h3 className="font-poppins font-semibold mb-3 md:mb-4 text-sm md:text-base text-white">
              Connect
            </h3>
            <div className="flex gap-2 md:gap-3">
              <a
                href="https://www.instagram.com/inno.metrixtech?igsh=dmhkOWk1bTFydDR4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 bg-orange-400 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://x.com/innometrixtech?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 bg-orange-400 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="X"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 bg-orange-400 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 my-4 md:my-6"></div>

        {/* Bottom Section */}
        <div className="text-center md:text-left text-xs md:text-sm text-blue-300">
          <p className="px-4 md:px-0 font-inter">
            © {currentYear} Innometrix Technology Limited. All trademarks are
            the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
