import {loadOffers, redirectToRoute, loadAuthData} from "./action";
import {getTemplateOffers, getTemplateAuthData} from "../utils";
import {AuthorizationStatus, Path, APIPath, HttpCode, ResponseType} from "../const";

export const fetchOfferList = () => (dispatch, getState, api) => (
  api.get(APIPath.OFFERS)
    .then(({data}) => {
      const offers = getTemplateOffers(data);
      dispatch(loadOffers(offers));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      return err;
    })
);

export const checkAuth = () => (dispatch, getState, api) => (
  api.get(APIPath.LOGIN)
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        const authData = getTemplateAuthData(response.data);
        dispatch(loadAuthData(authData, AuthorizationStatus.AUTH));
        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .catch((err) => {
      return err;
    })
);

export const login = ({email, password}) => (dispatch, getState, api) => (
  api.post(APIPath.LOGI, {email, password})
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        const authData = getTemplateAuthData(response.data);
        dispatch(loadAuthData(authData, AuthorizationStatus.AUTH));
        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .then(() => dispatch(redirectToRoute(Path.MAIN)))
    .catch((err) => {
      return err;
    })
);
