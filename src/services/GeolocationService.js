class GeolocationService {
  constructor(location) {
    this.BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    this.END_URL = `&key=${process.env.REACT_APP_GMAPS_KEY}`;
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
