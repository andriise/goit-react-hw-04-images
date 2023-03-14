import axios from 'axios';

export const fetchImagesByName = async (pageNum = 1, searchQuerry = '') => {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
    key: '32850329-b1ad59fa6423bb8f4069942ac',
    q: searchQuerry,
    image_type: 'photo',
    page: pageNum,
    orientation: 'horizontal',
    per_page: 12,
  };
  const response = await axios.get(BASE_URL, { params });
  return response.data;
};
