import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import FavoriteItem from "../favorite-item/favorite-item";

const FavoriteList = (props) => {
  const {favoriteOffers} = props;
  const favoriteOffersByCity = {};
  favoriteOffers.forEach((it) => {
    favoriteOffersByCity[it.city] = favoriteOffersByCity[it.city] ? [...(favoriteOffersByCity[it.city]), it] : [it];
  });

  return (
    <Fragment>
      {(Object.keys(favoriteOffersByCity)).map((city) => (
        <FavoriteItem key={`favorite-${city}`} city={city} offers={favoriteOffersByCity[city]} />
      ))}
    </Fragment>
  );
};

FavoriteList.propTypes = {
  favoriteOffers: PropTypes.array.isRequired,
};

export default FavoriteList;
