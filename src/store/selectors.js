import {createSelector} from "reselect";
import {getOffersBySortType, getOffersByCity} from "../utils";

export const offerSelector = (state) => state.DATA.offer;
export const offersSelector = (state) => state.DATA.offers;
export const citiesSelector = (state) => state.DATA.cities;
export const activeCitySelector = (state) => state.DATA.activeCity;
export const activeSortingSelector = (state) => state.DATA.activeSorting;
export const activeOfferSelector = (state) => state.DATA.activeOffer;
export const authStatusSelector = (state) => state.USER.authStatus;
export const authDataSelector = (state) => state.USER.authData;

export const getCityOffers = createSelector(
    offersSelector,
    activeCitySelector,
    (offers, activeCity) => {
      return getOffersByCity(offers, activeCity);
    }
);

export const getSortedCityOffers = createSelector(
    getCityOffers,
    activeSortingSelector,
    (cityOffers, activeSorting) => {
      return getOffersBySortType(cityOffers, activeSorting);
    }
);
