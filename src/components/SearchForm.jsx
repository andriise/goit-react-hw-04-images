import { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchFormStyled, SearchFormButtonStyled } from './SearchForm.styled';
import SearchFormInput from './SearchFormInput';
import { FiSearch } from 'react-icons/fi';

const SearchForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event.currentTarget.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(text);
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <SearchFormButtonStyled type="submit">
        <FiSearch size="28" />
      </SearchFormButtonStyled>
      <SearchFormInput onChange={handleChange} value={text} />
    </SearchFormStyled>
  );
};
export default SearchForm;

SearchForm.propType = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
