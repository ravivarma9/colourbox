import React, { useState } from 'react';
import { ImageCarousel } from '../components/ImageCarousel';
import { galleryImages } from '../data/gallery';

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];
  
  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="pt-20">
      <ImageCarousel 
        images={galleryImages.map(img => ({ url: img.url, title: img.title }))}
        className="mb-12"
      />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Photo Gallery</h1>
        
        <div className="flex justify-center mb-8 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <span className="text-sm">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};