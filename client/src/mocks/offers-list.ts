import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
  {
    id: 'offer-1',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 370,
    previewImage: "img/11.jpg",
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
    isFavorite: true,
    isPremium: false,
    rating: 4.9
  },
  {
    id: 'offer-2',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    previewImage: "img/12.jpg",
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
    isFavorite: false,
    isPremium: true,
    rating: 4.8
  },
  {
    id: 'offer-3',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 200,
    previewImage: "img/13.jpg",
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
    isFavorite: false,
    isPremium: false,
    rating: 4.7
  },
  {
    id: 'offer-4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    previewImage: "img/14.jpg",
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
    isFavorite: true,
    isPremium: true,
    rating: 4.6
  },
  {
    id: 'offer-5',
    title: 'Stylish apartment in the heart of the city',
    type: 'apartment',
    price: 250,
    previewImage: "img/15.jpg",
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
    isFavorite: false,
    isPremium: false,
    rating: 4.5
  },
  {
    id: 'offer-6',
    title: 'Modern apartment with city views',
    type: 'apartment',
    price: 300,
    previewImage: "img/16.jpg",
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
    isFavorite: true,
    isPremium: true,
    rating: 4.4
  },
  {
    id: 'offer-7',
    title: 'Charming studio in the heart of Paris',
    type: 'studio',
    price: 210,
    previewImage: "img/21.jpg",
    city: {
      name: "Paris",
      location: {
        latitude: 48.8566,
        longitude: 2.2055,
        zoom: 8,
      },
    },
    location: {
      latitude: 48.857,
      longitude: 2.206,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7
  },
  {
    id: 'offer-8',
    title: 'Modern flat in Cologne',
    type: 'apartment',
    price: 180,
    previewImage: "img/22.jpg",
    city: {
      name: "Cologne",
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
        zoom: 8,
      },
    },
    location: {
      latitude: 50.938,
      longitude: 6.961,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.3
  },
  {
    id: 'offer-9',
    title: 'Cozy house in Brussels',
    type: 'house',
    price: 320,
    previewImage: "img/23.jpg",
    city: {
      name: "Brussels",
      location: {
        latitude: 50.8503,
        longitude: 4.3517,
        zoom: 8,
      },
    },
    location: {
      latitude: 50.851,
      longitude: 4.352,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5
  },
  {
    id: 'offer-10',
    title: 'Luxury apartment in Hamburg',
    type: 'apartment',
    price: 400,
    previewImage: "img/24.jpg",
    city: {
      name: "Hamburg",
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 8,
      },
    },
    location: {
      latitude: 53.552,
      longitude: 9.994,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9
  },
  {
    id: 'offer-11',
    title: 'Business suite in Dusseldorf',
    type: 'suite',
    price: 350,
    previewImage: "img/25.jpg",
    city: {
      name: "Dusseldorf",
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 8,
      },
    },
    location: {
      latitude: 51.228,
      longitude: 6.774,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2
  },
  {
    id: 'offer-12',
    title: 'Elegant loft near Eiffel Tower',
    type: 'loft',
    price: 260,
    previewImage: "img/26.jpg",
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
    isFavorite: true,
    isPremium: false,
    rating: 4.8
  },
  {
    id: 'offer-13',
    title: 'Budget room in Paris center',
    type: 'room',
    price: 90,
    previewImage: "img/27.jpg",
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
    isFavorite: false,
    isPremium: false,
    rating: 4.1
  },
  {
    id: 'offer-14',
    title: 'Family apartment in Cologne',
    type: 'apartment',
    price: 220,
    previewImage: "img/28.jpg",
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
    isFavorite: false,
    isPremium: true,
    rating: 4.6
  },
  {
    id: 'offer-15',
    title: 'Cozy studio in Cologne center',
    type: 'studio',
    price: 110,
    previewImage: "img/29.jpg",
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
    isFavorite: true,
    isPremium: false,
    rating: 4.0
  },
  {
    id: 'offer-16',
    title: 'Spacious house in Brussels',
    type: 'house',
    price: 350,
    previewImage: "img/30.jpg",
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
    isFavorite: false,
    isPremium: true,
    rating: 4.9
  },
  {
    id: 'offer-17',
    title: 'Budget apartment in Brussels',
    type: 'apartment',
    price: 130,
    previewImage: "img/31.jpg",
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
    isFavorite: true,
    isPremium: false,
    rating: 4.2
  },
  {
    id: 'offer-18',
    title: 'Harbor view apartment in Hamburg',
    type: 'apartment',
    price: 310,
    previewImage: "img/32.jpg",
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
    isFavorite: false,
    isPremium: false,
    rating: 4.4
  },
  {
    id: 'offer-19',
    title: 'Economy room in Hamburg',
    type: 'room',
    price: 80,
    previewImage: "img/33.jpg",
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
    isFavorite: true,
    isPremium: false,
    rating: 3.9
  },
  {
    id: 'offer-20',
    title: 'Central suite in Dusseldorf',
    type: 'suite',
    price: 270,
    previewImage: "img/34.jpg",
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
    isFavorite: false,
    isPremium: true,
    rating: 4.5
  },
  {
    id: 'offer-21',
    title: 'Affordable apartment in Dusseldorf',
    type: 'apartment',
    price: 120,
    previewImage: "img/35.jpg",
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
    isFavorite: true,
    isPremium: false,
    rating: 4.0
  }
];
