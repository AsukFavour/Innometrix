import React, { useEffect, useRef, useState } from 'react';

import { servicesData } from '../../constants/ServicesData';

const ServicesSection: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current.slice(); // Copy current refs
    const observers = cards.map((card, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );

      if (card) observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (cards[index]) {
          observer.unobserve(cards[index]!);
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-950 to-blue-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="text-orange-400 font-poppins font-semibold tracking-wide uppercase text-sm mb-4">OUR SOLUTIONS</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white leading-tight mb-6">
            Building Intelligent Solutions
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed font-inter">
            We build and deploy intelligent, internet-enabled solutions that solve a broad range of life's challenges. Our core areas of interest include:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              ref={el => { cardRefs.current[index] = el; }}
              className={`bg-white rounded-3xl p-8 md:p-10 shadow-xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center mb-6 text-white">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-poppins font-bold text-blue-950 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-inter">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;