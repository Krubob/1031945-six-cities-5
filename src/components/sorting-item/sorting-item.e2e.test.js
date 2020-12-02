import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SortingItem from "./sorting-item";
import {SortingType} from "../../const";

configure({adapter: new Adapter()});

describe(`e2e test: SortingType component`, () => {
  it(`should call onSortingClick with type`, () => {
    const onSortingClick = jest.fn();
    const wrapper = shallow(
        <SortingItem
          type={SortingType.TOP_RATED}
          activeSorting={SortingType.TOP_RATED}
          onSortingClick={onSortingClick}
        />
    );

    wrapper.find(`li.places__option`).simulate(`click`);
    expect(onSortingClick).toHaveBeenCalledTimes(1);
    expect(onSortingClick.mock.calls[0][0]).toBe(SortingType.TOP_RATED);
  });
});
