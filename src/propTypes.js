import PropTypes from "prop-types";

export const OfferPropTуpes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
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
  author: PropTypes.string.isRequired,
  avatar: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
});

export const StarPropTypes = PropTypes.shape({
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
});
