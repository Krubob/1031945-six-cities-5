import {loadOffersRequest, loadOffersFailure, loadOffersSuccess, loadOfferRequest, loadOfferFailure, loadOfferSuccess, loadNearOffersSuccess, loadNearOffersRequest, loadNearOffersFailure, loadReviewsSuccess, loadReviewsRequest, loadReviewsFailure, redirectToRoute, loadAuthDataSuccess, loadAuthDataRequest, loadAuthDataFailure, changeFavoriteOfferStatus, loadFavoriteOffersSuccess, loadFavoriteOffersRequest, loadFavoriteOffersFailure, changeFavoriteNearOfferStatus} from "./action";
import {getTemplateOffer, getTemplateOffers, getTemplateAuthData, getTemplateReviews} from "../utils";
import {AuthorizationStatus, Path, APIPath, HttpCode, ResponseType} from "../const";
import swal from "sweetalert";

export const fetchOfferList = () => (dispatch, getState, api) => {
  dispatch(loadOffersRequest());

  api.get(APIPath.OFFERS)
    .then(({data}) => {
      const offers = getTemplateOffers(data);
      dispatch(loadOffersSuccess(offers));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      dispatch(loadOffersFailure(err));
      swal(`Ошибка загрузки данных`, String(err), `error`);
      return err;
    });
};

export const fetchOffer = (offerId) => (dispatch, getState, api) => {
  dispatch(loadOfferRequest());

  api.get(`${APIPath.OFFERS}/${offerId}`)
    .then(({data}) => {
      const offer = getTemplateOffer(data);
      dispatch(loadOfferSuccess(offer));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      dispatch(loadOfferFailure(err));
      swal(`Ошибка загрузки данных`, String(err), `error`);
      return err;
    });
};

export const fetchReviews = (offerId) => (dispatch, getState, api) => {
  dispatch(loadReviewsRequest());

  api.get(`${APIPath.REVIEWS}/${offerId}`)
    .then(({data}) => {
      const reviews = getTemplateReviews(data);
      dispatch(loadReviewsSuccess(reviews));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      dispatch(loadReviewsFailure(err));
      swal(`Ошибка загрузки данных`, String(err), `error`);
      return err;
    });
};

export const fetchNearOffers = (offerId) => (dispatch, getState, api) => {
  dispatch(loadNearOffersRequest());

  api.get(`${APIPath.OFFERS}/${offerId}${APIPath.NEARBY}`)
    .then(({data}) => {
      const nearOffers = getTemplateOffers(data);
      dispatch(loadNearOffersSuccess(nearOffers));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      dispatch(loadNearOffersFailure(err));
      swal(`Ошибка загрузки данных`, String(err), `error`);
      return err;
    });
};

export const fetchFavoriteOffers = () => (dispatch, getState, api) => {
  dispatch(loadFavoriteOffersRequest());

  api.get(APIPath.FAVORITE)
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        const favoriteOffers = getTemplateOffers(response.data);
        dispatch(loadFavoriteOffersSuccess(favoriteOffers));
        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .catch((err) => {
      dispatch(loadFavoriteOffersFailure(err));
      swal(`Ошибка загрузки данных`, String(err), `error`);
      return err;
    });
};

export const updateOfferFavoriteStatus = (offerId, favoriteStatus) => (dispatch, getState, api) => (
  api.post(`${APIPath.FAVORITE}/${offerId}/${favoriteStatus ? 1 : 0}`)
    .then(({data}) => {
      const favoriteOffer = getTemplateOffer(data);
      dispatch(changeFavoriteOfferStatus(favoriteOffer));
      dispatch(changeFavoriteNearOfferStatus(favoriteOffer));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      swal(`Ошибка обновления данных`, String(err), `error`);
      return err;
    })
);

export const checkAuth = () => (dispatch, getState, api) => {
  dispatch(loadAuthDataRequest());

  api.get(APIPath.LOGIN)
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        const authData = getTemplateAuthData(response.data);
        dispatch(loadAuthDataSuccess(authData, AuthorizationStatus.AUTH));
        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .catch((err) => {
      loadAuthDataFailure(err);
      swal(`Ошибка аутентификации`, String(err), `error`);
      return err;
    });
};

export const login = ({email, password}) => (dispatch, getState, api) => (
  api.post(APIPath.LOGIN, {email, password})
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        const authData = getTemplateAuthData(response.data);
        dispatch(loadAuthDataSuccess(authData, AuthorizationStatus.AUTH));
        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .then(() => dispatch(redirectToRoute(Path.MAIN)))
    .catch((err) => {
      swal(`Ошибка отправки данных`, String(err), `error`);
      return err;
    })
);

export const sendReview = ({rating, review: comment, offerId, onResponseWaitingChange}) => (dispatch, getState, api) => (
  api.post(`${APIPath.REVIEWS}/${offerId}`, {comment, rating})
  .then(({data}) => {
    const reviews = getTemplateReviews(data);
    dispatch(loadReviewsSuccess(reviews));
    onResponseWaitingChange(false);
    return ResponseType.SUCCESS;
  })
  .catch((err) => {
    swal(`Ошибка отправки данных`, String(err), `error`);
    return err;
  })
);
