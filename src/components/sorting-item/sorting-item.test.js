import React from "react";
import renderer from "react-test-renderer";
import SortingItem from "./sorting-item";
import {SortingType} from "../../const";

describe(`SortingItem snapshot`, () => {
  it(`SortingItem should render correctly when type is equal activeSorting`, () => {
    const tree = renderer
    .create(
        <SortingItem
          type={SortingType.POPULAR}
          activeSorting={SortingType.POPULAR}
          onSortingClick={()=>{}}
        />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`SortingItem should render correctly when type not equal activeSorting`, () => {
    const tree = renderer
    .create(
        <SortingItem
          type={SortingType.TOP_RATED}
          activeSorting={SortingType.POPULAR}
          onSortingClick={()=>{}}
        />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
