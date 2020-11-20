import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {Path} from "../../const";
import {RATING_MULTIPLIER} from '../../const';
import {OfferPropTуpes} from "../../propTypes";
import {changeActiveOffer} from "../../store/action";
import Bookmark from "../bookmark/bookmark";

const OfferCard = (props) => {
  const {changeActiveOfferAction, offer, className} = props;

  const onOfferHover = () => {
    changeActiveOfferAction(offer.id);
  };

  return (
    <article onMouseOver={onOfferHover}
      className={`${className}__place-card place-card`}
    >
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
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
          <Bookmark offerId={offer.id} isFavorite={offer.isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating * RATING_MULTIPLIER}%`}}></span>
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
  offer: OfferPropTуpes.isRequired,
  changeActiveOfferAction: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveOfferAction(id) {
    dispatch(changeActiveOffer(id));
  },
});

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
