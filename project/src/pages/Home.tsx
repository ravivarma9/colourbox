import React from 'react';
import DoorCard from '../components/DoorCard';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const doors = [
  {
    title: 'About us',
    bgColor: 'bg-yellow-400',
    path: '/about',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'Rooms',
    bgColor: 'bg-orange-400',
    path: '/rooms',
    imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'Classes',
    bgColor: 'bg-red-500',
    path: '/classes',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'Package',
    bgColor: 'bg-purple-500',
    path: '/package',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'Attraction',
    bgColor: 'bg-blue-600',
    path: '/attraction',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'Contact',
    bgColor: 'bg-green-500',
    path: '/contact',
    imageUrl: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=500'
  }
];

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight">
            COLOURBOX
            <span className="block text-xl text-gray-600">HOME STAY</span>
          </h1>
        </div>

        {/* Door Frame Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Door Frame */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-200 rounded-[40px] transform -skew-x-1 shadow-2xl" />
          
          {/* Door Content */}
          <div className="relative bg-white rounded-[32px] p-8 shadow-inner">
            {/* Door Handle */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex items-center">
              <div className="w-2 h-24 bg-gray-400 rounded-l-lg shadow-lg" />
              <div className="w-4 h-32 bg-gradient-to-r from-gray-400 to-gray-300 rounded-r-lg shadow-lg" />
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-2 gap-6">
              {doors.map((door) => (
                <DoorCard
                  key={door.title}
                  title={door.title}
                  bgColor={door.bgColor}
                  path={door.path}
                  imageUrl={door.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Connect with us:</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-red-600 hover:text-red-700 transition-colors">
              <Youtube size={24} />
            </a>
          </div>
          <div className="mt-6">
            <p className="text-gray-600">Call us:</p>
            <a href="tel:09883222433" className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors">
              09883 22433
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;