import {ActionCreator, loadOffers} from "./action";
import {getOffersByCity, getOffersBySortType, getTemplateOffers} from "../utils";


export const fetchOfferList = () => (dispatch, getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const offers = getTemplateOffers(data);
      dispatch(loadOffers(offers));
      let currentState = getState();
      dispatch(ActionCreator.getCityOffers(getOffersByCity(currentState.offers, currentState.activeCity)));
      currentState = getState();
      dispatch(ActionCreator.getSortedOffers(getOffersBySortType(currentState.cityOffers, currentState.activeSorting)));
    })
    .catch((err) => {
      throw err;
    })
);
