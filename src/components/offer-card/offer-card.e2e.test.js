import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {testInitialState} from "../../test-data";
import OfferCard from "./offer-card";
import {OfferCardType, ClassNameType} from "../../const";

configure({adapter: new Adapter()});
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
  description: [`description`],
  isHostPro: true,
};

test(`mouseover on OfferCard correctly`, () => {
  const changeActiveOfferAction = jest.fn();
  const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <OfferCard
            changeActiveOfferAction={changeActiveOfferAction}
            offer={offer}
            className={ClassNameType.CITIES_PLACE_CARD}
            offerCardType={OfferCardType.OFFER_CARD}
          />
        </MemoryRouter>
      </Provider>
  );

  wrapper.find(`article.place-card`).simulate(`mouseover`);
  expect(changeActiveOfferAction).toHaveBeenCalledTimes(0);
});
