import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from 'Root';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Route Path="/" Component={App} />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
