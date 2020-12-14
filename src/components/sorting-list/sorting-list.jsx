import React, {useReducer} from "react";
import PropTypes from 'prop-types';
import SortingItem from "../sorting-item/sorting-item";
import {sortingTypes} from "../../const";
import {extend} from "../../utils";

const SortingList = (props) => {
  const {activeSorting, onSortingClick} = props;

  const initialState = {
    isOpened: false,
  };

  const ActionType = {
    SET_IS_OPENED: `SET_IS_OPENED`,
  };

  const setIsOpened = (isOpened) => ({
    type: ActionType.SET_IS_OPENED,
    payload: !isOpened,
  });

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.SET_IS_OPENED:
        return extend(state, {
          isOpened: action.payload,
        });
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const {isOpened} = state;

  const onSortingToggle = (status) => dispatch(setIsOpened(status));

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0"
        onClick={()=>{
          onSortingToggle(isOpened);
        }}
      >
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? `places__options--opened` : ``}`}>
        {sortingTypes.map((type, i) => (
          <SortingItem key={`type-${i}`} type={type} activeSorting={activeSorting} onSortingClick={onSortingClick}/>
        ))
        }
      </ul>
    </form>
  );
};

SortingList.propTypes = {
  activeSorting: PropTypes.string.isRequired,
  onSortingClick: PropTypes.func.isRequired,
};

export default SortingList;
