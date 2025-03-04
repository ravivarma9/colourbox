import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About us' },
    { path: '/rooms', label: 'Rooms' },
    { path: '/classes', label: 'Classes' },
    { path: '/package', label: 'Package' },
    { path: '/attraction', label: 'Attraction' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-100 fixed w-full top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <a href="/" className="w-30 h-15">
              <img
                src="assets/Deluxe_room_with_kitchen/logo.png"
                alt="Logo"
                className="w-55 h-12 object-cover"
              />
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, label }) => (
              <button
                key={path}
                onClick={() => handleNavigation(path)}
                className={`relative px-2 py-1 text-sm transition-colors ${isActive(path)
                  ? 'text-orange-600'
                  : 'text-gray-600 hover:text-orange-600'
                  }`}
              >
                {label}
                {isActive(path) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map(({ path, label }) => (
                <button
                  key={path}
                  onClick={() => handleNavigation(path)}
                  className={`px-2 py-2 text-sm transition-colors ${isActive(path)
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;