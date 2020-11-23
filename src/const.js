export const Path = {
  MAIN: `/`,
  OFFER: `/offer`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
};

export const APIPath = {
  LOGIN: `/login`,
  OFFERS: `/hotels`,
  FAVORITE: `/favorite`,
  REVIEWS: `/comments`,
  NEARBY: `/nearby`,
};

export const ClassNameType = {
  PROPERTY: `property`,
  CITIES: `cities`,
  NEAR: `near`,
  CITIES_PLACE_CARD: `cities__place-card`,
  NEAR_PLACES: `near-places`,
  FAVORITES: `favorites`,
  FAVORITES_CARD: `favorites__card`,
  FAVORITES_CARD_INFO: `favorites__card-info`,
};

export const OfferCardType = {
  FAVORITE_CARD: `FAVORITE_CARD`,
  OFFER_CARD: `OFFER_CARD`
};

export const stars = [
  {
    value: `5`,
    title: `perfect`,
  },
  {
    value: `4`,
    title: `good`,
  },
  {
    value: `3`,
    title: `not bad`,
  },
  {
    value: `2`,
    title: `badly`,
  },
  {
    value: `1`,
    title: `terribly`,
  },
];

export const sortingTypes = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

export const SortingType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`,
};

export const RATING_MULTIPLIER = 20;

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const HttpCode = {
  UNAUTHORIZED: 401
};

export const ResponseType = {
  SUCCESS: `SUCCESS`,
  ERROR: `ERROR`,
};

export const LoadStatusType = {
  LOADING: `LOADING`,
  LOADED: `LOADED`,
  ERROR: `ERROR`,
  NONE: `NONE`
};

export const REVIEW_TEXT = {
  MIN_VALUE: 50,
  MAX_VALUE: 300,
};

export const MAX_REVIEWS_ON_PAGE = 10;
