import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, MapPin, Wifi, Coffee, Users as Community, MapPin as Location } from 'lucide-react';
import Navbar from '../components/Navbar';

// Import images
import heroImg from "/assets/Deluxe_room_with_kitchen/lakshman-jhula-bridge-rishikesh-uttrakhand-city-1-hero.jpeg";
import logoImg from "/assets/mainLogo.png";

function Home() {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    roomType: 'Select Room Type'
  });

  const openWhatsApp = () => {
    window.open('https://wa.me/918791231999', '_blank');
  };

  const handleBooking = () => {
    openWhatsApp();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        
        <div className="relative z-10 text-left text-white px-4 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Experience Serenity in<br />
              Rishikesh
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
              Embrace serenity and thrill at our hostel in India's spiritual core.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={handleBooking}
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Book Your Stay
              </button>
              <button
                onClick={() => navigate('/about')}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors font-semibold"
              >
                Explore More
              </button>
            </div>
          </div>

          {/* Booking Form Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-4xl shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Your Perfect Stay</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Check-in Date</label>
                <input
                  type="date"
                  value={bookingData.checkIn}
                  onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                  placeholder="21-08-2025"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Check-out Date</label>
                <input
                  type="date"
                  value={bookingData.checkOut}
                  onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                  placeholder="dd-mm-yyyy"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Room Type</label>
                <select
                  value={bookingData.roomType}
                  onChange={(e) => setBookingData({...bookingData, roomType: e.target.value})}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                >
                  <option value="Select Room Type">Select Room Type</option>
                  <option value="standard">Standard Room</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="dorm">Dorm Bed</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Guests</label>
                <select
                  value={bookingData.guests}
                  onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5+</option>
                </select>
              </div>
            </div>
            
            <button
              onClick={handleBooking}
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Check Availability
            </button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image placeholder */}
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <h3 className="text-2xl font-bold mb-2">Image of ColourBox</h3>
                <p className="text-lg">Hostel exterior or interior photo</p>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Welcome To ColourBox
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Nestled along the sacred banks of the Ganges River, ColourBox is 
                  more than just a place to stay—it's an experience that connects you 
                  with the spiritual essence of Rishikesh. Our thoughtfully designed 
                  spaces blend minimalist aesthetics with the natural beauty of our 
                  surroundings.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe in sustainable living and supporting the local community. 
                  Our hostel is crafted using eco-friendly materials, and we work 
                  closely with local artisans and businesses to provide you with an 
                  authentic Rishikesh experience.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Location className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Prime Location</h4>
                    <p className="text-sm text-gray-600">Just 5 minutes from Laxman Jhula</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Community className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Community Space</h4>
                    <p className="text-sm text-gray-600">For Yoga and Meditation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Wifi className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Free Wi-Fi</h4>
                    <p className="text-sm text-gray-600">High-speed Internet throughout</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Coffee className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">On-site Cafe</h4>
                    <p className="text-sm text-gray-600">Serving Organic food and Continental cuisine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;