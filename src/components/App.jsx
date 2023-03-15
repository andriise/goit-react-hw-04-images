import { useState, useEffect } from 'react';
import {fetchImagesByName} from './service';
import Loader from './Loader';
import Button from './Button';
import ImageGallery from './ImageGallery';
import SearchForm from './SearchForm';
import Searchbar from './Searchbar';
import AppStyled from './App.styled';

export const App = () => {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    if (query.trim().length === 0) {
      return;
    }
    fetchImagesByName(query, page).then(data => {
      setGallery(prevState => [...prevState, ...data.hits]);
      setTotal(data.totalHits);
      setLoading(false);
    });
  }, [query, page]);

  const handleLoadMoreBtn = () => {
    setPage(prevState => prevState + 1);
    setLoading(true);
  };

  const handleSubmit = query => {
    if (query.trim().length === 0) {
      return;
    }
    setGallery([]);
    setPage(1);
    setTotal(null);
    setImageURL(null);
    setQuery(query);
  };

  const onClickGalleryImage = imageURL => {
    setImageURL(imageURL);
  };

  return (
    <AppStyled>
      <Searchbar>
        <SearchForm onSubmit={handleSubmit} />
      </Searchbar>
      {gallery.length > 0 && (
        <>
          <ImageGallery
            galleryList={gallery}
            onClick={onClickGalleryImage}
            imageURL={imageURL}
          />
          {total !== gallery.length && (
            <Button text="Load more" onClick={handleLoadMoreBtn} />
          )}
        </>
      )}
      {loading && <Loader />}
    </AppStyled>
  );
};
