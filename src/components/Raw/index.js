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

const Raw = ({name,index}) => (
            <div className="poke-list">
                <p># {index}  {name}</p>
            </div>
);

Raw.propTypes = {
    name : PropTypes.string.isRequired,
    index : PropTypes.number.isRequired,
};
 /**
 * Export
 */
export default Raw;