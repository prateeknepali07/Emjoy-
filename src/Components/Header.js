import React, { Component } from 'react';

export default class Header extends Component {
  componentDidMount() {
    window.M.AutoInit();
  }
  render() {
    return (
      <nav class="nav-extended blue">
        <div class="container nav-wrapper">
          <a href="#" class="brand-logo">
            Emjoy
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
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
        <div class="conatiner ">
          <ul class="tabs tabs-transparent">
            <li class="tab">
              <a href="#test1">Customer login</a>
            </li>
            <li class="tab">
              <a class="active" href="#test2">
                Developer Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
