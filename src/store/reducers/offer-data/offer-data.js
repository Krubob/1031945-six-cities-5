import {extend} from "../../../utils";
import {ActionType} from "../../action";
import cities from "../../../mocks/cities";

const initialState = {
  cities,
  offers: [],
  activeCity: `Amsterdam`,
  activeSorting: `Popular`,
  activeOffer: ``,
  cityOffers: undefined,
  sortedOffers: undefined,
};

const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload,
      });
    case ActionType.GET_CITY_OFFERS:
      return extend(state, {
        cityOffers: action.payload,
      });
    case ActionType.CHANGE_SORTING:
      return extend(state, {
        activeSorting: action.payload,
      });
    case ActionType.GET_SORTED_OFFERS:
      return extend(state, {
        sortedOffers: action.payload,
      });
    case ActionType.CHANGE_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
      });
    case ActionType.LOAD_OFFERS_SUCCESS:
      return extend(state, {
        offers: action.payload,
      });
    default:
      return state;
  }
};

export {offerData};
