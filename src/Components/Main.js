import React, { Component } from 'react';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import Home from './Home';

export class Main extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Login />
        </div>
        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">HOME</a>
          </li>
          <li>
            <a href="badges.html">ABOUT US</a>
          </li>
          <li>
            <a href="collapsible.html">HOT PROPERTIES</a>
          </li>
          <li>
            <a href="mobile.html">RENT</a>
          </li>
          <li>
            <a href="mobile.html">BUY</a>
          </li>
          <li>
            <a href="mobile.html">DESIGN</a>
          </li>
          <li>
            <a href="mobile.html">CAREER</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Main;
