import {createSelector} from "reselect";
import {getOffersBySortType} from "../utils";

export const loadOffers = (state) => state.DATA.offers;
export const loadCities = (state) => state.DATA.cities;
export const loadActiveCity = (state) => state.DATA.activeCity;
export const loadActiveSorting = (state) => state.DATA.activeSorting;
export const loadActiveOffer = (state) => state.DATA.activeOffer;
export const loadCityOffers = (state) => state.DATA.cityOffers;
export const loadAuthStatus = (state) => state.DATA.authStatus;

export const getSortedCityOffers = createSelector(
    loadCityOffers,
    loadActiveSorting,
    (cityOffers, activeSorting) => {
      return getOffersBySortType(cityOffers, activeSorting);
    }
);
