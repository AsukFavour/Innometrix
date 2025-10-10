import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;