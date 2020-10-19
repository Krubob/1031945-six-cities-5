import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {StarPropTypes} from "../../propTypes";

const RatingStar = (props) => {
  const {star, onInputStarClick, checked} = props;

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
};

RatingStar.propTypes = {
  onInputStarClick: PropTypes.func.isRequired,
  star: StarPropTypes.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default RatingStar;
