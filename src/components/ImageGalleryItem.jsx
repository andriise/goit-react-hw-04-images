import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ImageGalleryItemStyled from './ImageGalleryItem.styled';
import ImageGalleryItemImage from './ImageGalleryItemImg';

const ImageGalleryItem = ({ onClick, galleryList, imageURL }) => {
  const [showModal, setShowModal] = useState(false);

  const showModalonClick = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      {galleryList.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItemStyled
            key={id}
            onClick={() => {
              onClick(largeImageURL);
              showModalonClick();
            }}
          >
            <ImageGalleryItemImage src={webformatURL} />
          </ImageGalleryItemStyled>
        );
      })}
      {showModal && <Modal src={imageURL} onClose={showModalonClick} />}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propType = {
  galleryList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
