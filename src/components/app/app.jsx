import React from "react";
// import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
// import Favorites from "../favorites/favorites";
// import Offer from "../offer/offer";
// import Login from "../login/login";
import {Path} from "../../const";
// import {ReviewPropTypes, OfferPropTуpes} from "../../propTypes";

const App = () => {

  // const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Path.MAIN}>
          <Main />
        </Route>
        {/* <Route exact path={Path.FAVORITES}>
          <Favorites
            offers = {offers}
          />
        </Route>
        <Route exact path={`${Path.OFFER}/:id`} render={({match: {params}}) => (
          <Offer
            offer = {offers.find((item) => item.id === params.id)}
            reviews = {reviews}
            nearOffers = {[offers[0], offers[1], offers[2]]}
          />
        )}
        />
        <Route exact path={Path.LOGIN}>
          <Login />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  // offers: PropTypes.arrayOf(OfferPropTуpes.isRequired).isRequired,
  // reviews: PropTypes.arrayOf(ReviewPropTypes.isRequired).isRequired,
};

export default App;
