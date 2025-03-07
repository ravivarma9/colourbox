import { useNavigate } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';

const rooms = [
  {
    title: 'Standard Room',
    mainDescription: 'Enjoy a comfortable and peaceful stay in our Standard Room, ideal for solo travelers and couples. Located in the heart of Rishikesh, this room offers:',
    images: [

      { url: 'assets/Deluxe_room_with_kitchen/Deluxe_Room_1.jpg', title: 'Deluxe Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Deluxe_Room_2.jpg', title: 'Deluxe Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Deluxe_Room_3.jpg', title: 'Deluxe Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Deluxe_Room_4.jpg', title: 'Deluxe Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Deluxe_Room_Bathroom.jpg', title: 'Deluxe Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Deluxe_Room_Kitchen.jpg', title: 'Deluxe Room' },


    ],
    description: {
      points: ['Comfortable Double Bed for restful sleep', 
                'Private Bathroom with 24/7 hot water',
                'Free WiFi for seamless connectivity',
                'Ceiling Fan & Ample Storage for convenience',
                'Serene Ambiance perfect for relaxation'
      ],
      extraDescription: ['Just minutes from the Ganges, yoga centers, and adventure activities, this room is a perfect blend of comfort and affordability.', 
        'Book your stay now and experience Rishikesh like never before!'
      ]
    }
  },
  {
    title: 'Exclusive Room',
    mainDescription: 'Enjoy a comfortable and peaceful stay in our Standard Room, ideal for solo travelers and couples. Located in the heart of Rishikesh, this room offers:',
    images: [

      { url: 'assets/Deluxe_room_with_kitchen/Standard_Room_1.jpg', title: 'Standard Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Standard_Room_2.jpg', title: 'Standard Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Standard_Room_3.jpg', title: 'Standard Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Standard_Room_4.jpg', title: 'Standard Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Standard_Room_Bathroom.jpg', title: 'Standard Room' },

    ],
    description: {
      points: ['Comfortable Double Bed for restful sleep', 
                'Private Bathroom with 24/7 hot water',
                'Free WiFi for seamless connectivity',
                'Ceiling Fan & Ample Storage for convenience',
                'Serene Ambiance perfect for relaxation'
      ],
      extraDescription: ['Just minutes from the Ganges, yoga centers, and adventure activities, this room is a perfect blend of comfort and affordability.', 
        'Book your stay now and experience Rishikesh like never before!'
      ]
    }
  },
    {
    title: 'Dorm (Sleeps-5)',
    mainDescription: 'Girls Dorm – Safe, Comfortable & Budget-Friendly Designed exclusively for female travelers, our Girls Dormitory offers a safe, clean, and social stay in the heart of Rishikesh.',
    images: [
      { url: 'assets/Deluxe_room_with_kitchen/Dorm_Room_1.jpg', title: 'Dorm Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Dorm_Room_2.jpg', title: 'Dorm Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Dorm_Room_3.jpg', title: 'Dorm Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Dorm_Room_4.jpg', title: 'Dorm Room' },
      { url: 'assets/Deluxe_room_with_kitchen/Dorm_Room_5.jpg', title: 'Dorm Room' },

    ],
    description: {
      points: ['Cozy Bunk Beds with fresh linens', 
        'Private Lockers for secure storage',
        'Shared Clean Bathrooms with 24/7 hot water',
        'Free WiFi for seamless connectivity',
        'Peaceful & Secure Environment'
      ],
      extraDescription: ['Located just minutes from the Ganges, yoga retreats, and adventure spots, this dorm is perfect for solo female travelers seeking comfort and community at an affordable price.', 
        'Book your stay now for a worry-free experience in Rishikesh!'
      ]
    }
  }
];

function Rooms() {
  const navigate = useNavigate();
  const openWhatsApp = () => {
    window.open('https://wa.me/918791231999', '_blank');
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

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 mt-4">

        {/* Room Sections */}
        {rooms.map((room, index) => (
          <div key={room.title} className="mb-16 md:mb-32">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">{room.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="h-[250px] md:h-[400px]">
                <ImageSlider images={room.images} />
              </div>
              <div className="space-y-6">
                <p className="list-disc list-inside text-gray-700">{room.mainDescription}</p>
                <ul className="list-disc list-inside text-gray-700">
                  {room.description.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <p className="list-disc list-inside text-gray-700">
                  {room.description.extraDescription.map((note, i) => (
                    <p key={i}>{note}</p>
                  ))}
                </p>
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
        ))}
      </div>
    </div>
  );
}

export default Rooms