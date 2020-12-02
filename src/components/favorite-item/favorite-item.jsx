import React from "react";
import PropTypes from 'prop-types';
import {ClassNameType, OfferCardType} from "../../const";
import OfferCard from "../offer-card/offer-card";

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
          <OfferCard
            key={`${offer.title}-${offer.id}`}
            offer={offer}
            className={ClassNameType.FAVORITES_CARD}
            isFavorite={offer.isFavorite}
            offerCardType={OfferCardType.FAVORITE_CARD}
          />
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
