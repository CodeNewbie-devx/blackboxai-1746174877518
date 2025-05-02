import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    feedback: 'The team delivered our project on time and exceeded our expectations. Highly recommended!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    feedback: 'Professional and reliable construction services. Great communication throughout the process.',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    feedback: 'Quality workmanship and attention to detail. We are very satisfied with the results.',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-primary mb-12">Testimonials</h2>
        <div className="relative">
          <div className="p-8 border rounded-lg shadow">
            <img
              src={testimonials[current].photo}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-700 italic mb-4">"{testimonials[current].feedback}"</p>
            <h3 className="text-xl font-semibold text-primary">{testimonials[current].name}</h3>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 hover:bg-accent transition"
            aria-label="Previous testimonial"
          >
            &#8592;
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 hover:bg-accent transition"
            aria-label="Next testimonial"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
