export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
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
