export type Adventure = {
  id: string;
  name: string;
  description: string;
  location: string;
  category: "water" | "land" | "air" | "cultural";
  price: number;
  imageUrl: string;
};

export type Accommodation = {
  id: string;
  name: string;
  type: "hotel" | "hostel" | "room";
  description: string;
  location: string;
  pricePerNight: number;
  amenities: string[];
  imageUrl: string;
};

export type Destination = {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  imageUrl: string;
};

export type TripPlan = {
  id: string;
  title: string;
  destinations: string[];
  startDate: string;
  endDate: string;
  activities: string[];
};

export type College = {
  id: string;
  name: string;
  location: string;
  description: string;
  tuition: number;
  majors: string[];
  imageUrl: string;
  ranking?: number;
  accreditation?: string;
  placementRate?: number;
  highestPackage?: number;
  facilities?: string[];
  established?: number;
  website?: string;
};
