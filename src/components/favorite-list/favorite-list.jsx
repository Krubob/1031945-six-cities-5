import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import FavoriteItem from "../favorite-item/favorite-item";

const FavoriteList = (props) => {
  const {favoriteOffersByCity} = props;

  return (
    <Fragment>
      {(Object.keys(favoriteOffersByCity)).map((city) => (
        <FavoriteItem key={`favorite-${city}`} city={city} offers={favoriteOffersByCity[city]} />
      ))}
    </Fragment>
  );
};

FavoriteList.propTypes = {
  favoriteOffersByCity: PropTypes.object.isRequired,
};

export default FavoriteList;
