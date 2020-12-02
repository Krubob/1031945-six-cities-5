import PropTypes from "prop-types";

export const OfferPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coordinates: PropTypes.arrayOf(
      PropTypes.number.isRequired
  ).isRequired,
  type: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  features: PropTypes.shape({
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    guests: PropTypes.number.isRequired,
  }),
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  mark: PropTypes.string,
  service: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    super: PropTypes.bool.isRequired
  })
});

export const ReviewPropTypes = PropTypes.shape({
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
  )
});

export const ReviewByIdPropTypes = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired
});

export const StarPropTypes = PropTypes.shape({
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});
