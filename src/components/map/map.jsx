import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {OfferPropTуpes} from "../../propTypes";
import leaflet from 'leaflet';
import {activeOfferSelector} from "../../store/selectors";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.pinIcon = undefined;
    this.activePinIcon = undefined;
    this.iconSize = [30, 30];
    this.pins = [];
  }

  componentDidMount() {
    const {offers} = this.props;
    const defaultCoords = offers[0].cityCoordinates;
    const zoom = offers[0].cityZoom;

    this.pinIcon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: this.iconSize,
    });

    this.activePinIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: this.iconSize,
    });

    this.map = leaflet.map(`map`, {
      center: defaultCoords,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(defaultCoords, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    this._addPinsToMap(offers);
  }

  componentDidUpdate() {
    const {offers} = this.props;
    const currentCoords = offers[0].cityCoordinates;
    const currentZoom = offers[0].cityZoom;
    this.map.setView(currentCoords, currentZoom);
    this._removePinsMap();
    this._addPinsToMap(offers);
  }

  _addPinsToMap(offers) {
    const {activeOffer} = this.props;

    offers.forEach((offer) => {
      const activeIcon = activeOffer === offer.id ? this.activePinIcon : this.pinIcon;
      const pin = leaflet
        .marker(offer.coordinates, {icon: activeIcon})
        .addTo(this.map);
      this.pins = [...this.pins, pin];
    });
  }

  _removePinsMap() {
    this.pins.forEach((it) => {
      it.removeFrom(this.map);
    });
    this.pins = [];
  }

  render() {
    const {className} = this.props;

    return (
      <section id="map" className={`${className}__map map`}></section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTуpes.isRequired),
  className: PropTypes.string.isRequired,
  activeOffer: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeOffer: activeOfferSelector(state),
});

export {Map};
export default connect(mapStateToProps, null)(Map);

