import React from "react";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Favorites from "./favorites";
import {testInitialState} from "../../test-data";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);
const favoriteOffersByCity = {
  Paris: [
    {
      id: `1`,
      city: `Paris`,
      title: `title`,
      coordinates: [50.957361, 6.9509739999999995],
      type: `type`,
      cost: 100,
      rating: 4.5,
      photos: [`img-url-1`, `img-url-2`, `img-url-3`, `img-url-4`, `img-url-5`, `img-url-6`, `img-url-7`, `img-url-8`],
      image: `small-img-url`,
      isPremium: false,
      bedrooms: 1,
      guests: 2,
      service: [`service1`, `service2`, `service3`, `service4`, `service5`, `service6`, `service7`],
      isFavorite: true,
      cityCoordinates: [50.938361, 6.959974],
      cityZoom: 13,
      avatar: `avatar-url`,
      name: `host-name`,
      description: [`description`],
      isHostPro: true,
    },
    {
      id: `3`,
      city: `Paris`,
      title: `title`,
      coordinates: [50.957361, 6.9509739999999995],
      type: `type`,
      cost: 300,
      rating: 3.7,
      photos: [`img-url-1`, `img-url-2`, `img-url-3`, `img-url-4`, `img-url-5`, `img-url-6`, `img-url-7`, `img-url-8`],
      image: `small-img-url`,
      isPremium: true,
      bedrooms: 3,
      guests: 8,
      service: [`service1`, `service2`, `service3`, `service4`, `service5`, `service6`, `service7`],
      isFavorite: true,
      cityCoordinates: [50.938361, 6.959974],
      cityZoom: 13,
      avatar: `avatar-url`,
      name: `host-name`,
      description: [`description`],
      isHostPro: true,
    },
  ],
  Amsterdam: [
    {
      id: `7`,
      city: `Amsterdam`,
      title: `title`,
      coordinates: [50.957361, 6.9509739999999995],
      type: `type`,
      cost: 490,
      rating: 4.8,
      photos: [`img-url-1`, `img-url-2`, `img-url-3`, `img-url-4`, `img-url-5`, `img-url-6`, `img-url-7`, `img-url-8`],
      image: `small-img-url`,
      isPremium: false,
      bedrooms: 2,
      guests: 4,
      service: [`service1`, `service2`, `service3`, `service4`, `service5`, `service6`, `service7`],
      isFavorite: true,
      cityCoordinates: [50.938361, 6.959974],
      cityZoom: 13,
      avatar: `avatar-url`,
      name: `host-name`,
      description: [`description`],
      isHostPro: true,
    },
  ],
};

const emptyFavoriteOffersByCity = {};

describe(`Favorites snapshot`, () => {
  it(`Should Favorites render correctly when isFavoriteOffersLoaded={true} and not empty favoriteOffersByCity`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Favorites
              isFavoriteOffersLoaded={true}
              favoriteOffersByCity={favoriteOffersByCity}
              loadFavoriteOffersAction={()=>{}}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Favorites render correctly when isFavoriteOffersLoaded={true} and empty favoriteOffersByCity`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Favorites
              isFavoriteOffersLoaded={false}
              favoriteOffersByCity={emptyFavoriteOffersByCity}
              loadFavoriteOffersAction={()=>{}}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
