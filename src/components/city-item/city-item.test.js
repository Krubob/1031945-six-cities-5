import React from "react";
import renderer from "react-test-renderer";
import CityItem from "./city-item";

describe(`CityItem snapshot`, () => {
  it(`Should CityItem render correctly when isActive={true}`, () => {
    const tree = renderer
    .create(
        <CityItem
          name = {`Paris`}
          isActive = {true}
          onCityClick={()=>{}}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should CityItem render correctly when isActive={false}`, () => {
    const tree = renderer
    .create(
        <CityItem
          name = {`Paris`}
          isActive = {false}
          onCityClick={()=>{}}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
