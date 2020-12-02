import React, {Fragment} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {OfferPropTypes} from "../../propTypes";
import {ClassNameType, OfferCardType} from "../../const";

const OffersList = (props) => {
  const {offers} = props;

  return (
    <Fragment>
      {offers.map((offer) => (
        <OfferCard
          key={`${offer.title}-${offer.id}`}
          offer={offer}
          className={ClassNameType.CITIES_PLACE_CARD}
          isFavorite={offer.isFavorite}
          offerCardType={OfferCardType.OFFER_CARD}
        />
      ))}
    </Fragment>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes.isRequired),
};

export default OffersList;
