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

  componentWillMount() {
  const { getPokemons,pokemon } = this.props;
  getPokemons();
  }
render() {
  const { pokemon,charged } = this.props;
  console.log('voici donc les pokemons après les requêtes',pokemon);
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
