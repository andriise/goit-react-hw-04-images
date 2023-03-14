import { ImageItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ smallImageURL, tags, onClick }) => {
  return (
    <ImageItem onClick={onClick}>
      <img src={smallImageURL} alt={tags} />
    </ImageItem>
  );
};

ImageGalleryItem.propTypes = {
  smallImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
