import React from 'react';
import { Hero } from '../components/Hero';
import { RoomCard } from '../components/RoomCard';
import { rooms } from '../data/rooms';
import { amenities } from '../data/amenities';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.slice(0, 3).map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/rooms" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
              View All Rooms
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.slice(0, 3).map((amenity) => (
              <div key={amenity.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={amenity.imageUrl} alt={amenity.name} className="w-full h-48 object-cover" />
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
          <div className="text-center mt-8">
            <Link to="/amenities" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
              Explore All Amenities
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};