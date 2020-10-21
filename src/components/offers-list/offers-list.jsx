import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {OfferPropTуpes} from "../../propTypes";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };
    this.handleOfferHover = this.handleOfferHover.bind(this);
  }

  handleOfferHover(offer = null) {
    this.setState({
      activeOffer: offer
    });
  }

  render() {
    const {offers, className} = this.props;

    return (
      <Fragment>
        {offers.map((offer) => (
          <OfferCard key={offer.title} offer={offer} onOfferHover={this.handleOfferHover} className={className}/>
        ))}
      </Fragment>
    );
  }
}

OffersList.propTypes = {
  handleOfferHover: PropTypes.func,
  offers: PropTypes.arrayOf(OfferPropTуpes.isRequired),
  className: PropTypes.string.isRequired,
};

export default OffersList;
