export const Path = {
  MAIN: `/`,
  OFFER: `/offer`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
};

export const className = {
  PROPERTY: `property`,
  CITIES: `cities`,
  NEAR: `near`,
  NEAR_PLACES: `near-places`,
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
