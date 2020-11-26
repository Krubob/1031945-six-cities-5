import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Comment from "../comment/comment";
import Header from "../header/header";
import ReviewsList from "../reviews-list/reviews-list";
import Map from "../map/map";
import OffersList from "../offers-list/offers-list";
import withComment from "../hocs/with-comment/with-comment";
import {RATING_MULTIPLIER, ClassNameType, BookmarkType} from '../../const';
import {ReviewPropTypes} from "../../propTypes";
import {stars} from "../../const";
import {fetchOffer, fetchReviews, fetchNearOffers} from "../../store/api-actions";
import {offerSelector, nearOffersSelector, isOfferLoadedSelector, isUserAuthorizedSelector, getSortedReviewsSelector, changedFavoriteOfferSelector, offerFavoriteStatusSelector} from "../../store/selectors";
import Bookmark from "../bookmark/bookmark";

const CommentWrapped = withComment(Comment);

class Offer extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offerId, loadOfferAction, loadReviewsAction, loadNearOffersAction} = this.props;
    loadOfferAction(offerId);
    loadReviewsAction(offerId);
    loadNearOffersAction(offerId);
  }

  componentDidUpdate(prevProps) {
    const {offerId, loadOfferAction, loadReviewsAction, loadNearOffersAction} = this.props;
    if (prevProps.offerId !== offerId) {
      loadOfferAction(offerId);
      loadReviewsAction(offerId);
      loadNearOffersAction(offerId);
    }
  }

  render() {
    const {offer, nearOffers, isOfferLoaded, isUserAuthorized, availableReviews, offerFavoriteStatus, changedFavoriteOffer} = this.props;

    return !isOfferLoaded ? (
      <div>LOADING...</div>
    ) : (
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.photos.map((img, index) => (
                  <div className="property__image-wrapper" key={`gallery-item-${index}`} >
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
                  <Bookmark className={ClassNameType.PROPERTY} bookmarkType={BookmarkType.PROPERTY_BOOKMARK} offerId={offer.id} isFavorite={offer.id === changedFavoriteOffer.id ? offerFavoriteStatus : offer.isFavorite} />
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
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                  Max {offer.guests} adults
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
                    <div className={`property__avatar-wrapper ${offer.isHostPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={offer.avatar} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {offer.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewsList reviews={availableReviews} />
                  {isUserAuthorized && <CommentWrapped stars={stars} offerId={offer.id} />}
                </section>
              </div>
            </div>
            <Map offers={[offer, ...nearOffers]} className={ClassNameType.PROPERTY} />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OffersList offers={nearOffers}/>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Offer.propTypes = {
  offer: PropTypes.any.isRequired,
  offerId: PropTypes.string.isRequired,
  availableReviews: PropTypes.arrayOf(ReviewPropTypes.isRequired).isRequired,
  nearOffers: PropTypes.array.isRequired,
  loadOfferAction: PropTypes.func.isRequired,
  loadReviewsAction: PropTypes.func.isRequired,
  loadNearOffersAction: PropTypes.func.isRequired,
  isOfferLoaded: PropTypes.bool.isRequired,
  isUserAuthorized: PropTypes.bool.isRequired,
  offerFavoriteStatus: PropTypes.bool,
  changedFavoriteOffer: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => ({
  offer: offerSelector(state),
  availableReviews: getSortedReviewsSelector(state),
  nearOffers: nearOffersSelector(state),
  isOfferLoaded: isOfferLoadedSelector(state),
  isUserAuthorized: isUserAuthorizedSelector(state),
  changedFavoriteOffer: changedFavoriteOfferSelector(state),
  offerFavoriteStatus: offerFavoriteStatusSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadOfferAction(offerId) {
    dispatch(fetchOffer(offerId));
  },
  loadReviewsAction(offerId) {
    dispatch(fetchReviews(offerId));
  },
  loadNearOffersAction(offerId) {
    dispatch(fetchNearOffers(offerId));
  },
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
