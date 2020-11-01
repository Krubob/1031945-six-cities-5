import React from "react";
import PropTypes from 'prop-types';
import SortingItem from "../sorting-item/sorting-item";
import {sortingTypes} from "../../const";

const SortingList = (props) => {
  const {isOpened, activeSorting, handleSortingToggle, handleSortingClick, getSortedOffers} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0"
        onClick={()=>{
          handleSortingToggle(isOpened);
        }}
      >
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? `places__options--opened` : ``}`}>
        {sortingTypes.map((type, i) => (
          <SortingItem key={`type-${i}`} type={type} activeSorting={activeSorting} handleSortingClick={handleSortingClick} getSortedOffers={getSortedOffers}/>
        ))
        }
      </ul>
    </form>
  );
};

SortingList.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  activeSorting: PropTypes.string.isRequired,
  handleSortingClick: PropTypes.func.isRequired,
  handleSortingToggle: PropTypes.func.isRequired,
  getSortedOffers: PropTypes.func.isRequired,
};

export default SortingList;
