import React, {PureComponent} from "react";

const withComment = (Component) => {
  class WithComment extends PureComponent {
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
      const {rating} = this.state;

      return (
        <Component
          {...this.props}
          rating={rating}
          handleInputStarClick={this.handleInputStarClick}
          handleTextAreaChange={this.handleTextAreaChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  }

  return WithComment;
};

export default withComment;
