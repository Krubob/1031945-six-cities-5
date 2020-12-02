import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {Path, BookmarkType} from "../../const";
import {RATING_MULTIPLIER, ClassNameType, OfferCardType} from '../../const';
import {OfferPropTypes} from "../../propTypes";
import {changeActiveOffer} from "../../store/action";
import Bookmark from "../bookmark/bookmark";

const OfferCard = (props) => {
  const {changeActiveOfferAction, offer, className, offerCardType} = props;

  const isFavoriteCardType = offerCardType === OfferCardType.FAVORITE_CARD;

  const onOfferHover = () => {
    changeActiveOfferAction(offer.id);
  };

  return (
    <article onMouseOver={onOfferHover}
      className={`${className} place-card`}
    >
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${isFavoriteCardType ? ClassNameType.FAVORITES : ClassNameType.CITIES}__image-wrapper place-card__image-wrapper`}>
        <Link className="header__logo-link" to={`${Path.OFFER}/${offer.id}`}>
          <img className="place-card__image" src={offer.image} width={isFavoriteCardType ? `150` : `260`} height={isFavoriteCardType ? `110` : `200`} alt="Place image" />
        </Link>
      </div>
      <div className={`${isFavoriteCardType ? ClassNameType.FAVORITES__CARD_INFO : ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.cost}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark className={ClassNameType.PLACE_CARD} bookmarkType={BookmarkType.PLACE_CARD_BOOKMARK} offerId={offer.id} isFavorite={offer.isFavorite} />
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
  offer: OfferPropTypes.isRequired,
  changeActiveOfferAction: PropTypes.func,
  className: PropTypes.string.isRequired,
  offerCardType: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveOfferAction(id) {
    dispatch(changeActiveOffer(id));
  },
});

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
