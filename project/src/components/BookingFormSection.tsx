import React, { useState } from 'react';
import { Calendar, ChevronDown, Minus, Plus } from 'lucide-react';

const BookingFormSection = () => {
  const [guests, setGuests] = useState(2);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomType, setRoomType] = useState('Select Room Type');
  const today = new Date().toISOString().split('T')[0];
  const handleCheckAvailability = () => {
    const message = `Hello, I want to book a ${roomType} from ${checkInDate} to ${checkOutDate} for ${guests} guest(s).`;
    const phoneNumber = '918791231999'; // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative -mt-32 z-20 flex justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 w-full max-w-4xl border border-orange-100">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          Find Your Perfect Stay
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Check-in Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Check-in Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                min={today}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="dd-mm-yyyy"
              />
            </div>
          </div>

          {/* Check-out Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Check-out Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                min={today}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="dd-mm-yyyy"
              />
            </div>
          </div>

          {/* Room Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Room Type
            </label>
            <div className="relative">
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
              >
                <option>Select Room Type</option>
                <option>Standard Room</option>
                <option>Deluxe Room</option>
                <option>Suite</option>
                <option>Dormitory</option>
              </select>
              <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Guests
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                type="button"
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="p-3 hover:bg-gray-50 rounded-l-lg"
              >
                <Minus className="h-4 w-4 text-gray-600" />
              </button>
              <span className="flex-1 text-center py-3 font-medium">{guests}</span>
              <button
                type="button"
                onClick={() => setGuests(guests + 1)}
                className="p-3 hover:bg-gray-50 rounded-r-lg"
              >
                <Plus className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <button
                onClick={handleCheckAvailability}
                className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
              >
                Check Availability
              </button>
      </div>
    </div>
  );
};

export default BookingFormSection;