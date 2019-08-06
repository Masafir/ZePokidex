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
    componentDidMount() {
        const { pokeArray } = this.props;
        console.log('malgré l\'erreur on a quand meme ce tableau ',pokeArray);
    }

    render() {
        const { pokeArray } = this.props;
        console.log('larray : ',pokeArray);
        return (
            <div className="poke-List">
                <p>PINPON</p>
                {
                    pokeArray.length > 0 ? pokeArray.map((elem,id) => console.log('mierda',elem)) : <div> Loading</div>
                }
            </div>
        );
    }
}
/**
 * Export
 */
export default List;