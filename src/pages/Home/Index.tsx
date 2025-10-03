import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import AboutCard from '../../components/About/AboutCard';
import ServicesSection from '../../components/Services/ServiceSection';
import ValuesObjectivesSection from '../../components/ValuesObjectivesSection/ValuesObjectivesSection';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <HeroSection />
        <AboutCard/>
        <ServicesSection />
        <ValuesObjectivesSection />
       
      </main>
      <Footer />
    </div>
  );
};

export default Home;