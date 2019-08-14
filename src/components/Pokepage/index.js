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
                
                <div id="poke-image">
                    <img id="image-poke" src={pokemon.sprites.front_default}/>
                </div>

                <div id="poke-info">
                    <div className="poke-line">name : {pokemon.name}</div>
                    <div className="poke-line">index : {pokemon.id}</div>
                    <div className="poke-line">weight : {pokemon.weight}</div>
                    {
                        pokemon.stats.map((elem,id) => <div key={`pokeystate${id}`}  className={'poke-statebar poke-line'} >{elem.stat.name} : {elem.base_stat}</div>)
                    }
                </div>
            { pokemon.id !== 151 ? 
                <div className="poke-button">
                    { pokemon.id !== 1 ? <Link to={`/pokemon/${pokemon.id-2}`} replace><FaArrowAltCircleLeft /></Link> : ''}
                    <Link to={`/pokemon/${pokemon.id}`} replace><FaArrowAltCircleRight /></Link>
                </div> : 
                <div className="poke-button">
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