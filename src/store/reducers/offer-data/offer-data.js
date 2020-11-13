import {extend} from "../../../utils";
import {ActionType} from "../../action";
import cities from "../../../mocks/cities";

const initialState = {
  cities,
  offers: [],
  activeOffer: ``,
  offer: {},
  reviews: [],
  nearOffers: [],
  activeCity: `Amsterdam`,
  activeSorting: `Popular`,
  loadStatus: `NONE`,
};

const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload,
      });
    case ActionType.CHANGE_SORTING:
      return extend(state, {
        activeSorting: action.payload,
      });
    case ActionType.CHANGE_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
      });
    case ActionType.LOAD_OFFER_SUCCESS:
      return extend(state, {
        offer: action.payload,
      });
    case ActionType.LOAD_OFFERS_SUCCESS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.LOAD_REVIEWS_SUCESS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_NEAR_OFFERS_SUCESS:
      return extend(state, {
        nearOffers: action.payload,
      });
    case ActionType.CHANGE_LOAD_STATUS:
      return extend(state, {
        loadStatus: action.payload,
      });
    default:
      return state;
  }
};

export {offerData};
