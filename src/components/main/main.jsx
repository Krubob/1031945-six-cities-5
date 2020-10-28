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

const Main = (props) => {

  const {cities, activeCity, activeSorting, changeCity, changeSorting, getSortedOffers, getCityOffers, sortedOffers, cityOffers} = props;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList cities={cities} activeCity={activeCity} handleCityClick={changeCity} getCityOffers={getCityOffers} getSortedOffers={getSortedOffers}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {activeCity}</b>
              <SortingList handleSortingClick={changeSorting} activeSorting={activeSorting} getSortedOffers={getSortedOffers} />
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={sortedOffers} className={className.CITIES}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section id="map" className="cities__map map">
                <Map offers={cityOffers} cities={cities} activeCity={activeCity} className={className.CITIES} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  cities: state.cities,
  cityOffers: state.cityOffers,
  activeSorting: state.activeSorting,
  sortedOffers: state.sortedOffers,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  getCityOffers() {
    dispatch(ActionCreator.getCityOffers());
  },
  changeSorting(type) {
    dispatch(ActionCreator.changeSorting(type));
  },
  getSortedOffers() {
    dispatch(ActionCreator.getSortedOffers());
  },
});

Main.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTуpes.isRequired),
  cities: PropTypes.arrayOf(cityPropTypes.isRequired).isRequired,
  activeCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  activeSorting: PropTypes.string.isRequired,
  changeSorting: PropTypes.func.isRequired,
  getSortedOffers: PropTypes.func.isRequired,
  getCityOffers: PropTypes.func.isRequired,
  sortedOffers: PropTypes.arrayOf(OfferPropTуpes.isRequired),
  cityOffers: PropTypes.arrayOf(OfferPropTуpes.isRequired),
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
