import {extend} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";
import cities from "../mocks/cities";

const initialState = {
  activeCity: `Amsterdam`,
  activeSorting: `Popular`,
  cities,
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload,
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.CHANGE_SORTING:
      return extend(state, {
        activeSorting: action.payload
      });
    default:
      return state;
  }
};

export {reducer};
