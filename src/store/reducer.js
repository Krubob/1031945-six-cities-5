import {extend, getOffersBySortType, getOffersByCity} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";
import cities from "../mocks/cities";

const initialState = {
  cities,
  offers,
  activeCity: `Amsterdam`,
  activeSorting: `Popular`,
  activeOffer: ``,
  cityOffers: undefined,
  sortedOffers: undefined,
};

initialState.cityOffers = getOffersByCity(offers, initialState.activeCity);
initialState.sortedOffers = getOffersBySortType(initialState.cityOffers, initialState.activeSorting);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload,
      });
    case ActionType.GET_CITY_OFFERS:
      return extend(state, {
        cityOffers: getOffersByCity(state.offers, state.activeCity),
      });
    case ActionType.CHANGE_SORTING:
      return extend(state, {
        activeSorting: action.payload,
      });
    case ActionType.GET_SORTED_OFFERS:
      return extend(state, {
        sortedOffers: getOffersBySortType(state.cityOffers, state.activeSorting),
      });
    case ActionType.CHANGE_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
      });
    default:
      return state;
  }
};

export {reducer};
