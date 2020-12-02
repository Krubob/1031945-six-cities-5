import {user, initialState} from "./user";
import {ActionType} from "../../action";
import {AuthorizationStatus} from "../../../const";

describe(`user reducer unit test`, () => {

  it(`LOAD_AUTH_DATA_SUCCESS`, () => {
    const prevInitialState = {
      authStatus: AuthorizationStatus.NO_AUTH,
      authData: {},
      isLoading: true,
      error: null,
    };

    const action = {
      type: ActionType.LOAD_AUTH_DATA_SUCCESS,
      payload: {
        id: 1,
        email: `email`,
        avatarUrl: `avatar_url`,
        isPro: false,
        name: `name`,
      },
      authStatus: AuthorizationStatus.AUTH,
    };

    expect(user(prevInitialState, action)).toEqual({
      ...prevInitialState,
      isLoading: false,
      authData: action.payload,
      authStatus: action.authStatus,
    });
  });

  it(`LOAD_AUTH_DATA_REQUEST`, () => {
    const action = {
      type: ActionType.LOAD_AUTH_DATA_REQUEST,
    };

    expect(user(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it(`LOAD_AUTH_DATA_FAILURE after request`, () => {
    const action = {
      type: ActionType.LOAD_AUTH_DATA_FAILURE,
      error: `error`
    };

    expect(user(initialState, action)).toEqual({
      ...initialState,
      isLoading: null,
      error: action.error
    });
  });

  it(`LOAD_AUTH_DATA_FAILURE in request`, () => {
    const prevInitialState = {
      authStatus: AuthorizationStatus.NO_AUTH,
      authData: {},
      isLoading: true,
      error: null,
    };

    const action = {
      type: ActionType.LOAD_AUTH_DATA_FAILURE,
      error: `error`
    };

    expect(user(prevInitialState, action)).toEqual({
      ...initialState,
      isLoading: null,
      error: action.error
    });
  });

});
