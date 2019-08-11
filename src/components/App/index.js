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
render() {
  const { pokemon,charged } = this.props;
  
    return(
      <div id="app">
       <p className="poke-title">Welcome to ze pokidex</p>
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
