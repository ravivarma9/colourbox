import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ImageSlider from '../components/ImageSlider';

// Room Images
import deluxeRoom1 from "/assets/Deluxe_room_with_kitchen/Deluxe_Room_1.jpg";
import deluxeRoom2 from "/assets/Deluxe_room_with_kitchen/Deluxe_Room_2.jpg";
import deluxeRoom3 from "/assets/Deluxe_room_with_kitchen/Deluxe_Room_3.jpg";
import deluxeRoom4 from "/assets/Deluxe_room_with_kitchen/Deluxe_Room_4.jpg";
import deluxeBathroom from "/assets/Deluxe_room_with_kitchen/Deluxe_Room_Bathroom.jpg";
import deluxeKitchen from "/assets/Deluxe_room_with_kitchen/Deluxe_Room_Kitchen.jpg";

import standardRoom1 from "/assets/Deluxe_room_with_kitchen/Standard_Room_1.jpg";
import standardRoom2 from "/assets/Deluxe_room_with_kitchen/Standard_Room_2.jpg";
import standardRoom3 from "/assets/Deluxe_room_with_kitchen/Standard_Room_3.jpg";
import standardRoom4 from "/assets/Deluxe_room_with_kitchen/Standard_Room_4.jpg";
import standardBathroom from "/assets/Deluxe_room_with_kitchen/Standard_Room_Bathroom.jpg";

import dormRoom1 from "/assets/Deluxe_room_with_kitchen/Dorm_Room_1.jpg";
import dormRoom2 from "/assets/Deluxe_room_with_kitchen/Dorm_Room_2.jpg";
import dormRoom3 from "/assets/Deluxe_room_with_kitchen/Dorm_Room_3.jpg";
import dormRoom4 from "/assets/Deluxe_room_with_kitchen/Dorm_Room_4.jpg";
import dormRoom5 from "/assets/Deluxe_room_with_kitchen/Dorm_Room_5.jpg";

const rooms = [
  {
    title: 'Deluxe Room',
    mainDescription: 'Our Deluxe Room offers the perfect combination of luxury and tranquility...',
    images: [deluxeRoom1, deluxeRoom2, deluxeRoom3, deluxeRoom4, deluxeBathroom, deluxeKitchen].map(url => ({ url, title: 'Deluxe Room' })),
    description: {
      points: ['Enjoy restful sleep...', 'Breathe in the fresh air...', 'Stay comfortable...', 'Stay connected...', 'Featuring modern fittings...', 'Equipped with kitchen...', 'Attentive staff...', 'Start your mornings...'],
      extraDescription: ['Perfect for relaxation after a day of adventure...']
    }
  },
  {
    title: 'Standard Room',
    mainDescription: 'Enjoy a comfortable and peaceful stay in our Standard Room...',
    images: [standardRoom1, standardRoom2, standardRoom3, standardRoom4, standardBathroom].map(url => ({ url, title: 'Standard Room' })),
    description: {
      points: ['Comfortable Double Bed...', 'Private Bathroom...', 'Free WiFi...', 'Ceiling Fan...', 'Serene Ambiance...'],
      extraDescription: ['Just minutes from the Ganges...', 'Book your stay now...']
    }
  },
  {
    title: 'Dorm (Sleeps-5)',
    mainDescription: 'Girls Dorm – Safe, Comfortable & Budget-Friendly...',
    images: [dormRoom1, dormRoom2, dormRoom3, dormRoom4, dormRoom5].map(url => ({ url, title: 'Dorm Room' })),
    description: {
      points: ['Cozy Bunk Beds...', 'Private Lockers...', 'Shared Clean Bathrooms...', 'Free WiFi...', 'Peaceful & Secure...'],
      extraDescription: ['Located just minutes from the Ganges...', 'Book your stay now...']
    }
  }
];

function Rooms() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Delay ensures DOM is ready
    }
  }, [location]);

  const openWhatsApp = () => {
    window.open('https://wa.me/918791231999', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-cover bg-center rounded-3xl overflow-hidden mt-5 mx-[20px]">
          <img 
            src={standardRoom1} 
            alt="Room view" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center">A view from our Homestay</h1>
          </div>
        </div>
      </div>

      {/* Room Details */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 mt-4">
        {rooms.map((room, index) => {
          const id = room.title.toLowerCase().split(' ')[0]; // deluxe, standard, dorm
          return (
            <div key={room.title} id={id} className="mb-16 md:mb-32 scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">{room.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <div className="h-[250px] md:h-[400px]">
                  <ImageSlider images={room.images} />
                </div>
                <div className="space-y-6">
                  <p className="text-gray-700">{room.mainDescription}</p>
                  <ul className="list-disc list-inside text-gray-700">
                    {room.description.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="text-gray-700 space-y-2">
                    {room.description.extraDescription.map((note, i) => (
                      <p key={i}>{note}</p>
                    ))}
                  </div>
                  <div className="flex mt-8">
                    <button
                      onClick={openWhatsApp}
                      className="w-[150px] bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Rooms;
