/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import SearchPage from 'src/components/SearchPage';

// Action Creators
import { getpokemonbytype,resetActive,getpokemonbyname } from 'src/store/reducer/pokereducer';


const mapStateToProps = (state, ownProps) => ({
  pokemon: state.pokeSearch,
  types: state.types
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  getPokemonbyType: (type) => {
    dispatch(getpokemonbytype(type));
  },
  getPokemonbyName: (name) => {
    dispatch(getpokemonbyname(name));
  },
  reset: () => {
    dispatch(resetActive());
  }
});

// Container
const SearchPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);
/**
 * Export
 */
export default SearchPageContainer;
