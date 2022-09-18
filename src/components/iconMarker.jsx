import L from 'leaflet'

const iconMarker = new L.Icon({
    iconUrl: require('../images/icon-location.png'),
    iconRetinaUrl: require('../images/icon-location.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(26, 36),
});

export { iconMarker };