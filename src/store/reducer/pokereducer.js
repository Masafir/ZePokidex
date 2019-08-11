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
// problème : les données sont bien récupérées SAUF que le render ne s'effectue pas probablement un problème de prioritées , hypothèse pour une solution => Middleware,
// solution trouvée fonction recursive asynchrone qui va retourné la requête pour qu'en suite dans le middleware on puisse utiliser le .then pour passer à l'action suivante et ainsi passe outre le soucis de priorité.

export const getPoke = () => {
  // état de notre tableau initial
  let pokarray = [];
  // état de notre indice initial
  let index = 1;

  //fonction récursive retournant une fonction asynchrone 
    const getAPokemon = () => {
      return axios.get(`https://pokeapi.co/api/v2/pokemon/${index}/`)
          .then(res => {
              pokarray.push(res.data);
              // si on a pas le compte des pokémons on continue
              if(index < 151) 
              {
                index++;
                return getAPokemon(index);
              }
              // sinon on retourne le tableau complet
              else {
                return pokarray;
              }
          })
          .catch(error => {
            console.log('une erreur est survenue ',error);
          })
      }
  
  console.log("l'array se finit donc ainsi ", pokarray);
  return getAPokemon();
};

// solutions 2: fonction permettant de chercher les informations de bases de chaque pokémon ainsi que l'url pour aller chercher les informations complètes du pokémon
/* 
const getSimplePoke = async (start,limit,array) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${start}&limit=${limit}`)
  .then(res => {
    array = [...res.results];
  })
  .catch( error => {
    console.log('une erreur est survenue ',error);
  })
}
 */
/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // le middleware va nous actionné ce cas et ainsi remplir le tableau
    case SET_POKE:
      return {
        ...state,
        pokemon: action.array,
        charged: true,
    }
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
