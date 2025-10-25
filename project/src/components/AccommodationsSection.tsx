import React from 'react';
import { useNavigate } from 'react-router-dom';

import deluxeRoom from "/assets/Deluxe_room_with_kitchen/Deluxe_Room_1.jpg";
import standardRoom from "/assets/Deluxe_room_with_kitchen/Standard_Room_1.jpg";
import dormRoom from "/assets/Deluxe_room_with_kitchen/Dorm_Room_3.jpg";

const AccommodationsSection = () => {
  const navigate = useNavigate();

  const accommodations = [
    {
      id: 'deluxe',
      title: 'Deluxe Room',
      description:
        'We offers the perfect combination of luxury and tranquility, ensuring a comfortable stay in the spiritual and scenic town of Rishikesh.',
      image: deluxeRoom,
      features: ['King bed', 'Private bathroom', 'Private Kitchen'],
      price: 'From ₹1300/night',
    },
    {
      id: 'standard',
      title: 'Standard Room',
      description:
        'Comfortable and well-appointed rooms for budget-conscious travelers looking for a peaceful stay in Rishikesh.',
      image: standardRoom,
      features: ['Queen bed', 'Room service'],
      price: 'From ₹1000/night',
    },
    {
      id: 'dorm',
      title: 'Dorm (Sleeps-5)',
      description:
        'Perfect for solo travelers or backpackers looking to connect with others in a shared space.',
      image: dormRoom,
      features: ['Bunk beds', 'Shared bathroom'],
      price: 'From ₹500/night',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Our Rooms</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-3 right-3 bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                  {room.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {room.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{room.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* View Details Button with Hash Link */}
                <div className="text-center">
                  <button
                    onClick={() => navigate(`/rooms#${room.id}`)}
                    className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 text-sm font-medium rounded-md transition duration-200"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;
