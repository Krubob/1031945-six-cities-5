import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {AuthorizationStatus} from "../../../const";

const initialState = {
  authStatus: AuthorizationStatus.NO_AUTH,
  authData: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authStatus: action.payload,
      });
    case ActionType.LOAD_AUTH_DATA:
      return extend(state, {
        authData: action.payload,
      });
    default:
      return state;
  }
};

export {user};
