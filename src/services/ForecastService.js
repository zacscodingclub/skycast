import fetchJSONP from 'fetch-jsonp';

class ForecastService {
  constructor(location) {
    this.BASE_URL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_KEY}/`;
    this.location = location;
  }

  requestURL() {
    return this.BASE_URL + this.location;
  }

  fetch() {
    return fetchJSONP(this.requestURL())
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
  }
}

export default ForecastService;
