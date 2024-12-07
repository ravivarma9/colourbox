import { Amenity } from '../types';
import { Dumbbell, Utensils, Wifi, Car, Bath, Waves } from 'lucide-react';

export const amenities: Amenity[] = [
  {
    id: 'fitness',
    name: 'Fitness Center',
    description: '24/7 access to state-of-the-art fitness equipment',
    icon: Dumbbell,
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48'
  },
  {
    id: 'restaurant',
    name: 'Fine Dining',
    description: 'Award-winning restaurants with ocean views',
    icon: Utensils,
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4'
  },
  {
    id: 'wifi',
    name: 'High-Speed WiFi',
    description: 'Complimentary high-speed internet throughout',
    icon: Wifi,
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3'
  },
  {
    id: 'parking',
    name: 'Valet Parking',
    description: '24/7 secure valet parking service',
    icon: Car,
    imageUrl: 'https://images.unsplash.com/photo-1579033285717-28f96e1f8f9c'
  },
  {
    id: 'spa',
    name: 'Luxury Spa',
    description: 'Full-service spa with ocean view treatment rooms',
    icon: Bath,
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874'
  },
  {
    id: 'pool',
    name: 'Infinity Pool',
    description: 'Beachfront infinity pool with private cabanas',
    icon: Waves,
    imageUrl: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c'
  }
];