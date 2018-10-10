import React, { Component } from 'react';
import '../Global/css/Content.css';


class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      nombre: "",
      nombre2: "",
      nombre3: "",
      urlImage: "",
      urlImage2: "",
      urlImage3: "",
      option: 0
    }
    this.handledChangeClick = this.handledChangeClick.bind(this);
  }

componentDidMount(){
  //Fetch for Pokémon's names
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(response => {
        this.setState({
          results: response.results,
          nombre: response.results[6].name,
          nombre2: response.results[7].name,
          nombre3: response.results[8].name
        })
    })

    //Fetch for Pokémon's images
    fetch('https://pokeapi.co/api/v2/pokemon-form/7/')
      .then(response => response.json())
      .then(response => {
          this.setState({
            urlImage: response.sprites.front_default
          })
      })
      fetch('https://pokeapi.co/api/v2/pokemon-form/8/')
        .then(response => response.json())
        .then(response => {
            this.setState({
              urlImage2: response.sprites.front_default
            })
        })
        fetch('https://pokeapi.co/api/v2/pokemon-form/9/')
          .then(response => response.json())
          .then(response => {
              this.setState({
                urlImage3: response.sprites.front_default
              })
          })
        }

  handledChangeClick(e){
    if (this.state.option == 0) {
      this.setState({
        option: 1
      })
      fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(response => {
            this.setState({
              results: response.results,
              nombre: response.results[0].name,
              nombre2: response.results[1].name,
              nombre3: response.results[2].name
            })
        })
        fetch('https://pokeapi.co/api/v2/pokemon-form/1/')
          .then(response => response.json())
          .then(response => {
              this.setState({
                urlImage: response.sprites.front_default
              })
          })
          fetch('https://pokeapi.co/api/v2/pokemon-form/2/')
            .then(response => response.json())
            .then(response => {
                this.setState({
                  urlImage2: response.sprites.front_default
                })
            })
            fetch('https://pokeapi.co/api/v2/pokemon-form/3/')
              .then(response => response.json())
              .then(response => {
                  this.setState({
                    urlImage3: response.sprites.front_default
                  })
              })
    }
    if (this.state.option == 1) {
      this.setState({
        option: 0
      })
      fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(response => {
            this.setState({
              results: response.results,
              nombre: response.results[6].name,
              nombre2: response.results[7].name,
              nombre3: response.results[8].name
            })
        })

        //Fetch for Pokémon's images
        fetch('https://pokeapi.co/api/v2/pokemon-form/7/')
          .then(response => response.json())
          .then(response => {
              this.setState({
                urlImage: response.sprites.front_default
              })
          })
          fetch('https://pokeapi.co/api/v2/pokemon-form/8/')
            .then(response => response.json())
            .then(response => {
                this.setState({
                  urlImage2: response.sprites.front_default
                })
            })
            fetch('https://pokeapi.co/api/v2/pokemon-form/9/')
              .then(response => response.json())
              .then(response => {
                  this.setState({
                    urlImage3: response.sprites.front_default
                  })
              })
            
    }
  }

  render() {
      return (
        <div className="Content">
          <h2>Here comes a entire world of Pokémon</h2>
          <div className="pokeContent">
            <div className="subPokeContent1">
              <p> {this.state.nombre} </p>
              <img src={this.state.urlImage} alt=""></img>
            </div>
            <div className="subPokeContent2">
              <p> {this.state.nombre2} </p>
              <img src={this.state.urlImage2} alt=""></img>
            </div>
            <div className="subPokeContent3">
              <p> {this.state.nombre3} </p>
              <img src={this.state.urlImage3} alt=""></img>
            </div>
          </div>
          <button className="theButton" onClick={this.handledChangeClick}>Give me another Pokémon</button>
        </div>
      );
  }
}

export default Content;
