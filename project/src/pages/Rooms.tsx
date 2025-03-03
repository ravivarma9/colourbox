import { useNavigate } from 'react-router-dom';
import { Wifi, Tv, Timer, UtensilsCrossed } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';

const rooms = [
  {
    title: 'Deluxe Room with Kitchen',
    images: [
      
      { url: 'assets/Deluxe_room_with_kitchen/Deluxe_Room_1.jpg', title: 'Deluxe Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Deluxe_Room_2.jpg', title: 'Deluxe Room' },      
      { url: 'assets/Deluxe_room_with_kitchen/Deluxe_Room_3.jpg', title: 'Deluxe Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Deluxe_Room_4.jpg', title: 'Deluxe Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Deluxe_Room_Bathroom.jpg', title: 'Deluxe Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Deluxe_Room_Kitchen.jpg', title: 'Deluxe Room' },

     
    ],
    description: 'Room with Kitchen, the room has a kitchen and is equipped with everything needed for basic cooking.'
  },
  {
    title: 'Standard Room',
    images: [
      
      { url: 'assets/Deluxe_room_with_kitchen/Standard_Room_1.jpg', title: 'Standard Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Standard_Room_2.jpg', title: 'Standard Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Standard_Room_3.jpg', title: 'Standard Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Standard_Room_4.jpg', title: 'Standard Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Standard_Room_Bathroom.jpg', title: 'Standard Room' },
      
    ],
    description: 'Room with Kitchen, the room has a kitchen and is equipped with everything needed for basic cooking.'
  },
  {
    title: 'Dorm (Sleeps-5)',
    images: [
      { url: 'assets/Deluxe_room_with_kitchen/Dorm_Room_1.jpg', title: 'Dorm Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Dorm_Room_2.jpg', title: 'Dorm Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Dorm_Room_3.jpg', title: 'Dorm Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Dorm_Room_4.jpg', title: 'Dorm Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Dorm_Room_5.jpg', title: 'Dorm Room' },
      
    ],
    description: 'Room with Kitchen, the room has a kitchen and is equipped with everything needed for basic cooking.'
  }
];

function Rooms() {
  const navigate = useNavigate();
  const openWhatsApp = () => {
    window.open('https://wa.me/919883222433', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center rounded-3xl overflow-hidden mt-5 mx-[20px]"
          style={{ 
            backgroundImage: 'url(assets/Deluxe_room_with_kitchen/Standard_Room_1.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center">A view from our Homestay</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 mt-8">

        {/* Room Sections */}
        {rooms.map((room, index) => (
          <div key={room.title} className="mb-16 md:mb-32">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">{room.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="h-[250px] md:h-[300px]">
                <ImageSlider images={room.images} />
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg mt-10">{room.description}</p>
                <div className="flex space-x-8">
                  <Wifi size={24} className="text-gray-600" />
                  <Tv size={24} className="text-gray-600" />
                  <Timer size={24} className="text-gray-600" />
                  <UtensilsCrossed size={24} className="text-gray-600" />
                </div>
                <button 
                  onClick={openWhatsApp}
                  className="w-[150px] bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms