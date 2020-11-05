import React, {Fragment} from "react";
import PropTypes from 'prop-types';

const MainEmpty = (props) => {
  const {activeCity} = props;

  return (
    <Fragment>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {activeCity}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </Fragment>
  );
};

MainEmpty.propTypes = {
  activeCity: PropTypes.string.isRequired,
};

export default MainEmpty;
