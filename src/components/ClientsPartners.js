import React from 'react';

const clients = [
  { id: 1, name: 'Client A', logo: 'https://via.placeholder.com/150x80?text=Client+A' },
  { id: 2, name: 'Client B', logo: 'https://via.placeholder.com/150x80?text=Client+B' },
  { id: 3, name: 'Client C', logo: 'https://via.placeholder.com/150x80?text=Client+C' },
  { id: 4, name: 'Client D', logo: 'https://via.placeholder.com/150x80?text=Client+D' },
  { id: 5, name: 'Client E', logo: 'https://via.placeholder.com/150x80?text=Client+E' },
];

const ClientsPartners = () => {
  return (
    <section id="clients" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Clients & Partners</h2>
        <div className="flex space-x-8 overflow-x-auto scrollbar-hide py-4">
          {clients.map((client) => (
            <div key={client.id} className="flex-shrink-0">
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 object-contain grayscale hover:grayscale-0 transition cursor-pointer"
                title={client.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsPartners;
