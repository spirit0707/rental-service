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
  },
  // Paris
  {
    id: 'offer-12',
    title: 'Elegant loft near Eiffel Tower',
    type: 'loft',
    price: 260,
    previewImage: "img/26.jpg",
    images: ["img/26.jpg", "img/27.jpg", "img/28.jpg"],
    description: "A stylish loft with a view of the Eiffel Tower.",
    city: {
      name: "Paris",
      location: {
        latitude: 48.8566,
        longitude: 2.2055,
        zoom: 8,
      },
    },
    location: {
      latitude: 48.858,
      longitude: 2.207,
      zoom: 16,
    },
    goods: ["Wi-Fi", "Elevator", "Balcony"],
    host: {
      isPro: true,
      name: 'Jean',
      avatarUrl: 'img/avatar-max.jpg',
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    bedrooms: 1,
    maxAdults: 2
  },
  // Paris - Budget room in Paris center
  {
    id: 'offer-13',
    title: 'Budget room in Paris center',
    type: 'room',
    price: 90,
    previewImage: "img/27.jpg",
    images: ["img/27.jpg", "img/28.jpg", "img/29.jpg"],
    description: "Affordable room in the center of Paris, perfect for solo travelers.",
    city: {
      name: "Paris",
      location: {
        latitude: 48.8566,
        longitude: 2.2055,
        zoom: 8,
      },
    },
    location: {
      latitude: 48.859,
      longitude: 2.208,
      zoom: 16,
    },
    goods: ["Wi-Fi", "Shared kitchen", "Heating"],
    host: {
      isPro: false,
      name: 'Pierre',
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
    bedrooms: 1,
    maxAdults: 1
  },
  // Cologne
  {
    id: 'offer-14',
    title: 'Spacious house in Cologne',
    type: 'house',
    price: 350,
    previewImage: "img/30.jpg",
    images: ["img/30.jpg", "img/31.jpg", "img/32.jpg"],
    description: "Large house perfect for families or groups in Cologne.",
    city: {
      name: "Cologne",
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
        zoom: 8,
      },
    },
    location: {
      latitude: 50.939,
      longitude: 6.962,
      zoom: 16,
    },
    goods: ["Wi-Fi", "Garden", "Fireplace"],
    host: {
      isPro: true,
      name: 'Marie',
      avatarUrl: 'img/avatar-max.jpg',
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    bedrooms: 4,
    maxAdults: 8
  },
  // Cologne - Cozy studio in Cologne center
  {
    id: 'offer-15',
    title: 'Cozy studio in Cologne center',
    type: 'studio',
    price: 110,
    previewImage: "img/29.jpg",
    images: ["img/29.jpg", "img/30.jpg", "img/31.jpg"],
    description: "A cozy studio in the heart of Cologne, close to all attractions.",
    city: {
      name: "Cologne",
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
        zoom: 8,
      },
    },
    location: {
      latitude: 50.940,
      longitude: 6.963,
      zoom: 16,
    },
    goods: ["Wi-Fi", "Kitchen", "TV"],
    host: {
      isPro: true,
      name: 'Hans',
      avatarUrl: 'img/avatar-max.jpg',
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.0,
    bedrooms: 1,
    maxAdults: 2
  },
  // Brussels
  {
    id: 'offer-16',
    title: 'Spacious house in Brussels',
    type: 'house',
    price: 350,
    previewImage: "img/30.jpg",
    images: ["img/30.jpg", "img/31.jpg", "img/32.jpg"],
    description: "Large house perfect for families or groups in Brussels.",
    city: {
      name: "Brussels",
      location: {
        latitude: 50.8503,
        longitude: 4.3517,
        zoom: 8,
      },
    },
    location: {
      latitude: 50.852,
      longitude: 4.353,
      zoom: 16,
    },
    goods: ["Wi-Fi", "Garden", "Fireplace"],
    host: {
      isPro: true,
      name: 'Marie',
      avatarUrl: 'img/avatar-max.jpg',
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    bedrooms: 4,
    maxAdults: 8
  },
  // Brussels - Budget apartment in Brussels
  {
    id: 'offer-17',
    title: 'Budget apartment in Brussels',
    type: 'apartment',
    price: 130,
    previewImage: "img/31.jpg",
    images: ["img/31.jpg", "img/32.jpg", "img/33.jpg"],
    description: "Affordable apartment in Brussels, ideal for short stays.",
    city: {
      name: "Brussels",
      location: {
        latitude: 50.8503,
        longitude: 4.3517,
        zoom: 8,
      },
    },
    location: {
      latitude: 50.853,
      longitude: 4.354,
      zoom: 16,
    },
    goods: ["Wi-Fi", "Kitchen", "Washing machine"],
    host: {
      isPro: false,
      name: 'Sophie',
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    bedrooms: 1,
    maxAdults: 2
  },
  // Hamburg
  {
    id: 'offer-18',
    title: 'Harbor view apartment in Hamburg',
    type: 'apartment',
    price: 310,
    previewImage: "img/32.jpg",
    images: ["img/32.jpg", "img/33.jpg", "img/34.jpg"],
    description: "Modern apartment with a view of Hamburg harbor.",
    city: {
      name: "Hamburg",
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 8,
      },
    },
    location: {
      latitude: 53.553,
      longitude: 9.995,
      zoom: 16,
    },
    goods: ["Wi-Fi", "Balcony", "Coffee machine"],
    host: {
      isPro: false,
      name: 'Lars',
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
    bedrooms: 2,
    maxAdults: 4
  },
  // Hamburg - Economy room in Hamburg
  {
    id: 'offer-19',
    title: 'Economy room in Hamburg',
    type: 'room',
    price: 80,
    previewImage: "img/33.jpg",
    images: ["img/33.jpg", "img/34.jpg", "img/35.jpg"],
    description: "Simple and affordable room in Hamburg for budget travelers.",
    city: {
      name: "Hamburg",
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 8,
      },
    },
    location: {
      latitude: 53.554,
      longitude: 9.996,
      zoom: 16,
    },
    goods: ["Wi-Fi", "Heating"],
    host: {
      isPro: false,
      name: 'Greta',
      avatarUrl: 'img/avatar-max.jpg',
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.9,
    bedrooms: 1,
    maxAdults: 1
  },
  // Dusseldorf
  {
    id: 'offer-20',
    title: 'Central suite in Dusseldorf',
    type: 'suite',
    price: 270,
    previewImage: "img/34.jpg",
    images: ["img/34.jpg", "img/35.jpg", "img/36.jpg"],
    description: "Business suite in the heart of Dusseldorf.",
    city: {
      name: "Dusseldorf",
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 8,
      },
    },
    location: {
      latitude: 51.229,
      longitude: 6.775,
      zoom: 16,
    },
    goods: ["Wi-Fi", "Air conditioning", "Breakfast"],
    host: {
      isPro: true,
      name: 'Sven',
      avatarUrl: 'img/avatar-max.jpg',
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.5,
    bedrooms: 1,
    maxAdults: 2
  },
  // Dusseldorf - Affordable apartment in Dusseldorf
  {
    id: 'offer-21',
    title: 'Affordable apartment in Dusseldorf',
    type: 'apartment',
    price: 120,
    previewImage: "img/35.jpg",
    images: ["img/35.jpg", "img/36.jpg", "img/37.jpg"],
    description: "Affordable apartment in Dusseldorf, close to city center.",
    city: {
      name: "Dusseldorf",
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 8,
      },
    },
    location: {
      latitude: 51.230,
      longitude: 6.776,
      zoom: 16,
    },
    goods: ["Wi-Fi", "Kitchen", "Parking"],
    host: {
      isPro: true,
      name: 'Lukas',
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.0,
    bedrooms: 1,
    maxAdults: 2
  }
];

export { offers };