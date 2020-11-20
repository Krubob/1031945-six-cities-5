import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../header/header";
import {OfferPropTуpes} from "../../propTypes";
import {Path} from "../../const";
import {RATING_MULTIPLIER} from "../../const";
import {activeCitySelector} from "../../store/selectors";

const Favorites = (props) => {
  const {offers, activeCity} = props;
  const favoriteOffers = offers.filter((it) => it.isFavorite);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{activeCity}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoriteOffers.map((offer) => (
                    <article key={offer.id} className="favorites__card place-card">
                      <div className="favorites__image-wrapper place-card__image-wrapper">
                        <Link to={`${Path.OFFER}/${offer.id}`}>
                          <img className="place-card__image" src={offer.image} width="150" height="110" alt="Place image" />
                        </Link>
                      </div>
                      <div className="favorites__card-info place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">&euro;{offer.cost}</b>
                            <span className="place-card__price-text">&#47;&nbsp;night</span>
                          </div>
                          <button className={`place-card__bookmark-button ${offer.isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
                            <svg className="place-card__bookmark-icon" width="18" height="19">
                              <use xlinkHref="#icon-bookmark"></use>
                            </svg>
                            <span className="visually-hidden">In bookmarks</span>
                          </button>
                        </div>
                        <div className="place-card__rating rating">
                          <div className="place-card__stars rating__stars">
                            <span style={{width: `${offer.rating * RATING_MULTIPLIER}%`}}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <h2 className="place-card__name">
                          <Link to={`${Path.OFFER}/${offer.id}`}>{offer.title}</Link>
                        </h2>
                        <p className="place-card__type">{offer.type}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <Link className="footer__logo-link" to={Path.MAIN} >
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTуpes.isRequired),
  activeCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: activeCitySelector(state),
});

export {Favorites};
export default connect(mapStateToProps, null)(Favorites);

