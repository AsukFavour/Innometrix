import React, { useEffect, useRef, useState } from 'react';

const CTABanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentBanner = bannerRef.current;
    if (currentBanner) {
      observer.observe(currentBanner);
    }

    return () => {
      if (currentBanner) {
        observer.unobserve(currentBanner);
      }
    };
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div 
        ref={bannerRef}
        className="max-w-7xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-12 md:p-16 lg:p-20">
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-blue-950 leading-tight">
              Simplifying Complexity with Our Solutions
            </h2>
            
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-950 text-white rounded-xl font-semibold hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl group"
            >
              Contact Us
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Right Illustration */}
          <div className={`relative flex items-center justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative w-full max-w-md h-96">
              {/* Yellow/Orange background shapes */}
              <div className="absolute top-0 right-20 w-40 h-40 bg-orange-400 rounded-full opacity-80"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-400 rounded-full opacity-80"></div>
              <div className="absolute top-16 left-0 w-32 h-32 bg-orange-400 rounded-full opacity-80"></div>

              {/* Character illustrations - Using simple avatars as placeholders */}
              <div className="relative z-10 space-y-8">
               

                {/* Middle character with lightbulb */}
                <div className="absolute top-12 left-8">
                  
                  {/* Lightbulb */}
                  <div className="absolute -top-4 right-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-300">
                    <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                
                </div>

                
              </div>

              {/* Additional decorative dashed lines */}
              <svg className="absolute top-24 right-32 w-16 h-16 text-gray-300 opacity-50" viewBox="0 0 100 100">
                <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;