import {createSelector} from "reselect";
import {getOffersBySortType, getOffersByCity} from "../utils";

export const loadOffers = (state) => state.DATA.offers;
export const loadCities = (state) => state.DATA.cities;
export const loadActiveCity = (state) => state.DATA.activeCity;
export const loadActiveSorting = (state) => state.DATA.activeSorting;
export const loadActiveOffer = (state) => state.DATA.activeOffer;
export const loadAuthStatus = (state) => state.DATA.authStatus;

export const getCityOffers = createSelector(
    loadOffers,
    loadActiveCity,
    (offers, activeCity) => {
      return getOffersByCity(offers, activeCity);
    }
);

export const getSortedCityOffers = createSelector(
    getCityOffers,
    loadActiveSorting,
    (cityOffers, activeSorting) => {
      return getOffersBySortType(cityOffers, activeSorting);
    }
);
