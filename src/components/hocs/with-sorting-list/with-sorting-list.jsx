import React, {PureComponent} from "react";

const withSortingList = (Component) => {
  class WithSortingList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpened: false,
      };

      this.handleSortingToggle = this.handleSortingToggle.bind(this);
    }

    handleSortingToggle(isOpened) {
      this.setState({isOpened: !isOpened});
    }

    render() {
      const {isOpened} = this.state;

      return (
        <Component
          {...this.props}
          isOpened={isOpened}
          onSortingToggle={this.handleSortingToggle}
        />
      );
    }
  }

  return WithSortingList;
};

export default withSortingList;
