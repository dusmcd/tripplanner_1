const mapboxgl = require('mapbox-gl');

function markerMaker(type, coordinates) {
  var image;
  const marker1 = document.createElement('div');
  marker1.style.width = '32px';
  marker1.style.height = '39px';
  switch (type) {
    case 'activity':
      image = 'url(http://i.imgur.com/WbMOfMl.png)';
      break;
    case 'hotel':
      image = 'url(http://i.imgur.com/D9574Cu.png)';
      break;
    case 'restaurant':
      image = 'url(http://i.imgur.com/cqR6pUI.png)';
      break;
    default:
      image = 'url(http://i.imgur.com/WbMOfMl.png';
  }
  marker1.style.backgroundImage = image;
  return new mapboxgl.Marker(marker1).setLngLat(coordinates);
}

export default markerMaker;
