import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Components/Main';
import Home from './Components/Home';
import Api from './Components/Api';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Route path="/" component={Main} exact />
          <Route path="/home" component={Home} />
          <Route path="/api" component={Api} />
        </div>
      </Router>

    );
  }
}

export default App;
