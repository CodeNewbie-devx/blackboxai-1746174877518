import React from 'react';
import { FaCheckCircle, FaClock, FaUsers } from 'react-icons/fa';

const points = [
  {
    icon: <FaCheckCircle size={40} className="text-accent" />,
    title: 'Quality Assurance',
    description: 'We ensure the highest standards in every project we undertake.',
  },
  {
    icon: <FaClock size={40} className="text-accent" />,
    title: 'On-Time Delivery',
    description: 'Committed to completing projects within agreed timelines.',
  },
  {
    icon: <FaUsers size={40} className="text-accent" />,
    title: 'Experienced Team',
    description: 'Our skilled professionals bring years of industry experience.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {points.map((point, index) => (
            <div
              key={index}
              className="text-center p-6 border rounded-lg shadow hover:shadow-lg transition animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-700">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
