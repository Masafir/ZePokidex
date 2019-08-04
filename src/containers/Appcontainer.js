/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import App from 'src/components/App';

// Action Creators
import { getpokemons } from 'src/store/pokereducer';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.pokemon,
  charged: state.charged,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  getPokemons: () => {
    dispatch(getpokemons());
  },
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
