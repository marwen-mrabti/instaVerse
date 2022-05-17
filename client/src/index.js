import React from 'react';
import ReactDom from 'react-dom';

import store from './redux/store';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';

import App from './App';

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
