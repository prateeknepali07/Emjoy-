import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Components/Root';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './Components/Home';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
