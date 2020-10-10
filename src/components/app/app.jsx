import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import Login from "../login/login";

const App = (props) => {

  const {offersNumber} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Main offersNumber = {offersNumber} />}/>
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/offer/:id" component={Offer} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersNumber: PropTypes.number.isRequired
};

export default App;
