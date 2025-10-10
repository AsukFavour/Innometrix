import React from 'react';
import { FaShieldAlt, FaCookieBite, FaUserLock, FaLink, FaHistory, FaEnvelope } from 'react-icons/fa';
import { BiData } from 'react-icons/bi';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen  flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
      <div className="container mx-auto px-4 py-8 max-w-8xl"> {/* Increased max-width from max-w-4xl to max-w-6xl */}
        <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg shadow-lg p-8 md:p-12"> {/* Added more padding for larger screens */}
          <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
            Privacy Policy
          </h1>

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <BiData className="text-2xl text-blue-900 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-700">
                1. Information We Collect
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We collect information that you provide directly to us, including but not limited to:
              personal information (such as name, email address, and contact details), usage data,
              and any other information you choose to provide.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FaUserLock className="text-2xl text-blue-900 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-700">
                2. How We Use Your Information
              </h2>
            </div>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-8 text-gray-600 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-2xl text-blue-900 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-700">
                3. Data Security
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect
              your personal information against unauthorized access, alteration, disclosure, or
              destruction.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FaCookieBite className="text-2xl text-blue-900 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-700">
                4. Cookie Policy
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our service
              and hold certain information. You can instruct your browser to refuse all cookies
              or to indicate when a cookie is being sent.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FaLink className="text-2xl text-blue-900 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-700">
                5. Third-Party Services
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our service may contain links to third-party websites or services that are not
              owned or controlled by us. We have no control over and assume no responsibility
              for the content, privacy policies, or practices of any third-party sites or
              services.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FaHistory className="text-2xl text-blue-900 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-700">
                6. Changes to This Privacy Policy
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page and updating the
              "last updated" date.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-2xl text-blue-900 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-700">
                7. Contact Us
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
              privacy@innometrix.com
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

export default PrivacyPolicy;