import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {Path} from "../../const";
import {isUserAuthorizedSelector, authDataSelector, getUserEmail} from "../../store/selectors";

const Header = (props) => {
  const {isUserAuthorized, authData, userEmail} = props;

  const authorizedUserLink = (
    <Link className="header__nav-link header__nav-link--profile" to={Path.FAVORITES}>
      <div className="header__avatar-wrapper user__avatar-wrapper">
        <img src={authData.avatarUrl}/>
      </div>
      <span className="header__user-name user__name">{userEmail}</span>
    </Link>
  );

  const unauthorizedUserLink = (
    <Link className="header__nav-link header__nav-link--profile" to={Path.LOGIN}>
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__login">Sign in</span>
    </Link>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={isUserAuthorized ? Path.MAIN : Path.LOGIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {isUserAuthorized ? authorizedUserLink : unauthorizedUserLink}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isUserAuthorized: PropTypes.bool.isRequired,
  authData: PropTypes.object.isRequired,
  userEmail: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isUserAuthorized: isUserAuthorizedSelector(state),
  authData: authDataSelector(state),
  userEmail: getUserEmail(state),
});

export {Header};
export default connect(mapStateToProps, null)(Header);
