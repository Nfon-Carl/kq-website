/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ServiceType {
  MOVING = 'Moving Services',
  ASSEMBLY = 'Furniture Assembly',
  HEAVY_ITEM = 'Large & Heavy Item Removal',
  JUNK_REMOVAL = 'Junk Hauling & Disposal',
  LABOUR = 'Labour & Helpers Only'
}

export interface BookingPackage {
  id: string;
  title: string;
  details: string[];
  durationText: string;
  priceDisplay: string;
  basePrice: number;
  hourlyRate?: number;
  crewSize: number;
  hasTruck: boolean;
  minHours: number;
  image: string;
}

export interface Booking {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  serviceType: ServiceType;
  packageId?: string;
  date: string;
  pickupAddress: string;
  dropoffAddress: string;
  additionalNotes?: string;
  totalEstimate: number;
  bookingTime: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  category: 'moving' | 'hauling' | 'packing' | 'assembly';
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
