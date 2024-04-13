const API_KEY = '43261093-4c9b6888dd775193ca00ecdb2';
const BASE_URL = 'https://pixabay.com/api/';

export function imageSearch(inputEl) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: `${inputEl}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}