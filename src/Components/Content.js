import React, { Component } from 'react';
import '../Global/css/Content.css';

class Content extends Component {
  constructor(){
    super();
  }

componentWillMount(){
  
}

  render() {
    return (
      <div className="Content">
        <h2>Here comes a entire world of Pokémon</h2>
        <div className="pokeContent">
          <div className="subPokeContent1">
            <p>Hola</p>
          </div>
          <div className="subPokeContent2">
            <p>Hola</p>
          </div>
          <div className="subPokeContent3">
            <p>Hola</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
