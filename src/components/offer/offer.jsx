import React from "react";
import PropTypes from "prop-types";
import Comment from "../comment/comment";
import Header from "../header/header";
import ReviewsList from "../reviews-list/reviews-list";
import Map from "../map/map";
import OffersList from "../offers-list/offers-list";
import withComment from "../hocs/with-comment/with-comment";
import {RATING_MULTIPLIER, className} from '../../const';
import {OfferPropTуpes, ReviewPropTypes} from "../../propTypes";
import {stars} from "../../const";

const CommentWrapped = withComment(Comment);

const Offer = (props) => {
  const {offer, nearOffers, reviews} = props;
  const reviewsById = reviews.find((review) => review.id === offer.id);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.photos.map((img, index) => (
                <div className="property__image-wrapper" key={`gallery-item${index}`} >
                  <img className="property__image" src={img} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${offer.rating * RATING_MULTIPLIER}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.features.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.features.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.features.guests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.cost}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.service.map((it, id) => (
                    <li key={it + id} className="property__inside-item">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.owner.avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.owner.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.owner.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviewsById.reviews} />
                <CommentWrapped stars={stars} />
              </section>
            </div>
          </div>
          <Map offers={nearOffers} className={className.NEAR} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={nearOffers} className={className.PROPERTY} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Offer.propTypes = {
  offer: OfferPropTуpes.isRequired,
  reviews: PropTypes.arrayOf(ReviewPropTypes.isRequired).isRequired,
  nearOffers: PropTypes.array.isRequired,
};

export default Offer;
