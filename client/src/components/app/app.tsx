import { JSX } from "react";
import { MainPage } from "../../pages/main-page/main-page";
import { Favorites } from "../../pages/favorites/favorites";
import { Login } from "../../pages/login/login";
import { Offer } from "../../pages/offer/offer";
import { ErrorPage } from "../../pages/error-page/error-page";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { PrivateRoute } from "../private-route/private-route";
import { FullOffer, OffersList } from "../../types/offer";
import { offersList } from "../../mocks/offers-list";


type AppMainPageProps = {
  rentalOffersCount: number;
  offersList: OffersList[];
  offers: FullOffer[];
};


function App({rentalOffersCount, offers}: AppMainPageProps): JSX.Element {
    return(
        <BrowserRouter>
        <Routes>
            <Route
            path={AppRoute.Main}
            element={<MainPage rentalOffersCount={ rentalOffersCount } offersList={ offersList }/>}
            />
        {/* <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
        /> */}
        <Route path={AppRoute.Favorites} element={<Favorites />} />
        <Route path={AppRoute.Login} element={<Login />}/>
        <Route path={AppRoute.Offer} element={<Offer offers={offers} />} />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<Offer offers={offers} />}
        />
        <Route path={"*"} element={<ErrorPage />} />
        </Routes>

        </BrowserRouter>
    )
}

export { App };