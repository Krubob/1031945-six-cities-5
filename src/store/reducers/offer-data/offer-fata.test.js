import {offerData, initialState} from "./offer-data";
import {ActionType} from "../../action";
import {cities, CityType, SortingType} from "../../../const";
import {getOffersWithNewFavoriteStatus} from "../../../utils";

describe(`offerData reducer unit test`, () => {

  it(`CHANGE_CITY`, () => {
    const action = {
      type: ActionType.CHANGE_CITY,
      activeCity: CityType.AMSTERDAM,
    };

    expect(offerData(initialState, action)).toEqual({
      ...initialState,
      activeCity: action.payload,
    });
  });

  it(`CHANGE_SORTING`, () => {
    const action = {
      type: ActionType.CHANGE_SORTING,
      activeSorting: SortingType.TOP_RATED,
    };

    expect(offerData(initialState, action)).toEqual({
      ...initialState,
      activeSorting: action.payload
    });
  });

  it(`CHANGE_ACTIVE_OFFER`, () => {
    const action = {
      type: ActionType.CHANGE_ACTIVE_OFFER,
      activeOffer: `1`,
    };

    expect(offerData(initialState, action)).toEqual({
      ...initialState,
      activeOffer: action.payload
    });
  });

  it(`LOAD_OFFER_SUCCESS`, () => {
    const prevInitialState = {
      cities,
      offers: [],
      activeOffer: ``,
      offer: {},
      reviews: [],
      nearOffers: [],
      favoriteOffers: [],
      changedFavoriteOffer: {},
      activeCity: CityType.PARIS,
      activeSorting: SortingType.POPULAR,
      isLoading: true,
      error: null,
    };

    const action = {
      type: ActionType.LOAD_OFFER_SUCCESS,
      offer: {
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
    };

    expect(offerData(prevInitialState, action)).toEqual({
      ...prevInitialState,
      isLoading: false,
      offer: action.payload,
    });
  });

  it(`LOAD_OFFER_REQUEST`, () => {
    const action = {
      type: ActionType.LOAD_OFFER_REQUEST,
    };

    expect(offerData(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it(`LOAD_OFFER_FAILURE after request`, () => {
    const action = {
      type: ActionType.LOAD_OFFER_FAILURE,
      error: `error`
    };

    expect(offerData(initialState, action)).toEqual({
      ...initialState,
      isLoading: null,
      error: action.error
    });
  });

  it(`LOAD_OFFER_FAILURE in request`, () => {
    const prevInitialState = {
      cities,
      offers: [],
      activeOffer: ``,
      offer: {},
      reviews: [],
      nearOffers: [],
      favoriteOffers: [],
      changedFavoriteOffer: {},
      activeCity: CityType.PARIS,
      activeSorting: SortingType.POPULAR,
      isLoading: true,
      error: null,
    };

    const action = {
      type: ActionType.LOAD_OFFER_FAILURE,
      error: `error`
    };

    expect(offerData(prevInitialState, action)).toEqual({
      ...prevInitialState,
      isLoading: null,
      error: action.error
    });
  });

  it(`LOAD_OFFERS_SUCCESS`, () => {
    const prevInitialState = {
      cities,
      offers: [],
      activeOffer: ``,
      offer: {},
      reviews: [],
      nearOffers: [],
      favoriteOffers: [],
      changedFavoriteOffer: {},
      activeCity: CityType.PARIS,
      activeSorting: SortingType.POPULAR,
      isLoading: true,
      error: null,
    };

    const action = {
      type: ActionType.LOAD_OFFERS_SUCCESS,
      offers: [{
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
    };

    expect(offerData(prevInitialState, action)).toEqual({
      ...prevInitialState,
      isLoading: false,
      offers: action.payload,
    });
  });

  it(`LOAD_OFFERS_REQUEST`, () => {
    const action = {
      type: ActionType.LOAD_OFFERS_REQUEST,
    };

    expect(offerData(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it(`LOAD_OFFERS_FAILURE after request`, () => {
    const action = {
      type: ActionType.LOAD_OFFERS_FAILURE,
      error: `error`
    };

    expect(offerData(initialState, action)).toEqual({
      ...initialState,
      isLoading: null,
      error: action.error
    });
  });

  it(`LOAD_OFFERS_FAILURE in request`, () => {
    const prevInitialState = {
      cities,
      offers: [],
      activeOffer: ``,
      offer: {},
      reviews: [],
      nearOffers: [],
      favoriteOffers: [],
      changedFavoriteOffer: {},
      activeCity: CityType.PARIS,
      activeSorting: SortingType.POPULAR,
      isLoading: true,
      error: null,
    };

    const action = {
      type: ActionType.LOAD_OFFERS_FAILURE,
      error: `error`
    };

    expect(offerData(prevInitialState, action)).toEqual({
      ...prevInitialState,
      isLoading: null,
      error: action.error
    });
  });

  it(`LOAD_REVIEWS_SUCCESS`, () => {
    const prevInitialState = {
      cities,
      offers: [],
      activeOffer: ``,
      offer: {},
      reviews: [],
      nearOffers: [],
      favoriteOffers: [],
      changedFavoriteOffer: {},
      activeCity: CityType.PARIS,
      activeSorting: SortingType.POPULAR,
      isLoading: true,
      error: null,
    };

    const action = {
      type: ActionType.LOAD_REVIEWS_SUCCESS,
      reviews: [
        {
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
        },
      ],
    };

    expect(offerData(prevInitialState, action)).toEqual({
      ...prevInitialState,
      isLoading: false,
      reviews: action.payload,
    });
  });

  it(`LOAD_REVIEWS_REQUEST`, () => {
    const action = {
      type: ActionType.LOAD_REVIEWS_REQUEST,
    };

    expect(offerData(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it(`LOAD_REVIEWS_FAILURE after request`, () => {
    const action = {
      type: ActionType.LOAD_REVIEWS_FAILURE,
      error: `error`
    };

    expect(offerData(initialState, action)).toEqual({
      ...initialState,
      isLoading: null,
      error: action.error
    });
  });

  it(`LOAD_OFFERS_FAILURE in request`, () => {
    const prevInitialState = {
      cities,
      offers: [],
      activeOffer: ``,
      offer: {},
      reviews: [],
      nearOffers: [],
      favoriteOffers: [],
      changedFavoriteOffer: {},
      activeCity: CityType.PARIS,
      activeSorting: SortingType.POPULAR,
      isLoading: true,
      error: null,
    };

    const action = {
      type: ActionType.LOAD_REVIEWS_FAILURE,
      error: `error`
    };

    expect(offerData(prevInitialState, action)).toEqual({
      ...prevInitialState,
      isLoading: null,
      error: action.error
    });
  });

  it(`LOAD_NEAR_OFFERS_SUCCESS`, () => {
    const prevInitialState = {
      cities,
      offers: [],
      activeOffer: ``,
      offer: {},
      reviews: [],
      nearOffers: [],
      favoriteOffers: [],
      changedFavoriteOffer: {},
      activeCity: CityType.PARIS,
      activeSorting: SortingType.POPULAR,
      isLoading: true,
      error: null,
    };

    const action = {
      type: ActionType.LOAD_NEAR_OFFERS_SUCCESS,
      nearOffers: [{
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
    };

    expect(offerData(prevInitialState, action)).toEqual({
      ...prevInitialState,
      isLoading: false,
      nearOffers: action.payload,
    });
  });

  it(`LOAD_NEAR_OFFERS_REQUEST`, () => {
    const action = {
      type: ActionType.LOAD_NEAR_OFFERS_REQUEST,
    };

    expect(offerData(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it(`LOAD_NEAR_OFFERS_FAILURE after request`, () => {
    const action = {
      type: ActionType.LOAD_NEAR_OFFERS_FAILURE,
      error: `error`
    };

    expect(offerData(initialState, action)).toEqual({
      ...initialState,
      isLoading: null,
      error: action.error
    });
  });

  it(`LOAD_NEAR_OFFERS_FAILURE in request`, () => {
    const prevInitialState = {
      cities,
      offers: [],
      activeOffer: ``,
      offer: {},
      reviews: [],
      nearOffers: [],
      favoriteOffers: [],
      changedFavoriteOffer: {},
      activeCity: CityType.PARIS,
      activeSorting: SortingType.POPULAR,
      isLoading: true,
      error: null,
    };

    const action = {
      type: ActionType.LOAD_NEAR_OFFERS_FAILURE,
      error: `error`
    };

    expect(offerData(prevInitialState, action)).toEqual({
      ...prevInitialState,
      isLoading: null,
      error: action.error
    });
  });

  it(`LOAD_FAVORITE_OFFERS_SUCCESS`, () => {
    const prevInitialState = {
      cities,
      offers: [],
      activeOffer: ``,
      offer: {},
      reviews: [],
      nearOffers: [],
      favoriteOffers: [],
      changedFavoriteOffer: {},
      activeCity: CityType.PARIS,
      activeSorting: SortingType.POPULAR,
      isLoading: true,
      error: null,
    };

    const action = {
      type: ActionType.LOAD_FAVORITE_OFFERS_SUCCESS,
      favoriteOffers: [{
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
    };

    expect(offerData(prevInitialState, action)).toEqual({
      ...prevInitialState,
      isLoading: false,
      favoriteOffers: action.payload,
    });
  });

  it(`LOAD_FAVORITE_OFFERS_REQUEST`, () => {
    const action = {
      type: ActionType.LOAD_FAVORITE_OFFERS_REQUEST,
    };

    expect(offerData(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it(`LOAD_FAVORITE_OFFERS_FAILURE after request`, () => {
    const action = {
      type: ActionType.LOAD_FAVORITE_OFFERS_FAILURE,
      error: `error`
    };

    expect(offerData(initialState, action)).toEqual({
      ...initialState,
      isLoading: null,
      error: action.error
    });
  });

  it(`LOAD_FAVORITE_OFFERS_FAILURE in request`, () => {
    const prevInitialState = {
      cities,
      offers: [],
      activeOffer: ``,
      offer: {},
      reviews: [],
      nearOffers: [],
      favoriteOffers: [],
      changedFavoriteOffer: {},
      activeCity: CityType.PARIS,
      activeSorting: SortingType.POPULAR,
      isLoading: true,
      error: null,
    };

    const action = {
      type: ActionType.LOAD_FAVORITE_OFFERS_FAILURE,
      error: `error`
    };

    expect(offerData(prevInitialState, action)).toEqual({
      ...prevInitialState,
      isLoading: null,
      error: action.error
    });
  });

  it(`CHANGE_FAVORITE_OFFER_STATUS`, () => {
    const action = {
      type: ActionType.CHANGE_FAVORITE_OFFER_STATUS,
      offers: [{
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
      changedFavoriteOffer: {
        id: `3`,
        city: `Paris`,
        title: `title`,
        coordinates: [50.957361, 6.9509739999999995],
        type: `type`,
        cost: 300,
        rating: 3.7,
        photos: [`img-url-1`, `img-url-2`, `img-url-3`, `img-url-4`, `img-url-5`, `img-url-6`, `img-url-7`, `img-url-8`],
        image: `small-img-url`,
        isPremium: true,
        bedrooms: 3,
        guests: 8,
        service: [`service1`, `service2`, `service3`, `service4`, `service5`, `service6`, `service7`],
        isFavorite: true,
        cityCoordinates: [50.938361, 6.959974],
        cityZoom: 13,
        avatar: `avatar-url`,
        name: `host-name`,
        description: [`description`],
        isHostPro: true,
      },
    };

    expect(offerData(initialState, action)).toEqual({
      ...initialState,
      offers: getOffersWithNewFavoriteStatus(initialState.offers, action.payload),
      changedFavoriteOffer: action.payload
    });
  });

  it(`CHANGE_FAVORITE_NEAR_OFFER_STATUS`, () => {
    const action = {
      type: ActionType.CHANGE_FAVORITE_NEAR_OFFER_STATUS,
      nearOffers: [{
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
      changedFavoriteOffer: {
        id: `3`,
        city: `Paris`,
        title: `title`,
        coordinates: [50.957361, 6.9509739999999995],
        type: `type`,
        cost: 300,
        rating: 3.7,
        photos: [`img-url-1`, `img-url-2`, `img-url-3`, `img-url-4`, `img-url-5`, `img-url-6`, `img-url-7`, `img-url-8`],
        image: `small-img-url`,
        isPremium: true,
        bedrooms: 3,
        guests: 8,
        service: [`service1`, `service2`, `service3`, `service4`, `service5`, `service6`, `service7`],
        isFavorite: true,
        cityCoordinates: [50.938361, 6.959974],
        cityZoom: 13,
        avatar: `avatar-url`,
        name: `host-name`,
        description: [`description`],
        isHostPro: true,
      },
    };

    expect(offerData(initialState, action)).toEqual({
      ...initialState,
      nearOffers: getOffersWithNewFavoriteStatus(initialState.nearOffers, action.payload),
      changedFavoriteOffer: action.payload
    });
  });
});
