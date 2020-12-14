import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../header/header";
import {Path} from "../../const";
import {isDataLoadedSelector, favoriteOffersByCitySelector} from "../../store/selectors";
import {fetchFavoriteOffers} from "../../store/api-actions";
import FavoriteList from "../favorite-list/favorite-list";
import FavoriteEmpty from "../favorite-empty/favorite-empty";

const Favorites = (props) => {
  const {isFavoriteOffersLoaded, favoriteOffersByCity, loadFavoriteOffersAction} = props;
  const isFavoriteOffersByCity = Object.keys(favoriteOffersByCity).length !== 0;

  useEffect(() => {
    if (!isFavoriteOffersByCity) {
      loadFavoriteOffersAction();
    }
  }, [isFavoriteOffersLoaded]);

  return !isFavoriteOffersLoaded ? `LOADING` : (
    <div className={`page ${isFavoriteOffersByCity ? `` : `page--favorites-empty`}`}>
      <Header />
      {!isFavoriteOffersByCity ? <FavoriteEmpty /> :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <FavoriteList favoriteOffersByCity={favoriteOffersByCity} />
              </ul>
            </section>
          </div>
        </main>}
      <footer className="footer container">
        <Link className="footer__logo-link" to={Path.MAIN} >
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  loadFavoriteOffersAction: PropTypes.func.isRequired,
  isFavoriteOffersLoaded: PropTypes.bool.isRequired,
  favoriteOffersByCity: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isFavoriteOffersLoaded: isDataLoadedSelector(state),
  favoriteOffersByCity: favoriteOffersByCitySelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteOffersAction() {
    dispatch(fetchFavoriteOffers());
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

