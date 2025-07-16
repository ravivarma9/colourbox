import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActivitiesSection = () => {
  const navigate = useNavigate();

  const activities = [
    {
      title: 'Yoga Classes',
      description:
        'Join our daily yoga sessions led by experienced instructors. Classes suitable for all levels, from beginners to advanced practitioners.',
      schedule: [
        { time: 'Morning Flow', duration: '6:00 am - 7:00 am' },
        { time: 'Hatha Yoga', duration: '8:00 am - 9:00 am' },
        { time: 'Evening Flow', duration: '6:00 pm - 7:00 pm' },
      ],
      link: 'Learn More',
      linkTo: '/classes',
    },
    {
      title: 'Trekking Adventures',
      description:
        'Explore the beautiful Himalayan foothills with our guided trekking tours. Experience breathtaking views and connect with nature.',
      schedule: [
        { time: 'Neer Garh Waterfall', duration: 'Half day trek' },
        { time: 'Kunjapuri Temple', duration: 'Sunrise trek' },
        { time: 'Beatles Ashram', duration: '2-3 hours' },
      ],
      link: 'Learn More',
      linkTo: '/package',
    },
    {
      title: 'Bike Rental',
      description:
        'Rent a bike and explore Rishikesh at your own pace. Perfect for visiting temples, cafes, and scenic spots around the city.',
      schedule: [
        { time: 'Standard Bike', duration: '₹300 per day' },
        { time: 'Mountain Bike', duration: '₹500 per day' },
        { time: 'Electric Bike', duration: '₹800 per day' },
      ],
      link: 'Learn More',
      linkTo: 'https://wa.me/918791231999',
    },
  ];

  const handleClick = (linkTo: string) => {
    if (linkTo.startsWith('http')) {
      window.open(linkTo, '_blank');
    } else {
      navigate(linkTo);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Activities & Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the perfect balance of adventure and tranquility with our curated experiences in and around Rishikesh.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              {/* Icon */}
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{activity.description}</p>

              {/* Schedule */}
              <div className="space-y-2 mb-6">
                {activity.schedule.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-gray-700">{item.time}</span>
                    <span className="text-gray-500">{item.duration}</span>
                  </div>
                ))}
              </div>

              {/* Link */}
              <button
                onClick={() => handleClick(activity.linkTo)}
                className="text-orange-500 text-sm font-medium hover:text-orange-600 transition-colors duration-200"
              >
                {activity.link} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
