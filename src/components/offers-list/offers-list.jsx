import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOfferTitle: null,
    };
    this.handleOfferHover = this.handleOfferHover.bind(this);
  }

  handleOfferHover(title = null) {
    this.setState({
      activeOfferTitle: title
    });
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard key={offer.title} offer={offer} onOfferHover={this.handleOfferHover} />
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  handleOfferHover: PropTypes.func,
  onOfferClick: PropTypes.func,
  offers: PropTypes.arrayOf(OfferCard.propTypes.offer),
};

export default OffersList;
