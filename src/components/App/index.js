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
    const { getPokemons } = props;
    getPokemons();
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
