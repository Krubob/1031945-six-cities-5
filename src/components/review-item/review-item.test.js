import React from "react";
import renderer from "react-test-renderer";
import ReviewItem from "./review-item";

const review = {
  id: 1,
  date: `2020-10-06`,
  comment: `comment`,
  rating: 4,
  user: {
    userId: 1,
    avatar: `avatar_url`,
    isPro: true,
    name: `name`,
  },
};

it(`ReviewItem should render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewItem
          review={review}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
