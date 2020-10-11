import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import Login from "../login/login";

const App = (props) => {

  const {offersNumber, offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => (
          <Main
            offersNumber = {offersNumber}
            offers = {offers}
          />
        )}
        />
        <Route exact path="/favorites" render={() => (
          <Favorites
            offers = {offers}
          />
        )}
        />
        <Route exact path="/offer/:id" render={() => (
          <Offer
            offers = {offers}
            reviews = {reviews}
          />
        )}
        />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersNumber: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default App;
