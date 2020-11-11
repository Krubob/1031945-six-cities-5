import {combineReducers} from "redux";
import {offerData} from "./offer-data/offer-data";
import {user} from "./user/user";

export default combineReducers({
  DATA: offerData,
  USER: user,
});
