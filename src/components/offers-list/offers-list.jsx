import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import OfferCard from "../offer-card/offer-card";
import {OfferPropTуpes} from "../../propTypes";

const OffersList = (props) => {
  const {offers, className, changeActiveOffer} = props;

  return (
    <Fragment>
      {offers.map((offer) => (
        <OfferCard
          key={offer.title}
          offer={offer}
          id={offer.id}
          onOfferHover={changeActiveOffer}
          className={className}/>
      ))}
    </Fragment>
  );
};

OffersList.propTypes = {
  changeActiveOffer: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(OfferPropTуpes.isRequired),
  className: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveOffer(id) {
    dispatch(ActionCreator.changeActiveOffer(id));
  },
});

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
