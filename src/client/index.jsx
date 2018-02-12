import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import configureStore from './store/ConfigureStore';
import Overview from './components/overview/Overview';

import './components/bundle.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <Overview />
    </div>
  </Provider>

  , document.getElementById('react-root'),
);
