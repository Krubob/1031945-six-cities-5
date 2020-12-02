import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Comment} from "./comment";
import {stars} from "../../const";
import {extend} from "../../utils";

configure({adapter: new Adapter()});

const testing = () => {};
const testMocks = {
  offerId: `1`,
  review: `comment`,
  stars,
  rating: `5`,
  isDisabledSubmitBtn: false,
  onTextAreaChange: testing,
  onInputStarClick: testing,
  sendReviewAction: testing,
  onResponseWaitingChange: testing,
  onFormDataClear: testing,
};

describe(`e2e test: ReviewForm component`, () => {
  it(`should call onTextAreaChange with text`, () => {
    const onTextAreaChange = jest.fn();
    const review = `comment`;

    const wrapper = shallow(
        <Comment
          {...extend(testMocks, {onTextAreaChange})}
        />
    );

    wrapper.find(`.form__textarea`).simulate(`change`, {target: {value: review}});
    expect(onTextAreaChange).toHaveBeenCalledTimes(1);
  });
});
