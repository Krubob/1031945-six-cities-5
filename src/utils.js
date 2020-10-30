import {SortingType} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersByCity = (offers, activeCity) => {
  return offers.filter((offer)=>{
    return offer.city === activeCity;
  });
};

export const getCoordByCity = (cities, activeCity) => {
  return cities.find((city)=>{
    return city.name === activeCity;
  }).coord;
};

export const getOffersBySortType = (offers, sortingType) => {
  switch (sortingType) {
    case SortingType.POPULAR:
      return offers.slice();
    case SortingType.PRICE_LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.cost - b.cost);
    case SortingType.PRICE_HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.cost - a.cost);
    case SortingType.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};
