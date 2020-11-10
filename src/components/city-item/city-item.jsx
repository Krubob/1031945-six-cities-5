import React from "react";
import PropTypes from 'prop-types';

const CityItem = (props) => {
  const {name, isActive, handleCityClick, getCityOffers} = props;

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`} href="#"
        onClick={() => {
          handleCityClick(name);
          getCityOffers();
        }}
      >
        <span>{name}</span>
      </a>
    </li>
  );
};

CityItem.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleCityClick: PropTypes.func.isRequired,
  getCityOffers: PropTypes.func.isRequired,
};

export default CityItem;
