import React, { Component } from 'react';
import '../Global/css/Content.css';

const Results = ( props ) =>(
  <li>{props.name}</li>
)

class Content extends Component {
  constructor(){
    super();
    this.state = {
      results: []
    }
  }

componentDidMount(){
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(results => {
      results.results.forEach(results => {
        let data = {
          name:results.name,
          url:results.url
        }
        this.setState({ results:this.state.results.concat([data])})
      })
    })
}

  render() {

    if (this.state.results.length > 0) {
      return (

        <div className="Content">
          <h2>Here comes a entire world of Pokémon</h2>
          <div className="pokeContent">

            <div className="subPokeContent1">
              <div>
                { this.state.results.map(results => <Results name={results.name} url={results.url}/>) }
              </div>
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
    return (
      <div className="Content">
        <h2>Here comes a entire world of Pokémon</h2>
        <div className="pokeContent">

          <div className="subPokeContent1">

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
