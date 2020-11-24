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
import {loadAuthDataSuccess} from "./store/action";
import {AuthorizationStatus} from "./const";
import {fetchOfferList, checkAuth} from "./store/api-actions";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(loadAuthDataSuccess({}, AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchOfferList()),
  store.dispatch(checkAuth())
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
