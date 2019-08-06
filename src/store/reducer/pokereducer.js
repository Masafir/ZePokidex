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


export const GET_POKE = 'GET_POKE';
export const SET_POKE = 'SET_POKE';

/* for (let index = 1; index < 152; index++) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${index}/`)
        .then(res => {
          pokarray.push(res.data);
          console.log(`pokemon numero ${index} `,res.data.name);
        })
        .catch(error => {
          console.log('une erreur est survenue ',error);
        })
        
      } */
// Le problème c'est qu'avec un for les données sont chargées de manières désordonnées ainsi on peut avoir le numéro 45 haut dessus du numéro 4

// solution 1: fonction permettant de chercher les informations *complètes* de tous les 151 pokemons en évitant le problème du for grâce à la récursivité 
// problème : les données sont bien récupérées SAUF que le render ne s'effectue pas probablement un problème de prioritées , hypothèse pour une solution => Middleware

export const getPoke = (int,array) => {
  if(int > 0 && int <= 151)
  {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${int}/`)
          .then(res => {
            array.push(res.data);
            getPoke(int+1,array);
          })
          .catch(error => {
            console.log('une erreur est survenue ',error);
          })
  }
  else {
    console.log(`at ${int} done or error`);
  }
};

// solutions 2: fonction permettant de chercher les informations de bases de chaque pokémon ainsi que l'url pour aller chercher les informations complètes du pokémon

const getSimplePoke = async (start,limit,array) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${start}&limit=${limit}`)
  .then(res => {
    array = [...res.results];
  })
  .catch( error => {
    console.log('une erreur est survenue ',error);
  })
}

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_POKE:
    return {
      ...state,
      charged: true,
      pokemon: action.array
    };
    default:
      return state;
  }
};

/**
 * Action Creators
 */
// Allez chercher les pokemons
export const getpokemons = ()=> ({
  type: GET_POKE,
});
// inscrire les pokemons dans le state
export const setpokemons = (array) => ({
  type: SET_POKE,
  array,
});


/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
