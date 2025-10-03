import React, { useEffect, useRef, useState } from 'react';

import { visionMissionData } from '../../constants/VisionMissionData';


const VisionMissionSection: React.FC = () => {
  const [visibleVision, setVisibleVision] = useState(false);
  const [visibleMission, setVisibleMission] = useState(false);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleVision(true);
        }
      },
      { threshold: 0.2 }
    );

    const missionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleMission(true);
        }
      },
      { threshold: 0.2 }
    );

    const visionNode = visionRef.current;
    const missionNode = missionRef.current;

    if (visionNode) visionObserver.observe(visionNode);
    if (missionNode) missionObserver.observe(missionNode);

    return () => {
      if (visionNode) visionObserver.unobserve(visionNode);
      if (missionNode) missionObserver.unobserve(missionNode);
    };
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-950 to-blue-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400 rounded-full opacity-10 blur-3xl"></div>
      
      {/* Decorative curved lines */}
      <div className="absolute top-10 right-20 w-24 h-24 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-orange-400">
          <path d="M 20 20 Q 50 20 50 50 Q 50 80 80 80" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-20 w-24 h-24 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-orange-400">
          <path d="M 20 50 Q 20 20 50 20" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold tracking-wide uppercase text-sm mb-4">OUR PURPOSE</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
            Vision & Mission
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div
            ref={visionRef}
            className={`bg-white rounded-3xl p-10 md:p-12 shadow-2xl transform transition-all duration-1000 hover:scale-105 ${
              visibleVision ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center text-white flex-shrink-0">
                {visionMissionData.vision.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-950">
                {visionMissionData.vision.title}
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {visionMissionData.vision.content}
            </p>
            
            {/* Decorative element */}
            <div className="mt-8 flex items-center gap-2">
              <div className="w-12 h-1 bg-orange-400 rounded-full"></div>
              <div className="w-4 h-1 bg-orange-400 rounded-full"></div>
              <div className="w-2 h-1 bg-orange-400 rounded-full"></div>
            </div>
          </div>

          {/* Mission Card */}
          <div
            ref={missionRef}
            className={`bg-white rounded-3xl p-10 md:p-12 shadow-2xl transform transition-all duration-1000 delay-200 hover:scale-105 ${
              visibleMission ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white flex-shrink-0">
                {visionMissionData.mission.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-950">
                {visionMissionData.mission.title}
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {visionMissionData.mission.content}
            </p>
            
            {/* Decorative element */}
            <div className="mt-8 flex items-center gap-2">
              <div className="w-12 h-1 bg-blue-950 rounded-full"></div>
              <div className="w-4 h-1 bg-blue-950 rounded-full"></div>
              <div className="w-2 h-1 bg-blue-950 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Join us in our mission to simplify modern life through intelligent digital solutions.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-400 text-white rounded-full font-semibold hover:bg-orange-500 transition-all shadow-lg hover:shadow-xl group"
          >
            Get Started
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
      </div>
    </section>
  );
};

export default VisionMissionSection;