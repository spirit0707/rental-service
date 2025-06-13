import { createReducer } from "@reduxjs/toolkit";
import { OffersList } from "../types/offer";
import { getCity } from '../utils';
import { changeCity, offersCityList } from './action';
import { CITIES_LOCATION } from '../const';

const defaultCity = getCity(CITIES_LOCATION);

const initialState = {
    city: defaultCity,
    offers: offersList,
};
