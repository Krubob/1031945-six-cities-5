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

const getTemplateOffer = (data) => {
  return {
    id: String(data[`id`]),
    city: data[`city`][`name`],
    title: data[`title`],
    coordinates: [data[`location`][`latitude`], data[`location`][`longitude`]],
    type: data[`type`],
    cost: data[`price`],
    rating: data[`rating`],
    photos: data[`images`],
    image: data[`preview_image`],
    isPremium: data[`is_premium`],
    bedrooms: data[`bedrooms`],
    guests: data[`max_adults`],
    service: data[`goods`],
    isFavorite: data[`is_favorite`],
    cityCoordinates: [data[`city`][`location`][`latitude`], data[`city`][`location`][`longitude`]],
    cityZoom: data[`city`][`location`][`zoom`],
    avatar: data[`host`][`avatar_url`],
    name: data[`host`][`name`],
    description: [data[`description`]],
    super: data[`host`][`is_pro`],
  };
};

export const getTemplateOffers = (dataArr) => dataArr.map((it) => getTemplateOffer(it));
