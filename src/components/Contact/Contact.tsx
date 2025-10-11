import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focused, setFocused] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setIsError(true);
        setTimeout(() => setIsError(false), 3000);
        return;
      }

      // Construct email body from form data
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
      `.trim();

      // Create mailto URL
      const mailtoUrl = `mailto:favourasuk@icloud.com?subject=Contact Form Submission from ${formData.name}&body=${encodeURIComponent(emailBody)}`;

      // Open default email client
      window.location.href = mailtoUrl;

      // Show success message and clear form
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 3000);
    } catch {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="text-center mb-16"
        variants={itemVariants}
      >
        <h1 className="text-5xl font-bold mb-4 text-blue-950 tracking-tight">Let's get Started!</h1>
        <p className="text-gray-600 text-lg">Fill up the Form and our team will get back to within 24 hrs</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <motion.div 
          className="bg-white rounded-xl shadow-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300"
          variants={itemVariants}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused('')}
                placeholder="Name"
                className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-orange-500 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                required
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${focused === 'name' ? 'w-full' : 'w-0'}`} />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused('')}
                placeholder="Email"
                className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-orange-500 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                required
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${focused === 'email' ? 'w-full' : 'w-0'}`} />
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
                placeholder="Tell us your needs"
                className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-orange-500 outline-none transition-all duration-300 min-h-[200px] bg-gray-50 focus:bg-white resize-none"
                required
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-orange-400 transition-all duration-300 ${focused === 'message' ? 'w-full' : 'w-0'}`} />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-orange-400 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-orange-500 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileTap={{ scale: 0.95 }}
            >
              Send message
            </motion.button>
          </form>

          {/* Success and Error Notifications */}
          {isSuccess && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-center">
              Message sent successfully!
            </div>
          )}
          {isError && (
            <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg text-center">
              An error occurred. Please try again.
            </div>
          )}
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="bg-blue-950 text-white rounded-xl p-10 shadow-2xl relative overflow-hidden"
          variants={itemVariants}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full translate-y-16 -translate-x-16" />
          
          {['LOCATION', 'WORKING HOURS', 'CONTACT US'].map((section, index) => (
            <motion.div 
              key={section}
              className="mb-12 relative z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-orange-400 font-semibold mb-6 text-xl tracking-wider">{section}</h3>
              {section === 'LOCATION' && (
                <>
                  <p className="text-gray-100">12a, Mabinuori Dawodu st.</p>
                  <p className="text-gray-100">Gbagada 1, Lagos</p>
                </>
              )}
              {section === 'WORKING HOURS' && (
                <>
                  <p className="text-gray-100">Monday To Friday</p>
                  <p className="text-gray-100">9:00 AM to 6:00 PM</p>
                  <p className="text-orange-400 text-sm mt-4">Our Support Team is available 24Hrs</p>
                </>
              )}
              {section === 'CONTACT US' && (
                <>
                  <p className="text-gray-100">+234 803 308 7303</p>
                  <p className="text-gray-100">support @innometrixtechnology.com
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Map */}
      <motion.div 
        className="w-full h-[450px] rounded-xl overflow-hidden shadow-2xl"
        variants={itemVariants}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3769343856897!2d3.3813!3d6.5601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d73a658782b%3A0x7a1de11d89a6e36f!2sGbagada%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890!5m2!1sen!2sng"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </motion.div>
  );
};

export default Contact;