import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import AboutCard from '../../components/About/AboutCard';
import ServicesSection from '../../components/Services/ServiceSection';
import ValuesObjectivesSection from '../../components/ValuesObjectivesSection/ValuesObjectivesSection';
import Footer from '../../components/Footer/Footer';
import ProductsShowcase from '../../components/Projects/Projects';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen  flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutCard/>
        <ServicesSection />
        <ValuesObjectivesSection />
        <ProductsShowcase/>

      </main>
      <Footer />
    </div>
  );
};

export default Home;