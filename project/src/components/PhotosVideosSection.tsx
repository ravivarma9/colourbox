import React, { useState, useEffect } from 'react';

import pic1 from '/assets/Photos/B1.jpg';
import pic2 from '/assets/Photos/B2.jpg';
import pic3 from '/assets/Photos/B3.jpg';
import pic4 from '/assets/Photos/B4.jpg';
import pic5 from '/assets/Photos/B5.jpg';
import pic6 from '/assets/Photos/B6.jpg';
import pic7 from '/assets/Photos/B7.jpg';
import pic8 from '/assets/Photos/B8.jpg';
import pic9 from '/assets/Photos/B9.jpg';
import pic10 from '/assets/Photos/B10.jpg';
import pic11 from '/assets/Photos/B11.jpg';
import pic12 from '/assets/Photos/B12.jpg';
import pic13 from '/assets/Photos/B13.jpg';
import pic14 from '/assets/Photos/B14.jpg';
import pic15 from '/assets/Photos/B15.jpg';
import pic16 from '/assets/Photos/B16.jpg';
// import pic17 from '/assets/Photos/B17.jpg';
import pic18 from '/assets/Photos/B18.jpg';
import pic19 from '/assets/Photos/B19.jpg';
import pic20 from '/assets/Photos/B20.jpg';
import pic21 from '/assets/Photos/B21.jpg';
import pic22 from '/assets/Photos/B22.jpg';
import pic23 from '/assets/Photos/B23.jpg';
import pic24 from '/assets/Photos/B24.jpg';
import pic25 from '/assets/Photos/B25.jpg';
import pic26 from '/assets/Photos/B26.jpg';
import pic27 from '/assets/Photos/B27.jpg';
import pic28 from '/assets/Photos/B28.jpg';
import pic29 from '/assets/Photos/B29.jpg';
import pic30 from '/assets/Photos/B30.jpg';
import pic31 from '/assets/Photos/B31.jpg';
import pic32 from '/assets/Photos/B32.jpg';
import pic33 from '/assets/Photos/B33.jpg';
import pic34 from '/assets/Photos/B34.jpg';
import pic35 from '/assets/Photos/B35.jpg';
import pic36 from '/assets/Photos/B36.jpg';
import pic37 from '/assets/Photos/B37.jpg';
import pic38 from '/assets/Photos/B38.jpg';
import pic39 from '/assets/Photos/B39.jpg';
import pic40 from '/assets/Photos/B40.jpg';
import pic41 from '/assets/Photos/B41.jpg';
import pic42 from '/assets/Photos/B42.jpg';
import pic43 from '/assets/Photos/B43.jpg';
import pic44 from '/assets/Photos/B44.jpg';
import pic45 from '/assets/Photos/B45.jpg';
import pic46 from '/assets/Photos/B46.jpg';
import pic47 from '/assets/Photos/B47.jpg';
import pic48 from '/assets/Photos/B48.jpg';
import pic49 from '/assets/Photos/B49.jpg';
import pic50 from '/assets/Photos/B50.jpg';
import cpic1 from '/assets/Photos/CB1.jpg';
import cpic2 from '/assets/Photos/CB2.jpg';
import cpic3 from '/assets/Photos/CB3.jpg';
import cpic4 from '/assets/Photos/CB4.jpg';
import cpic5 from '/assets/Photos/CB5.jpg';
import cpic6 from '/assets/Photos/CB6.jpg';
import cpic7 from '/assets/Photos/CB7.jpg';
import cpic8 from '/assets/Photos/CB8.jpg';
import cpic9 from '/assets/Photos/CB9.jpg';
import cpic10 from '/assets/Photos/CB10.jpg';
import cpic11 from '/assets/Photos/CB11.jpg';
import cpic12 from '/assets/Photos/CB12.jpg';
import cpic13 from '/assets/Photos/CB13.jpg';
import cpic14 from '/assets/Photos/CB14.jpg';
import cpic15 from '/assets/Photos/CB15.jpg';
import cpic16 from '/assets/Photos/CB16.jpg';
import cpic17 from '/assets/Photos/CB17.jpg';
import cpic18 from '/assets/Photos/CB18.jpeg';
import cpic19 from '/assets/Photos/CB19.jpeg';
import cpic20 from '/assets/Photos/CB20.jpeg';
import cpic21 from '/assets/Photos/CB21.jpeg';
import cpic22 from '/assets/Photos/CB22.jpeg';
import cpic23 from '/assets/Photos/CB23.jpeg';
import cpic24 from '/assets/Photos/CB24.jpeg';
import cpic25 from '/assets/Photos/CB25.jpeg';
import cpic26 from '/assets/Photos/CB26.jpeg';
import cpic27 from '/assets/Photos/CB27.jpeg';
import cpic28 from '/assets/Photos/CB28.jpeg';
import cpic29 from '/assets/Photos/CB29.jpeg';
import cpic30 from '/assets/Photos/CB30.jpeg';
import cpic31 from '/assets/Photos/CB31.jpeg';
import cpic32 from '/assets/Photos/CB32.jpeg';
import cpic33 from '/assets/Photos/CB33.jpeg';
import cpic34 from '/assets/Photos/CB34.jpg';
import cpic35 from '/assets/Photos/CB35.jpg';
import cpic36 from '/assets/Photos/CB36.jpg';
import cpic37 from '/assets/Photos/CB37.jpg';
import cpic38 from '/assets/Photos/CB38.jpg';
import cpic39 from '/assets/Photos/CB39.jpg';
import cpic40 from '/assets/Photos/CB40.jpg';
import cpic41 from '/assets/Photos/CB41.jpg';
import cpic42 from '/assets/Photos/CB42.jpg';
// import cpic44 from '/assets/Photos/CB44.jpg';
import cpic45 from '/assets/Photos/CB45.jpg';
import cpic46 from '/assets/Photos/CB46.jpg';
import cpic47 from '/assets/Photos/CB47.jpg';
import cpic48 from '/assets/Photos/CB48.jpg';
import cpic49 from '/assets/Photos/CB49.jpg';
import cpic50 from '/assets/Photos/CB50.jpg';
import cpic51 from '/assets/Photos/CB51.jpg';
import cpic53 from '/assets/Photos/CB53.jpg';
import cpic54 from '/assets/Photos/CB54.jpg';
import cpic55 from '/assets/Photos/CB55.jpg';
import cpic56 from '/assets/Photos/CB56.jpg';
import cpic57 from '/assets/Photos/CB57.jpg';
// import cpic58 from '/assets/Photos/CB58.jpg';
// import cpic59 from '/assets/Photos/CB59.jpg';
import cpic60 from '/assets/Photos/CB60.jpg';
import cpic61 from '/assets/Photos/CB61.jpg';
import cpic62 from '/assets/Photos/CB62.jpg';
import cpic63 from '/assets/Photos/CB63.jpg';
import cpic64 from '/assets/Photos/CB64.jpg';
import cpic65 from '/assets/Photos/CB65.jpg';
import cpic66 from '/assets/Photos/CB66.jpg';
import cpic67 from '/assets/Photos/CB67.jpg';
import cpic68 from '/assets/Photos/CB68.jpg';
import cpic69 from '/assets/Photos/CB69.jpg';
import cpic70 from '/assets/Photos/CB70.jpg';


const PhotosVideosSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const galleryImages = [pic1,
    cpic2,
cpic3,
cpic4,
cpic5,
cpic6,
cpic7,
cpic8,
cpic9,
cpic10,
cpic11,
cpic12,
cpic13,
cpic14,
cpic15,
cpic16,
cpic17,
cpic18,
cpic19,
cpic20,
cpic21,
cpic22,
cpic23,
    pic10,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9 ,
    pic10,
    pic11,
    pic12,
    pic13,
    pic14,
    pic15,
    pic16,
    // pic17,
    pic18,
    pic19,
    pic20,
    pic21,
    pic22,
    pic23,
    pic24,
    pic25,
    pic26,
    pic27,
    pic28,
    pic29,
    pic30,
    pic31,
    pic32,
    pic33,
    pic34,
    pic35,
    pic36,
    pic37,
    pic38,
    pic39,
    pic40,
    pic41,
    pic42,
    pic43,
    pic44,
    pic45,
    pic46,
    pic47,
    pic48,
    pic49,
    pic50,
    cpic1,

cpic24,
cpic25,
cpic26,
cpic27,
cpic28,
cpic29,
cpic30,
cpic31,
cpic32,
cpic33,
cpic34,
cpic35,
cpic36,
cpic37,
cpic38,
cpic39,
cpic40,
cpic41,
cpic42,
// cpic44,
cpic45,
cpic46,
cpic47,
cpic48,
cpic49,
cpic50,
cpic51,
cpic53,
cpic54,
cpic55,
cpic56,
cpic57,
// cpic58,
// cpic59,
cpic60,
cpic61,
cpic62,
cpic63,
cpic64,
cpic65,
cpic66,
cpic67,
cpic68,
cpic69,
cpic70,
    
  ];

  const duplicatedImages = [...galleryImages, ...galleryImages];

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showPopup]);

  return (
    <section className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold text-gray-00 mb-4">Photos & Videos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the essence of ColourBox through our curated gallery. From scenic 
            views to soulful moments, our photos and videos offer a glimpse into the 
            vibrant, peaceful spirit of your stay.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-4">
            {duplicatedImages.map((image, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-64 h-40 bg-cover bg-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="w-full h-full bg-black/0 hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-2">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
            onClick={() => setShowPopup(true)}
          >
            View More Photos
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
          <div className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg p-6 grid grid-cols- sm:grid-cols-2 md:grid-cols-3 gap-4">
            <button
              onClick={() => setShowPopup(false)}
              className="fixed top-5 right-5 text-black bg-white border border-gray-300 rounded-full w-2 h-2 flex items-center justify-center text-3xl font-bold hover:bg-gray-200 z-50 shadow"
            >
              &times;
            </button>
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.replace('300&h=200', '600&h=400')}
                alt={`Gallery ${index}`}
                className="w-full h-auto rounded-lg shadow"
              />
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          00% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PhotosVideosSection;
