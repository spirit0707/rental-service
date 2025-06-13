import { Logo } from "../../components/logo/logo"
import { FullOffer, OffersList } from "../../types/offer";
import { useParams } from "react-router-dom";
import { ErrorPage } from "../error-page/error-page";
import { ReviewForm } from '../../components/review-form/review-form';
import { Map } from '../../components/map/map';
import { reviews } from '../../mocks/reviews';
import { ReviewsList } from '../../components/reviews-list/reviews-list';
import { CitiesCardList } from '../../components/cities-card-list/cities-card-list';
import { useState } from 'react';


type OfferProps = {
    offers: FullOffer[];
    offersList: OffersList[];
};

function Offer({offers, offersList}: OfferProps) {
    const params = useParams();
    const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);
    const offer = offers.find((item) => item.id === params.id);
    
    if (!offer) {
        return <ErrorPage />;
    }
    
    const nearbyOffers = offersList.filter((item) => item.id !== offer.id).slice(0, 3);
    const selectedOffer = hoveredOfferId 
        ? nearbyOffers.find((o) => o.id === hoveredOfferId) || offer 
        : offer;


    return(
        <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Myemail@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
  
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {offer.images.map((image) => (
                  <div className="offer__image-wrapper" key={image}>
                    <img 
                      className="offer__image" 
                      src={`/${image}`} 
                      alt="Photo studio"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {offer.isPremium && (
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name"> {offer.title}</h1>
                  <button
                    className={`offer__bookmark-button button ${
                      offer.isFavorite ? "offer__bookmark-button--active" : ""
                    }`}
                    type="button"
                  >
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use href="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{width: "80%"}}></span>
                    <span className="visually-hidden">{offer.rating}</span>
                  </div>
                  <span className="offer__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {offer.bedrooms} Bedroom{offer.bedrooms !== 1 ? "s" : ""}
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {offer.maxAdults} adult
                    {offer.maxAdults !== 1 ? "s" : ""}
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{offer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {offer.goods.map((good) => (
                      <li className="offer__inside-item" key={good}>
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div
                      className={`offer__avatar-wrapper ${
                        offer.host.isPro ? "offer__avatar-wrapper--pro" : ""
                      } user__avatar-wrapper`}
                    >
                      <img
                        className="offer__avatar user__avatar"
                        src={offer.host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="offer__user-name">{offer.host.name}</span>
                    {offer.host.isPro && (
                      <span className="offer__user-status">Pro</span>
                    )}
                  </div>
                  <div className="offer__description">
                    {offer.description.split("\n").map((paragraph, index) => (
                      <p className="offer__text" key={index}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <ReviewsList reviews={reviews} />
                  <ReviewForm />
                </section>
              </div>
            </div>
            <section className="offer__map map">
            <Map
              city={offer.city}
              offers={nearbyOffers}
              selectedOffer={selectedOffer}
              onMarkerClick={() => {}}
            />
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <CitiesCardList 
                    offersList={nearbyOffers}
                    onListItemHover={setHoveredOfferId}
                  />
                </div>
              </section>
            </div>
          </section>
        </main>
      </div>
    );
}

export {Offer}