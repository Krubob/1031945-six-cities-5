import {extend} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";
import {CITIES} from "../const";

const initialState = {
  city: `Amsterdam`,
  cities: CITIES,
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });
    case ActionType.GET_CITY_OFFERS:
      return extend(state, {
        offers: action.payload});
    default:
      return state;
  }
};

export {reducer};
