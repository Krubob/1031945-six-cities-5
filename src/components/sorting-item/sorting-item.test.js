import React from "react";
import renderer from "react-test-renderer";
import SortingItem from "./sorting-item";

describe(`SortingItem snapshot`, () => {
  it(`SortingItem should render correctly when type is equal activeSorting`, () => {
    const tree = renderer
    .create(
        <SortingItem
          type={`Popular`}
          activeSorting={`Popular`}
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
          type={`Top rated first`}
          activeSorting={`Popular`}
          onSortingClick={()=>{}}
        />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
