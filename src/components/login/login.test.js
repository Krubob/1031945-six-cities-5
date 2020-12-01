import React from "react";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Login from "./login";
import {testInitialState} from "../../test-data";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

it(`Login should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Login
              onSubmit={()=>{}}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
