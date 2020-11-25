import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateOfferFavoriteStatus, fetchFavoriteOffers} from "../../store/api-actions";
import {BookmarkType} from "../../const";

const Bookmark = (props) => {
  const {offerId, isFavorite, changeFavoriteOfferStatusAction, className, bookmarkType} = props;

  const isPropertyBookmarkType = bookmarkType === BookmarkType.PROPERTY_BOOKMARK;

  const handleFavoriteBtnClick = (evt) => {
    evt.preventDefault();
    changeFavoriteOfferStatusAction(offerId, !isFavorite);
  };

  return (
    <button
      className={`${className}__bookmark-button ${isFavorite ? `${className}__bookmark-button--active` : ``} button`}
      type="button"
      onClick={handleFavoriteBtnClick}
    >
      <svg className={`${className}__bookmark-icon`} width={isPropertyBookmarkType ? `31` : `18`} height={isPropertyBookmarkType ? `33` : `19`}>
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
  className: PropTypes.string.isRequired,
  bookmarkType: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteOfferStatusAction(offerId, favoriteStatus) {
    dispatch(updateOfferFavoriteStatus(offerId, favoriteStatus));
    dispatch(fetchFavoriteOffers());
  },
});

export {Bookmark};
export default connect(null, mapDispatchToProps)(Bookmark);

