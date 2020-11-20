import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateOfferFavoriteStatus, fetchFavoriteOffers} from "../../store/api-actions";

const Bookmark = (props) => {
  const {offerId, isFavorite, changeFavoriteOfferStatusAction} = props;

  const handleFavoriteBtnClick = (evt) => {
    evt.preventDefault();
    changeFavoriteOfferStatusAction(offerId, !isFavorite);
  };

  return (
    <button
      className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`}
      type="button"
      onClick={handleFavoriteBtnClick}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

Bookmark.propTypes = {
  offerId: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  changeFavoriteOfferStatusAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteOfferStatusAction(offerId, favoriteStatus) {
    dispatch(updateOfferFavoriteStatus(offerId, favoriteStatus));
    dispatch(fetchFavoriteOffers());
  },
});

export {Bookmark};
export default connect(null, mapDispatchToProps)(Bookmark);

