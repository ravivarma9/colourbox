import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';

const packages = [
  {
    title: 'Rishikesh Weekend Packages',
    images: [
      { url: 'assets/best-rafting-in-rishikesh.jpg', title: 'River Rafting' },
      { url: 'https://images.unsplash.com/photo-1623141624741-b97b6b3fbb21?auto=format&fit=crop&q=80&w=800', title: 'Camping' },
      { url: 'https://images.unsplash.com/photo-1623141624742-0a8f32dcfd92?auto=format&fit=crop&q=80&w=800', title: 'Evening Bonfire' }
    ],
    description: 'Rishikesh weekend packages – Rishikesh is an ideal tourist destination for weekend getaways. There are a variety of adventure activities that make your weekend memorable. Apart from river rafting in the Ganges, you can also enjoy local sightseeing, trekking and various types of jumping etc. If you believe that yoga is good for health, then there is also an option to attend a yoga class on the banks of the Ganges.',
    details: {
      camps: 'Eagle Nest / Camp Shivpuri',
      checkIn: '10:00 AM',
      checkOut: '11:00 AM',
      duration: '1 Night 2 Days'
    },
    included: [
      'All Meals',
      'River Rafting – 16 Km',
      'Evening bonfire',
      'Evening Music with Veg. Snacks'
    ]
  },
  {
    title: 'Rishikesh Trekking Packages',
    images: [
      { url: 'assets/unnamed.jpg', title: 'Trekking' },
      { url: 'https://images.unsplash.com/photo-1551632436-cbf6c5a17a7e?auto=format&fit=crop&q=80&w=800', title: 'Mountain View' },
      { url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800', title: 'Hiking' }
    ],
    description: 'Rishikesh weekend packages – Rishikesh is an ideal tourist destination for weekend getaways. There are a variety of adventure activities that make your weekend memorable. Apart from river rafting in the Ganges, you can also enjoy local sightseeing, trekking and various types of jumping etc. If you believe that yoga is good for health, then there is also an option to attend a yoga class on the banks of the Ganges.',
    details: {
      camps: 'Eagle Nest / Camp Shivpuri',
      checkIn: '10:00 AM',
      checkOut: '11:00 AM',
      duration: '1 Night 2 Days'
    },
    included: [
      'All Meals',
      'River Rafting – 16 Km',
      'Evening bonfire',
      'Evening Music with Veg. Snacks'
    ]
  }
];

function Package() {
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
            backgroundImage: 'url(assets/trekking-in-rishikesh-1.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Explore the rishikesh with us</h1>
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

        {packages.map((pkg, index) => (
          <div key={pkg.title} className="mb-16 md:mb-32">
            {/* Full Width Title & Description */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{pkg.title}</h2>
              <p className="text-gray-700">{pkg.description}</p>
              <p className="text-gray-700">
                Check out other customized camping and rafting tours in Rishikesh.
              </p>
            </div>

            {/* Two-column Grid: Details & Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Left Side: Details */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Inclusion and Camps Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Camps:</p>
                      <p>{pkg.details.camps}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Standard Check-in time:</p>
                      <p>{pkg.details.checkIn}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Standard Check-out time:</p>
                      <p>{pkg.details.checkOut}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Tour Duration:</p>
                      <p>{pkg.details.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">INCLUDED</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {pkg.included.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side: Image */}
              <div className="h-[250px] md:h-[300px]">
                <ImageSlider images={pkg.images} />
              </div>
            </div>

            {/* Button Centered in New Row */}
            <div className="flex justify-center mt-8">
              <button 
                onClick={openWhatsApp}
                className="w-[150px] bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
                Book
              </button>
            </div>
          </div>
        ))}


      </div>
    </div>
  );
}

export default Package