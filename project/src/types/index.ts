import { LucideIcon } from 'lucide-react';

export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  imageUrl: string;
  amenities: string[];
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

export interface BookingDate {
  checkIn: Date;
  checkOut: Date;
}

export interface BookingDetails extends BookingDate {
  roomId: string;
  guestName: string;
  email: string;
  guests: number;
}