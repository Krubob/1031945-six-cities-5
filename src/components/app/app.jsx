import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import Login from "../login/login";
import {Path} from "../../const";
import {OfferPropTуpes, ReviewPropTypes} from "../../propTypes";
import {loadOffers} from "../../store/selectors";

const App = (props) => {

  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Path.MAIN}>
          <Main />
        </Route>
        <Route exact path={Path.FAVORITES}>
          <Favorites
            offers = {offers}
          />
        </Route>
        <Route exact path={`${Path.OFFER}/:id`} render={({match: {params}}) => (
          <Offer
            offer = {offers.find((item) => item.id === params.id)}
            reviews = {reviews}
            nearOffers = {[offers[3], offers[4], offers[21]]}
          />
        )}
        />
        <Route exact path={Path.LOGIN}>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  offers: loadOffers(state),
});

App.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTуpes.isRequired).isRequired,
  reviews: PropTypes.arrayOf(ReviewPropTypes.isRequired).isRequired,
};

export {App};
export default connect(mapStateToProps, null)(App);
