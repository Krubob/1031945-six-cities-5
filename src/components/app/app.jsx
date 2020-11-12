import React from "react";
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import Login from "../login/login";
import {Path} from "../../const";
import {OfferPropTуpes, ReviewPropTypes} from "../../propTypes";
import {offersSelector} from "../../store/selectors";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
// import {fetchOffer} from "../../store/api-actions";

const App = (props) => {

  const {offers, reviews} = props;

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
            reviews = {reviews}
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

// const mapDispatchToProps = (dispatch) => ({
//   loadOfferAction(offerId) {
//     dispatch(fetchOffer(offerId));
//   }
// });

App.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTуpes.isRequired).isRequired,
  reviews: PropTypes.arrayOf(ReviewPropTypes.isRequired).isRequired,
  // loadOfferAction: PropTypes.func.isRequired,
};

export {App};
export default connect(mapStateToProps, null)(App);
