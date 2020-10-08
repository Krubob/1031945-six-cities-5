import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Options = {
  OFFERS_NUMBER: 312,
};

ReactDOM.render(
    <App
      offersNumber={Options.OFFERS_NUMBER}
    />,
    document.querySelector(`#root`)
);
