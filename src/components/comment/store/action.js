export const ActionType = {
  SET_IS_RESPONSE_WAITING: `SET_IS_RESPONSE_WAITING`,
  CLEAR_FORM_DATA: `CLEAR_FORM_DATA`,
  SET_FORM_REVIEW_VALUE: `SET_FORM_REVIEW_VALUE`,
  SET_FORM_RATING_VALUE: `SET_FORM_RATING_VALUE`,
};

export const setIsResponseWaiting = (isWaiting) => ({
  type: ActionType.SET_IS_RESPONSE_WAITING,
  payload: isWaiting,
});

export const clearFormData = () => ({
  type: ActionType.CLEAR_FORM_DATA,
});

export const setFormReviewValue = (evt) => ({
  type: ActionType.SET_FORM_REVIEW_VALUE,
  payload: evt.target.value,
});

export const setFormRatingValue = (evt) => ({
  type: ActionType.SET_FORM_RATING_VALUE,
  payload: evt.target.value,
});
