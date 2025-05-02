import React from 'react';
import { FaHardHat, FaTools, FaBuilding } from 'react-icons/fa';

const services = [
  {
    icon: <FaHardHat size={40} className="text-primary" />,
    title: 'Residential Construction',
    description: 'Building comfortable and modern homes tailored to your lifestyle.',
  },
  {
    icon: <FaBuilding size={40} className="text-primary" />,
    title: 'Commercial Construction',
    description: 'Creating functional and aesthetic commercial spaces for your business.',
  },
  {
    icon: <FaTools size={40} className="text-primary" />,
    title: 'Renovation & Remodeling',
    description: 'Transforming existing spaces with quality renovation services.',
  },
];

const ProductsServices = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition cursor-pointer group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;
