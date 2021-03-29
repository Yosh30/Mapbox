const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
})

/* map */
mapboxgl.accessToken = 'pk.eyJ1IjoieW9zdWFtYW5hbm9tYSIsImEiOiJja21qMm1oem4wbjQ1Mm90bnp2dHZkc2JxIn0.2NHkrsIv8sHqh30FEBiqjw';
          
navigator.geolocation.getCurrentPosition(succesLocation,
    errorLocation, { 
        enableHighAccuracy: true
})

function succesLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation () {
    setupMap([1.460126, 124.826347])
}

function setupMap(center) {
var map = new mapboxgl.Map({
             container: 'map',
             style: 'mapbox://styles/mapbox/streets-v11',
             center : center,
             zoom: 15
            })

/* lokasi user */

const loc = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true
      })
      map.addControl(loc, 'bottom-right');


            }

