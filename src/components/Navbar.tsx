import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-red-500" />
            <span className="font-bold text-xl">PEAK FITNESS</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/calendar', label: 'Calendar' },
              { path: '/schedule', label: 'Schedule' },
              { path: '/ebook', label: 'E-Book' },
              { path: '/location', label: 'Location' },
              { path: '/about', label: 'About' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`hover:text-red-500 transition-colors ${
                  isActive(path) ? 'text-red-500' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          
          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;