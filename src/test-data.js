export const testInitialState = {
  DATA: {
    cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
    offers: [],
    activeOffer: ``,
    offer: {},
    reviews: [],
    nearOffers: [],
    favoriteOffers: [],
    changedFavoriteOffer: {},
    activeCity: `Paris`,
    activeSorting: `Popular`,
    isLoading: false,
    error: null,
  },
  USER: {
    authStatus: `NO_AUTH`,
    authData: {},
    isLoading: false,
    error: null,
  },
};
