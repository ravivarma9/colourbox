import React from 'react';

interface BookingCardProps {
  title: string;
  description: string;
  price?: string;
  onBook: () => void;
  image?: string;
}

const BookingCard: React.FC<BookingCardProps> = ({
  title,
  description,
  price,
  onBook,
  image
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
        {price && (
          <p className="text-2xl font-bold text-orange-600 mb-4">{price}</p>
        )}
        <button
          onClick={onBook}
          className="w-full bg-orange-500 text-white py-3 px-4 rounded-xl hover:bg-orange-600 transition-colors font-semibold"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingCard;