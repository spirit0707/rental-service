import { MainPage } from "../../pages/main-page/main-page";
import { Favorites } from "../../pages/favorites/favorites";
import { Login } from "../../pages/login/login";
import { Offer } from "../../pages/offer/offer";
import { ErrorPage } from "../../pages/error-page/error-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { JSX } from "react";
import { AppRoute, AuthorizationStatus } from '../../const';
import { PrivateRoute } from "../private-route/private-route";
import { FullOffer, OffersList } from "../../types/offer";

type AppMainPageProps = {
    rentalOffersCount: number;
    offersList: OffersList[];
    offers: FullOffer[];
}

function App({ offersList, offers, rentalOffersCount }: AppMainPageProps): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Main} element={<MainPage rentalOffersCount={rentalOffersCount} offersList={offersList} />} />
                <Route path={AppRoute.Login} element={<Login />} />
                <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth} >
                    <Favorites offersList={offersList} /></PrivateRoute>} />
                <Route path={`${AppRoute.Offer}/:id`} element={<Offer offers={offers} offersList={offersList} />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export { App };