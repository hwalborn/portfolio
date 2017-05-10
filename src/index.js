
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Route } from 'react-router'
import { HashRouter } from 'react-router-dom'

injectTapEventPlugin()

import App from './App';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={ App } />
      <Route exact path='/projects' component={ App } />
      <Route exact path="/resumes/technical" component={ App } />
      <Route exact path="/resumes/dance" component={ App } />
    </div>
  </HashRouter>,

  document.getElementById('root')
);
