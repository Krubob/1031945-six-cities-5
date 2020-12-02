import React from "react";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Comment from "./comment";
import {stars} from "../../const";
import {testInitialState} from "../../test-data";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

describe(`Comment snapshot`, () => {
  it(`Should Comment render correctly when isDisabledSubmitButton={true}`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Comment
              review = {`Good place!`}
              stars = {stars}
              rating = {`5`}
              offerId ={`1`}
              onTextAreaChange={()=>{}}
              onInputStarClick={()=>{}}
              isDisabledSubmitBtn = {true}
              onFormDataClear={()=>{}}
              onResponseWaitingChange={()=>{}}
              sendReviewAction={()=>{}}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Comment render correctly when isDisabledSubmitButton={false}`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Comment
              review = {`Good place!`}
              stars = {stars}
              rating = {`5`}
              offerId ={`1`}
              onTextAreaChange={()=>{}}
              onInputStarClick={()=>{}}
              isDisabledSubmitBtn = {false}
              onFormDataClear={()=>{}}
              onResponseWaitingChange={()=>{}}
              sendReviewAction={()=>{}}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
