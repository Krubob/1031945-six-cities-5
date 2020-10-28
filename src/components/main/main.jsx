import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {OfferPropTуpes, cityPropTypes} from "../../propTypes";
import OffersList from "../offers-list/offers-list";
import CitiesList from "../cities-list/cities-list";
import SortingList from "../sorting-list/sorting-list";
import Map from "../map/map";
import Header from "../header/header";
import {className} from "../../const";
import {getOffersByCity} from "../../utils";

const Main = (props) => {

  const {offers, cities, activeCity, activeSorting, changeCity, changeSorting} = props;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList cities={cities} activeCity={activeCity} handleCityClick={changeCity} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity}</b>
              <SortingList handleSortingClick={changeSorting} activeSorting={activeSorting} />
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offers} className={className.CITIES}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section id="map" className="cities__map map">
                <Map offers={offers} cities={cities} activeCity={activeCity} className={className.CITIES} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offers: getOffersByCity(state.offers, state.activeCity),
  activeCity: state.activeCity,
  cities: state.cities,
  activeSorting: state.activeSorting,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  changeSorting(type) {
    dispatch(ActionCreator.changeSorting(type));
  }
});

Main.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTуpes.isRequired),
  cities: PropTypes.arrayOf(cityPropTypes.isRequired).isRequired,
  activeCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  activeSorting: PropTypes.string.isRequired,
  changeSorting: PropTypes.func.isRequired,
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
