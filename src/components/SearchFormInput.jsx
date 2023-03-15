import SearchFormInputStyled from './SearchFormInput.styled';

const SearchFormInput = ({ onChange, value }) => (
  <SearchFormInputStyled
    type="text"
    autocomplete="off"
    autoFocus
    placeholder="Search images and photos"
    onChange={onChange}
    value={value}
  />
);
export default SearchFormInput;
