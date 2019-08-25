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

class TypePage extends Component {
    state = {
        toggle: false,
        active: false,
        activeType: [],
    }
    
    handleClick = (evt) => {
        const { id } = evt.target;
        const { getPokemonbyType,reset,types } = this.props;
        reset();
        getPokemonbyType(types[id].name);
        this.setState({
            ...this.state,
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

    render() {
        const { types,pokemon } = this.props;
        const { active,toggle,activeType } = this.state;
        return(
        <div className="poke-TypePage">
            <button className="type-toggle" onClick={this.handleToggle} > 
                Search by name { toggle ? <FaChevronRight /> :  <FaChevronDown />}
            </button>
            <div className={classnames('search-display',{'hidden': toggle} )} >
                <Searchbar />
            </div>
            <div className="active-types">
                {
                    active ? activeType.map((index,id) => <Poketype id={types[index].id} key={`pokeytype${id}`} className={`type-${types[index].name}`}>{types[index].name} </Poketype>): ''
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
                pokemon.map((poke,id) => 
                <div className="poke-raw" key={`poke${id}`}>
                    <img className="poke-sprite" src={poke.sprites.front_default}/>
                    <Link to={`pokemon/${poke.id -1}/`} ><p># {poke.id} {poke.name} </p></Link>
                </div>)
                 : ''
            }
            
        </div>
        );
    }
}

/* TypePage.propTypes = {

}; */
 /**
 * Export
 */
export default TypePage;