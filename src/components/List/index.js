/** 
 * NPM import
 */ 
import React,{Component} from 'react';
import PropTypes from 'prop-types';

/**
 *  Local import
 */
import './list.scss';
import Raw from '../Raw';
/**
 * Code
 */

// Le composant List regroupant toute les infos d'un pokemon
/* pokeArray.map((elem,id) => <Raw key={`id${id}`} name={elem.name} index={id} />) <Raw key={`id${id}`} name={elem.name} index={id} />*/

const List = ({ pokeArray }) => (
    <div className="poke-List">
        {
            pokeArray.length > 0 ? pokeArray.map((elem,id) => <Raw index={id} key={`pokey${id}`} name={elem.name} sprite={elem.sprites}/>) : <div> Keep Loading </div>
        }
    </div>
);

List.propTypes = {
    pokeArray: PropTypes.array.isRequired,
};
/**
 * Export
 */
export default List;