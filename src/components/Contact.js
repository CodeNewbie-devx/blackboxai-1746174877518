import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Contact Us</h2>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <form className="md:w-1/2 space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white font-semibold px-6 py-3 rounded hover:bg-accent transition"
            >
              Send Message
            </button>
          </form>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h3 className="text-xl font-semibold text-primary mb-4">Our Office</h3>
            <p className="text-gray-700 mb-2">123 Construction Ave, Building City, Country</p>
            <p className="text-gray-700 mb-2">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-700 mb-6">Email: info@constructioncompany.com</p>
            <div className="w-full h-64 rounded overflow-hidden shadow">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019927927927!2d-122.4194154846813!3d37.77492977975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b1a1a1b%3A0x4a1a1a1a1a1a1a1a!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
