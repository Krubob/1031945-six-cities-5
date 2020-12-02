import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SortingList from "./sorting-list";
import {SortingType} from "../../const";

configure({adapter: new Adapter()});

describe(`e2e test: SortingList component`, () => {
  it(`should call onSortingToggle with isOpened`, () => {
    const onSortingClick = jest.fn();
    const onSortingToggle = jest.fn();
    const wrapper = shallow(
        <SortingList
          isOpened={true}
          activeSorting={SortingType.TOP_RATED}
          onSortingToggle={onSortingToggle}
          onSortingClick={onSortingClick}
        />
    );

    wrapper.find(`span.places__sorting-type`).simulate(`click`);
    expect(onSortingToggle).toHaveBeenCalledTimes(1);
    expect(onSortingToggle.mock.calls[0][0]).toBe(true);
  });
});
