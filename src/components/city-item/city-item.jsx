import React from "react";
import PropTypes from 'prop-types';

const CityItem = (props) => {
  const {name, isActive, onCityClick} = props;

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`} href="#"
        onClick={() => {
          onCityClick(name);
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
  onCityClick: PropTypes.func.isRequired,
};

export default CityItem;
