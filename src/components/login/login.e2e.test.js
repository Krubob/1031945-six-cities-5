import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {testInitialState} from "../../test-data";
import {Login} from "./login";

configure({adapter: new Adapter()});
const mockStore = configureMockStore();
const store = mockStore(testInitialState);

test(`click on Login correctly`, () => {
  const onSubmit = jest.fn();
  const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Login
            onSubmit={onSubmit}
          />
        </MemoryRouter>
      </Provider>
  );

  wrapper.find(`.login__form`).simulate(`click`, {preventDefault() {}});
  expect(onSubmit).toHaveBeenCalledTimes(0);
});
