import React from 'react';
import { Link } from 'react-router-dom';
import InnometrixLogo from '/Innmtx_logo.png'; // Add this import

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
            <p className="text-blue-200 text-xs md:text-sm">
              Offering intelligent digital solutions that redefine the future of living and business operations through effortless convenience
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base text-white">Company</h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white transition-colors text-xs md:text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-blue-200 hover:text-white transition-colors text-xs md:text-sm">
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link to="/values" className="text-blue-200 hover:text-white transition-colors text-xs md:text-sm">
                  Core Values
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors text-xs md:text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base text-white">Legal</h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link to="/privacy" className="text-blue-200 hover:text-white transition-colors text-xs md:text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-blue-200 hover:text-white transition-colors text-xs md:text-sm">
                  Terms of Service
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-2 sm:col-span-1 mt-6 md:mt-0">
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base text-white">Connect</h3>
            <div className="flex gap-2 md:gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 bg-orange-400 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 bg-orange-400 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 bg-orange-400 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 my-4 md:my-6"></div>

        {/* Bottom Section */}
        <div className="text-center md:text-left text-xs md:text-sm text-blue-300">
          <p className="px-4 md:px-0">
            © {currentYear} Innometrix Technology Limited. All trademarks are the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;