import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';
import { toast } from 'react-toastify';
import {
  SearchbarBox,
  SearchbarInput,
  SearchButton,
  SearchForm,
} from './Searchbar.styled';

class SearchBar extends Component {
  state = {
    newSearchQuery: '',
  };

  handleChange = e => {
    this.setState({
      newSearchQuery: e.currentTarget.value.trim(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newImageQuery = this.state.newSearchQuery;

    if (newImageQuery === '') {
      return toast.warning('Please enter a search term');
    }

    if (newImageQuery === this.props.searchQuery) {
      toast.info('Enter another request');
    }

    if (newImageQuery !== this.props.searchQuery) {
      this.props.onSubmit(newImageQuery);
      this.setState({
        newSearchQuery: '',
      });
    }
  };

  render() {
    const { newSearchQuery } = this.state;

    return (
      <SearchbarBox>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <GoSearch />
          </SearchButton>

          <SearchbarInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={newSearchQuery}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarBox>
    );
  }
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
