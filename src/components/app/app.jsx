import React from "react";
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import Login from "../login/login";
import {Path} from "../../const";
import {OfferPropTуpes} from "../../propTypes";
import {offersSelector} from "../../store/selectors";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const App = (props) => {

  const {offers} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <PrivateRoute exact path={Path.MAIN} redirectTo={Path.LOGIN} render={() => (
          <Main />
        )}
        />
        <PrivateRoute exact path={Path.FAVORITES} redirectTo={Path.LOGIN} render={() => (
          <Favorites
            offers = {offers}
          />
        )}
        />
        <Route exact path={`${Path.OFFER}/:id`} render={({match}) => (
          <Offer
            offerId = {match.params.id}
            nearOffers = {[offers[3], offers[4], offers[21]]}
          />
        )}
        />
        <Route exact path={Path.LOGIN}>
          <Login/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  offers: offersSelector(state),
});

App.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTуpes.isRequired).isRequired,
};

export {App};
export default connect(mapStateToProps, null)(App);
