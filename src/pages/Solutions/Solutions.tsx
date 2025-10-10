import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroBanner from '../../components/HeroSection/HeroBanner';
import ServiceSection from '../../components/Services/ServiceSection';
import Footer from '../../components/Footer/Footer';
import ProductsShowcase from '../../components/Projects/Projects';

const Solutions: React.FC = () => {
  return (
    <div className="min-h-screen  flex flex-col">
      <Navbar />
      {/* Main Content */}
      <main className="flex-grow" >
      {/* Hero Banner */}
      <HeroBanner />
      <ServiceSection />
      <ProductsShowcase/>

      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Solutions;