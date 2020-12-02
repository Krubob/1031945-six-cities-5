import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RatingStar from "./rating-star";

configure({adapter: new Adapter()});

const star = {
  value: `5`,
  title: `perfect`,
};

test(`click on RatingStar correctly`, () => {
  const onInputStarClick = jest.fn();
  const wrapper = shallow(
      <RatingStar
        star = {star}
        onInputStarClick={onInputStarClick}
        checked = {true}
      />
  );

  wrapper.find(`.form__rating-input`).simulate(`change`);
  expect(onInputStarClick).toHaveBeenCalledTimes(1);
});
