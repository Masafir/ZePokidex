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

const Raw = ({index}) => (
            <div className="poke-raw">
                <p># {index}</p>
            </div>
);

Raw.propTypes = {
    index : PropTypes.number.isRequired,
};
 /**
 * Export
 */
export default Raw;