import {loadOffers} from "./action";
import {getTemplateOffers} from "../utils";


export const fetchOfferList = () => (dispatch, getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const offers = getTemplateOffers(data);
      dispatch(loadOffers(offers));
    })
    .catch((err) => {
      throw err;
    })
);
