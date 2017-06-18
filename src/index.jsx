import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './containers/app.jsx';

import configureStore from './store/configureStore.jsx';
import './index.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

export default store;
