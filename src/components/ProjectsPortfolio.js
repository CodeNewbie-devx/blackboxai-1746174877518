import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Modern Residential Complex',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1560448070-1b7a7a7a7a7a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Corporate Office Building',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Industrial Warehouse',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Luxury Villa Renovation',
    category: 'Renovation',
    image: 'https://images.unsplash.com/photo-1501183638714-1c2a6b6c8a4b?auto=format&fit=crop&w=800&q=80',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Renovation'];

const ProjectsPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Projects & Portfolio</h2>
        <div className="flex justify-center mb-8 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary hover:bg-primary hover:text-white'
              } transition`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer rounded overflow-hidden shadow hover:shadow-lg transition"
              onClick={() => setLightboxImage(project.image)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg text-primary">{project.title}</h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setLightboxImage(null)}
          >
            <img src={lightboxImage} alt="Project" className="max-w-4xl max-h-full rounded" />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPortfolio;
