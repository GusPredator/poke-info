import React, { Component } from 'react';
import '../Global/css/Pokemon.css';
import '../Global/css/Content.css';

export default class Pokemon extends Component {

  state = {
    pokemon: 0
  }
  componentDidMount(){
      fetch(this.props.url)
      .then(response => response.json())
      .then(response => {
          this.setState({
            pokemon: response
          })
      })
  }

  render(){
    if (this.state.pokemon) {
      return(
        <div className="Main">
          <div className="subPokeContent1">
            {this.state.pokemon.name}
            <img src={this.state.pokemon.sprites.front_default} alt=""></img>
          </div>
          
        </div>
      )
    }
    else {
      return null
    }
  }
}
