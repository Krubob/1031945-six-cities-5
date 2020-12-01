import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SortingItem from "./sorting-item";
import {SortingType} from "../../const";

configure({adapter: new Adapter()});

test(`click on SortingItem correctly`, () => {
  const onSortingClick = jest.fn();
  const wrapper = shallow(
      <SortingItem
        type={SortingType.POPULAR}
        activeSorting={SortingType.TOP_RATED}
        onSortingClick={onSortingClick}
      />
  );

  wrapper.find(`li.places__option`).simulate(`click`);
  expect(onSortingClick).toHaveBeenCalledTimes(1);
});
