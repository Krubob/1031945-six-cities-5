import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {testInitialState} from "../../test-data";
import CityItem from "./city-item";

configure({adapter: new Adapter()});
const mockStore = configureMockStore();
const store = mockStore(testInitialState);

test(`should call onCityClick`, () => {
  const onCityClick = jest.fn();
  const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <CityItem
            name={`Paris`}
            isActive={true}
            onCityClick={onCityClick}
          />
        </MemoryRouter>
      </Provider>
  );

  wrapper.find(`.locations__item-link`).simulate(`click`);
  expect(onCityClick).toHaveBeenCalledTimes(1);
});
