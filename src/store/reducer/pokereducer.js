/**
 * Import
 */
import axios from 'axios';

/**
 * Initial State
 */
const initialState = {
  pokemon: [],
  pokeSearch: [], 
  types: [],
  charged: false,
  view: true,
};

/**
 * Types
 */
export const GET_POKE = 'GET_POKE';
export const RESET_SEARCH = 'RESET_SEARCH';
export const SEARCH_TYPE = 'SEARCH_TYPE';
export const SEARCH_NAME = 'SEARCH_NAME';
export const GET_TYPES = 'GET_TYPES';
export const SET_POKE = 'SET_POKE';
export const SET_TYPES = 'SET_TYPES';
const CHANGE_VIEW = 'CHANGE_VIEW';

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
 * Fonction qui permet de filtrer les pokemons avec le type assigné  pokemon.type === type ? pokemon : 
 */
const getPokeByType = (array,type) => {
  let pokarray = [];
  pokarray = array.filter(pokemon => {
    let correspond = false;
    pokemon.types.forEach(element => {
  
      if(element.type.name === type)
      {
        correspond = true;
      }
    });

    if (correspond)
    {
      return true;
    }

    else {
      return false;
    }
  }).map((pokemon) => pokemon);
  return pokarray;
};

const getPokeByName = (array,pokename) => {
  let pokarray = [];
  //passer la recherche en minuscule pour aller chercher les pokemons malgré la case
  pokename = pokename.toLowerCase();
  // Le filter va "filtrer" les pokemons en testant chaque lettre du nom pokemon avec les lettres de la recherche
  pokarray = array.filter((pokemon,id) => {
    let correspond = true;
    const { name } = pokemon;
  //le test pour chaque lettre
    [...pokename].forEach((value,index) => {
      if( value !== name[index] )
      {
        correspond = false;
      }
    });
    return correspond
  }).map(element => element);
  
  return pokarray;
}
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
    case SET_TYPES: 
    return {
      ...state,
      types: action.array,
    }
    case CHANGE_VIEW: {
      return {
        ...state,
        view: !state.view
      }
    }
    case RESET_SEARCH: {
      return {
        ...state,
        pokeSearch: []
      }
    }
    case SEARCH_TYPE: {
      return {
        ...state,
        pokeSearch: getPokeByType(state.pokemon,action.poketype),
      }
    }
    case SEARCH_NAME: {
      console.log('votre action ici', action);
      return {
        ...state,
        pokeSearch: getPokeByName(state.pokemon,action.pokename),
      }
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
export const getTypes = ()=> ({
  type: GET_TYPES,
});
// inscrire les pokemons dans le state
export const setpokemons = (array) => ({
  type: SET_POKE,
  array,
});
export const getpokemonbytype = (poketype) => ({
  type: SEARCH_TYPE,
  poketype
});
export const getpokemonbyname = (pokename) => ({
  type: SEARCH_NAME,
  pokename
});
export const setTypes = (array) => ({
  type: SET_TYPES,
  array,
});
export const changeview = () => ({
  type: CHANGE_VIEW,
});
export const resetActive = () => ({
  type: RESET_SEARCH
});


/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
