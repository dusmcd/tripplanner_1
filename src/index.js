import markerMaker from './marker.js';
import { MapDataEvent } from 'mapbox-gl';
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiZHVzbWNkIiwiYSI6ImNqZ28zMWU0YzAwaWcycW54NXJ5ZnZ2bzQifQ._03haGKDdSCU0nRs5dtwEA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

markerMaker('restaurant').addTo(map)

