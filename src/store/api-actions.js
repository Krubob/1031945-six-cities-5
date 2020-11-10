import {getCityOffers, loadOffers} from "./action";
import {getOffersByCity, getTemplateOffers} from "../utils";


export const fetchOfferList = () => (dispatch, getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const offers = getTemplateOffers(data);
      dispatch(loadOffers(offers));
      let currentState = getState();
      dispatch(getCityOffers(getOffersByCity(currentState.DATA.offers, currentState.DATA.activeCity)));
    })
    .catch((err) => {
      throw err;
    })
);
