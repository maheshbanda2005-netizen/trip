import { Adventure, Accommodation, Destination } from "./types";

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Charminar, Hyderabad",
    description: "An iconic 16th-century mosque and monument located in Hyderabad, India.",
    highlights: ["Historical Mosque", "Laad Bazaar", "Street Food", "Architecture"],
    imageUrl: "/destinations/charminar.jpg",
  },
  {
    id: "2",
    name: "Goa Beaches",
    description: "Famous for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.",
    highlights: ["Beach Parties", "Water Sports", "Seafood", "Portuguese Architecture"],
    imageUrl: "/destinations/goa.jpg",
  },
];

export const adventures: Adventure[] = [
  {
    id: "a1",
    name: "Scuba Diving in Grande Island",
    description: "Experience the underwater world with crystal clear waters and diverse marine life.",
    location: "Goa",
    category: "water",
    price: 3500,
    imageUrl: "/adventures/scuba.jpg",
  },
  {
    id: "a2",
    name: "Kayaking through Mangroves",
    description: "Paddle through the serene backwaters and explore the unique ecosystem.",
    location: "Goa",
    category: "water",
    price: 1500,
    imageUrl: "/adventures/kayak.jpg",
  },
  {
    id: "a3",
    name: "Heritage Walk in Old City",
    description: "Discover the hidden gems and history of the old city surrounding Charminar.",
    location: "Hyderabad",
    category: "cultural",
    price: 500,
    imageUrl: "/adventures/heritage-walk.jpg",
  },
];

export const accommodations: Accommodation[] = [
  {
    id: "h1",
    name: "The Grand Residency",
    type: "hotel",
    description: "Luxury stay with a view of the city skyline.",
    location: "Hyderabad",
    pricePerNight: 5000,
    amenities: ["Wi-Fi", "Pool", "Gym", "Restaurant"],
    imageUrl: "/hotels/grand-residency.jpg",
  },
  {
    id: "h2",
    name: "Backpackers Haven",
    type: "hostel",
    description: "Affordable and social accommodation for travelers.",
    location: "Goa",
    pricePerNight: 800,
    amenities: ["Common Room", "Dormitory", "Kitchen"],
    imageUrl: "/hotels/hostel.jpg",
  },
  {
    id: "h3",
    name: "Heritage Homestay",
    type: "room",
    description: "Experience local culture in a traditional home.",
    location: "Hyderabad",
    pricePerNight: 2000,
    amenities: ["Breakfast", "Garden"],
    imageUrl: "/hotels/homestay.jpg",
  },
];
