// Import : src

import { GET_POKE,GET_TYPES,setpokemons,getPoke,setTypes } from '../reducer/pokereducer';
import Axios from 'axios';
// === Types ===


// === Code ===


// === Middleware ===
const pokeMiddleware = store => next => (action) => {
  switch (action.type) {
    case GET_POKE:
        console.log('on passe par le middleware ');
        getPoke().then(
          (array) => {
          store.dispatch(setpokemons(array));
          }
        );  
      break;
      case GET_TYPES:
        Axios.get('https://pokeapi.co/api/v2/type/').then(
          (data) => {
          store.dispatch(setTypes(data.data.results));
          }
        );  
    break;

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};

// === Action creator ===


// Export
export default pokeMiddleware;