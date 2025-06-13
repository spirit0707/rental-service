import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
  {
    id: 'offer-1',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 370,
    previewImage: "img/11.jpg",
    images: [
      "img/11.jpg",
      "img/12.jpg",
      "img/13.jpg"
    ],
    description: "A stylish apartment with wood and stone interior.",
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    goods: [
      "Wi-Fi",
      "Kitchen"
    ],
    host: {
      isPro: false,
      name: 'Bob',
      avatarUrl: 'img/avatar-max.jpg',
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
    bedrooms: 1,
    maxAdults: 2
  },
  {
    id: 'offer-2',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    previewImage: "img/12.jpg",
    images: [
      "img/12.jpg",
      "img/13.jpg",
      "img/14.jpg"
    ],
    description: "Beautiful & luxurious apartment at great location.",
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    goods: [
      "Wi-Fi",
      "Kitchen",
      "Washing machine"
    ],
    host: {
      isPro: true,
      name: 'Clara',
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    bedrooms: 2,
    maxAdults: 4
  },
  {
    id: 'offer-3',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 200,
    previewImage: "img/13.jpg",
    images: [
      "img/13.jpg",
      "img/14.jpg",
      "img/15.jpg"
    ],
    description: "Canal view apartment in the heart of Amsterdam.",
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
    goods: [
      "Washing machine",
      "Coffee machine",
      "Dishwasher"
    ],
    host: {
      isPro: false,
      name: 'Dmitry',
      avatarUrl: 'img/avatar-max.jpg',
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.7,
    bedrooms: 1,
    maxAdults: 2
  },
  {
    id: 'offer-4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    previewImage: "img/14.jpg",
    images: [
      "img/14.jpg",
      "img/15.jpg",
      "img/16.jpg"
    ],
    description: "Nice, cozy, warm big bed apartment in Amsterdam.",
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    goods: [
      "Heating",
      "Kitchen",
      "Cable TV",
      "Washing machine"
    ],
    host: {
      isPro: true,
      name: 'Alice',
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.6,
    bedrooms: 2,
    maxAdults: 3
  },
  {
    id: 'offer-5',
    title: 'Stylish apartment in the heart of the city',
    type: 'apartment',
    price: 250,
    previewImage: "img/15.jpg",
    images: [
      "img/15.jpg",
      "img/16.jpg",
      "img/11.jpg"
    ],
    description: "Stylish apartment located in the heart of Amsterdam.",
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.3709553943508,
        longitude: 4.919309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3709553943508,
      longitude: 4.919309666406198,
      zoom: 16,
    },
    goods: [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Dishwasher"
    ],
    host: {
      isPro: false,
      name: 'Bob',
      avatarUrl: 'img/avatar-max.jpg',
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    bedrooms: 2,
    maxAdults: 4
  },
  {
    id: 'offer-6',
    title: 'Modern apartment with city views',
    type: 'apartment',
    price: 300,
    previewImage: "img/16.jpg",
    images: [
      "img/16.jpg",
      "img/11.jpg",
      "img/12.jpg"
    ],
    description: "Modern apartment with stunning city views.",
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.4009553943508,
        longitude: 4.909309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.4009553943508,
      longitude: 4.909309666406198,
      zoom: 16,
    },
    goods: [
      "Wi-Fi",
      "Heating",
      "Kitchen",
      "Washing machine",
      "Air conditioning"
    ],
    host: {
      isPro: true,
      name: 'Clara',
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.4,
    bedrooms: 3,
    maxAdults: 5
  }
];

export { offers };