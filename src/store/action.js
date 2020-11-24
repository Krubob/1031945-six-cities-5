export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  CHANGE_FAVORITE_STATUS_OFFER: `CHANGE_FAVORITE_STATUS_OFFER`,
  LOAD_OFFER_SUCCESS: `LOAD_OFFER_SUCCESS`,
  LOAD_OFFER_REQUEST: `LOAD_OFFER_REQUEST`,
  LOAD_OFFER_FAILURE: `LOAD_OFFER_FAILURE`,
  LOAD_OFFERS_SUCCESS: `LOAD_OFFERS_SUCCESS`,
  LOAD_OFFERS_REQUEST: `LOAD_OFFERS_REQUEST`,
  LOAD_OFFERS_FAILURE: `LOAD_OFFERS_FAILURE`,
  LOAD_FAVORITE_OFFERS_SUCCESS: `LOAD_FAVORITE_OFFERS_SUCCESS`,
  LOAD_FAVORITE_OFFERS_REQUEST: `LOAD_FAVORITE_OFFERS_REQUEST`,
  LOAD_FAVORITE_OFFERS_FAILURE: `LOAD_FAVORITE_OFFERS_FAILURE`,
  LOAD_REVIEWS_SUCCESS: `LOAD_REVIEWS_SUCCESS`,
  LOAD_REVIEWS_REQUEST: `LOAD_REVIEWS_REQUEST`,
  LOAD_REVIEWS_FAILURE: `LOAD_REVIEWS_FAILURE`,
  LOAD_NEAR_OFFERS_SUCCESS: `LOAD_NEAR_OFFERS_SUCCESS`,
  LOAD_NEAR_OFFERS_REQUEST: `LOAD_NEAR_OFFERS_REQUEST`,
  LOAD_NEAR_OFFERS_FAILURE: `LOAD_NEAR_OFFERS_FAILURE`,
  LOAD_AUTH_DATA_SUCCESS: `LOAD_AUTH_DATA_SUCCESS`,
  LOAD_AUTH_DATA_REQUEST: `LOAD_AUTH_DATA_REQUEST`,
  LOAD_AUTH_DATA_FAILURE: `LOAD_AUTH_DATA_FAILURE`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const changeFavoriteOfferStatus = (favoriteOffer) => ({
  type: ActionType.CHANGE_FAVORITE_STATUS_OFFER,
  payload: favoriteOffer,
});

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const changeSorting = (type) => ({
  type: ActionType.CHANGE_SORTING,
  payload: type,
});

export const changeActiveOffer = (id) => ({
  type: ActionType.CHANGE_ACTIVE_OFFER,
  payload: id,
});

export const loadOfferSuccess = (offer) => ({
  type: ActionType.LOAD_OFFER_SUCCESS,
  payload: offer,
});

export const loadOfferRequest = () => ({
  type: ActionType.LOAD_OFFER_REQUEST
});

export const loadOfferFailure = (error) => ({
  type: ActionType.LOAD_OFFER_FAILURE,
  error
});

export const loadOffersSuccess = (offers) => ({
  type: ActionType.LOAD_OFFERS_SUCCESS,
  payload: offers,
});

export const loadOffersRequest = () => ({
  type: ActionType.LOAD_OFFERS_REQUEST
});

export const loadOffersFailure = (error) => ({
  type: ActionType.LOAD_OFFERS_FAILURE,
  error
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const loadAuthDataSuccess = (authData, authStatus) => ({
  type: ActionType.LOAD_AUTH_DATA_SUCCESS,
  payload: authData,
  authStatus,
});

export const loadAuthDataRequest = () => ({
  type: ActionType.LOAD_AUTH_DATA_REQUEST,
});

export const loadAuthDataFailure = (error) => ({
  type: ActionType.LOAD_AUTH_DATA_FAILURE,
  error
});

export const loadReviewsSuccess = (reviews) => ({
  type: ActionType.LOAD_REVIEWS_SUCCESS,
  payload: reviews,
});

export const loadReviewsRequest = () => ({
  type: ActionType.LOAD_REVIEWS_REQUEST
});

export const loadReviewsFailure = (error) => ({
  type: ActionType.LOAD_REVIEWS_FAILURE,
  error
});

export const loadNearOffersSuccess = (nearOffers) => ({
  type: ActionType.LOAD_NEAR_OFFERS_SUCCESS,
  payload: nearOffers,
});

export const loadNearOffersRequest = () => ({
  type: ActionType.LOAD_NEAR_OFFERS_REQUEST
});

export const loadNearOffersFailure = (error) => ({
  type: ActionType.LOAD_NEAR_OFFERS_FAILURE,
  error
});

export const loadFavoriteOffersSuccess = (favoriteOffers) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS_SUCCESS,
  payload: favoriteOffers,
});

export const loadFavoriteOffersRequest = () => ({
  type: ActionType.LOAD_FAVORITE_OFFERS_REQUEST
});

export const loadFavoriteOffersFailure = (error) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS_FAILURE,
  error
});
