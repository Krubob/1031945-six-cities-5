import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import configureMockStore from "redux-mock-store";
// import {MemoryRouter} from "react-router-dom";
// import {Provider} from "react-redux";
// import {testInitialState} from "../../test-data";
import {Comment} from "./comment";
import {stars} from "../../const";
import {extend} from "../../utils";

configure({adapter: new Adapter()});
// const mockStore = configureMockStore();
// const store = mockStore(testInitialState);

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
