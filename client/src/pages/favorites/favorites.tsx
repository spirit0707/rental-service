import { FavoriteCardList } from '../../components/favorite-card-list/favorite-card-list';
import { Logo } from '../../components/logo/logo';
import { JSX } from 'react';
import { OffersList } from '../../types/offer';

type FavoritesProps = {
    offersList: OffersList[];
};

function Favorites({ offersList }: FavoritesProps): JSX.Element {
  const favoriteOffers = offersList.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <span>Favorites</span>
                  </div>
                </div>
                <FavoriteCardList offers={favoriteOffers} />
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export { Favorites };