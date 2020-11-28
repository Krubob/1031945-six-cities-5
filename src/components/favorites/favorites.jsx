import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../header/header";
import {OfferPropTуpes} from "../../propTypes";
import {Path} from "../../const";
import {activeCitySelector, favoriteOffersSelector, isDataLoadedSelector, favoriteOffersByCitySelector} from "../../store/selectors";
import {fetchFavoriteOffers} from "../../store/api-actions";
import FavoriteList from "../favorite-list/favorite-list";
import FavoriteEmpty from "../favorite-empty/favorite-empty";

class Favorites extends PureComponent {
  componentDidMount() {
    const {loadFavoriteOffersAction} = this.props;
    loadFavoriteOffersAction();
  }

  render() {
    const {activeCity, favoriteOffers, isFavoriteOffersLoaded, favoriteOffersByCity} = this.props;
    const isFavoriteOffers = favoriteOffers.length > 0;

    return !isFavoriteOffersLoaded ? (
      <div>LOADING...</div>
    ) : (
      <div className={`page ${isFavoriteOffers ? `` : `page--favorites-empty`}`}>
        <Header />
        {!isFavoriteOffers ? <FavoriteEmpty /> :
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  <FavoriteList activeCity={activeCity} favoriteOffersByCity={favoriteOffersByCity} />
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
  }
}

Favorites.propTypes = {
  favoriteOffers: PropTypes.arrayOf(OfferPropTуpes.isRequired),
  loadFavoriteOffersAction: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
  isFavoriteOffersLoaded: PropTypes.bool.isRequired,
  favoriteOffersByCity: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: activeCitySelector(state),
  favoriteOffers: favoriteOffersSelector(state),
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

