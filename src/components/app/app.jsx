import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import Login from "../login/login";
import {Path} from "../../const";
import {ReviewPropTypes} from "../../propTypes";

const App = (props) => {

  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Path.MAIN} render={() => (
          <Main
            offers = {offers}
          />
        )}
        />
        <Route exact path={Path.FAVORITES} render={() => (
          <Favorites
            offers = {offers}
          />
        )}
        />
        <Route exact path={`${Path.OFFER}/:id`} render={({match: {params}}) => (
          <Offer
            offer = {offers.find((item) => item.id === params.id)}
            reviews = {reviews}
          />
        )}
        />
        <Route exact path={Path.LOGIN} component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.arrayOf(ReviewPropTypes.isRequired)
};

export default App;
