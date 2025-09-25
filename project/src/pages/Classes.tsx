import { useNavigate } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';

import yogaImg from "/assets/Deluxe_room_with_kitchen/pexels-yoga-course-india-932671557-20035455.jpg";
import musicImg from "/assets/Deluxe_room_with_kitchen/music.jpg";
import artImg from "/assets/Deluxe_room_with_kitchen/art.jpg";
import img1 from "/assets/Rishikesh-to-Bali-2.jpg";
import djambe from "/assets/Deluxe_room_with_kitchen/DJambe.jpeg";


const classes = [
  {
    title: 'Djembe Drum Classes',
    images: [
      { url: djambe, title: 'Djembe Drum Classes' }
    ],
    description: {
      points: ['Feel the rhythm of Africa in Rishikesh with Djembe drum classes! Whether you’re a beginner or rhythm enthusiast, the Djembe drum classes focus on teaching hand techniques and beats. If you’re in Rishikesh, experience the joy of drumming in our vibrant and interactive setting.'],
      highlights: [
      { icon: '', label: 'Timings', detail: 'Friday, Saturday & Sunday (6.30 P.M. to 7.15 P.M.)' }
    ],
      notes: ['Immerse yourself in traditional African rhythms and drumming techniques.', 'Enhance focus, coordination, and relaxation through rhythmic meditation.']
    }
  },
  {
    title: 'Yoga Classes',
    images: [
      { url: yogaImg, title: 'Yoga Class' }
    ],
    description: {
      points: ['Gentle flows, mindful breathing, and deep stretches for all levels.', 'Learn to connect your body and mind while building strength and flexibility.'],
      notes: ['Relieve stress, increase focus, and boost overall health.', 'Perfect for beginners or seasoned practitioners.']
    }
  },
  {
  title: 'Music Classes',
  images: [{ url: musicImg, title: 'Music Class' }],
  description: {
    points: [
      'Explore rhythm, sound, and melody with classes that focus on various instruments, singing, and music theory.',
      'Group drum circles, solo performances, and collaborative jam sessions.'
    ],
    highlights: [
      { icon: '🎸', label: 'Guitar Classes', detail: 'Learn chords, strumming, fingerstyle, and lead techniques. All genres, all levels welcome!' },
      { icon: '🎹', label: 'Harmonium Classes', detail: 'Master scales, ragas, and devotional music. Dive into Indian classical traditions.' },
      { icon: '🎤', label: 'Vocal Classes', detail: 'Improve pitch, tone, and breath control. Explore classical, contemporary, and folk styles.' },
      { icon: '🌐', label: 'Online Classes Available!', detail: 'Learn conveniently from anywhere with our interactive online sessions.' }
    ],
    notes: [
      'Unlock your musical potential, whether you are a beginner or experienced.',
      'Use music as a form of self-expression and connection.'
    ]
  }
}
,
  {
    title: 'Art  Classes',
    images: [
      { url: artImg, title: 'Cooking Class' }
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
    window.open('https://wa.me/918791231999', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[300px] md:h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-3xl overflow-hidden mt-5 mx-[20px]">
          <img 
            src={img1} 
            alt="background" 
            className="w-full h-full object-cover"
          />
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
                <ul className="mt-4 space-y-3 text-gray-700">
                  {classItem.description.highlights?.map((item, idx) => (
    <p key={idx}>
      {item.icon} <strong>{item.label}</strong> – {item.detail}
    </p>
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
