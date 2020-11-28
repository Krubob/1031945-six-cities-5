import {createSelector} from "reselect";
import {getOffersBySortType, getOffersByCity, sortReviewsByDate, getFavoriteOffersByCity} from "../utils";
import {AuthorizationStatus} from "../const";

export const isLoadingSelector = (state) => state.DATA.isLoading;
export const offerSelector = (state) => state.DATA.offer;
export const offersSelector = (state) => state.DATA.offers;
export const citiesSelector = (state) => state.DATA.cities;
export const activeCitySelector = (state) => state.DATA.activeCity;
export const activeSortingSelector = (state) => state.DATA.activeSorting;
export const activeOfferSelector = (state) => state.DATA.activeOffer;
export const reviewsSelector = (state) => state.DATA.reviews;
export const nearOffersSelector = (state) => state.DATA.nearOffers;
export const favoriteOffersSelector = (state) => state.DATA.favoriteOffers;
export const changedFavoriteOfferSelector = (state) => state.DATA.changedFavoriteOffer;
export const offerFavoriteStatusSelector = (state) => state.DATA.changedFavoriteOffer.isFavorite;
export const authStatusSelector = (state) => state.USER.authStatus;
export const authDataSelector = (state) => state.USER.authData;
export const userEmailSelector = (state) => state.USER.authData.email;

export const getCityOffersSelector = createSelector(
    offersSelector,
    activeCitySelector,
    (offers, activeCity) => getOffersByCity(offers, activeCity)
);

export const getSortedCityOffersSelector = createSelector(
    getCityOffersSelector,
    activeSortingSelector,
    (cityOffers, activeSorting) => getOffersBySortType(cityOffers, activeSorting)
);

export const getSortedReviewsSelector = createSelector(
    reviewsSelector,
    (reviews) => sortReviewsByDate(reviews)
);

export const isUserAuthorizedSelector = createSelector(
    authStatusSelector,
    (authStatus) => authStatus === AuthorizationStatus.AUTH
);

export const isOfferLoadedSelector = createSelector(
    offerSelector,
    isLoadingSelector,
    (offer, isLoading) => !isLoading && Object.keys(offer).length !== 0
);

export const isDataLoadedSelector = createSelector(
    isLoadingSelector,
    (isLoading) => !isLoading
);

export const getUserEmail = createSelector(
    userEmailSelector,
    (email) => email || null
);

export const favoriteOffersByCitySelector = createSelector(
    favoriteOffersSelector,
    (favoriteOffers) => getFavoriteOffersByCity(favoriteOffers)
);
