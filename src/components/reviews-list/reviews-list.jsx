import React from "react";
import PropTypes from "prop-types";
import {ReviewsByIdPropTypes} from "../../propTypes";
import ReviewItem from "../review-item/review-item";

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {reviews.map((review) => (
        <li key={`review-${review.id}`} className="reviews__item">
          <ReviewItem review={review}/>
        </li>
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(ReviewsByIdPropTypes.isRequired).isRequired,
};

export default ReviewsList;
