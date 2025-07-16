import React, { useState, useEffect } from 'react';
import cafeMenu from '/assets/cafeMenu.pdf';
import BlueArtCafe from "/assets/Deluxe_room_with_kitchen/BlueArtCafe.jpg";
import BlueArtCafeFood from "/assets/Deluxe_room_with_kitchen/BlueArtCafe2.jpeg";


const BlueArtCafeSection = () => {
  const [showPDF, setShowPDF] = useState(false);

  useEffect(() => {
    if (showPDF) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showPDF]);

  return (
    <section
      className="py-16 relative overflow-hidden bg-gray-100"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${BlueArtCafe})`,
          opacity: 0.3
        }}
      ></div>

      {/* Grey overlay (optional darker tone on top of image) */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Blue Art Cafe</h2>
            <p className="text-gray-1000 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Our in-house cafe offers a delightful menu of healthy, locally sourced cuisine
              with a focus on nourishing body and soul. Enjoy freshly brewed coffee, organic
              teas, and delicious meals while overlooking the serene landscapes.
            </p>
          </div>

          {/* Menu Card */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="h-[500px] bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${BlueArtCafeFood})`,
                }}
              >
                <div className="absolute inset-0 bg-black/20 rounded-t-xl"></div>
                <div className="absolute bottom-4 right-4 z-10">
                  <button
                    className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setShowPDF(true)}
                  >
                    View Menu
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Menu</h3>
                <p className="text-gray-600 text-sm">
                  Discover our carefully curated selection of healthy and delicious options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      {showPDF && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
          <div className="relative bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={() => setShowPDF(false)}
              className="fixed top-5 right-5 text-black bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold hover:bg-gray-200 z-50 shadow"
            >
              &times;
            </button>
            <iframe
              src={cafeMenu}
              title="Cafe Menu"
              className="w-full h-full"
              style={{ border: 'none' }}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlueArtCafeSection;
