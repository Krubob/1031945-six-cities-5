import React from "react";
import renderer from "react-test-renderer";
import FavoriteEmpty from "./favorite-empty";

it(`FavoriteEmpty should render correctly`, () => {
  const tree = renderer
    .create(
        <FavoriteEmpty/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
