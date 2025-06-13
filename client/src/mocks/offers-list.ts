import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
  {
    id: "bbb868e-3f92-446d-9a68-cb64b5638e2b",
    title: "Wood and stone place",
    type: "apartment",
    price: 370,
    previewImage: "11.jpg",
    city: {
      name: "Paris",
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.866614,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
  },
  {
    id: "c3f8b1d-4a2e-4b5f-9a6c-7d8e9f0a1b2c",
    title: "Beautiful & luxurious apartment at great location",
    type: "apartment",
    price: 120,
    previewImage: "12.jpg",
    city: {
      name: "Cologne",
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.947531,
      longitude: 6.970279,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
  },
];