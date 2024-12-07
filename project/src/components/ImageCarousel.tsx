import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageCarouselProps {
  images: { url: string; title: string }[];
  className?: string;
}

export const ImageCarousel = ({ images, className = '' }: ImageCarouselProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className={className}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-[500px]">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-semibold">{image.title}</h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};