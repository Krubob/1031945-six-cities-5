import React from "react";
import PropTypes from "prop-types";

const SortingItem = (props) => {
  const {type, activeSorting, handleSortingClick} = props;
  return (
    <li className={`places__option ${activeSorting === type ? `places__option--active` : ``}`} tabIndex="0"
      onClick={() => {
        handleSortingClick(type);
      }}
    >
      {type}
    </li>
  );
};

SortingItem.propTypes = {
  type: PropTypes.string.isRequired,
  activeSorting: PropTypes.string.isRequired,
  handleSortingClick: PropTypes.func.isRequired,
};

export default SortingItem;

