import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list";

describe(`CitiesList snapshot`, () => {
  it(`Should CitiesList render correctly`, () => {
    const tree = renderer
    .create(
        <CitiesList
          cities = {[`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]}
          activeCity = {`Paris`}
          onCityClick={()=>{}}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
