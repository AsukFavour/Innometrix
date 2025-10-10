import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentHeroRef = heroRef.current;

    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-blue-950 leading-tight">
            Digital solutions for effortless living and business
          </h1>
          
          <p className="text-lg md:text-xl font-inter text-blue-900 max-w-xl">
            We help our partners leverage intelligent digital solutions to eliminate friction and restore time.
          </p>
          
          <div>
              <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-950 text-white rounded-lg font-poppins font-semibold hover:bg-blue-900 transition-colors shadow-lg hover:shadow-xl group">
              Contact Us
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              </Link>

          </div>
        </div>

        {/* Right Illustration */}
        <div className={`relative flex items-center justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          <div className="relative w-full max-w-lg">
            {/* Large Circle Background */}
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-400 rounded-full opacity-80 transition-all duration-1000 delay-500 ${isVisible ? 'scale-100' : 'scale-0'}`}></div>
            
            {/* Illustration Elements */}
            <div className="relative z-10 space-y-4">
              {/* Code Icon */}
              <div className={`absolute -top-8 left-12 bg-white p-4 rounded-2xl shadow-lg animate-bounce transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`} style={{ animationDuration: '3s' }}>
                <svg className="w-8 h-8 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              {/* AI/Brain Icon */}
              <div className={`absolute -top-4 right-8 bg-orange-400 p-4 rounded-full shadow-lg animate-pulse transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>

              {/* API/Data Icon */}
              <div className={`absolute top-4 -right-4 bg-white p-3 rounded-lg shadow-lg transform rotate-12 hover:rotate-6 transition-all duration-700 delay-900 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <svg className="w-8 h-8 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>

              {/* Main Character Illustration Placeholder */}
              <div className={`relative mx-auto w-72 h-72 flex items-center justify-center transition-all duration-1000 delay-600 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
                <div className="absolute inset-0 bg-white rounded-full opacity-50"></div>
                <div className="relative text-center space-y-4">
                  {/* Person Icon */}
                  <div className="mx-auto w-32 h-32 bg-blue-950 rounded-full flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  {/* Phone in hand */}
                  <div className="mx-auto w-24 h-32 bg-gray-200 rounded-2xl border-4 border-blue-950 shadow-xl">
                    <div className="p-3 space-y-2">
                      <div className="w-full h-2 bg-gray-400 rounded"></div>
                      <div className="w-3/4 h-2 bg-gray-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud/Server Icon */}
              <div className={`absolute bottom-12 left-8 bg-orange-400 p-4 rounded-xl shadow-lg transform -rotate-6 hover:rotate-0 transition-all duration-700 delay-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>

              {/* WiFi/Network Icon */}
              <div className={`absolute bottom-8 right-12 bg-white p-3 rounded-full shadow-lg transition-all duration-700 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <svg className="w-6 h-6 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>

              {/* Mobile App Icon */}
              <div className={`absolute -bottom-4 right-4 bg-orange-300 p-3 rounded-lg shadow-lg transition-all duration-700 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <svg className="w-8 h-8 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;