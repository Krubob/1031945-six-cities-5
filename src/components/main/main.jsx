import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {OfferPropTуpes, cityPropTypes} from "../../propTypes";
import OffersList from "../offers-list/offers-list";
import CitiesList from "../cities-list/cities-list";
import SortingList from "../sorting-list/sorting-list";
import withSortingList from "../hocs/with-sorting-list/with-sorting-list";
import Map from "../map/map";
import Header from "../header/header";
import MainEmpty from "../main-empty/main-empty";
import {ClassNameType} from "../../const";
import {changeCity, changeSorting} from "../../store/action";
import {citiesSelector, activeCitySelector, activeSortingSelector, getSortedCityOffersSelector, getCityOffersSelector, isDataLoadedSelector} from "../../store/selectors";

const SortingListWrapped = withSortingList(SortingList);

const Main = (props) => {

  const {cities, activeCity, activeSorting, changeCityAction, changeSortingAction, sortedOffers, cityOffers, isOffersLoaded} = props;
  const haveCityOffers = cityOffers.length > 0;

  return !isOffersLoaded ? (
    <div>LOADING...</div>
  ) : (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${!haveCityOffers ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList cities={cities} activeCity={activeCity} onCityClick={changeCityAction}/>
        <div className="cities">
          <div className={`cities__places-container ${!haveCityOffers ? `cities__places-container--empty` : ``} container`}>
            {haveCityOffers ? (
              <Fragment>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{cityOffers.length} places to stay in {activeCity}</b>
                  <SortingListWrapped onSortingClick={changeSortingAction} activeSorting={activeSorting} />
                  <div className="cities__places-list places__list tabs__content">
                    <OffersList offers={sortedOffers} />
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map offers={cityOffers} className={ClassNameType.CITIES} />
                </div>
              </Fragment>
            ) : <MainEmpty activeCity={activeCity} />}
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTуpes.isRequired),
  cities: PropTypes.arrayOf(cityPropTypes.isRequired).isRequired,
  activeCity: PropTypes.string.isRequired,
  changeCityAction: PropTypes.func.isRequired,
  activeSorting: PropTypes.string.isRequired,
  changeSortingAction: PropTypes.func.isRequired,
  sortedOffers: PropTypes.arrayOf(OfferPropTуpes.isRequired),
  cityOffers: PropTypes.arrayOf(OfferPropTуpes.isRequired),
  isOffersLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: activeCitySelector(state),
  cities: citiesSelector(state),
  activeSorting: activeSortingSelector(state),
  cityOffers: getCityOffersSelector(state),
  sortedOffers: getSortedCityOffersSelector(state),
  isOffersLoaded: isDataLoadedSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCityAction(city) {
    dispatch(changeCity(city));
  },
  changeSortingAction(type) {
    dispatch(changeSorting(type));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
