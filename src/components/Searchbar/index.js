/**
 * NPM
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
/**
 * LOCAL
 */

/**
 * CODE
 */
    const SearchArea = styled.form`
        display: flex;
        overflow: hidden;
        transition: max-height 0.3s ease;
    `;
    const SearchButton = styled.button`
        padding: 1.5em;
        border: 1px solid white;
        color: #b22222;
        border-radius: 10px;
        height: 100%;
        margin: 2em 0.5em;
        font-size: 0.5em;
        font-family: 'Press Start 2P', cursive;
    `;
    const SearchInput = styled.input`
        width: 100%;
        margin: 1em auto;
        padding:  0.5em 1em;
        background-color: #B22222;
        color: white;
        font-size: 1em;
        border: 1px solid white;
        border-radius: 10px;
        font-family: 'Press Start 2P', cursive;
    `;
const Searchbar = ({ submit,input,value }) => (
        <SearchArea onSubmit={submit}>
                <SearchInput name='search' value={value} onChange={input} placeholder=' Search a pokemon ... ' />
                <SearchButton>
                    Search
                </SearchButton>
        </SearchArea>

        );
Searchbar.propTypes = {
    value: PropTypes.string.isRequired,
    submit: PropTypes.func.isRequired,
    input: PropTypes.func.isRequired,
};
/**
 * EXPORT
 */

export default Searchbar;