/**
 * NPM
 */
import React from 'react';
import styled from 'styled-components';
/**
 * LOCAL
 */

/**
 * CODE
 */
class Searchbar extends React.Component {
    SearchArea = styled.form`
        display: flex;
        overflow: hidden;
        transition: max-height 0.3s ease;
    `;
    SearchButton = styled.button`
        padding: 1.5em;
        border: 1px solid white;
        color: #b22222;
        border-radius: 10px;
        height: 100%;
        margin: 2em 0.5em;
        font-size: 0.5em;
        font-family: 'Press Start 2P', cursive;
    `;
    SearchInput = styled.input`
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

    state = {
        search: '',
        bar: true,
        type: false,
        region: false,
    };

    handleInput = (evt) => {
        const { value,name } = evt.target;
        console.log(`name : ${name} `,value);
        this.setState({
            ...this.state,
            [name] : value,
        });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.state.search);
    }

    render() {
        return(
        <this.SearchArea onSubmit={this.handleSubmit}>
                <this.SearchInput name='search' value={this.state.search} onChange={this.handleInput} placeholder=' Search a pokemon ... ' />
                <this.SearchButton>
                    Search
                </this.SearchButton>
        </this.SearchArea>

        );
    }
}
/**
 * EXPORT
 */

export default Searchbar;