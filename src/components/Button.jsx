import { Button } from './Button.styled';
import PropTypes from 'prop-types';

const ButtonLoadMore = ({ onBtnLoadMore }) => {
  return (
    <Button type="button" onClick={onBtnLoadMore}>
      Load More
    </Button>
  );
};

ButtonLoadMore.propTypes = {
  onBtnLoadMore: PropTypes.func.isRequired,
};

export default ButtonLoadMore;
