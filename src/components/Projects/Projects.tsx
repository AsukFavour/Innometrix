import React from 'react';
import DTherapistLogo from '/dtherapist-logo.png';

const Projects: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: 'DTherapist',
      logo: DTherapistLogo,
      link: 'https://dtherapist.com/',
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {partners.map((partner) => (
          <a
            key={partner.id}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <h2 className="text-4xl font-bold text-left text-gray-900 mb-4 group-hover:text-blue-950 transition-colors">
              Some works
            </h2>
            <div className="flex flex-wrap items-start justify-start gap-x-2 gap-y-2">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-48 md:h-56 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;