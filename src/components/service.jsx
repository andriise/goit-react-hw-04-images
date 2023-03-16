import axios from 'axios';

export const fetchImagesByName = async (pageNum = 1, searchQuery = '') => {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
    key: '11497081-cc65ac3ee2055db377a22cee7',
    q: searchQuery,
    image_type: 'photo',
    page: pageNum,
    orientation: 'horizontal',
    per_page: 12,
  };
  const response = await axios.get(BASE_URL, { params });
  console.log(response.data)
  return response.data;
};
