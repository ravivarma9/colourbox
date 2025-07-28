import React from 'react';
import { MapPin, Users, Wifi, Coffee } from 'lucide-react';

const WelcomeSection = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Just 5 minutes from Laxman Jhula'
    },
    {
      icon: Users,
      title: 'Community Space',
      description: 'For yoga and Meditation'
    },
    {
      icon: Wifi,
      title: 'Free Wi-Fi',
      description: 'High speed Internet throughout'
    },
    {
      icon: Coffee,
      title: 'On-site Café',
      description: 'Serving Organic local and Continental cuisine'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-gray-300 rounded-lg h-80 flex items-center justify-center">
              <span className="text-gray-600 text-lg font-medium">Image of ColourBox</span>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome To ColourBox</h2>
            <div className="space-y-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Nestled along the sacred banks of the Ganga River, ColourBox is 
                more than just a place to stay—it's an experience that connects you 
                with the spiritual essence of Rishikesh. Our thoughtfully designed 
                spaces blend minimalist aesthetics with the natural beauty of our 
                surroundings.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in sustainable living and supporting the local community. 
                Our homestay is crafted using eco-friendly materials, and we work 
                closely with local artisans and businesses to provide you with an 
                authentic Rishikesh experience.
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                    <p className="text-gray-600 text-xs mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;