import React from "react";
import PropTypes from "prop-types";
import {ReviewByIdPropTypes} from "../../propTypes";
import ReviewItem from "../review-item/review-item";

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {reviews.map((review, i) => (
        <li key={`review-${i}`} className="reviews__item">
          <ReviewItem review={review}/>
        </li>
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(ReviewByIdPropTypes.isRequired).isRequired,
};

export default ReviewsList;
