export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_OFFER_SUCCESS: `LOAD_OFFER_SUCCESS`,
  LOAD_OFFERS_SUCCESS: `LOAD_OFFERS_SUCCESS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_AUTH_DATA: `LOAD_AUTH_DATA`,
};

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

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const loadAuthData = (authInfo) => ({
  type: ActionType.LOAD_AUTH_DATA,
  payload: authInfo,
});
