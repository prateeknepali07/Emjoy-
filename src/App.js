import React, { Component } from 'react';
import Header from '../src/Components/Header';
import Login from '../src/Components/Login';
import Footer from '../src/Components/Footer';
import Home from '../src/Components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
