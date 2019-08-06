/**
 * Npm import
 */
import { createStore,applyMiddleware,compose } from 'redux';

/**
 * Local import
 */
import reducer from 'src/store/reducer/pokereducer';
import poke from 'src/store/middleware/pokemiddleware';

/**
 * Store
 */

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Composition des enhancers
const enhancers = composeEnhancers(
  applyMiddleware(poke),
);

// Store, configuré avec le reducer et les "enhancers"
const store = createStore(reducer, enhancers);
/* eslint-enable */

/**
 * Export
 */
export default store;
