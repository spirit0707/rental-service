import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { offers } from "./mocks/offers-list";
import { offers as fullOffers } from "./mocks/offer";
import { Setting } from "./const";
import './styles/map.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App 
      offersList={offers}
      offers={fullOffers}
      rentalOffersCount={Setting.rentalOffersCount}
    />
  </React.StrictMode>
);