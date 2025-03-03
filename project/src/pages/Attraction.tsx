import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const attractions = [
  {
    id: 'laxman-jhula',
    title: 'Laxman Jhula',
    image: 'assets/Deluxe_room_with_kitchen/about-tapovan.jpg',
    distance: 'Around 1.2 km',
    description: 'Laxman Jhula is an iconic suspension bridge over the Ganges, connecting Tapovan and Jonk in Rishikesh. According to legend, Lord Laxman crossed the river at this spot on a jute rope, giving the bridge its name. The bridge offers stunning views of the river, temples, and bustling local markets.',
    details: {
      images: [
        { url: 'assets/Deluxe_room_with_kitchen/lakshman-jhula-bridge-rishikesh-uttrakhand-city-1-hero.jpeg', title: 'Bridge View' },
        { url: 'assets/Deluxe_room_with_kitchen/about-tapovan.jpg', title: 'River View' }
      ],
      highlights: [
        '450-ft-long iron suspension bridge',
        'Panoramic views of the Ganges',
        'Famous temples and cafes nearby',
        'Popular for spiritual seekers and photographers'
      ],
      note: 'October to March (pleasant weather, clear views)'
    }
  },
  {
    id: 'beatles-ashram',
    title: 'The Beatles Ashram (Chaurasi Kutiya)',
    image: 'assets/Deluxe_room_with_kitchen/Beatles_Ashram,_Rishikesh,_India_(front).jpg',
    distance: 'Around 1.2 km',
    description: 'This abandoned ashram gained global fame when The Beatles stayed here in 1968 to learn Transcendental Meditation under Maharishi Mahesh Yogi. Now a heritage site, it features graffiti art, meditation huts, and a tranquil forest setting.',
    details: {
      images: [
        { url: 'assets/Deluxe_room_with_kitchen/Beatles_Ashram,_Rishikesh,_India_(front).jpg', title: 'Ashram Entrance' },
        { url: 'assets/Deluxe_room_with_kitchen/bhojbasa-8842343.webp', title: 'Meditation Caves' }
      ],
      highlights: [
        'Beatles-themed murals and graffiti',
        '84 meditation caves (Chaurasi Kutiya)',
        'Serene, spiritual ambiance',
        'Nature trails and photography spots'
      ],
      note: 'October to February (cooler climate for exploration)'
    }
  },
  {
    id: 'triveni-ghat',
    title: 'Triveni Ghat',
    image: 'assets/Deluxe_room_with_kitchen/Triveni_Ghat_Rishikesh_02.jpg',
    distance: 'Around 1.2 km',
    description: 'A sacred bathing ghat where the three rivers—Ganga, Yamuna, and Saraswati—are believed to converge. The evening Ganga Aarti here is a mesmerizing experience of chants, lamps, and devotion.',
    details: {
      images: [
        { url: 'assets/Deluxe_room_with_kitchen/Triveni_Ghat_Rishikesh_02.jpg', title: 'Evening Aarti' },
        { url: 'assets/Deluxe_room_with_kitchen/licensed-image.jpeg', title: 'Ghat View' }
      ],
      highlights: [
        'Daily Ganga Aarti at sunset',
        'Holy dip in the river (considered purifying)',
        'Vibrant market and temple visits',
        'Peaceful morning meditation spot'
      ],
      note: 'October to April (ideal for outdoor activities and aarti)'
    }
  },
  {
    id: 'neelkanth',
    title: 'Shree Neelkanth Mahadev Temple',
    image: 'assets/Deluxe_room_with_kitchen/Tungnath-temple-Opening.jpg',
    distance: 'Around 1.2 km',
    description: 'A revered Shiva temple located at 1,330 meters above sea level, about 32 km from Rishikesh. It marks the mythological site where Lord Shiva consumed poison during the churning of the ocean (Samudra Manthan).',
    details: {
      images: [
        { url: 'assets/Deluxe_room_with_kitchen/Tungnath-temple-Opening.jpg', title: 'Temple View' },
        { url: 'assets/Deluxe_room_with_kitchen/Gangotri-glacier-state-one-Himalayas-India-Uttarakhand.webp', title: 'Mountain View' }
      ],
      highlights: [
        'Sacred temple dedicated to Lord Shiva',
        'Scenic drive through lush forests',
        '12 km trek route from Rishikesh for adventure lovers',
        'Peaceful and spiritual retreat'
      ],
      note: 'July to March (avoid monsoon if trekking)'
    }
  },
  {
    id: 'waterfall',
    title: 'Garud Chatti Waterfall',
    image: 'assets/Deluxe_room_with_kitchen/neer-waterfall-rishikesh.jpg',
    distance: 'Around 1.2 km',
    description: 'A hidden gem near Neelkanth Road, this waterfall is a serene escape into nature, surrounded by dense forests and offering a refreshing dip in the cool waters.',
    details: {
      images: [
        { url: 'assets/Deluxe_room_with_kitchen/neer-waterfall-rishikesh.jpg', title: 'Waterfall' },
        { url: 'assets/Deluxe_room_with_kitchen/Rishikund.jpg', title: 'Trek Path' }
      ],
      highlights: [
        'Beautiful cascading waterfalls',
        'Short trek through scenic trails',
        'Perfect for nature photography and relaxation',
        'Less crowded than other waterfalls'
      ],
      note: 'September to March (post-monsoon greenery and water flow)'
    }
  },
  {
    id: 'rishikund',
    title: 'Rishikund',
    image: 'assets/Deluxe_room_with_kitchen/Rishikund.jpg',
    distance: 'Around 1.2 km',
    description: 'A sacred pond near Triveni Ghat, believed to have been blessed by the River Goddess Yamuna. It reflects the image of Raghunath Temple and has deep spiritual significance.',
    details: {
      images: [
        { url: 'assets/Deluxe_room_with_kitchen/Rishikund.jpg', title: 'Pond View' },
        { url: 'assets/Deluxe_room_with_kitchen/ganga-beach-rishikesh-tourism-entry-ticket-price.jpg', title: 'Temple View' }
      ],
      highlights: [
        'Historical and religious importance',
        'Peaceful environment for meditation',
        'Nearby temples for exploration',
        'Ideal for photography and cultural experiences'
      ],
      note: 'October to February (pleasant climate)'
    }
  },
  {
    id: 'kunjariTemple',
    title: 'Kunjapuri Temple',
    image: 'assets/Deluxe_room_with_kitchen/kunjapuri-temple-03.jpg',
    distance: 'Around 1.2 km',
    description: 'A hilltop temple offering breathtaking sunrise views of the Himalayas and the Ganges valley.',
    details: {
      images: [
        { url: 'assets/Deluxe_room_with_kitchen/kunjapuri-temple-03.jpg', title: 'Pond View' },
        { url: 'assets/Deluxe_room_with_kitchen/Rishikund.jpg', title: 'Temple View' }
      ],
      note: 'October to April (for clear sunrise views)'
    }
  },
  {
    id: 'vashishtaCaves',
    title: 'Vashishta Caves',
    image: 'assets/Deluxe_room_with_kitchen/View_of_Gaumukh.jpg',
    distance: 'Around 1.2 km',
    description: 'An ancient meditation cave along the Ganges, known for its deep spiritual aura and peaceful atmosphere.',
    details: {
      images: [
        { url: 'assets/Deluxe_room_with_kitchen/View_of_Gaumukh.jpg', title: 'Pond View' },
        { url: 'assets/Deluxe_room_with_kitchen/Rishikund.jpg', title: 'Temple View' }
      ],
      note: 'October to March (less humid, better river views)'
    }
  },
  {
    id: 'patnaWaterfall',
    title: 'Patna Waterfall',
    image: 'assets/Deluxe_room_with_kitchen/IMG_20220212_163841.jpg',
    distance: 'Around 1.2 km',
    description: 'A picturesque waterfall named after a village nearby, famous for its limestone caves and serene surroundings.',
    details: {
      images: [
        { url: 'assets/Deluxe_room_with_kitchen/IMG_20220212_163841.jpg', title: 'Pond View' },
        { url: 'assets/Deluxe_room_with_kitchen/Rishikund.jpg', title: 'Temple View' }
      ],
      note: 'September to February (after monsoon for full water flow)'
    }
  }
];

