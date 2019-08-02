/** 
 * NPM import
 */ 
import React,{Component} from 'react';


/**
 *  Local import
 */
import './list.scss';
import Raw from '../Raw';
/**
 * Code
 */

// Le composant List regroupant toute les infos d'un pokemon
/* pokeArray.map((elem,id) => <Raw key={`id${id}`} name={elem.name} index={id} />) */
class List extends Component {
    render() {
        const { pokeArray } = this.props;
        console.log('larray : ',pokeArray);
        return (
            <div className="poke-List">
                {pokeArray.map((elem,id) => <Raw key={`id${id}`} name={elem.name} index={id} />)}
            </div>
        );
    }
}
/**
 * Export
 */
export default List;