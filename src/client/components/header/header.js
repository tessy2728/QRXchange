import React, { Component } from 'react';
import '../../css/App.css';
import logoBig from '../../../assets/images/logo-big.png';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <nav className="flexContainer">
          <ul className="nav flexContainer flexItem flexStart">
            <li>
              <a href="#">
                <img src="{logoBig}" className="App-logo" alt="logo" />
              </a>
            </li>
          </ul>
          <ul className="nav flexContainer flexEnd">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
