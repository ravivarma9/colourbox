import React from 'react';

const Hero = () => {
  return (
    <div
      className="relative min-h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/20 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 flex items-center h-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Experience Serenity in <br /> Rishikesh
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-xl drop-shadow">
            Embrace serenity and thrill at our hostel in India's spiritual core.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105">
              Book Your Stay
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-200">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;