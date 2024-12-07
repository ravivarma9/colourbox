import React, { useState } from 'react';
import { BookingDetails } from '../types';

interface BookingFormProps {
  roomId: string;
  onSubmit: (booking: BookingDetails) => void;
  onCancel: () => void;
}

export const BookingForm = ({ roomId, onSubmit, onCancel }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    guestName: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      roomId,
      checkIn: new Date(formData.checkIn),
      checkOut: new Date(formData.checkOut)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.guestName}
          onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Check-in</label>
          <input
            type="date"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.checkIn}
            onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Check-out</label>
          <input
            type="date"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.checkOut}
            onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Number of Guests</label>
        <input
          type="number"
          min="1"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.guests}
          onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Book Now
        </button>
      </div>
    </form>
  );
};