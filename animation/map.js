import mapboxgl from 'mapbox-gl';

const createMap = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoibWF0aGlsZGVwZWlmZmVyIiwiYSI6ImNrczVpd2p5MzB4eHcyb29kOXkwYXBxbWsifQ.tO73fVpHiP0YrojDiSrZeQ';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: ([-0.077, 51.533]),
    zoom: 12
  });

  const updateMap = (mapCoordinates) => {
    new mapboxgl.Marker()
      .setLngLat(mapCoordinates)
      .addTo(map);
    map.flyTo({ center: (mapCoordinates), zoom: 9 });
  };

  const coordinates = document.querySelector("#coordinates");
  const searchCoordinates = (query) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=pk.eyJ1IjoibWF0aGlsZGVwZWlmZmVyIiwiYSI6ImNrczVpd2p5MzB4eHcyb29kOXkwYXBxbWsifQ.tO73fVpHiP0YrojDiSrZeQ`)
      .then(response => response.json())
      .then((data) => {
        const coordinatesList = `<li class="list-inline-item">
          <p>${data.features[0].center}</p>
          </li>`;
        coordinates.insertAdjacentHTML("beforeend", coordinatesList);
        updateMap(data.features[0].center);
      });
  };

  const form = document.querySelector('.form-inline');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // <-- to prevent <form>'s native behaviour
    const input = document.querySelector('.form-control');
    coordinates.innerHTML = '';
    searchCoordinates(input.value);
  });
}

export { createMap };
