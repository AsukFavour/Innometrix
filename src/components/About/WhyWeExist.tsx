import React, { useEffect, useRef, useState } from 'react';

const WhyWeExist: React.FC = () => {
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
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-950 to-blue-900">
      <div 
        ref={sectionRef}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">
            Why We Exist: The Pursuit of Convenience
          </h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <p className="text-blue-100 text-lg leading-relaxed max-w-4xl mx-auto text-center">
            Modern life is complex. From managing a small business to navigating personal schedules, 
            friction and repetitive tasks steal time and energy. We exist to eliminate that friction. 
            Our mission is driven by the belief that advanced software and AI can transform complexity 
            into intuitive simplicity, giving people back their most valuable asset: their time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;