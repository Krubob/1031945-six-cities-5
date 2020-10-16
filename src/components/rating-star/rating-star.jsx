import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {StarPropTypes} from "../../propTypes";

const RatingStar = (props) => {
  const {onInputChange, star} = props;

  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" onChange={onInputChange} name="rating" value={star.value} id={`${star.value}-stars`} type="radio" />
      <label htmlFor={`${star.value}-stars`} className="reviews__rating-label form__rating-label" title={star.title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
};

RatingStar.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  star: StarPropTypes.isRequired,
};

export default RatingStar;
