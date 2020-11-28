import React from "react";
import PropTypes from 'prop-types';
import CityItem from "../city-item/city-item";
import {cityPropTypes} from "../../propTypes";

const CitiesList = (props) => {
  const {cities, activeCity, onCityClick} = props;

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
  cities: PropTypes.arrayOf(cityPropTypes.isRequired).isRequired,
  activeCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default CitiesList;
