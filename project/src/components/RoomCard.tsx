import React from 'react';
import { Room } from '../types';

interface RoomCardProps {
  room: Room;
  onBookNow: (roomId: string) => void;
}

export const RoomCard = ({ room, onBookNow }: RoomCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={room.imageUrl} 
        alt={room.name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
        <p className="text-gray-600 mb-4">{room.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Amenities:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {room.amenities.map((amenity) => (
              <li key={amenity}>{amenity}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${room.price}/night</span>
          <button
            onClick={() => onBookNow(room.id)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};