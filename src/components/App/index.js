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

  state = {
    pokemon: [],
  }
  componentWillMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`)
    .then( res => {
      this.setState({
        ...this.state,
        pokemon: [...res.data.results],
      })
      console.log(this.state);

    }).catch(error => {
      console.log(error);
    }
      )
  }
  render() {
    const { pokemon } = this.state;
    return(
      <div id="app">
       Welcome to ze pokidex
        {
          pokemon.length > 1 ? <List pokeArray={pokemon} /> : <div>Loading</div>
        } 
      </div>
    );
  }
}

/**
 * Export
 */
export default App;
