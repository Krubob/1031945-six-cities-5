import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {testInitialState} from "../../test-data";
import {Bookmark} from "./bookmark";
import {ClassNameType, BookmarkType} from "../../const";

configure({adapter: new Adapter()});
const mockStore = configureMockStore();
const store = mockStore(testInitialState);

test(`should call onClick`, () => {
  const onChangeFavoriteOfferStatusAction = jest.fn();
  const wrapper = shallow(
      <Provider store={store}>
        <MemoryRouter>
          <Bookmark
            offerId={`1`}
            isFavorite={false}
            onChangeFavoriteOfferStatusAction={onChangeFavoriteOfferStatusAction}
            className={ClassNameType.PLACE_CARD}
            bookmarkType={BookmarkType.PLACE_CARD_BOOKMARK}
            isUserAuthorized={true}
          />
        </MemoryRouter>
      </Provider>
  );

  wrapper.find(`.button`).simulate(`click`);
  expect(onChangeFavoriteOfferStatusAction).toHaveBeenCalledTimes(1);
});
