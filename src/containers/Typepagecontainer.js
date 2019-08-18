/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import TypePage from 'src/components/TypePage';

// Action Creators
import { getpokemonbytype } from 'src/store/reducer/pokereducer';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.pokemonSearch,
  types: state.types
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  getPokemonbyType: (type) => {
    dispatch(getpokemonbytype(type));
  }
});

// Container
const TypePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TypePage);
/**
 * Export
 */
export default TypePageContainer;
