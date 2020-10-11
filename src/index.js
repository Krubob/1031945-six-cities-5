import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";

const Options = {
  OFFERS_NUMBER: 312,
};

ReactDOM.render(
    <App
      offersNumber={Options.OFFERS_NUMBER}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
