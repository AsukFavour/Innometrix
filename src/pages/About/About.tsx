import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AboutCard from '../../components/About/AboutCard';
import VisionMissionSection from '../../components/About/VisionMissionSection';
import HowWeDoIt from '../../components/About/HowWeDoIt';
import WhyWeExist from '../../components/About/WhyWeExist';
import Footer from '../../components/Footer/Footer';

const About: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            About Innometrix
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Transforming ideas into innovative solutions through cutting-edge technology
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* About Card Section */}
        <AboutCard />

         {/* How We Do It Section */}
        <HowWeDoIt />

        {/* Why We Exist Section */}
        <WhyWeExist />

        {/* Vision & Mission Section */}
        <VisionMissionSection />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;