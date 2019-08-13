/**
 * NPM import
 */
import React,{Component} from 'react';
import { Switch,Route } from 'react-router-dom';
/**
 * Local import
 */
import './app.scss';
import List from '../List';
import Nav from '../Nav';
import NotFound from '../404';
import PokePage from '../Pokepage';
import Pokepage from '../Pokepage';

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
        <Nav />
        <div id="poke-container">
          {
            charged ? 
            <Switch>
              <Route exact path="/" render={(props) => <List pokeArray={pokemon} {...props} />} />
              <Route exact path="/pokemon/:id" render={(props) => <Pokepage pokemon={pokemon[props.match.params.id]}{...props} />} />
              <Route component={NotFound} />
            </Switch> 
            : <div>Loading</div>
          }
        </div>
      </div>
    );
  }
}

/**
 * Export
 */
export default App;
