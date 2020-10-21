import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {StarPropTypes} from "../../propTypes";
import RatingStar from "../rating-star/rating-star";

class Comment extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: `1`,
      review: ``,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleInputStarClick = this.handleInputStarClick.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleTextAreaChange(evt) {
    const {value} = evt.target;
    this.setState({review: value});
  }

  handleInputStarClick(evt) {
    const {value} = evt.target;
    this.setState({rating: value});
  }

  render() {
    const {stars} = this.props;
    const {rating} = this.state;

    return (
      <form className="reviews__form form" onSubmit={this.handleSubmit} action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {stars.map((star) => (
            <RatingStar key={star.title} star={star} onInputStarClick={this.handleInputStarClick} checked={rating === star.value} />
          ))}
        </div>
        <textarea className="reviews__textarea form__textarea" onChange={this.handleTextAreaChange} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}

Comment.propTypes = {
  stars: PropTypes.arrayOf(StarPropTypes.isRequired),
};

export default Comment;
