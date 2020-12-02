import React, {PureComponent} from "react";
import {REVIEW_TEXT} from "../../../const";

const withComment = (Component) => {
  class WithComment extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``,
        isResponseWaiting: false,
      };

      this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
      this.handleFormDataClear = this.handleFormDataClear.bind(this);
      this.handleInputStarClick = this.handleInputStarClick.bind(this);
      this.handleResponseWaitingChange = this.handleResponseWaitingChange.bind(this);
    }

    handleResponseWaitingChange(isWaiting) {
      this.setState(() => ({
        isResponseWaiting: isWaiting,
      }));
    }

    handleFormDataClear() {
      this.setState({
        rating: ``,
        review: ``,
      });
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
      const {rating, review, isResponseWaiting} = this.state;
      const isValid = rating && review.length >= REVIEW_TEXT.MIN_VALUE && review.length <= REVIEW_TEXT.MAX_VALUE;
      const isDisabledSubmitBtn = !isValid && !isResponseWaiting;

      return (
        <Component
          {...this.props}
          rating={rating}
          review={review}
          isValid={isValid}
          isDisabledSubmitBtn={isDisabledSubmitBtn}
          onResponseWaitingChange={this.handleResponseWaitingChange}
          onFormDataClear={this.handleFormDataClear}
          onInputStarClick={this.handleInputStarClick}
          onTextAreaChange={this.handleTextAreaChange}
        />
      );
    }
  }

  return WithComment;
};

export default withComment;
