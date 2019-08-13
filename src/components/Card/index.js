/** 
 * NPM import
 */ 
import React,{Component} from 'react';
import PropType from 'prop-types';

/**
 *  Local import
 */
import './card.scss';
/**
 * Code
 */
// Le composant card regroupant toute les infos d'un pokemon
const Card = ({index,name,sprite}) => (
    <div className="poke-card">
        <img className="poke-sprite" src={sprite.front_default}/>
        <p># {index + 1} {name} </p>
    </div>
);
Card.propTypes = {
    index : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    sprite: PropTypes.object.isRequired
};
/**
 * Export
 */
export default Card;