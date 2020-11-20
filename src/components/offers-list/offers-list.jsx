import React, {Fragment} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {OfferPropTуpes} from "../../propTypes";

const OffersList = (props) => {
  const {offers, className} = props;

  return (
    <Fragment>
      {offers.map((offer) => (
        <OfferCard
          key={`${offer.title}-${offer.id}`}
          offer={offer}
          className={className}
          isFavorite={offer.isFavorite}
        />
      ))}
    </Fragment>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTуpes.isRequired),
  className: PropTypes.string.isRequired,
};

export default OffersList;
