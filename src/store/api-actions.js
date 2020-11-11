import {loadOffers, requireAuthorization, redirectToRoute, loadAuthData} from "./action";
import {getTemplateOffers, getTemplateAuthData} from "../utils";
import {AuthorizationStatus} from "../const";

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

export const checkAuth = () => (dispatch, getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      const authData = getTemplateAuthData(data);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadAuthData(authData));
    })
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
      dispatch(loadAuthData({}));
    })
);

export const login = ({email, password}) => (dispatch, getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);
