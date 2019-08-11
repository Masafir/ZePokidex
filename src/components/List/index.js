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
/* pokeArray.map((elem,id) => <Raw key={`id${id}`} name={elem.name} index={id} />) <Raw key={`id${id}`} name={elem.name} index={id} />*/
class List extends Component {


    render() {
        const { pokeArray } = this.props;
        return (
            <div className="poke-List">
                {
                    pokeArray.length > 0 ? pokeArray.map((elem,id) => <Raw index={id} key={`pokey${id}`} name={elem.name} sprite={elem.sprites}/>) : <div> Loading</div>
                }
            </div>
        );
    }
}
/**
 * Export
 */
export default List;