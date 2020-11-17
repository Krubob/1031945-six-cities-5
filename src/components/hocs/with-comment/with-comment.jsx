import React, {PureComponent} from "react";

const withComment = (Component) => {
  class WithComment extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: `1`,
        review: ``,
      };

      this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
      this.handleInputStarClick = this.handleInputStarClick.bind(this);
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
