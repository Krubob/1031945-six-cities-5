export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_CITY_OFFERS: `GET_CITY_OFFERS`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  GET_SORTED_OFFERS: `GET_SORTED_OFFERS`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getCityOffers: () => ({
    type: ActionType.GET_CITY_OFFERS,
  }),
  changeSorting: (type) => ({
    type: ActionType.CHANGE_SORTING,
    payload: type,
  }),
  getSortedOffers: () => ({
    type: ActionType.GET_SORTED_OFFERS,
  })
};
