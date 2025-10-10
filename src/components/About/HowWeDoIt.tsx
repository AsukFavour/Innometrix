import React, { useEffect, useRef, useState } from 'react';

const HowWeDoIt: React.FC = () => {
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div 
        ref={sectionRef}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-blue-950 mb-4">
            How We Do It: The Power of Experienced Professionals
          </h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl">
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto text-center font-inter">
            Innovation means little without execution. Our solutions are built on a foundation of professional experience. 
            The Innometrix Team (TIT) is composed of development veterans who follow rigorous, quality-focused processes. 
            We focus on simple, elegant design and robust development practices, ensuring that the "convenient" solution 
            we deliver today remains reliable and scalable tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;