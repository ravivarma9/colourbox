import React from 'react';
import { MapPin, Clock, Car } from 'lucide-react';

const LocationAttractionSection = () => {
  const nearbyAttractions = [
    {
      name: 'Laxman Jhula',
      distance: 'Within 10 min walk',
      description: 'Iconic suspension bridge across the Ganges',
      icon: MapPin
    },
    {
      name: 'Beatles Ashram',
      distance: '2km (15 min by bike)',
      description: 'Historic ashram where The Beatles stayed in 1968',
      icon: MapPin
    },
    {
      name: 'Triveni Ghat',
      distance: '3km (20 min by bike)',
      description: 'Sacred bathing ghat and site of evening Ganga Aarti',
      icon: MapPin
    },
    {
      name: 'Neer Garh Waterfall',
      distance: '8km (30 min trek)',
      description: 'Beautiful waterfall with natural pools perfect for swimming',
      icon: MapPin
    }
  ];

  const gettingHere = [
    {
      name: 'Nearest Airport Dehradun (DED)',
      distance: '35 km (1 hour drive)',
      icon: Car
    },
    {
      name: 'Nearest Railway Station: Rishikesh',
      distance: '10 km (20 min drive)',
      icon: Car
    },
    {
      name: 'Bus Stand, Rishikesh',
      distance: '8 km (15 min drive)',
      icon: Car
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Location & Attraction</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Perfectly situated to experience and explore the best of Rishikesh, with easy 
            access to spiritual sites, adventure activities, and natural beauty.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="h-[250px] md:h-[300px] bg-gray-200 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.703206543996!2d78.3216628!3d30.131305100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091705e8c9312b%3A0xdc30d9a638534731!2sColour%20Box%20Homestay!5e0!3m2!1sen!2sin!4v1740597362626!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          
          {/* Attractions and Getting Here */}
          <div className="space-y-8">
            {/* Nearby Attractions */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Nearby Attractions</h3>
              <div className="space-y-4">
                {nearbyAttractions.map((attraction, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <attraction.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{attraction.name}</h4>
                        <span className="text-orange-500 text-xs font-medium">{attraction.distance}</span>
                      </div>
                      <p className="text-gray-600 text-xs">{attraction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Getting Here */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Getting Here</h3>
              <div className="space-y-4">
                {gettingHere.map((transport, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <transport.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900 text-sm">{transport.name}</h4>
                        <span className="text-orange-500 text-xs font-medium">{transport.distance}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAttractionSection;