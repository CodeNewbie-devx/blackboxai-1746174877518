import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Construction Company. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" aria-label="Facebook" className="hover:text-accent transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-accent transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-accent transition">
            <FaLinkedinIn size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-accent transition">
            <FaInstagram size={20} />
          </a>
        </div>
        <div>
          <nav className="space-x-4">
            <a href="#about" className="hover:text-accent transition">About</a>
            <a href="#services" className="hover:text-accent transition">Services</a>
            <a href="#projects" className="hover:text-accent transition">Projects</a>
            <a href="#contact" className="hover:text-accent transition">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
