import React from "react";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Main from "./main";
import {testInitialState} from "../../test-data";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

describe(`Main snapshot`, () => {
  it(`Main should render correctly with empty cityOffers`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Main
              cities = {[`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]}
              activeCity = {`Paris`}
              activeSorting = {`Popular`}
              changeCityAction = {()=>{}}
              changeSortingAction= {()=>{}}
              sortedOffers = {[]}
              cityOffers = {[]}
              isOffersLoaded = {true}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
