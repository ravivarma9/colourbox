import React from 'react';
import { ImageCarousel } from '../components/ImageCarousel';
import { amenities } from '../data/amenities';

export const Amenities = () => {
  const carouselImages = amenities.map(a => ({ url: a.imageUrl, title: a.name }));

  return (
    <div className="pt-20">
      <ImageCarousel images={carouselImages} className="mb-12" />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Amenities</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={amenity.imageUrl} alt={amenity.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <amenity.icon className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">{amenity.name}</h3>
                </div>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};