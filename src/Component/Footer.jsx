import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-yellow-400">ShopMate</h2>
          <p className="mt-2 text-gray-400">Your one-stop shop for everything you love!</p>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/shop" className="hover:text-white">Shop</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Contact Us</h3>
          <p className="text-gray-400">Email: support@shopmate.com</p>
          <p className="text-gray-400 mb-4">Phone: +1 (800) 123-4567</p>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" className="text-gray-400 hover:text-yellow-400" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-yellow-400" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-yellow-400" aria-label="Instagram"><FaInstagram /></a>
            <a href="mailto:support@shopmate.com" className="text-gray-400 hover:text-yellow-400" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ShopMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
