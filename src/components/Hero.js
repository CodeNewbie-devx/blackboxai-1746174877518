import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative bg-primary text-white h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Building Your Future with Excellence
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Reliable and professional construction solutions tailored to your needs.
        </p>
        <a
          href="#contact"
          className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded shadow hover:bg-yellow-400 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Hero;
