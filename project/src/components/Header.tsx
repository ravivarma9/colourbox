import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Hotel className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Seaside Haven</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link to="/rooms" className="text-gray-600 hover:text-blue-600">Rooms</Link></li>
              <li><Link to="/amenities" className="text-gray-600 hover:text-blue-600">Amenities</Link></li>
              <li><Link to="/gallery" className="text-gray-600 hover:text-blue-600">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;