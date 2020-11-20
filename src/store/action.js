export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  LOAD_OFFER_SUCCESS: `LOAD_OFFER_SUCCESS`,
  LOAD_OFFERS_SUCCESS: `LOAD_OFFERS_SUCCESS`,
  LOAD_REVIEWS_SUCCESS: `LOAD_REVIEWS_SUCCESS`,
  LOAD_NEAR_OFFERS_SUCCESS: `LOAD_NEAR_OFFERS_SUCCESS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_AUTH_DATA: `LOAD_AUTH_DATA`,
  CHANGE_LOAD_STATUS: `CHANGE_LOAD_STATUS`,
  CHANGE_FAVORITE_STATUS_OFFER: `CHANGE_FAVORITE_STATUS_OFFER`,
  LOAD_FAVORITE_OFFERS_SUCCESS: `LOAD_FAVORITE_OFFERS_SUCCESS`,
};

export const changeLoadStatus = (status) => ({
  type: ActionType.CHANGE_LOAD_STATUS,
  payload: status,
});

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

export const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER_SUCCESS,
  payload: offer,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS_SUCCESS,
  payload: offers,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const loadAuthData = (authData, authStatus) => ({
  type: ActionType.LOAD_AUTH_DATA,
  payload: authData,
  authStatus,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS_SUCCESS,
  payload: reviews,
});

export const loadNearOffers = (nearOffers) => ({
  type: ActionType.LOAD_NEAR_OFFERS_SUCCESS,
  payload: nearOffers,
});

export const loadFavoriteOffers = (favoriteOffers) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS_SUCCESS,
  payload: favoriteOffers,
});
