import React from 'react';
import { 
  FaGavel, 
  FaUserShield, 
  FaCopyright, 
  FaExclamationTriangle, 
  FaHandshake, 
  FaFileContract, 
  FaEnvelope 
} from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen  flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 max-w-8xl">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
              Terms and Conditions
            </h1>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaGavel className="text-2xl text-blue-900 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-700">
                  1. Agreement to Terms
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using our services, you agree to be bound by these Terms and Conditions. 
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaUserShield className="text-2xl text-blue-900 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-700">
                  2. User Responsibilities
                </h2>
              </div>
              <p className="text-gray-600 mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-8 text-gray-600 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Not use the services for any illegal purposes</li>
                <li>Not violate any applicable laws or regulations</li>
                <li>Not interfere with or disrupt our services</li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaCopyright className="text-2xl text-blue-900 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-700">
                  3. Intellectual Property
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The service and all its original content, features, and functionality are owned by 
                Innometrix Technology Limited and are protected by international copyright, trademark, 
                and other intellectual property rights laws.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaExclamationTriangle className="text-2xl text-blue-900 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-700">
                  4. Limitation of Liability
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                In no event shall Innometrix Technology Limited be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaHandshake className="text-2xl text-blue-900 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-700">
                  5. Governing Law
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Nigeria, 
                without regard to its conflict of law provisions.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaFileContract className="text-2xl text-blue-900 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-700">
                  6. Changes to Terms
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. Changes will be 
                effective immediately upon posting to our website. Your continued use of our service 
                constitutes acceptance of those changes.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-2xl text-blue-900 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-700">
                  7. Contact Information
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms, please contact us at: legal@innometrix.com
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Last updated: October 3, 2025
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;