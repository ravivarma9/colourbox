import React, { useState } from 'react';
import { ImageCarousel } from '../components/ImageCarousel';
import { RoomCard } from '../components/RoomCard';
import { BookingForm } from '../components/BookingForm';
import { rooms } from '../data/rooms';
import { BookingDetails } from '../types';

export const Rooms = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const carouselImages = rooms.map(room => ({ url: room.imageUrl, title: room.name }));

  const handleBookNow = (roomId: string) => {
    setSelectedRoomId(roomId);
  };

  const handleBookingSubmit = (booking: BookingDetails) => {
    // In a real application, this would send the booking to a backend server
    console.log('Booking submitted:', booking);
    setSelectedRoomId(null);
    alert('Booking submitted successfully!');
  };

  return (
    <div className="pt-20">
      <ImageCarousel images={carouselImages} className="mb-12" />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Luxury Rooms</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="relative">
              <RoomCard room={room} onBookNow={handleBookNow} />
              
              {selectedRoomId === room.id && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                  <div className="bg-white rounded-lg p-6 max-w-md w-full">
                    <h2 className="text-2xl font-semibold mb-4">Book {room.name}</h2>
                    <BookingForm
                      roomId={room.id}
                      onSubmit={handleBookingSubmit}
                      onCancel={() => setSelectedRoomId(null)}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Rooms?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Comfort</h3>
              <p className="text-gray-600">Luxurious bedding and premium amenities for ultimate comfort</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ocean Views</h3>
              <p className="text-gray-600">Breathtaking ocean views from every room</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Round-the-clock room service and concierge</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};