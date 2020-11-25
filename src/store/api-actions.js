import {loadOffersRequest, loadOffersFailure, loadOffersSuccess, loadOfferRequest, loadOfferFailure, loadOfferSuccess, loadNearOffersSuccess, loadNearOffersRequest, loadNearOffersFailure, loadReviewsSuccess, loadReviewsRequest, loadReviewsFailure, redirectToRoute, loadAuthDataSuccess, loadAuthDataRequest, loadAuthDataFailure, changeFavoriteOfferStatus, loadFavoriteOffersSuccess, loadFavoriteOffersRequest, loadFavoriteOffersFailure} from "./action";
import {getTemplateOffer, getTemplateOffers, getTemplateAuthData, getTemplateReviews, getTemplateReview} from "../utils";
import {AuthorizationStatus, Path, APIPath, HttpCode, ResponseType} from "../const";

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
      return err;
    });
};

export const updateOfferFavoriteStatus = (offerId, favoriteStatus) => (dispatch, getState, api) => (
  api.post(`${APIPath.FAVORITE}/${offerId}/${favoriteStatus ? 1 : 0}`)
    .then(({data}) => {
      const favoriteOffer = getTemplateOffer(data);
      dispatch(changeFavoriteOfferStatus(favoriteOffer));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
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
      return err;
    })
);

export const sendReview = ({rating, review: comment, offerId}, handleResponseWaitingChange) => (dispatch, getState, api) => (
  api.post(`${APIPath.REVIEWS}/${offerId}`, {rating, comment})
  .then((response) => {
    if (response.status !== HttpCode.UNAUTHORIZED) {
      const reviews = getTemplateReview(response.data);
      dispatch(loadReviewsSuccess(reviews));
      handleResponseWaitingChange(false);
      return ResponseType.SUCCESS;
    } else {
      return response;
    }
  })
  .catch((err) => {
    return err;
  })
);
