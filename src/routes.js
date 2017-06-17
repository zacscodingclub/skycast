import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
// import Forecast from './components/Forecast';
// import NotFound from './components/NotFound';
// <Route path="*" component={NotFound} />
// <Route path="/forecast/:location" component={Forecast} />
const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
  </Router>
);

export default Routes;
