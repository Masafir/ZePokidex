/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import TypePage from 'src/components/TypePage';

// Action Creators
import { getpokemonbytype,resetActive } from 'src/store/reducer/pokereducer';


const mapStateToProps = (state, ownProps) => ({
  pokemon: state.pokeSearch,
  types: state.types
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  getPokemonbyType: (type) => {
    dispatch(getpokemonbytype(type));
  },
  reset: () => {
    dispatch(resetActive());
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
