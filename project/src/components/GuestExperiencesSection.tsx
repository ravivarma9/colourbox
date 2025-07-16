import React from 'react';
import { Star } from 'lucide-react';

const GuestExperiencesSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'Helena Arancio Sidoti',
      // location: 'Toronto, Canada',
      rating: 5,
      review: 'Cheap, confortable and clean. The cleanest place i have been in india atm. Shubam was all clear and nice. I stay in the dorm, the shower was super (Nice temperature and pressure). The place was really clean and my room mate was also cool. The location es near lots of yogashala and restaurants.'
    },
    {
      id: 2,
      name: 'BONG BABANONDO',
      // location: 'Barcelona, Spain',
      rating: 5,
      review: 'I am Anit Paul and I came with my friends for a trip and we booked this hotel which was quite good and the owner helped us in many ways and they were hospitable too. I loved there cleanliness and management.'
    },
    {
      id: 3,
      name: 'Alexandra Breitfuss',
      location: 'Barcelona, Spain',
      rating: 5,
      review: 'What can I say - my time in this house was amazing. The room itself was very good, clean and well equipped with private bathroom (hot water available) and kitchen. But more important - the people I met there are amazing. Especially Shubham (he is managing) he will try to fulfill every wish, he is such a kind and helpful person AND when he has time, please enjoy his talks about Indian history :-). I can truly recommend this place and would come back anytime!'
    },
    {
      id: 4,
      name: 'neelamber tumbiolo',
      location: 'London, UK',
      rating: 5,
      review: 'Perfect place to stay in Tapovan. All staff will help you for everything you need. The building is new and rooms are very clean. You will find many shops, restaurant and café around, and with vegan options. Thank you 🙏'
    },
    {
      id: 5,
      name: 'Fabian',
      location: 'Singapore',
      rating: 5,
      review: 'Thanks, Shubham! You’re a really nice host!. The building is new, rooms are clean, really nice neighbourhood. There’s even a kitchen and prices are reasonable. I enjoyed staying with you ☺️'
    },
    {
      id: 6,
      name: 'Aditi Juyal',
      // location: 'Sydney, Australia',
      rating: 5,
      review: 'It was a very nice experience, staying there with a calm environment and even the Laksham jhula is at walkable distance. The host Shubham Negi was very humble and welcoming. The prices are also very reasonable.'
    },
    {
      id: 7,
      name: 'Etai Ephrati',
      location: 'Barcelona, Spain',
      rating: 5,
      review: 'Wonderful place to stay in the heart of Tapovan, clean and comfortable rooms, close to everything and Jimmy and Sandeep are extremely kind and helpful hosts ❤️.אחים יקרים :)'
    },
    {
      id: 8,
      name: 'noya seri',
      location: 'Barcelona, Spain',
      rating: 5,
      review: 'מקום אירוח ברמה הגבוהה ביותר שיש! מקום חדש, נקי מאוד, מיטה נוחה, חדר גדול ומרווח, מקלחת מעולה. הצוות קשוב ונחמד מאוד ועוזר בהכל, מומלץ מאוד! מקום האירוח הטוב ביותר שהיינו בו בהודו'
    },
    {
      id: 9,
      name: 'סיגל מושקוביץ',
      location: 'Mexico',
      rating: 5,
      review: 'אני רוצה להמליץ על השהות שלי במקום מקום חדש לגמרי החדרים נקיים ומרווחים הצוות נעים ומפנק נענה לכל בקשה מים חמים ללא הפסקה הזרם של המים נהדר וכמות המים מספיקה לחפיפה ומקלחת ( לא מובן מאליו) יש אפשרות להשתמש במטבח המרכזי שמצויד בכל מה שמטבח דורש אפשרות לצפיה בסרטים והנחה במסעדת blue art cafe יש בניה מסביב אבל זה זניח אל מול איכות החדרים ממליצה בחום רב'
    }
  ];

  const duplicatedReviews = [...reviews, ...reviews];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-orange-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Guest Experiences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it—hear what our guests have to say about their 
            stay at ColourBox.
          </p>
        </div>

        {/* Auto-Scrolling Reviews */}
        <div className="overflow-hidden">
          <div className="flex animate-review-scroll space-x-6">
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex space-x-1 mb-4">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-4">
                  "{review.review}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-medium text-sm">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                    <p className="text-gray-500 text-xs">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Custom Keyframes for Scrolling */}
      <style>{`
        @keyframes review-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-review-scroll {
          animation: review-scroll 40s linear infinite;
        }

        .animate-review-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default GuestExperiencesSection;
