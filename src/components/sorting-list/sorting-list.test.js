import React from "react";
import renderer from "react-test-renderer";
import SortingList from "./sorting-list";

describe(`SortingList snapshot`, () => {
  it(`SortingList should render correctly when the sorting is opened`, () => {
    const tree = renderer
    .create(
        <SortingList
          isOpened={true}
          activeSorting={`Popular`}
          onSortingToggle={()=>{}}
          onSortingClick={()=>{}}
        />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`SortingList should render correctly when the sorting is closed`, () => {
    const tree = renderer
    .create(
        <SortingList
          isOpened={false}
          activeSorting={`Popular`}
          onSortingToggle={()=>{}}
          onSortingClick={()=>{}}
        />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
