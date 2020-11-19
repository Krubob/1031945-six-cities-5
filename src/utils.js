import {SortingType, MAX_REVIEWS_ON_PAGE} from "./const";

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

export const getTemplateOffer = (data) => {
  return {
    id: String(data.id),
    city: data.city.name,
    title: data.title,
    coordinates: [data.location.latitude, data.location.longitude],
    type: data.type,
    cost: data.price,
    rating: data.rating,
    photos: data.images,
    image: data.preview_image,
    isPremium: data.is_premium,
    bedrooms: data.bedrooms,
    guests: data.max_adults,
    service: data.goods,
    isFavorite: data.is_favorite,
    cityCoordinates: [data.city.location.latitude, data.city.location.longitude],
    cityZoom: data.city.location.zoom,
    avatar: data.host.avatar_url,
    name: data.host.name,
    description: data.description,
    super: data.host.is_pro,
  };
};

export const getTemplateOffers = (dataArr) => dataArr.map((it) => getTemplateOffer(it));

export const getTemplateAuthData = (data) => {
  return {
    id: data.id,
    email: data.email,
    avatarUrl: data.avatar_url,
    isPro: data.is_pro,
    name: data.name,
  };
};

export const getTemplateReview = (data) => {
  return {
    id: String(data[`id`]),
    date: data[`date`],
    rating: data[`rating`],
    text: data[`comment`],
    author: data[`user`][`name`],
    avatar: data[`user`][`avatar_url`],
    isPro: data[`user`][`is_pro`],
    userId: data[`user`][`id`],
  };
};

export const getTemplateReviews = (dataArr) => dataArr.map((it) => getTemplateReview(it));

export const dateConverter = new Intl.DateTimeFormat(`en-us`, {
  year: `numeric`,
  month: `long`,
});

export const sortReviewsByDate = (reviews) => {
  const copiedReviews = reviews.slice();
  copiedReviews.sort((a, b) => {
    let c = new Date(a.date);
    let d = new Date(b.date);
    return d - c;
  });
  return copiedReviews.slice(0, MAX_REVIEWS_ON_PAGE);
};
