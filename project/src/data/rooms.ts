import { Room } from '../types';

export const rooms: Room[] = [
  {
    id: 'deluxe-suite',
    name: 'Deluxe Ocean Suite',
    description: 'Luxurious suite with panoramic ocean views and private balcony',
    price: 450,
    capacity: 2,
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    amenities: ['King Bed', 'Ocean View', 'Private Balcony', 'Mini Bar', 'Room Service']
  },
  {
    id: 'family-suite',
    name: 'Family Suite',
    description: 'Spacious suite perfect for families with separate living area',
    price: 550,
    capacity: 4,
    imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
    amenities: ['2 Queen Beds', 'Living Room', 'Kitchenette', 'Children\'s Play Area']
  },
  {
    id: 'presidential',
    name: 'Presidential Suite',
    description: 'Ultimate luxury with premium amenities and butler service',
    price: 1200,
    capacity: 2,
    imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
    amenities: ['King Bed', 'Private Pool', 'Butler Service', 'Premium Bar', 'Spa Access']
  }
];