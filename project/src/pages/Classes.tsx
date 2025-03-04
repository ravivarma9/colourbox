import { useNavigate } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';

const classes = [
  {
    title: 'Yoga Classes',
    images: [
      { url: 'assets/Deluxe_room_with_kitchen/pexels-yoga-course-india-932671557-20035455.jpg', title: 'Yoga Class' }
    ],
    description: {
      points: ['Gentle flows, mindful breathing, and deep stretches for all levels.', 'Learn to connect your body and mind while building strength and flexibility.'],
      notes: ['Relieve stress, increase focus, and boost overall health.', 'Perfect for beginners or seasoned practitioners.']
    }
  },
  {
    title: 'Music Classes',
    images: [
      { url: 'assets/Deluxe_room_with_kitchen/music.jpg', title: 'Music Class' }
    ],
    description: {
      points: ['Explore rhythm, sound, and melody with classes that focus on various instruments, singing, and music theory.', 'Group drum circles, solo performances, and collaborative jam sessions.'],
      notes: ['Unlock your musical potential, whether you are a beginner or experienced.', 'Use music as a form of self-expression and connection.']
    }
  },
  {
    title: 'Art  Classes',
    images: [
      { url: 'assets/Deluxe_room_with_kitchen/art.jpg', title: 'Cooking Class' }
    ],
    description: {
      points: ['Get hands-on with painting, drawing, sculpture, and mixed media.', 'Focus on creativity, exploration, and expression.'],
      notes: ['Build your artistic skills, develop your personal style, and engage in therapeutic creativity.', 'Perfect for beginners and anyone looking to rediscover their creative spark.']
    }
  }
];

function Classes() {
  const navigate = useNavigate();
  const openWhatsApp = () => {
    window.open('https://wa.me/919883222433', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
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
        {classes.map((classItem, index) => (
          <div key={classItem.title} className="mb-16 md:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="h-[250px] md:h-[300px]">
                <ImageSlider images={classItem.images} />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 mt-2">{classItem.title}</h2>
                <ul className="list-disc list-inside text-gray-700">
                  {classItem.description.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <h3 className="mt-6 font-semibold text-lg">Class Benefits</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {classItem.description.notes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
                <div className="flex mt-8">
                  <button
                    onClick={openWhatsApp}
                    className="w-[150px] bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors"
                  >
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

export default Classes;
