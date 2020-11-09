export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_CITY_OFFERS: `GET_CITY_OFFERS`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  GET_SORTED_OFFERS: `GET_SORTED_OFFERS`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  LOAD_OFFERS_SUCCESS: `LOAD_OFFERS_SUCCESS`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getCityOffers: (cityOffers) => ({
    type: ActionType.GET_CITY_OFFERS,
    payload: cityOffers,
  }),
  changeSorting: (type) => ({
    type: ActionType.CHANGE_SORTING,
    payload: type,
  }),
  getSortedOffers: (sortedOffers) => ({
    type: ActionType.GET_SORTED_OFFERS,
    payload: sortedOffers,
  }),
  changeActiveOffer: (id) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: id,
  }),
};

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS_SUCCESS,
  payload: offers,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
