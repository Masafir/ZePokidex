/** 
 * NPM import
 */ 
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
/**
 *  Local import
 */
import './nav.scss';
/**
 * Code
 */


const Nav = () => (
            <div className="poke-nav">
                <Link to='/'>
                    <img id="poke-home" src="https://fontmeme.com/permalink/190813/a55a27c73681c1066eabae1e40f0fb42.png" alt="police-pokemon" border="0"/>
                </Link>
            </div>
);

 /**
 * Export
 */
export default Nav;