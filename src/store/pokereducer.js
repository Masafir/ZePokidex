/**
 * Import
 */
import axios from 'axios';

/**
 * Initial State
 */
const initialState = {
  pokemon: [],
  charged: false,
};

/**
 * Types
 */
const GET_POKE = 'GET_POKE';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_POKE:
      let pokarray = [];
      for (let index = 1; index < 152; index++) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${index}/`)
        .then(res => {
          pokarray.push(res.data);
          console.log(`pokemon numero ${index} `,res.data.name);
        })
        .catch(error => {
          console.log('une erreur est survenue ',error);
        })
        
      }
      console.log('le nouveau tableau donc ',pokarray);
    return {
      ...state,
      charged: true,
      pokemon: pokarray
    };
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const getpokemons = ()=> ({
  type: GET_POKE,
});

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
