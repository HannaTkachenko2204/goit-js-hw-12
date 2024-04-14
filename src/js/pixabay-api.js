import axios from 'axios';

const API_KEY = '43261093-4c9b6888dd775193ca00ecdb2';
const BASE_URL = 'https://pixabay.com/api/';

export async function imageSearch(inputEl, page) {
  try {
    const config = {
      params: {
        key: API_KEY,
        q: `${inputEl}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
      },
    };
    const { data } = await axios.get(`${BASE_URL}`, config);
    return data;
  } catch (error) {
    alert(error);
  }
}
