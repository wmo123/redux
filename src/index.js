import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './store/components/App';
// import App from './app';

import TodoApp from './store/reducers';

const store = createStore(TodoApp);
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
)

