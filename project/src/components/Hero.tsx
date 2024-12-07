import React from 'react';

export const Hero = () => {
  return (
    <div className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1571896349842-33c89424de2d)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Seaside Haven</h1>
          <p className="text-xl mb-8">Experience luxury and comfort with breathtaking ocean views</p>
          <a 
            href="#booking" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </div>
  );
};