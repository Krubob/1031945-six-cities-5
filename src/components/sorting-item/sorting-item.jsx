import React from "react";
import PropTypes from "prop-types";

const SortingItem = (props) => {
  const {type, activeSorting, onSortingClick} = props;
  return (
    <li className={`places__option ${activeSorting === type ? `places__option--active` : ``}`} tabIndex="0"
      onClick={() => {
        onSortingClick(type);
      }}
    >
      {type}
    </li>
  );
};

SortingItem.propTypes = {
  type: PropTypes.string.isRequired,
  activeSorting: PropTypes.string.isRequired,
  onSortingClick: PropTypes.func.isRequired,
};

export default SortingItem;

