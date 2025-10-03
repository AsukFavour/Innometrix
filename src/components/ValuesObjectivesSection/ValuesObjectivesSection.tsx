import React, { useEffect, useRef, useState } from 'react';
import { coreValuesData, businessObjectivesData } from '../../constants/coreValuesData';

const ValuesObjectivesSection: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [visibleObjectives, setVisibleObjectives] = useState<number[]>([]);
  const valuesRef = useRef<HTMLDivElement>(null);
  const objectivesRef = useRef<HTMLDivElement>(null);
  const valueCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const objectiveCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Copy refs to local variables to avoid stale closures in cleanup
    const valueCards = [...valueCardRefs.current];
    const objectiveCards = [...objectiveCardRefs.current];

    // Observe value cards
    const valueObservers = valueCards.map((card, index) => {
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

    // Observe objective cards
    const objectiveObservers = objectiveCards.map((card, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleObjectives(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );

      if (card) observer.observe(card);
      return observer;
    });

    return () => {
      valueObservers.forEach((observer, index) => {
        if (valueCards[index]) {
          observer.unobserve(valueCards[index]!);
        }
      });
      objectiveObservers.forEach((observer, index) => {
        if (objectiveCards[index]) {
          observer.unobserve(objectiveCards[index]!);
        }
      });
    };
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Core Values Section */}
      <section ref={valuesRef} className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">
          {/* Decorative elements */}
          <div className="relative mb-12 sm:mb-16">
            <div className="absolute -left-4 sm:-left-8 lg:-left-12 top-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full text-blue-950 opacity-20">
                <path d="M 20 50 Q 20 20 50 20" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="absolute -right-4 sm:-right-8 lg:-right-12 top-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full text-orange-400 opacity-20">
                <path d="M 20 20 Q 50 20 50 50 Q 50 80 80 80" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>

            <div className="text-center w-full max-w-3xl mx-auto px-4">
              <p className="text-orange-400 font-semibold tracking-wide uppercase text-xs sm:text-sm mb-3 sm:mb-4">CORE VALUES</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-blue-950 leading-tight">
                Our Guiding Principles
              </h2>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
            {coreValuesData.map((value, index) => (
              <div
                key={value.id}
                ref={el => { valueCardRefs.current[index] = el; }}
                className={`w-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transform transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
                  visibleCards.includes(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-950 rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-950 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Objectives Section */}
      <section ref={objectivesRef} className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center w-full max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
            <p className="text-orange-400 font-semibold tracking-wide uppercase text-xs sm:text-sm mb-3 sm:mb-4">BUSINESS OBJECTIVES</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-blue-950 leading-tight">
              Driving Sustainable Growth
            </h2>
          </div>

          {/* Objectives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4">
            {businessObjectivesData.map((objective, index) => (
              <div
                key={objective.id}
                ref={el => { objectiveCardRefs.current[index] = el; }}
                className={`w-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transform transition-all duration-700 hover:shadow-xl hover:-translate-y-2 group ${
                  visibleObjectives.includes(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-950 rounded-full flex items-center justify-center flex-shrink-0 text-white group-hover:bg-orange-400 transition-colors">
                    {objective.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-950 mb-2 sm:mb-3">{objective.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{objective.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValuesObjectivesSection;