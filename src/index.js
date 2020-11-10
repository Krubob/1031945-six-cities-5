import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api";
import App from "./components/app/app";
import reviews from "./mocks/reviews";
import rootReducer from "./store/reducers/root-reducer";
import {requireAuthorization} from "./store/action";
import {AuthorizationStatus} from "./const";
import {fetchOfferList} from "./store/api-actions";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchOfferList())
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App
            reviews={reviews}
          />
        </Provider>,
        document.querySelector(`#root`)
    );
  });
