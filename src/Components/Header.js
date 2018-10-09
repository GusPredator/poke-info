import React, { Component } from 'react';
import logo from '../Global/images/PokeBall.png';

import '../Global/css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="Header-logo" alt="hlogo" />
        </header>
      </div>
    );
  }
}

export default Header;
