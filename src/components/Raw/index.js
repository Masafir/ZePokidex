/** 
 * NPM import
 */ 
import React,{Component} from 'react';
import PropTypes from 'prop-types';

/**
 *  Local import
 */
import './raw.scss';
/**
 * Code
 */
// Le composant List qui représente une ligne du tableau list { name,id,image,types }

const Raw = ({index,name}) => (
            <div className="poke-raw">
                <p># {index + 1} {name} </p>
            </div>
);

Raw.propTypes = {
    index : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
};
 /**
 * Export
 */
export default Raw;