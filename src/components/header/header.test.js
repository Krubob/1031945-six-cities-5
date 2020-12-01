import React from "react";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Header from "./header";
import {testInitialState} from "../../test-data";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

const authData = {
  id: 1,
  email: `mail@mail.ru`,
  avatarUrl: `avatar_url`,
  isPro: `false`,
  name: `name`,
};

describe(`Header snapshot`, () => {
  it(`Should Header render correctly when isUserAuthorized = {false}`, ()=> {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Header
              isUserAuthorized = {false}
              authData = {authData}
              userEmail={`mail@mail.ru`}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Header render correctly when isUserAuthorized = {true}`, ()=> {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Header
              isUserAuthorized = {true}
              authData = {authData}
              userEmail={`mail@mail.ru`}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
