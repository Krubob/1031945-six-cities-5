import React from "react";
import PropTypes from 'prop-types';
import {RATING_MULTIPLIER} from "../../const";
import {Link} from "react-router-dom";
import {Path} from "../../const";

const FavoriteItem = (props) => {
  const {city, offers} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
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
  );
};

FavoriteItem.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

export default FavoriteItem;
