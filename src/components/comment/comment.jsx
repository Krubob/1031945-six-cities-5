import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {StarPropTypes} from "../../propTypes";
import RatingStar from "../rating-star/rating-star";
import {sendReview} from "../../store/api-actions";
import {connect} from "react-redux";

class Comment extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {rating, review, offerId, sendReviewAction, handleFormDataClear, handleResponseWaitingChange} = this.props;
    evt.preventDefault();

    handleResponseWaitingChange(true);

    sendReviewAction({
      rating,
      review,
      offerId,
    },
    handleResponseWaitingChange,
    );

    handleFormDataClear();
  }

  render() {
    const {review, stars, rating, handleTextAreaChange, handleInputStarClick, isDisabledSubmitBtn} = this.props;

    return (
      <form className="reviews__form form" onSubmit={this.handleSubmit} action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {stars.map((star) => (
            <RatingStar key={star.title} star={star} handleInputStarClick={handleInputStarClick} checked={rating === star.value} />
          ))}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          onChange={handleTextAreaChange}
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
  }
}

Comment.propTypes = {
  stars: PropTypes.arrayOf(StarPropTypes.isRequired),
  rating: PropTypes.string.isRequired,
  handleTextAreaChange: PropTypes.func.isRequired,
  handleInputStarClick: PropTypes.func.isRequired,
  handleFormDataClear: PropTypes.func.isRequired,
  handleResponseWaitingChange: PropTypes.func.isRequired,
  review: PropTypes.string.isRequired,
  offerId: PropTypes.string.isRequired,
  sendReviewAction: PropTypes.func.isRequired,
  isDisabledSubmitBtn: PropTypes.bool.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  sendReviewAction(reviewData) {
    dispatch(sendReview(reviewData));
  },
});

export {Comment};
export default connect(null, mapDispatchToProps)(Comment);
