import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Searchbarr, SearchFormButton, SearchForm, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { onSubmit } = this.props;
        const { searchTerm } = this.state;
        onSubmit(searchTerm);
    };

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    render() {
        const { searchTerm } = this.state;

        return (
            <Searchbarr className="searchbar">
                <SearchForm className="form" onSubmit={this.handleSubmit}>
                    <SearchFormButton type="submit" className="button">
                        <FontAwesomeIcon icon={faSearch} />
                        <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
                    </SearchFormButton>
                    <SearchFormInput
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={searchTerm}
                        onChange={this.handleChange}
                    />
                </SearchForm>
            </Searchbarr>
        );
    }
}

export default Searchbar;

