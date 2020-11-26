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
  isLoading: false,
  error: null,
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
        isLoading: false,
        offer: action.payload,
      });
    case ActionType.LOAD_OFFER_REQUEST:
      return extend(state, {
        isLoading: true,
      });
    case ActionType.LOAD_OFFER_FAILURE:
      return extend(state, {
        isLoading: null,
        error: action.error
      });
    case ActionType.LOAD_OFFERS_SUCCESS:
      return extend(state, {
        isLoading: false,
        offers: action.payload,
      });
    case ActionType.LOAD_OFFERS_REQUEST:
      return extend(state, {
        isLoading: true,
      });
    case ActionType.LOAD_OFFERS_FAILURE:
      return extend(state, {
        isLoading: null,
        error: action.error
      });
    case ActionType.LOAD_REVIEWS_SUCCESS:
      return extend(state, {
        isLoading: false,
        reviews: action.payload,
      });
    case ActionType.LOAD_REVIEWS_REQUEST:
      return extend(state, {
        isLoading: true,
      });
    case ActionType.LOAD_REVIEWS_FAILURE:
      return extend(state, {
        isLoading: null,
        error: action.error
      });
    case ActionType.LOAD_NEAR_OFFERS_SUCCESS:
      return extend(state, {
        isLoading: false,
        nearOffers: action.payload,
      });
    case ActionType.LOAD_NEAR_OFFERS_REQUEST:
      return extend(state, {
        isLoading: true,
      });
    case ActionType.LOAD_NEAR_OFFERS_FAILURE:
      return extend(state, {
        isLoading: null,
        error: action.error
      });
    case ActionType.CHANGE_FAVORITE_OFFER_STATUS:
      return extend(state, {
        offers: getOffersWithNewFavoriteStatus(state.offers, action.payload),
        changedFavoriteOffer: action.payload,
      });
    case ActionType.CHANGE_FAVORITE_NEAR_OFFER_STATUS:
      return extend(state, {
        nearOffers: getOffersWithNewFavoriteStatus(state.nearOffers, action.payload),
        changedFavoriteOffer: action.payload,
      });
    case ActionType.LOAD_FAVORITE_OFFERS_SUCCESS:
      return extend(state, {
        isLoading: false,
        favoriteOffers: action.payload,
      });
    case ActionType.LOAD_FAVORITE_OFFERS_REQUEST:
      return extend(state, {
        isLoading: true,
      });
    case ActionType.LOAD_FAVORITE_OFFERS_FAILURE:
      return extend(state, {
        isLoading: null,
        error: action.error
      });
    default:
      return state;
  }
};

export {offerData};
