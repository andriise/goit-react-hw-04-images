import axios from 'axios';

export const fetchImagesByName = async (searchQuery = '', pageNum = 1 ) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '11497081-cc65ac3ee2055db377a22cee7';
  // const params = {
  //   key: '11497081-cc65ac3ee2055db377a22cee7',
  //   q: searchQuery,
  //   image_type: 'photo',
  //   page: pageNum,
  //   orientation: 'horizontal',
  //   per_page: 12,
  // };
  const response = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q="${searchQuery}"&image_type=photo&orientation=horizontal&per_page=12&page=${pageNum}`
  );
  console.log(response.data)
  return response.data;
};
