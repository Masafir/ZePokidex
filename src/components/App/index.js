/**
 * NPM import
 */
import React,{Component} from 'react';
import axios from 'axios';
/**
 * Local import
 */
import './app.scss';
import List from '../List';
/**
 * Code
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
    const { getPokemons } = props;
    getPokemons();
  }
  componentWillReceiveProps() {
    const { pokemon } = this.props;
    this.setState({
      pokemon: [...pokemon],
    });
    console.log("on choppe des props");
  }
  /* componentDidMount() {
  const { getPokemons,pokemon } = this.props;
  getPokemons();
  if(pokemon != 0)
  {
    this.setState({
      ...this.state,
      pokemons: [...pokemon]
    })
  }
  } */
render() {
  const { pokemon,charged,state } = this.props;
  console.log('voici donc les pokemons après les requêtes',pokemon,state);
  
    return(
      <div id="app">
       Welcome to ze pokidex
        {
          charged ? <List pokeArray={pokemon} /> : <div>Loading</div>
        }
      </div>
    );
  }
}

/**
 * Export
 */
export default App;
