import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';

function MapComponent({ setCurrentPosition }) {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add geolocation code here
  }, []);

  return (
    <div id="map"></div>
  );
}

MapComponent.propTypes = {
  setCurrentPosition: PropTypes.func.isRequired,
};

export default MapComponent;
