import React, { Component } from 'react';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import { Modal } from './Modal';
import { Wrapper } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
  state = {
    searchQuery: '',
    imgUrl: '',
    tags: '',
    showModal: false,
    buttonDiasbled: true,
  };

  handleSubmit = searchQuery => {
    this.setState({
      searchQuery,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onCardClick = (largeImageUrl, imageTags) => {
    this.setState({
      imgUrl: largeImageUrl,
      tags: imageTags,
    });
    this.toggleModal();
  };

  render() {
    const { searchQuery, imgUrl, tags, showModal } = this.state;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSubmit} searchQuery={searchQuery} />
        <ImageGallery
          onCardClick={this.onCardClick}
          searchQuery={searchQuery}
          onOpenModal={this.toggleModal}
        />
        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            {<img src={imgUrl} alt={tags} />}
          </Modal>
        )}
        <ToastContainer autoClose={3000} theme="dark" />
      </Wrapper>
    );
  }
}

export default App;
