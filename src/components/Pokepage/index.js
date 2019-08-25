/** 
 * NPM import
 */ 
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styled from 'styled-components';
/**
 *  Local import
 */
import './pokepage.scss';
/**
 * Code
 */
export const Poketype = styled.div`
width: 20em;
padding: 0.65em;
margin: 0.5em auto;
border: 1px solid white;
border-radius: 30px;
font-size: 1em;
text-align: center;
`;

class Pokepage extends React.Component {
    
    Pokimage = styled.img`
        width: 200px;
        height: 200px;
    `;

    Pokeline = styled.div`
        padding-bottom: 0.5em;
    `;

    Poketypes = styled.div`
        display: flex;
        padding: 0.5em 0.5em 0 0;
    `;

    

    render() {
        
        const { pokemon } = this.props;
        return(
            <div className="poke-page">
                
                <div id="poke-image">
                    <this.Pokimage id="image-poke" src={pokemon.sprites.front_default}/>
                </div>

                <div id="poke-info">
                    <this.Pokeline>name : {pokemon.name}</this.Pokeline>
                    <this.Pokeline>index : {pokemon.id}</this.Pokeline>
                    <this.Pokeline>weight : {pokemon.weight}</this.Pokeline>
                    {
                        pokemon.stats.map((elem,id) => <this.Pokeline key={`pokeystate${id}`}  className='poke-statebar' >{elem.stat.name} : {elem.base_stat}</this.Pokeline>)
                    }
                        <this.Pokeline>
                            Types : 
                            <this.Poketypes>
                            {
                                pokemon.types.map((types,id) => <Poketype key={`pokeytype${id}`} className={`type-${types.type.name}`}> {types.type.name} </Poketype>)
                            }
                            </this.Poketypes>
                        </this.Pokeline>
                </div>
            { pokemon.id !== 151 ? 
                <div className="poke-area-button">
                    { pokemon.id !== 1 ? <Link className="poke-button" to={`/pokemon/${pokemon.id-2}`} replace><FaArrowAltCircleLeft /></Link> : ''}
                    <Link className="poke-button" to={`/pokemon/${pokemon.id}`} replace><FaArrowAltCircleRight /></Link>
                </div> : 
                <div className="poke-area-button">
                    <Link className="poke-button" to={`/pokemon/${pokemon.id-2}`} replace><FaArrowAltCircleLeft /></Link> 
                    <Link className="poke-button" to='/'>Home</Link>
                </div>
            }
            </div>
        );
    }
}

Pokepage.propTypes = {
    pokemon: PropTypes.object.isRequired,
};

 /**
 * Export
 */
export default Pokepage;