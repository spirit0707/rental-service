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
  }
];
