import React, { Component } from 'react';
import Pokemon from './Pokemon.js'
import '../Global/css/Content.css';

class Content extends Component {
  //The constructor of my component
  constructor(props){
    super(props);
    this.state = {
      results: [],
      pokemon_url: '',
      isLoaded: false
    }
    // this.handledChangeClick = this.handledChangeClick.bind(this);
    // this.handledInputChanged = this.handledInputChanged.bind(this);
  }

//The componentDidMount of my component

  componentDidMount(){
    //Fetch for Pokémon
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(response => {
          this.setState({
            results: response.results,
            isLoaded: true
          })
      })
    }
  // handledChangeClick() {
  //
  // }
  //
  // handledInputChanged(e){
  //   if(e.target.id === "firstPoke"){
  //     this.setState({
  //       option1: Number(e.target.value)
  //     })
  //   }
  // }

  render() {
    const { isLoaded, results } = this.state;

    if (!isLoaded) {
      return <div>Is loading...</div>;
    }
    else {
      return (
        <div className="Content">
          <h2>Here comes a entire world of Pokémon</h2>
          <div className="pokeContent">
            <div>
              {this.state.results.slice(120,130).map(pokemon => <Pokemon key={pokemon.name} url={pokemon.url}/>)}
            </div>
            <div>
            <div>
              {this.state.results.slice(130,140).map(pokemon => <Pokemon key={pokemon.name} url={pokemon.url}/>)}
            </div>
            </div>
            <div>
              {this.state.results.slice(110,120).map(pokemon => <Pokemon key={pokemon.name} url={pokemon.url}/>)}
            </div>
          </div>
          <div>
            <input className="theInputs" id="firstPoke" onChange={this.handledInputChanged} value={this.state.option1} type="number"></input>
            <input type="radio" ></input><span>Hola</span>
          </div>
          <button onClick={this.handledChangeClick}> Another </button>
        </div>
      );
    }
  }
}

export default Content;
