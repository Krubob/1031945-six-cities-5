import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Path} from "../../const";
import {RATING_MULTIPLIER} from '../../const';
import {OfferPropTуpes} from "../../propTypes";

const OfferCard = (props) => {
  const {id, onOfferHover, offer, className} = props;

  return (
    <article onMouseOver={() => {
      onOfferHover(id);
    }}
    className={`${className}__place-card place-card`}
    >
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link className="header__logo-link" to={`${Path.OFFER}/${offer.id}`}>
          <img className="place-card__image" src={offer.image} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.cost}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating * RATING_MULTIPLIER}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${Path.OFFER}/${offer.id}`} href="#">{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  id: PropTypes.string.isRequired,
  offer: OfferPropTуpes.isRequired,
  onOfferHover: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default OfferCard;
