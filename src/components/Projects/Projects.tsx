import React, { useEffect, useRef, useState } from 'react';

import { productsData } from '../../constants/productsData';


const ProductsShowcase: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header and Products on Same Line */}
        <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          {/* Trusted By Text */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-blue-900 whitespace-nowrap">
            Trusted by
          </h2>

          {/* Products */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            {productsData.map((product, index) => (
              <a
                key={product.id}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group transform transition-all duration-700 hover:scale-110 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex flex-col items-center gap-3">
                  {/* Logo Circle */}
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow border-2 border-gray-200 group-hover:border-orange-400">
                   <img src={product.logo} alt="DTherapist" className='w-18 h-18' />
                  </div>
                  
                  {/* Product Name */}
                  <div className="text-center">
                    <h3 className="text-lg font-poppins font-semibold text-blue-950 group-hover:text-orange-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-blue-300 mt-1 font-inter">
                      {product.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Optional: Add a "View All Products" link */}
        {productsData.length > 1 && (
          <div className={`text-center mt-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a
              href="/products"
              className="inline-flex items-center gap-2 text-white font-poppins font-semibold hover:text-orange-400 transition-colors group"
            >
              Explore All Products
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
        )}
      </div>
    </section>
  );
};

export default ProductsShowcase;