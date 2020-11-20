import {extend, getOffersWithNewFavoriteStatus} from "../../../utils";
import {ActionType} from "../../action";
import cities from "../../../mocks/cities";

const initialState = {
  cities,
  offers: [],
  activeOffer: ``,
  offer: {},
  reviews: [],
  nearOffers: [],
  favoriteOffers: [],
  changedFavoriteOffer: {},
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
    case ActionType.LOAD_REVIEWS_SUCCESS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_NEAR_OFFERS_SUCCESS:
      return extend(state, {
        nearOffers: action.payload,
      });
    case ActionType.CHANGE_LOAD_STATUS:
      return extend(state, {
        loadStatus: action.payload,
      });
    case ActionType.CHANGE_FAVORITE_STATUS_OFFER:
      return extend(state, {
        offers: getOffersWithNewFavoriteStatus(state.offers, action.payload),
        changedFavoriteOffer: action.payload,
      });
    case ActionType.LOAD_FAVORITE_OFFERS_SUCCESS:
      return extend(state, {
        favoriteOffers: action.payload,
      });
    default:
      return state;
  }
};

export {offerData};
