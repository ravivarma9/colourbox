import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Phone, Info, BedDouble, GraduationCap, Package, Landmark } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: Info, label: 'About' },
    { path: '/rooms', icon: BedDouble, label: 'Rooms' },
    { path: '/classes', icon: GraduationCap, label: 'Classes' },
    { path: '/package', icon: Package, label: 'Package' },
    { path: '/attraction', icon: Landmark, label: 'Attraction' },
    { path: '/contact', icon: Phone, label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-gray-800">COLOURBOX</h1>
            <span className="text-sm text-gray-600 ml-2">HOME STAY</span>
          </div>
          
          <div className="flex">
            {navItems.map(({ path, icon: Icon, label }) => (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`px-3 inline-flex items-center transition-colors ${
                  isActive(path)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Icon className="w-4 h-4 mr-1" />
                <span className="text-sm">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;