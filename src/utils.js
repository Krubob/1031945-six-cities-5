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
