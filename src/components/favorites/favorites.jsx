import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../header/header";
import {OfferPropTуpes} from "../../propTypes";
import {Path} from "../../const";
import {activeCitySelector, favoriteOffersSelector} from "../../store/selectors";
import FavoriteList from "../favorite-list/favorite-list";

const Favorites = (props) => {
  const {activeCity, favoriteOffers} = props;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList activeCity={activeCity} favoriteOffers={favoriteOffers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={Path.MAIN} >
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  favoriteOffers: PropTypes.arrayOf(OfferPropTуpes.isRequired),
  activeCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: activeCitySelector(state),
  favoriteOffers: favoriteOffersSelector(state),

});

export {Favorites};
export default connect(mapStateToProps, null)(Favorites);

