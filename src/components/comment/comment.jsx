import React from "react";
import PropTypes from "prop-types";
import {StarPropTypes} from "../../propTypes";
import RatingStar from "../rating-star/rating-star";

const Comment = (props) => {
  const {stars, rating, handleTextAreaChange, handleInputStarClick, handleSubmit} = props;

  return (
    <form className="reviews__form form" onSubmit={handleSubmit} action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star) => (
          <RatingStar key={star.title} star={star} handleInputStarClick={handleInputStarClick} checked={rating === star.value} />
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" onChange={handleTextAreaChange} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

Comment.propTypes = {
  stars: PropTypes.arrayOf(StarPropTypes.isRequired),
  rating: PropTypes.string.isRequired,
  handleTextAreaChange: PropTypes.func.isRequired,
  handleInputStarClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Comment;
