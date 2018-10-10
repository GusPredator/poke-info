import React, { Component } from 'react';
import '../Global/css/Content.css';

class Content extends Component {
  //The constructor of my component
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
      option1: 0,
      option2: 0,
      option3: 0,
      option1A: 1,
      option2B: 1,
      option3C: 1
    }
    this.handledChangeClick = this.handledChangeClick.bind(this);
    this.handledInputChanged = this.handledInputChanged.bind(this);


  }

//The componentDidMount of my component

  componentDidMount(){
    //Fetch for Pokémon's names
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

      //Fetch for Pokémon's images
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

  //The handled events of my component

  handledChangeClick(e){
    //Fetch for Pokémon's names
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(response => {
          this.setState({
            results: response.results,
            nombre: response.results[this.state.option1].name,
            nombre2: response.results[this.state.option2].name,
            nombre3: response.results[this.state.option3].name
          })
      })
      //Fetch for Pokémon's images
      fetch('https://pokeapi.co/api/v2/pokemon-form/' + this.state.option1A + '/')
        .then(response => response.json())
        .then(response => {
            this.setState({
              urlImage: response.sprites.front_default
            })
        })
        fetch('https://pokeapi.co/api/v2/pokemon-form/' + this.state.option2B + '/')
          .then(response => response.json())
          .then(response => {
              this.setState({
                urlImage2: response.sprites.front_default
              })
          })
          fetch('https://pokeapi.co/api/v2/pokemon-form/' + this.state.option3C + '/')
            .then(response => response.json())
            .then(response => {
                this.setState({
                  urlImage3: response.sprites.front_default
                })
            })
  }

  handledInputChanged(e){
    if(e.target.id === "firstPoke"){
      this.setState({
        option1: e.target.value,
        option1A: this.state.option1A + 1
      })
    }
      if(e.target.id === "secondPoke"){
        this.setState({
          option2: e.target.value,
          option2B: this.state.option2B + 1
        })
      }
        if(e.target.id === "thirdPoke"){
          this.setState({
            option3: e.target.value,
            option3C: this.state.option3C + 1
          })
        }
  }

  //The functions of my component


  render() {
      return (
        <div className="Content">
          <h2>Here comes a entire world of Pokémon</h2>
          <div className="theOptionsParagraphDiv">
            <p className="theOptionsParagraph">Primero: </p>
            <p className="theOptionsParagraph">Segundo: </p>
            <p className="theOptionsParagraph">Tercero: </p>
          </div>
          <div>
            <input className="theInputs" id="firstPoke" onChange={this.handledInputChanged} value={this.state.option1} type="number"></input>
            <input className="theInputs" id="secondPoke" onChange={this.handledInputChanged} value={this.state.option2} type="number"></input>
            <input className="theInputs" id="thirdPoke" onChange={this.handledInputChanged} value={this.state.option3} type="number"></input>
          </div>
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
