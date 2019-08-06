// Import : src

import { GET_POKE,setpokemons,getPoke } from '../reducer/pokereducer';
// === Types ===


// === Code ===


// === Middleware ===
const pokeMiddleware = store => next => (action) => {
  switch (action.type) {
    case GET_POKE:
        let pokarray = [];
        console.log('on passe par le middleware');
        getPoke(1,pokarray);
        store.dispatch(setpokemons(pokarray));
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