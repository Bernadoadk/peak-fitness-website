import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PEAK FITNESS</h3>
            <p className="text-gray-400">
              Transform your life through fitness. Join our community and achieve your goals.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/schedule" className="text-gray-400 hover:text-red-500">Class Schedule</a></li>
              <li><a href="/ebook" className="text-gray-400 hover:text-red-500">Training E-Book</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-red-500">About Us</a></li>
              <li><a href="/location" className="text-gray-400 hover:text-red-500">Find Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Phone size={18} />
                (555) 123-4567
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                info@peakfitness.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                123 Fitness Street, Gym City
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500"><Facebook /></a>
              <a href="#" className="hover:text-red-500"><Instagram /></a>
              <a href="#" className="hover:text-red-500"><Twitter /></a>
              <a href="#" className="hover:text-red-500"><Youtube /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Peak Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;