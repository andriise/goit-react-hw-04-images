import ImageGalleryItemImageStyled from './ImageGalleryItemImg.styled';
import PropTypes from 'prop-types';

const ImageGalleryItemImage = ({ src }) => (
  <ImageGalleryItemImageStyled src={src} />
);

export default ImageGalleryItemImage;

ImageGalleryItemImage.propType = {
  src: PropTypes.string.isRequired,
};
