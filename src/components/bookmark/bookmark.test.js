import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";
import Bookmark from "./bookmark";
import {testInitialState} from "../../test-data";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

describe(`Bookmark snapshot`, () => {
  it(`Should Bookmark render correctly when isUserAuthorized={false} and isFavorite={false}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Bookmark
                offerId = {`1`}
                isFavorite = {false}
                onChangeFavoriteOfferStatusAction={()=>{}}
                className={`place-card`}
                bookmarkType={`PLACE_CARD_BOOKMARK`}
                isUserAuthorized = {false}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Bookmark render correctly when isUserAuthorized={false} and isFavorite={true}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Bookmark
                offerId = {`1`}
                isFavorite = {true}
                onChangeFavoriteOfferStatusAction={()=>{}}
                className={`place-card`}
                bookmarkType={`PLACE_CARD_BOOKMARK`}
                isUserAuthorized = {false}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Bookmark render correctly when isUserAuthorized={true} and isFavorite={false}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Bookmark
                offerId = {`1`}
                isFavorite = {false}
                onChangeFavoriteOfferStatusAction={()=>{}}
                className={`place-card`}
                bookmarkType={`PLACE_CARD_BOOKMARK`}
                isUserAuthorized = {true}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Bookmark render correctly when isUserAuthorized={true} and isFavorite={true}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Bookmark
                offerId = {`1`}
                isFavorite = {true}
                onChangeFavoriteOfferStatusAction={()=>{}}
                className={`place-card`}
                bookmarkType={`PLACE_CARD_BOOKMARK`}
                isUserAuthorized = {true}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
