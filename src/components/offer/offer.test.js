import React from "react";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {testInitialState} from "../../test-data";
import {Offer} from "./offer";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);
const offer = {
  id: `1`,
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
  description: `description`,
  isHostPro: true,
};
const reviews = [
  {
    id: 1,
    date: `2020-10-06`,
    comment: `comment`,
    rating: 4,
    user: {
      userId: 1,
      avatar: `avatar_url`,
      isPro: true,
      name: `name`,
    },
  },
];
jest.mock(`leaflet`, () => ({
  icon: jest.fn(),
  map: jest.fn().mockReturnValue({
    setView: jest.fn(),
    remove: jest.fn()
  }),
  tileLayer: jest.fn().mockReturnValue({
    addTo: jest.fn()
  }),
  marker: jest.fn().mockReturnValue({
    addTo: jest.fn()
  }),
}));

it(`Offer should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Offer
              offerId={`1`}
              offer={offer}
              nearOffers={[offer]}
              isOfferLoaded={true}
              isUserAuthorized={true}
              availableReviews={reviews}
              offerFavoriteStatus={false}
              changedFavoriteOffer={offer}
              loadOfferAction={()=>{}}
              loadReviewsAction={()=>{}}
              loadNearOffersAction={()=>{}}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
