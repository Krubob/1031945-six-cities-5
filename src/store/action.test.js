import {AuthorizationStatus} from "../const";
import {
  ActionType,
  changeFavoriteOfferStatus,
  changeFavoriteNearOfferStatus,
  changeCity,
  changeSorting,
  changeActiveOffer,
  loadOfferSuccess,
  loadOfferRequest,
  loadOfferFailure,
  loadOffersSuccess,
  loadOffersRequest,
  loadOffersFailure,
  redirectToRoute,
  loadAuthDataSuccess,
  loadAuthDataRequest,
  loadAuthDataFailure,
  loadReviewsSuccess,
  loadReviewsRequest,
  loadReviewsFailure,
  loadNearOffersSuccess,
  loadNearOffersRequest,
  loadNearOffersFailure,
  loadFavoriteOffersSuccess,
  loadFavoriteOffersRequest,
  loadFavoriteOffersFailure,
} from "./action";

describe(`Action creators work correctly`, () => {
  it(`changeFavoriteOfferStatus(): should change favoriteOffer`, () => {
    expect(changeFavoriteOfferStatus(
        {
          id: `1`,
          city: `Amsterdam`,
          title: `title`,
          coordinates: [50.957361, 6.9509739999999995],
          type: `type`,
          cost: 490,
          rating: 4.8,
          photos: [`img-url-1`, `img-url-2`, `img-url-3`, `img-url-4`, `img-url-5`, `img-url-6`, `img-url-7`, `img-url-8`],
          image: `small-img-url`,
          isPremium: false,
          bedrooms: 2,
          guests: 4,
          service: [`service1`, `service2`, `service3`, `service4`, `service5`, `service6`, `service7`],
          isFavorite: true,
          cityCoordinates: [50.938361, 6.959974],
          cityZoom: 13,
          avatar: `avatar-url`,
          name: `host-name`,
          description: `description`,
          isHostPro: true,
        }
    )).toEqual({
      type: ActionType.CHANGE_FAVORITE_OFFER_STATUS,
      payload: {
        id: `1`,
        city: `Amsterdam`,
        title: `title`,
        coordinates: [50.957361, 6.9509739999999995],
        type: `type`,
        cost: 490,
        rating: 4.8,
        photos: [`img-url-1`, `img-url-2`, `img-url-3`, `img-url-4`, `img-url-5`, `img-url-6`, `img-url-7`, `img-url-8`],
        image: `small-img-url`,
        isPremium: false,
        bedrooms: 2,
        guests: 4,
        service: [`service1`, `service2`, `service3`, `service4`, `service5`, `service6`, `service7`],
        isFavorite: true,
        cityCoordinates: [50.938361, 6.959974],
        cityZoom: 13,
        avatar: `avatar-url`,
        name: `host-name`,
        description: `description`,
        isHostPro: true,
      },
    });
  });

  it(`changeFavoriteNearOfferStatus(): should change favoriteOffer`, () => {
    expect(changeFavoriteNearOfferStatus(
        {
          id: `1`,
          city: `Amsterdam`,
          title: `title`,
          coordinates: [50.957361, 6.9509739999999995],
          type: `type`,
          cost: 490,
          rating: 4.8,
          photos: [`img-url-1`, `img-url-2`, `img-url-3`, `img-url-4`, `img-url-5`, `img-url-6`, `img-url-7`, `img-url-8`],
          image: `small-img-url`,
          isPremium: false,
          bedrooms: 2,
          guests: 4,
          service: [`service1`, `service2`, `service3`, `service4`, `service5`, `service6`, `service7`],
          isFavorite: true,
          cityCoordinates: [50.938361, 6.959974],
          cityZoom: 13,
          avatar: `avatar-url`,
          name: `host-name`,
          description: `description`,
          isHostPro: true,
        }
    )).toEqual({
      type: ActionType.CHANGE_FAVORITE_NEAR_OFFER_STATUS,
      payload: {
        id: `1`,
        city: `Amsterdam`,
        title: `title`,
        coordinates: [50.957361, 6.9509739999999995],
        type: `type`,
        cost: 490,
        rating: 4.8,
        photos: [`img-url-1`, `img-url-2`, `img-url-3`, `img-url-4`, `img-url-5`, `img-url-6`, `img-url-7`, `img-url-8`],
        image: `small-img-url`,
        isPremium: false,
        bedrooms: 2,
        guests: 4,
        service: [`service1`, `service2`, `service3`, `service4`, `service5`, `service6`, `service7`],
        isFavorite: true,
        cityCoordinates: [50.938361, 6.959974],
        cityZoom: 13,
        avatar: `avatar-url`,
        name: `host-name`,
        description: `description`,
        isHostPro: true,
      },
    });
  });

  it(`changeCity(): should change city`, () => {
    expect(changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`,
    });
  });

  it(`changeSorting(): should change sorting`, () => {
    expect(changeSorting(`Popular`)).toEqual({
      type: ActionType.CHANGE_SORTING,
      payload: `Popular`,
    });
  });

  it(`changeActiveOffer(): should change active offer`, () => {
    expect(changeActiveOffer(`1`)).toEqual({
      type: ActionType.CHANGE_ACTIVE_OFFER,
      payload: `1`,
    });
  });

  it(`loadOfferSuccess(): should attach offer`, () => {
    expect(loadOfferSuccess(
        {
          id: `1`,
          city: `Amsterdam`,
          title: `title`,
          coordinates: [50.957361, 6.9509739999999995],
          type: `type`,
          cost: 490,
          rating: 4.8,
          photos: [`img-url-1`, `img-url-2`, `img-url-3`, `img-url-4`, `img-url-5`, `img-url-6`, `img-url-7`, `img-url-8`],
          image: `small-img-url`,
          isPremium: false,
          bedrooms: 2,
          guests: 4,
          service: [`service1`, `service2`, `service3`, `service4`, `service5`, `service6`, `service7`],
          isFavorite: true,
          cityCoordinates: [50.938361, 6.959974],
          cityZoom: 13,
          avatar: `avatar-url`,
          name: `host-name`,
          description: `description`,
          isHostPro: true,
        }
    )).toEqual({
      type: ActionType.LOAD_OFFER_SUCCESS,
      payload: {
        id: `1`,
        city: `Amsterdam`,
        title: `title`,
        coordinates: [50.957361, 6.9509739999999995],
        type: `type`,
        cost: 490,
        rating: 4.8,
        photos: [`img-url-1`, `img-url-2`, `img-url-3`, `img-url-4`, `img-url-5`, `img-url-6`, `img-url-7`, `img-url-8`],
        image: `small-img-url`,
        isPremium: false,
        bedrooms: 2,
        guests: 4,
        service: [`service1`, `service2`, `service3`, `service4`, `service5`, `service6`, `service7`],
        isFavorite: true,
        cityCoordinates: [50.938361, 6.959974],
        cityZoom: 13,
        avatar: `avatar-url`,
        name: `host-name`,
        description: `description`,
        isHostPro: true,
      },
    });
  });

  it(`loadOfferRequest(): should create action to set isLoading`, () => {
    expect(loadOfferRequest()).toEqual({
      type: ActionType.LOAD_OFFER_REQUEST,
    });
  });

  it(`loadOfferFailure(): should set error`, () => {
    expect(loadOfferFailure(`err`)).toEqual({
      type: ActionType.LOAD_OFFER_FAILURE,
      error: `err`,
    });
  });

  it(`loadOffersSuccess(): should attach offer`, () => {
    expect(loadOffersSuccess([{
      id: `1`,
      city: `Amsterdam`,
      title: `title`,
      coordinates: [50.957361, 6.9509739999999995],
      type: `type`,
      cost: 490,
      rating: 4.8,
      photos: [`img-url-1`, `img-url-2`, `img-url-3`, `img-url-4`, `img-url-5`, `img-url-6`, `img-url-7`, `img-url-8`],
      image: `small-img-url`,
      isPremium: false,
      bedrooms: 2,
      guests: 4,
      service: [`service1`, `service2`, `service3`, `service4`, `service5`, `service6`, `service7`],
      isFavorite: true,
      cityCoordinates: [50.938361, 6.959974],
      cityZoom: 13,
      avatar: `avatar-url`,
      name: `host-name`,
      description: `description`,
      isHostPro: true,
    }]
    )).toEqual({
      type: ActionType.LOAD_OFFERS_SUCCESS,
      payload: [{
        id: `1`,
        city: `Amsterdam`,
        title: `title`,
        coordinates: [50.957361, 6.9509739999999995],
        type: `type`,
        cost: 490,
        rating: 4.8,
        photos: [`img-url-1`, `img-url-2`, `img-url-3`, `img-url-4`, `img-url-5`, `img-url-6`, `img-url-7`, `img-url-8`],
        image: `small-img-url`,
        isPremium: false,
        bedrooms: 2,
        guests: 4,
        service: [`service1`, `service2`, `service3`, `service4`, `service5`, `service6`, `service7`],
        isFavorite: true,
        cityCoordinates: [50.938361, 6.959974],
        cityZoom: 13,
        avatar: `avatar-url`,
        name: `host-name`,
        description: `description`,
        isHostPro: true,
      }],
    });
  });

  it(`loadOffersRequest(): should set IsLoading`, () => {
    expect(loadOffersRequest()).toEqual({
      type: ActionType.LOAD_OFFERS_REQUEST
    });
  });

  it(`loadOffersFailure(): should set error`, () => {
    expect(loadOffersFailure(`err`)).toEqual({
      type: ActionType.LOAD_OFFERS_FAILURE,
      error: `err`,
    });
  });

  it(`redirectToRoute(): should attach url`, () => {
    expect(redirectToRoute(`url`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `url`,
    });
  });

  it(`loadAuthDataSuccess(): should attach authentication data and change authentication status`, () => {
    expect(loadAuthDataSuccess({
      id: 1,
      email: `email`,
      avatarUrl: `avatar_url`,
      isPro: false,
      name: `name`,
    },
    AuthorizationStatus.AUTH
    )).toEqual({
      type: ActionType.LOAD_AUTH_DATA_SUCCESS,
      payload: {
        id: 1,
        email: `email`,
        avatarUrl: `avatar_url`,
        isPro: false,
        name: `name`,
      },
      authStatus: AuthorizationStatus.AUTH,
    });
  });

  it(`loadAuthDataRequest(): should set IsLoading`, () => {
    expect(loadAuthDataRequest()).toEqual({
      type: ActionType.LOAD_AUTH_DATA_REQUEST
    });
  });

  it(`loadAuthDataFailure(): should set error`, () => {
    expect(loadAuthDataFailure(`err`)).toEqual({
      type: ActionType.LOAD_AUTH_DATA_FAILURE,
      error: `err`,
    });
  });

  it(`loadReviewsSuccess(): should attach reviews`, () => {
    expect(loadReviewsSuccess([{
      id: 1,
      date: `2020-10-06`,
      comment: `comment`,
      rating: 4,
      user: {
        userId: 1,
        avatar: `avatar_url`,
        isPro: true,
        name: `name`,
      },
    }],
    )).toEqual({
      type: ActionType.LOAD_REVIEWS_SUCCESS,
      payload: [{
        id: 1,
        date: `2020-10-06`,
        comment: `comment`,
        rating: 4,
        user: {
          userId: 1,
          avatar: `avatar_url`,
          isPro: true,
          name: `name`,
        },
      }],
    });
  });

  it(`loadReviewsRequest(): should set IsLoading`, () => {
    expect(loadReviewsRequest()).toEqual({
      type: ActionType.LOAD_REVIEWS_REQUEST
    });
  });

  it(`loadReviewsFailure(): should set error`, () => {
    expect(loadReviewsFailure(`err`)).toEqual({
      type: ActionType.LOAD_REVIEWS_FAILURE,
      error: `err`,
    });
  });

  it(`loadNearOffersSuccess(): should attach near offers`, () => {
    expect(loadNearOffersSuccess([{
      id: 1,
      date: `2020-10-06`,
      comment: `comment`,
      rating: 4,
      user: {
        userId: 1,
        avatar: `avatar_url`,
        isPro: true,
        name: `name`,
      },
    }],
    )).toEqual({
      type: ActionType.LOAD_NEAR_OFFERS_SUCCESS,
      payload: [{
        id: 1,
        date: `2020-10-06`,
        comment: `comment`,
        rating: 4,
        user: {
          userId: 1,
          avatar: `avatar_url`,
          isPro: true,
          name: `name`,
        },
      }],
    });
  });

  it(`loadNearOffersRequest(): should set IsLoading`, () => {
    expect(loadNearOffersRequest()).toEqual({
      type: ActionType.LOAD_NEAR_OFFERS_REQUEST
    });
  });

  it(`loadNearOffersFailure(): should set error`, () => {
    expect(loadNearOffersFailure(`err`)).toEqual({
      type: ActionType.LOAD_NEAR_OFFERS_FAILURE,
      error: `err`,
    });
  });

  it(`loadFavoriteOffersSuccess(): should attach favorite offers`, () => {
    expect(loadFavoriteOffersSuccess([{
      id: `1`,
      city: `Amsterdam`,
      title: `title`,
      coordinates: [50.957361, 6.9509739999999995],
      type: `type`,
      cost: 490,
      rating: 4.8,
      photos: [`img-url-1`, `img-url-2`, `img-url-3`, `img-url-4`, `img-url-5`, `img-url-6`, `img-url-7`, `img-url-8`],
      image: `small-img-url`,
      isPremium: false,
      bedrooms: 2,
      guests: 4,
      service: [`service1`, `service2`, `service3`, `service4`, `service5`, `service6`, `service7`],
      isFavorite: true,
      cityCoordinates: [50.938361, 6.959974],
      cityZoom: 13,
      avatar: `avatar-url`,
      name: `host-name`,
      description: `description`,
      isHostPro: true,
    }]
    )).toEqual({
      type: ActionType.LOAD_FAVORITE_OFFERS_SUCCESS,
      payload: [{
        id: `1`,
        city: `Amsterdam`,
        title: `title`,
        coordinates: [50.957361, 6.9509739999999995],
        type: `type`,
        cost: 490,
        rating: 4.8,
        photos: [`img-url-1`, `img-url-2`, `img-url-3`, `img-url-4`, `img-url-5`, `img-url-6`, `img-url-7`, `img-url-8`],
        image: `small-img-url`,
        isPremium: false,
        bedrooms: 2,
        guests: 4,
        service: [`service1`, `service2`, `service3`, `service4`, `service5`, `service6`, `service7`],
        isFavorite: true,
        cityCoordinates: [50.938361, 6.959974],
        cityZoom: 13,
        avatar: `avatar-url`,
        name: `host-name`,
        description: `description`,
        isHostPro: true,
      }]
    });
  });

  it(`loadFavoriteOffersRequest(): should set IsLoading`, () => {
    expect(loadFavoriteOffersRequest()).toEqual({
      type: ActionType.LOAD_FAVORITE_OFFERS_REQUEST
    });
  });

  it(`loadFavoriteOffersFailure(): should set error`, () => {
    expect(loadFavoriteOffersFailure(`err`)).toEqual({
      type: ActionType.LOAD_FAVORITE_OFFERS_FAILURE,
      error: `err`,
    });
  });
});
