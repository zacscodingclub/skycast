class GeolocationService {
  constructor(location) {
    this.BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    this.END_URL = '&key=AIzaSyC7LIPx-g_FRo-o2AdGe1mMajZcTdPBgrU';
    this.location = encodeURIComponent(location.trim());
    this.latLng = ''
  }

  requestURL() {
    return this.BASE_URL + this.location + this.END_URL;
  }

  geocode() {
    return fetch(this.requestURL())
        .then(response => response.json())
        .then(data => data.results[0].geometry.location)
        .catch(err => console.log(err));
  }
}

export default GeolocationService;

// https://developers.google.com/maps/documentation/geocoding/start
// https://maps.googleapis.com/maps/api/geocode/json?address=102+Furman+Ave,+Asheville,+NC&key=AIzaSyC7LIPx-g_FRo-o2AdGe1mMajZcTdPBgrU
// API_KEY = 'AIzaSyC7LIPx-g_FRo-o2AdGe1mMajZcTdPBgrU'
// response["results"]["geometry"]["location"] =>  { "lat": 35.603203, "lng": -82.545018 }
