import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, MapPin, Star, Phone, Mail, Wifi, Car, Coffee, Utensils } from 'lucide-react';
import BookingCard from '../components/BookingCard';

// Import images
import heroImg from "/assets/Deluxe_room_with_kitchen/Deluxe_Room_4.jpg";
import aboutImg from "/assets/IMG_5527acopy.jpg";
import roomImg1 from "/assets/Deluxe_room_with_kitchen/Standard_Room_1.jpg";
import roomImg2 from "/assets/Deluxe_room_with_kitchen/Deluxe_Room_1.jpg";
import roomImg3 from "/assets/Deluxe_room_with_kitchen/Dorm_Room_1.jpg";
import attractionImg from "/assets/Deluxe_room_with_kitchen/lakshman-jhula-bridge-rishikesh-uttrakhand-city-1-hero.jpeg";
import yogaImg from "/assets/Deluxe_room_with_kitchen/pexels-yoga-course-india-932671557-20035455.jpg";
import raftingImg from "/assets/best-rafting-in-rishikesh.jpg";
import logoImg from "/assets/mainLogo.png";

function Home() {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'standard'
  });

  const openWhatsApp = () => {
    window.open('https://wa.me/918791231999', '_blank');
  };

  const handleBooking = () => {
    openWhatsApp();
  };

  const handleQuickBook = (type: string) => {
    openWhatsApp();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Booking */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={logoImg}
              alt="Colourbox Homestay" 
              className="mx-auto h-20 md:h-24 object-contain"
            />
          </div>
          
          {/* Welcome Text */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Colourbox
          </h1>
          <p className="text-xl md:text-2xl mb-2">
            Your Gateway to Rishikesh Adventures
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Experience the perfect blend of comfort, spirituality, and adventure in the heart of Tapovan
          </p>

          {/* Quick Booking Card */}
          <div className="bg-white bg-opacity-95 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Book Your Perfect Stay</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="date"
                    value={bookingData.checkIn}
                    onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Check-out</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="date"
                    value={bookingData.checkOut}
                    onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <select
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={5}>5+ Guests</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Room Type</label>
                <select
                  value={bookingData.roomType}
                  onChange={(e) => setBookingData({...bookingData, roomType: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                >
                  <option value="standard">Standard Room</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="dorm">Dorm Bed</option>
                </select>
              </div>
            </div>
            
            <button
              onClick={handleBooking}
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
            >
              Check Availability & Book Now
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Discover Colourbox Homestay
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nestled in the heart of Tapovan, Rishikesh, Colourbox Homestay offers more than just accommodation. 
                We provide a gateway to spiritual awakening, adventure, and deep connection with nature.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're seeking inner peace through yoga, thrilling river rafting adventures, or simply 
                a tranquil retreat from city life, our homestay serves as your perfect base.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-gray-600">4.9/5 Guest Rating</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/about')}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Learn More About Us
              </button>
            </div>
            <div className="relative">
              <img
                src={aboutImg}
                alt="Colourbox Homestay"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <span className="font-semibold">Tapovan, Rishikesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Choose Your Perfect Room
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From budget-friendly dorms to luxurious deluxe rooms, we have accommodation options for every traveler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BookingCard
              title="Standard Room"
              description="Comfortable and affordable rooms perfect for couples and solo travelers"
              price="₹1,500/night"
              onBook={() => handleQuickBook('standard')}
            />
            <BookingCard
              title="Deluxe Room with Kitchen"
              description="Spacious rooms with kitchenette, perfect for longer stays and families"
              price="₹2,500/night"
              onBook={() => handleQuickBook('deluxe')}
            />
            <BookingCard
              title="Girls Dorm (5 Beds)"
              description="Safe and social accommodation for female solo travelers"
              price="₹800/bed"
              onBook={() => handleQuickBook('dorm')}
            />
          </div>
          
          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/rooms')}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              View All Rooms & Details
            </button>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Modern Amenities for Your Comfort
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Wifi className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-semibold">Free WiFi</h3>
              <p className="text-sm text-gray-600">High-speed internet</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Car className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-semibold">Parking</h3>
              <p className="text-sm text-gray-600">Secure parking space</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Coffee className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-semibold">Common Kitchen</h3>
              <p className="text-sm text-gray-600">Shared cooking facilities</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Utensils className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-semibold">Local Cuisine</h3>
              <p className="text-sm text-gray-600">Authentic meals available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Experiences & Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the best of Rishikesh with our curated experiences and adventure packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src={yogaImg} alt="Yoga Classes" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Yoga & Meditation</h3>
                <p className="text-gray-600 mb-4">Join our daily yoga sessions and find inner peace by the Ganges</p>
                <button
                  onClick={() => navigate('/classes')}
                  className="text-orange-500 font-semibold hover:text-orange-600"
                >
                  Learn More →
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src={raftingImg} alt="River Rafting" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Adventure Packages</h3>
                <p className="text-gray-600 mb-4">Thrilling river rafting, trekking, and camping experiences</p>
                <button
                  onClick={() => navigate('/package')}
                  className="text-orange-500 font-semibold hover:text-orange-600"
                >
                  Explore Packages →
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src={attractionImg} alt="Local Attractions" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Local Attractions</h3>
                <p className="text-gray-600 mb-4">Visit famous temples, bridges, and spiritual sites nearby</p>
                <button
                  onClick={() => navigate('/attraction')}
                  className="text-orange-500 font-semibold hover:text-orange-600"
                >
                  Discover More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Rishikesh?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Book your stay today or get in touch for personalized recommendations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openWhatsApp}
              className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              WhatsApp: +91 879 123 1999
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors flex items-center justify-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;