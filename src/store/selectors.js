import {createSelector} from "reselect";
import {getOffersBySortType, getOffersByCity} from "../utils";
import {AuthorizationStatus} from "../const";

export const offersSelector = (state) => state.DATA.offers;
export const citiesSelector = (state) => state.DATA.cities;
export const activeCitySelector = (state) => state.DATA.activeCity;
export const activeSortingSelector = (state) => state.DATA.activeSorting;
export const activeOfferSelector = (state) => state.DATA.activeOffer;
export const authStatusSelector = (state) => state.USER.authStatus;
export const authDataSelector = (state) => state.USER.authData;
export const userEmailSelector = (state) => state.USER.authData.email;

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

export const isUserAuthorizedSelector = createSelector(
    authStatusSelector,
    (authStatus) => {
      return authStatus === AuthorizationStatus.AUTH;
    }
);

export const getUserEmail = createSelector(
    userEmailSelector,
    (email) => {
      if (email) {
        return email;
      } else {
        return null;
      }
    }
);
