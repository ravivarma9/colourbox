import DoorCard from '../components/DoorCard';
import img1 from "/assets/The-Most-Mysterious-Divine-Temples-in-Rishikesh.jpg";
import img2 from "/assets/Deluxe_room_with_kitchen/Deluxe_Room_4.jpg";

const doors = [
  {
    title: 'About us',
    bgColor: 'bg-[#f1c712]',
    path: '/about',
    imageUrl: img1,
    overlayColor: 'bg-[#f1c712]'
  },
  {
    title: 'Rooms',
    bgColor: 'bg-[#f26624]',
    path: '/rooms',
    imageUrl: img2,
    overlayColor: 'bg-[#f26624]'
  },
  {
    title: 'Classes',
    bgColor: 'bg-[#ec1f27]',
    path: '/classes',
    imageUrl: './assets/Deluxe_room_with_kitchen/pexels-yoga-course-india-932671557-20035455.jpg',
    overlayColor: 'bg-[#ec1f27]'
  },
  {
    title: 'Package',
    bgColor: 'bg-[#803f98]',
    path: '/package',
    imageUrl: './assets/unnamed.jpg',
    overlayColor: 'bg-[#803f98]'
  },
  {
    title: 'Attraction',
    bgColor: 'bg-[#1d4499]',
    path: '/attraction',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=500',
    overlayColor: 'bg-[#1d4499]'
  },
  {
    title: 'Contact',
    bgColor: 'bg-[#13a24b]',
    path: '/contact',
    imageUrl: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=500',
    overlayColor: 'bg-[#13a24b]'
  }
];

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="text-center mb-8 md:mb-12">
          <img 
            src="./assets/mainLogo.png" 
            alt="Colourbox Homestay " 
            className="mx-auto h-24 md:h-28 object-contain"
          />
        </div>


        {/* Door Frame Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Door Frame */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-200 rounded-[40px] transform -skew-x-1 shadow-2xl" />

          {/* Door Content */}
          <div className="relative bg-white rounded-[32px] p-3 md:p-8 shadow-inner">
            {/* Door Handle */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center">
              <div className="w-2 h-24 bg-gray-400 rounded-l-lg shadow-lg" />
              <div className="w-4 h-32 bg-gradient-to-r from-gray-400 to-gray-300 rounded-r-lg shadow-lg" />
            </div>

            {/* Cards Grid - Always 2 columns */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {doors.map((door) => (
                 <a key={door.title} href={door.path} className="relative block rounded-xl overflow-hidden group">
                 {/* Background Image */}
                 <img src={door.imageUrl} alt={door.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                 
                 {/* Overlay Color */}
                 <div className={`absolute inset-0 ${door.overlayColor} opacity-75 transition-opacity duration-300 group-hover:opacity-70`} />

                 {/* Title Text - Ensuring it's on Top */}
                 <div className="absolute inset-0 flex items-center justify-center z-10">
                   <h2 className="text-white text-2xl md:text-3xl font-bold text-center drop-shadow-lg">
                     {door.title}
                   </h2>
                 </div>
               </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
