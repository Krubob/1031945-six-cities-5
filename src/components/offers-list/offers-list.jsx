import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import OfferCard from "../offer-card/offer-card";
import {OfferPropTуpes} from "../../propTypes";
import {activeOfferSelector} from "../../store/selectors";
import {changeActiveOffer} from "../../store/action";

const OffersList = (props) => {
  const {offers, className, changeActiveOfferAction} = props;

  return (
    <Fragment>
      {offers.map((offer) => (
        <OfferCard
          key={`${offer.title}-${offer.id}`}
          offer={offer}
          id={offer.id}
          onOfferHover={changeActiveOfferAction}
          className={className}/>
      ))}
    </Fragment>
  );
};

OffersList.propTypes = {
  changeActiveOfferAction: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(OfferPropTуpes.isRequired),
  className: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeOffer: activeOfferSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveOfferAction(id) {
    dispatch(changeActiveOffer(id));
  },
});

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
