import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {OfferPropTуpes} from "../../propTypes";
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers} = this.props;
    const amsterdamCoordinates = [52.38333, 4.9];
    const zoom = 12;
    const pinIcon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const map = leaflet.map(`map`, {
      center: amsterdamCoordinates,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(amsterdamCoordinates, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    offers.forEach((offer) => {
      leaflet
        .marker(offer.coordinates, {icon: pinIcon})
        .addTo(map);
    });
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
};

export default Map;
