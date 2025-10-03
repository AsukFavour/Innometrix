import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroBanner from '../../components/HeroSection/HeroBanner';
import ServiceSection from '../../components/Services/ServiceSection';
import Footer from '../../components/Footer/Footer';

const Solutions: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <ServiceSection />
      <Footer />
    </div>
  );
};

export default Solutions;