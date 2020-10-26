import React from "react";
import PropTypes from 'prop-types';
import CityItem from "../city-item/city-item";
import {cityPropTypes} from "../../propTypes";

const CitiesList = (props) => {
  const {cities, activeCity, handleCityClick} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city) => (
              <CityItem
                key={`city-${city.id}`}
                name={city.name}
                isActive={city.name === activeCity}
                handleCityClick={handleCityClick.bind(null, city.name)}
              />
            ))
          }
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(cityPropTypes.isRequired).isRequired,
  activeCity: PropTypes.string.isRequired,
  handleCityClick: PropTypes.func.isRequired,
};

export default CitiesList;
