import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {isUserAuthorizedSelector} from "../../store/selectors";

const PrivateRoute = (props) => {
  const {render, path, exact, isUserAuthorized, redirectTo} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          isUserAuthorized
            ? render(routeProps)
            : <Redirect to={redirectTo} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isUserAuthorized: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuthorized: isUserAuthorizedSelector(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
