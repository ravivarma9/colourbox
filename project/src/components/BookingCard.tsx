import React from 'react';

interface BookingCardProps {
  title: string;
  description: string;
  price?: string;
  onBook: () => void;
}

const BookingCard: React.FC<BookingCardProps> = ({
  title,
  description,
  price,
  onBook
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {price && (
        <p className="text-2xl font-bold text-orange-600 mb-4">{price}</p>
      )}
      <button
        onClick={onBook}
        className="w-full bg-orange-500 text-white py-2 px-4 rounded-xl hover:bg-orange-600 transition-colors"
      >
        Book Now
      </button>
    </div>
  );
};

export default BookingCard;