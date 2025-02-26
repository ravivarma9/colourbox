import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Star, Award } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';

const classes = [
  {
    title: 'Yoga Classes',
    images: [
      { url: 'assets/Deluxe_room_with_kitchen/pexels-yoga-course-india-932671557-20035455.jpg', title: 'Yoga Class' },
      { url: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800', title: 'Meditation' },
      { url: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80&w=800', title: 'Practice' }
    ],
    description: 'Join our expert-led yoga sessions to find inner peace and improve flexibility. Perfect for all skill levels.'
  },
  {
    title: 'Cooking Workshop',
    images: [
      { url: 'assets/rishikesh-destination-yoga-india.jpg', title: 'Cooking Class' },
      { url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800', title: 'Ingredients' },
      { url: 'https://images.unsplash.com/photo-1556910638-6cdac31d44dc?auto=format&fit=crop&q=80&w=800', title: 'Preparation' }
    ],
    description: 'Learn traditional cooking techniques and local recipes from our expert chefs. All ingredients provided.'
  },
  {
    title: 'Music Classes',
    images: [
      { url: 'assets/rishikesh-destination-yoga-india.jpg', title: 'Yoga Class' },
      { url: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800', title: 'Meditation' },
      { url: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80&w=800', title: 'Practice' }
    ],
    description: 'Join our expert-led yoga sessions to find inner peace and improve flexibility. Perfect for all skill levels.'
  }
];

function Classes() {
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
            backgroundImage: 'url(assets/Rishikesh-to-Bali-2.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Our Classes</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 mt-8">
        <button
          onClick={() => navigate('/')}
          className="mb-8 md:mb-12 flex items-center text-gray-600 hover:text-gray-700"
        >
          <ArrowLeft className="mr-2" /> Back to Home
        </button>

        {/* Class Sections */}
        {classes.map((classItem, index) => (
          <div key={classItem.title} className="mb-16 md:mb-32">
            {/* <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">{classItem.title}</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="h-[250px] md:h-[300px]">
                <ImageSlider images={classItem.images} />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 mt-10">{classItem.title}</h2>
                <p className="text-gray-700 text-lg">{classItem.description}</p>
                <div className="flex space-x-8">
                  <Clock size={24} className="text-gray-600" />
                  <Users size={24} className="text-gray-600" />
                  <Star size={24} className="text-gray-600" />
                  <Award size={24} className="text-gray-600" />
                </div>
                {/* Button Centered in New Row */}
                <div className="flex mt-8">
                  <button 
                    onClick={openWhatsApp}
                    className="w-[150px] bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
                    Join Now
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

export default Classes