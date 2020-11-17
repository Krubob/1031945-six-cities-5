import React, {PureComponent} from "react";
import {REVIEW_TEXT} from "../../../const";

const withComment = (Component) => {
  class WithComment extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``,
        isValid: false,
      };

      this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
      this.handleInputStarClick = this.handleInputStarClick.bind(this);
    }

    checkValidity(rating, review) {
      if (rating && review.length >= REVIEW_TEXT.MIN_VALUE && review.length <= REVIEW_TEXT.MAX_VALUE) {
        this.setState({isValid: true});
      } else {
        this.setState({isValid: false});
      }
    }

    handleTextAreaChange(evt) {
      const {value} = evt.target;
      this.setState({review: value});
    }

    handleInputStarClick(evt) {
      const {value} = evt.target;
      this.setState({rating: value});
    }

    componentDidUpdate() {
      const {rating, review} = this.state;
      this.checkValidity(rating, review);
    }

    render() {
      const {rating, review, isValid} = this.state;

      return (
        <Component
          {...this.props}
          rating={rating}
          review={review}
          isValid={isValid}
          handleInputStarClick={this.handleInputStarClick}
          handleTextAreaChange={this.handleTextAreaChange}
        />
      );
    }
  }

  return WithComment;
};

export default withComment;
