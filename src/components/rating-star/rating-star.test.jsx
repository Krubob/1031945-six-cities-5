import React from "react";
import renderer from "react-test-renderer";
import RatingStar from "./rating-star";

const star = {
  value: `4`,
  title: `good`,
};

it(`RatingStar should render correctly`, () => {
  const tree = renderer
    .create(
        <RatingStar
          star={star}
          onInputStarClick={()=>{}}
          checked={true}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
