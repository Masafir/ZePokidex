/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import App from 'src/components/App';

// Action Creators
import { getpokemons } from 'src/store/reducer/pokereducer';
import { getTypes } from 'src/store/reducer/pokereducer';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.pokemon,
  charged: state.charged,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  getPokemons: () => {
    dispatch(getpokemons());
  },
  getTypes: () => {
    dispatch(getTypes());
  }
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
/**
 * Export
 */
export default AppContainer;
