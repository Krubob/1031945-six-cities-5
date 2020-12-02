import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateOfferFavoriteStatus, fetchFavoriteOffers} from "../../store/api-actions";
import {isUserAuthorizedSelector} from "../../store/selectors";
import {BookmarkType, BookmarkImageSize, Path} from "../../const";
import browserHistory from "../../browser-history";

const Bookmark = (props) => {
  const {offerId, isFavorite, onChangeFavoriteOfferStatusAction, className, bookmarkType, isUserAuthorized} = props;

  const isPropertyBookmarkType = bookmarkType === BookmarkType.PROPERTY_BOOKMARK;

  const handleFavoriteBtnClick = (evt) => {
    evt.preventDefault();

    if (isUserAuthorized) {
      onChangeFavoriteOfferStatusAction(offerId, !isFavorite);
    } else {
      browserHistory.push(Path.LOGIN);
    }
  };

  return (
    <button
      className={`${className}__bookmark-button ${isFavorite ? `${className}__bookmark-button--active` : ``} button`}
      type="button"
      onClick={handleFavoriteBtnClick}
    >
      <svg className={`${className}__bookmark-icon`} width={isPropertyBookmarkType ? BookmarkImageSize.property.width : BookmarkImageSize.placeCard.width} height={isPropertyBookmarkType ? BookmarkImageSize.property.height : BookmarkImageSize.placeCard.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{`${isFavorite ? `In` : `To`} bookmarks`}</span>
    </button>
  );
};

Bookmark.propTypes = {
  offerId: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onChangeFavoriteOfferStatusAction: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  bookmarkType: PropTypes.string.isRequired,
  isUserAuthorized: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuthorized: isUserAuthorizedSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFavoriteOfferStatusAction(offerId, favoriteStatus) {
    dispatch(updateOfferFavoriteStatus(offerId, favoriteStatus));
    dispatch(fetchFavoriteOffers());
  },
});

export {Bookmark};
export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);

