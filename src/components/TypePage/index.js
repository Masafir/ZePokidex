/** 
 * NPM import
 */ 
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 *  Local import
 */
import './type.scss';
import { Poketype } from '../Pokepage';
/**
 * Code
 */
// Le composant List qui représente une ligne du tableau list { name,id,image,types }

class TypePage extends Component {
    render() {
        const { types,pokemon } = this.props;
        return(
        <div className="poke-TypePage">
            {types.map((type,id) => <Poketype key={`pokeytype${id}`} className={`type-${type.name}`}>{type.name} </Poketype> )}
            {/* 
            <PokeType>{type.name}</PokeType>
            <img className="poke-sprite" src={sprite.front_default}/>
            <Link to={`pokemon/${index}/`} ><p># {index + 1} {name} </p></Link> */}
            SEARCH PAGE
        </div>
        );
    }
}

TypePage.propTypes = {

};
 /**
 * Export
 */
export default TypePage;