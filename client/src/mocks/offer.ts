import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
  {
    id: 'bbb868e-3f92-446d-9a68-cb64b5638e2b',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 370,
    images: [
      "11.jpg",
      "12.jpg"
    ],
    description: "Описание...",
    city: {
      name: "Paris",
      location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 }
    },
    location: { latitude: 48.866614, longitude: 2.342499, zoom: 16 },
    goods: ["Wi-Fi", "Kitchen"],
    host: { isPro: false, name: "Bob", avatarUrl: "img/avatar-bob.jpg" },
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
    bedrooms: 1,
    maxAdults: 2
  },
  {
    id: 'c3f8b1d-4a2e-4b5f-9a6c-7d8e9f0a1b2c',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    images: [
      "12.jpg",
      "12.jpg"
    ],
    description: "Описание...",
    city: {
      name: "Cologne",
      location: { latitude: 50.937531, longitude: 6.960279, zoom: 13 }
    },
    location: { latitude: 50.947531, longitude: 6.970279, zoom: 16 },
    goods: ["Wi-Fi", "Kitchen"],
    host: { isPro: true, name: "Alice", avatarUrl: "img/avatar-alice.jpg" },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    bedrooms: 2,
    maxAdults: 4
  }
];

export { offers };