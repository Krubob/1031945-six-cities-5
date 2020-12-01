import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list";

const reviews = [
  {
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
  },
];

it(`ReviewsList should render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewsList
          reviews={reviews}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
