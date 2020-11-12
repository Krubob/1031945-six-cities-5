import {loadOffers, loadOffer, loadNearOffers, loadReviews, requireAuthorization, redirectToRoute, loadAuthData} from "./action";
import {getTemplateOffer, getTemplateOffers, getTemplateAuthData, getTemplateReviews} from "../utils";
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

export const fetchOffer = (offerId) => (dispatch, getState, api) => (
  api.get(`${APIPath.OFFERS}/${offerId}`)
    .then(({data}) => {
      const offer = getTemplateOffer(data);
      dispatch(loadOffer(offer));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      return err;
    })
);

export const fetchReviews = (offerId) => (dispatch, getState, api) => (
  api.get(`${APIPath.REVIEWS}/${offerId}`)
    .then(({data}) => {
      const reviews = getTemplateReviews(data);
      dispatch(loadReviews(reviews));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      return err;
    })
);

export const fetchNearOffers = (offerId) => (dispatch, getState, api) => (
  api.get(`${APIPath.OFFERS}/${offerId}${APIPath.NEARBY}`)
    .then(({data}) => {
      const nearOffers = getTemplateOffers(data);
      dispatch(loadNearOffers(nearOffers));
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
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(loadAuthData(authData));
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
  api.post(APIPath.LOGIN, {email, password})
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        const authData = getTemplateAuthData(response.data);
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(loadAuthData(authData));
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
