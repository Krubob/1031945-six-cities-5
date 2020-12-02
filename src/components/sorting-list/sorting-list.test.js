import React from "react";
import renderer from "react-test-renderer";
import SortingList from "./sorting-list";
import {SortingType} from "../../const";

describe(`SortingList snapshot`, () => {
  it(`SortingList should render correctly when the sorting is opened`, () => {
    const tree = renderer
    .create(
        <SortingList
          isOpened={true}
          activeSorting={SortingType.POPULAR}
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
          activeSorting={SortingType.POPULAR}
          onSortingToggle={()=>{}}
          onSortingClick={()=>{}}
        />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