function Attraction() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAttractionId, setSelectedAttractionId] = useState<string | null>(null);

  const getGoogleMapsLink = (place: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
  };

  const handleAttractionClick = (id: string) => {
    setSelectedAttractionId(id);
    setIsModalOpen(true);
    // Use setTimeout to ensure the modal is rendered before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] mb-8 mt-4">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-3xl overflow-hidden mt-5 mx-[20px]"
          style={{
            backgroundImage: 'url(assets/Deluxe_room_with_kitchen/lakshman-jhula-bridge-rishikesh-uttrakhand-city-1-hero.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
              Explore Local Wonders and<br />
              Top Attractions Near Our Hotel
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold">{attraction.title}</h2>
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => handleAttractionClick(attraction.id)}
              >
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-opacity" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">{attraction.distance}</span>
                <button
                  onClick={() => window.open(getGoogleMapsLink(attraction.title), '_blank')}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-300 transition-colors"
                >
                  Direction
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
            <div className="min-h-screen py-8">
              <div className="bg-white rounded-3xl max-w-4xl mx-auto p-6 md:p-8 relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="sticky top-4 float-right text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>

                {/* Detailed Sections */}
                {attractions.map((attraction) => (
                  <div
                    key={attraction.id}
                    id={attraction.id}
                    className="mb-16 last:mb-0 scroll-mt-8"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">{attraction.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <p className="text-gray-700">{attraction.description}</p>

                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">Highlights</h3>
                          <ul className="list-disc pl-5 space-y-2">
                            {attraction.details.highlights?.map((highlight, index) => (
                              <li key={index} className="text-gray-700">{highlight}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">Best Time to Visit:</h3>
                          <p className="text-gray-700">{attraction.details.note}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {attraction.details.images.map((image, index) => (
                          <div key={index} className="rounded-2xl overflow-hidden">
                            <img
                              src={image.url}
                              alt={image.title}
                              className="w-full h-48 object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Attraction;