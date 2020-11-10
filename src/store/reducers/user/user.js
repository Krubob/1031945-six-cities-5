import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {AuthorizationStatus} from "../../../const";

const initialState = {
  authStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend({}, state, {
        authorizationStatus: action.payload,
      });
    default:
      return state;
  }
};

export {user};
