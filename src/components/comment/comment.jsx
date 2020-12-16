import React, {useReducer, useCallback} from "react";
import PropTypes from "prop-types";
import {StarPropTypes} from "../../propTypes";
import RatingStar from "../rating-star/rating-star";
import {sendReview} from "../../store/api-actions";
import {connect} from "react-redux";
import {REVIEW_TEXT} from "../../const";
import {extend} from "../../utils";

const Comment = (props) => {
  const {stars, offerId, sendReviewAction} = props;

  const ActionType = {
    SET_IS_RESPONSE_WAITING: `SET_IS_RESPONSE_WAITING`,
    CLEAR_FORM_DATA: `CLEAR_FORM_DATA`,
    SET_FORM_REVIEW_VALUE: `SET_FORM_REVIEW_VALUE`,
    SET_FORM_RATING_VALUE: `SET_FORM_RATING_VALUE`,
  };

  const setIsResponseWaiting = (isWaiting) => ({
    type: ActionType.SET_IS_RESPONSE_WAITING,
    payload: isWaiting,
  });

  const clearFormData = () => ({
    type: ActionType.CLEAR_FORM_DATA,
  });

  const setFormReviewValue = (evt) => ({
    type: ActionType.SET_FORM_REVIEW_VALUE,
    payload: evt.target.value,
  });

  const setFormRatingValue = (evt) => ({
    type: ActionType.SET_FORM_RATING_VALUE,
    payload: evt.target.value,
  });

  const initialState = {
    rating: ``,
    review: ``,
    isResponseWaiting: false,
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.SET_IS_RESPONSE_WAITING:
        return extend(state, {
          isResponseWaiting: action.payload,
        });
      case ActionType.CLEAR_FORM_DATA:
        return extend(state, {
          rating: ``,
          review: ``,
        });
      case ActionType.SET_FORM_REVIEW_VALUE:
        return extend(state, {
          review: action.payload,
        });
      case ActionType.SET_FORM_RATING_VALUE:
        return extend(state, {
          rating: action.payload,
        });
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const {rating, review, isResponseWaiting} = state;

  const onTextAreaChange = useCallback((evt) => {
    dispatch(setFormReviewValue(evt));
  }, [rating, review]);
  const onInputStarClick = useCallback((evt) => {
    dispatch(setFormRatingValue(evt));
  }, [rating]);
  const onFormDataClear = () => dispatch(clearFormData());
  const onResponseWaitingChange = (status) => dispatch(setIsResponseWaiting(status));

  const isValid = rating && review.length >= REVIEW_TEXT.MIN_VALUE && review.length <= REVIEW_TEXT.MAX_VALUE;
  const isDisabledSubmitBtn = !isValid && !isResponseWaiting;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onResponseWaitingChange(true);

    sendReviewAction({rating, review, offerId, onResponseWaitingChange});

    onFormDataClear();
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit} action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star) => (
          <RatingStar key={star.title} star={star} onInputStarClick={onInputStarClick} checked={rating === star.value} />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        onChange={onTextAreaChange}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabledSubmitBtn}>Submit</button>
      </div>
    </form>
  );
};

Comment.propTypes = {
  stars: PropTypes.arrayOf(StarPropTypes.isRequired),
  offerId: PropTypes.string.isRequired,
  sendReviewAction: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  sendReviewAction(reviewData) {
    dispatch(sendReview(reviewData));
  },
});

export {Comment};
export default connect(null, mapDispatchToProps)(Comment);
