import React, { useEffect, useRef, useState } from 'react';

const AboutCard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = cardRef.current;

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
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div ref={cardRef} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                {/* Team Image - Replace src with actual image path */}
                <img 
                  src="/coding-picture.jpg" 
                  alt="The Innometrix Team" 
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-400 rounded-3xl -z-10 opacity-50"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div>
              <p className="text-blue-900 font-poppins font-semibold tracking-wide uppercase text-sm mb-4">ABOUT US</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-blue-950 leading-tight mb-6">
                Our Philosophy
              </h2>
              <p className="text-lg font-inter text-gray-600 leading-relaxed">
                Innometrix Technology Limited is an Information and Communications Technology (ICT) company founded on a single, powerful principle: technology should exist to simplify, not complicate, life. We are a broad-ranging software development company that leverages Artificial Intelligence (AI) and advanced internet-enabled activities to build tangible solutions to everyday problems.

              </p>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <p className="text-blue-950 font-poppins font-semibold">High Success Rate</p>
                </div>
                <p className="text-gray-600 text-sm pl-4 font-inter">Client satisfaction guaranteed</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <p className="text-blue-950 font-poppins font-semibold">Expert Team</p>
                </div>
                <p className="text-gray-600 text-sm pl-4 font-inter">Seasoned professionals</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <p className="text-blue-950 font-poppins font-semibold">AI-Powered</p>
                </div>
                <p className="text-gray-600 text-sm pl-4 font-inter">Intelligent automation</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <p className="text-blue-950 font-poppins font-semibold">Proven Results</p>
                </div>
                <p className="text-gray-600 text-sm pl-4 font-inter">Measurable outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;