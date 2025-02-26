import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: { url: string; title: string }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleDots = 5; // Fixed number of dots

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Calculate the start index of the dots
  let startIndex = Math.max(0, currentIndex - Math.floor(visibleDots / 2));
  if (startIndex + visibleDots > images.length) {
    startIndex = Math.max(0, images.length - visibleDots);
  }

  return (
    <div className="relative w-full h-full group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
      />
      
      {/* Left Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors"
        onClick={goToPrevious}
      >
        <ChevronLeft size={24} />
      </div>

      {/* Right Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors"
        onClick={goToNext}
      >
        <ChevronRight size={24} />
      </div>

      {/* Dots */}
      <div className="flex justify-center py-2">
        {images.slice(startIndex, startIndex + visibleDots).map((_, index) => {
          const actualIndex = startIndex + index;
          return (
            <div
              key={actualIndex}
              onClick={() => goToSlide(actualIndex)}
              className={`text-2xl cursor-pointer mx-1 ${
                currentIndex === actualIndex ? "text-orange-500" : "text-gray-400"
              }`}
            >
              •
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default ImageSlider;