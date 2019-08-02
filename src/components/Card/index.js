/** 
 * NPM import
 */ 
import React,{Component} from 'react';


/**
 *  Local import
 */
import './card.scss';
/**
 * Code
 */
// Le composant card regroupant toute les infos d'un pokemon
class Card extends Component {
    render() {
        const { name,height,abilities,stats,image,types } = this.props;
        return (
            <div className="poke-card">
                This is a specify card
            </div>
        );
    }
}
/**
 * Export
 */
export default Card;