import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import App from '/containers/App.jsx';

const store = createStore(
  combineReducers({})
);

const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
