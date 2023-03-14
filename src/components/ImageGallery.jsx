import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchImagesByName } from './service';
import { ImageGalleryBox } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import ButtonLoadMore from './Button';
import Loader from './Loader';
import { toast } from 'react-toastify';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};


class ImageGallery extends Component {
  state = {
    status: Status.IDLE,
    error: null,
    page: 1,
    images: [],
    totalHits: null,
  };

  async componentDidUpdate(prevProps, _) {
    try {
      const prevImgName = prevProps.searchQuery;
      const nextImgName = this.props.searchQuery;

      if (prevImgName !== nextImgName) {
        this.setState({
          images: [],
          page: 1,
          status: Status.PENDING,
        });

        const images = await fetchImagesByName(1, nextImgName);

        this.setState({
          page: this.state.page + 1,
          status: Status.RESOLVED,
          images: images.hits,
          totalHits: images.totalHits,
        });
        if (images.totalHits > 0 && images.totalHits <= 10) {
          toast.warning("Sorry, there's nothing more to show");
        }
        if (images.totalHits > 0) {
          toast.success(`Success! Found ${images.totalHits} images`);
        }
        if (images.totalHits === 0) {
          toast.error(`Oops! Nothing found. Enter another request`);
        }
      }
    } catch (error) {
      this.setState({
        error,
        status: Status.REJECTED,
      });
    }
  }

  onBtnLoadMore = () => {
    const imgQuery = this.props.searchQuery;
    const nextPage = this.state.page;

    this.setState({
      status: Status.PENDING,
    });

    fetchImagesByName(nextPage, imgQuery)
      .then(nextImages => {
        this.setState({
          page: this.state.page + 1,
          status: Status.RESOLVED,
          images: [...this.state.images, ...nextImages.hits],
        });

        if (
          nextImages.totalHits === this.state.images.length ||
          nextImages.totalHits <
            this.state.images.length + nextImages.hits.length
        ) {
          toast.error(`Sorry we have nothing more to show you.`);
        }
      })
      .catch(error =>
        this.setState({
          error,
          status: Status.REJECTED,
        })
      );
  };

  // onCardClick = e => {
  //   if (e.currentTarget !== e.target) {
  //     const currentImageUrl = e.target.currentSrc;
  //     const imageArr = this.state.images.filter(
  //       ({ webformatURL }) => webformatURL === currentImageUrl
  //     );
  //     const largeImageURL = imageArr[0].largeImageURL;
  //     const imageTags = imageArr[0].tags;

  //     this.props.onCardClick(largeImageURL, imageTags);
  //     this.props.onOpenModal();
  //   }
  // };

  render() {
    const { status, images, totalHits } = this.state;
    

    return (
      <>
        <ImageGalleryBox >
          {images.map(({ id, webformatURL, tags, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                onClick={() => this.props.onCardClick(largeImageURL, tags)}
                smallImageURL={webformatURL}
                tags={tags}
              />
            );
          })}
        </ImageGalleryBox>
        {status === Status.RESOLVED &&
          images.length !== totalHits &&
          images.length < totalHits && (
            <ButtonLoadMore onBtnLoadMore={this.onBtnLoadMore} />
          )}
        {status === Status.PENDING && <Loader />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  onCardClick: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;
