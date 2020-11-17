import React, {PureComponent} from "react";
import {REVIEW_TEXT} from "../../../const";

const withComment = (Component) => {
  class WithComment extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``,
      };

      this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
      this.handleInputStarClick = this.handleInputStarClick.bind(this);
    }

    handleTextAreaChange(evt) {
      const {value} = evt.target;
      this.setState({review: value});

      if (value.length >= REVIEW_TEXT.MAX_VALUE) {
        evt.target.setCustomValidity(`Слишком длинное сообщение!`);
      } else if (value.length <= REVIEW_TEXT.MIN_VALUE) {
        evt.target.setCustomValidity(`Слишком короткое сообщение!`);
      } else {
        evt.target.setCustomValidity(``);
      }
    }

    handleInputStarClick(evt) {
      const {value} = evt.target;
      this.setState({rating: value});
    }

    render() {
      const {rating, review} = this.state;

      return (
        <Component
          {...this.props}
          rating={rating}
          review={review}
          handleInputStarClick={this.handleInputStarClick}
          handleTextAreaChange={this.handleTextAreaChange}
        />
      );
    }
  }

  return WithComment;
};

export default withComment;
