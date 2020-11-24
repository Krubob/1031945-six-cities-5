import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {AuthorizationStatus} from "../../../const";

const initialState = {
  authStatus: AuthorizationStatus.NO_AUTH,
  authData: {},
  isLoading: false,
  error: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_AUTH_DATA_SUCCESS:
      return extend(state, {
        isLoading: false,
        authData: action.payload,
        authStatus: action.authStatus,
      });
    case ActionType.LOAD_AUTH_DATA_REQUEST:
      return extend(state, {
        isLoading: true,
      });
    case ActionType.LOAD_AUTH_DATA_FAILURE:
      return extend(state, {
        isLoading: null,
        error: action.error
      });
    default:
      return state;
  }
};

export {user};
