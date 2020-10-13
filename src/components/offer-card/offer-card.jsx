import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Path} from "../../const";

const OfferCard = (props) => {
  const {onOfferHover, offer} = props;
  const premiumCardMark = <div className="place-card__mark"><span>Premium</span></div>;

  return (
    <article onMouseOver={() => {
      onOfferHover(offer.title);
    }} className="cities__place-card place-card">
      {offer.isPremium ? premiumCardMark : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
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
            <span style={{width: offer.rating + `%`}}></span>
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
  onOfferHover: PropTypes.func,
  onOfferClick: PropTypes.func,
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    features: PropTypes.shape({
      type: PropTypes.string.isRequired,
      bedrooms: PropTypes.number.isRequired,
      guests: PropTypes.number.isRequired,
    }),
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    mark: PropTypes.string,
    service: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    owner: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired
    }).isRequired
  })
};

export default OfferCard;
