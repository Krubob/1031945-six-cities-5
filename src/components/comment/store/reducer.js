import {extend} from "../../../utils";
import {ActionType} from "./action";

export const initialState = {
  rating: ``,
  review: ``,
  isResponseWaiting: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_IS_RESPONSE_WAITING:
      return extend(state, {
        isResponseWaiting: action.payload,
      });
    case ActionType.CLEAR_FORM_DATA:
      return extend(state, {
        rating: ``,
        review: ``,
      });
    case ActionType.SET_FORM_REVIEW_VALUE:
      return extend(state, {
        review: action.payload,
      });
    case ActionType.SET_FORM_RATING_VALUE:
      return extend(state, {
        rating: action.payload,
      });
    default:
      return state;
  }
};
