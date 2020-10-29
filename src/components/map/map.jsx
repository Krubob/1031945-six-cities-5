import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {OfferPropTуpes, cityPropTypes} from "../../propTypes";
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.coords = [52.38, 4.9];
    this.zoom = 12;
    this.iconUrl = `img/pin.svg`;
    this.activeIconUrl = `img/pin-active.svg`;
    this.iconSize = [30, 30];
    this.pins = [];
  }

  addPinsToMap(offers) {
    offers.forEach((offer) => {
      const pin = leaflet
        .marker(offer.coordinates, {icon: this.pinIcon})
        .addTo(this.map);
      this.pins = [...this.pins, pin];
    });
  }

  removePinsMap() {
    this.pins.forEach((it) => {
      it.removeFrom(this.map);
    });
    this.pins = [];
  }

  onPinMouseHover() {
    this.pinIcon = leaflet.icon({
      iconUrl: this.activeIconUrl,
      iconSize: this.iconSize,
    });
  }

  componentDidMount() {
    const {offers} = this.props;

    this.pinIcon = leaflet.icon({
      iconUrl: this.iconUrl,
      iconSize: this.iconSize,
    });

    this.map = leaflet.map(`map`, {
      center: this.coords,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this.coords, this.zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    this.addPinsToMap(offers);
  }

  componentDidUpdate() {
    const {offers} = this.props;

    this.removePinsMap();
    this.addPinsToMap(offers);
  }

  render() {
    const {className} = this.props;

    return (
      <section id="map" className={`${className}__map map`} onClick={this.onPinMouseHover()}></section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTуpes.isRequired),
  className: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(cityPropTypes.isRequired).isRequired,
  activeCity: PropTypes.string.isRequired,
};

export default Map;
