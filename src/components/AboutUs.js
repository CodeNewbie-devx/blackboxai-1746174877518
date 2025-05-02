import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">About Us</h2>
        <div className="flex flex-col md:flex-row md:space-x-12 items-center">
          <div className="md:w-1/2 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Founded in 2005, our construction company has been delivering high-quality projects across residential, commercial, and industrial sectors. Our mission is to build sustainable and innovative structures that stand the test of time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to be the leading construction company known for reliability, professionalism, and excellence in every project we undertake.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="mx-auto mb-2 w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white text-2xl font-bold animate-fade-in-up">
                  🏗️
                </div>
                <p className="text-gray-800 font-semibold">Innovation</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white text-2xl font-bold animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  🤝
                </div>
                <p className="text-gray-800 font-semibold">Integrity</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white text-2xl font-bold animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  🛠️
                </div>
                <p className="text-gray-800 font-semibold">Quality</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Construction site"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
