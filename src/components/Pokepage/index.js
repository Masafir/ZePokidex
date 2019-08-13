/** 
 * NPM import
 */ 
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
/**
 *  Local import
 */
import './pokepage.scss';
/**
 * Code
 */


class Pokepage extends React.Component {
    render() {
        console.log('votre props ',this.props);
        const { pokemon } = this.props;
        return(
            <div className="poke-page">
                <img src={pokemon.sprites.front_default}/>
                <div>name : {pokemon.name}</div>
                <div>index : {pokemon.id}</div>
                <div>weight : {pokemon.weight}</div>
            { pokemon.id !== 151 ? 
                <div>
                    { pokemon.id !== 1 ? <Link to={`/pokemon/${pokemon.id-2}`} replace><FaArrowAltCircleLeft /></Link> : ''}
                    <Link to={`/pokemon/${pokemon.id}`} replace><FaArrowAltCircleRight /></Link>
                </div> : 
                <div>
                    <Link to={`/pokemon/${pokemon.id-2}`} replace><FaArrowAltCircleLeft /></Link> 
                    <Link to='/'>Home</Link>
                </div>
            }
            </div>
        );
    }
}

 /**
 * Export
 */
export default Pokepage;