import React from "react";
import PropTypes from 'prop-types';
import CityItem from "../city-item/city-item";

const CitiesList = (props) => {
  const {cities, activeCity, onCityClick} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city, i) => (
              <CityItem
                key={`city-${i}`}
                name={city}
                isActive={city === activeCity}
                onCityClick={onCityClick}
              />
            ))
          }
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default CitiesList;
