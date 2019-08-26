/** 
 * NPM import
 */ 
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar';
import { FaChevronRight,FaChevronDown } from 'react-icons/fa';
import classnames from 'classnames';

/**
 *  Local import
 */
import './type.scss';
import { Poketype } from '../Pokepage';
/**
 * Code
 */
// Le composant List qui représente une ligne du tableau list { name,id,image,types }

class SearchPage extends Component {
    state = {
        toggle: false,
        active: false,
        search: '',
        bar: true,
        type: false,
        activeType: [],
    }
    
    handleClick = (evt) => {
        const { id } = evt.target;
        const { getPokemonbyType,reset,types } = this.props;
        reset();
        getPokemonbyType(types[id].name);
        this.setState({
            ...this.state,
            search: '',
            activeType: [id],
            active: true,
            toggle: !this.state.toggle,
        });
    }

    handleToggle = () => {
        this.setState({
            ...this.state,
            toggle: !this.state.toggle,
        });
    }

        
    handleInput = (evt) => {
        const { value,name } = evt.target;
        console.log(`name : ${name} `,value);
        this.setState({
            ...this.state,
            [name] : value,
        });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { getPokemonbyName,reset } = this.props;
        const { search } = this.state;
        console.log('votre recherche : ',search);
        reset();
        getPokemonbyName(search);
        this.setState({
            ...this.state,
            activeType: [],
            active: true,
        });
    }

    render() {
        const { types,pokemon } = this.props;
        const { active,toggle,activeType,search } = this.state;
        return(
        <div className="poSearch">
            <button className="type-toggle" onClick={this.handleToggle} > 
                Search by name { toggle ? <FaChevronRight /> :  <FaChevronDown />}
            </button>
            <div className={classnames('search-display',{'hidden': toggle} )} >
                <Searchbar submit={this.handleSubmit} input={this.handleInput} value={search} />
            </div>
            <div className="active-types">
                {
                    activeType.length !== 0 ? activeType.map((index,id) => <Poketype id={types[index].id} key={`pokeytype${id}`} className={`type-${types[index].name}`}>{types[index].name} </Poketype>): ''
                }
            </div>
            <button className="type-toggle" onClick={this.handleToggle} > 
                Types { toggle ? <FaChevronDown />: <FaChevronRight /> }
            </button>
            <div className={classnames({'hidden':!toggle ,'type-display': toggle})} >    
                {
                    types.map((type,id) => <Poketype id={id} onClick={this.handleClick}  key={`pokeytype${id}`} className={`type-${type.name}`}>{type.name} </Poketype> )
                }
            </div>            
            {
                active ? 
                pokemon.length !== 0 ?
                pokemon.map((poke,id) => 
                <div className="poke-raw" key={`poke${id}`}>
                    <img className="poke-sprite" src={poke.sprites.front_default}/>
                    <Link to={`pokemon/${poke.id -1}/`} ><p># {poke.id} {poke.name} </p></Link>
                </div>) : <div> Désolé la recherche est un échec :( </div>
                 : ''
            }
            
        </div>
        );
    }
}

SearchPage.propTypes = {
    pokemon: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired,
    reset: PropTypes.func.isRequired,
    getPokemonbyName: PropTypes.func.isRequired,
    getPokemonbyType: PropTypes.func.isRequired,
};
 /**
 * Export
 */
export default SearchPage;