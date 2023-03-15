import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalStyled, OverlayStyled } from './Modal.styled';

const Modal = ({ onClose, src }) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  // const handleBackdropClick = e => {
  //   if (e.target === e.currentTarget) {
  //     onClose();
  //   }
  // };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <OverlayStyled onClick={handleKeyDown}>
      <ModalStyled>
        <img src={src} alt="" />
      </ModalStyled>
    </OverlayStyled>
  );
};

export default Modal;

Modal.propType = {
  src: PropTypes.string.isRequired,
};
