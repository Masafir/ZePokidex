/** 
 * NPM import
 */ 
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 *  Local import
 */
import './raw.scss';
/**
 * Code
 */
// Le composant List qui représente une ligne du tableau list { name,id,image,types }

const Raw = ({index,name,sprite}) => (
            <div className="poke-raw">
                <img className="poke-sprite" src={sprite.front_default}/>
                <Link to={`pokemon/${index}/`} ><p># {index + 1} {name} </p></Link>
            </div>
);

Raw.propTypes = {
    index : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    sprite: PropTypes.object.isRequired
};
 /**
 * Export
 */
export default Raw;