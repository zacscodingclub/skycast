import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import './index.css';


ReactDOM.render(
  <Router forceRefresh={true}>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
