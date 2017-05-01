// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import createHistory from 'history/createBrowserHistory'

injectTapEventPlugin()
const history = createHistory()

import App from './App';
import './index.css';

ReactDOM.render(
  <Router history={history}>
    <Route path='/' component={ App } />
  </Router>,

  document.getElementById('root')
);
