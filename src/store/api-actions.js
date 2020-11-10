import {getCityOffers, getSortedOffers, loadOffers} from "./action";
import {getOffersByCity, getOffersBySortType, getTemplateOffers} from "../utils";


export const fetchOfferList = () => (dispatch, getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const offers = getTemplateOffers(data);
      dispatch(loadOffers(offers));
      let currentState = getState();
      dispatch(getCityOffers(getOffersByCity(currentState.DATA.offers, currentState.DATA.activeCity)));
      currentState = getState();
      dispatch(getSortedOffers(getOffersBySortType(currentState.DATA.cityOffers, currentState.DATA.activeSorting)));
    })
    .catch((err) => {
      throw err;
    })
);
