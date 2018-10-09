import React, { Component } from 'react';
import '../Global/css/App.css';

import Header from './Header.js';
import Content from './Content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
