import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import {StarPropTypes} from "../../propTypes";

class RatingStar extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleInputStarChange() {
    const radio = this.input.current;
    this.setState(() => {
      return {checked: this.input.current.checked};
    });
    radio.setAttribute(`checked`, !this.state.checked);
  }

  render() {
    const {star, onInputStarClick, checked} = this.props;

    return (
      <Fragment>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={star.value}
          id={`${star.value}-stars`}
          type="radio"
          onChange={onInputStarClick}
          checked = {checked}
        />
        <label htmlFor={`${star.value}-stars`} className="reviews__rating-label form__rating-label" title={star.title}>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </Fragment>
    );
  }
}

RatingStar.propTypes = {
  onInputStarClick: PropTypes.func.isRequired,
  star: StarPropTypes.isRequired,
  checked: PropTypes.bool,
};

export default RatingStar;
