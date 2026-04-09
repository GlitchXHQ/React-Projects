import axios from 'axios';

const GLIPHY_API = import.meta.env.VITE_GLIPHY_KEY;
const PEXELS_API = import.meta.env.VITE_PEXELS_KEY;

export async function fetchImage(query, per_page = 20) {
  try {
    const res = await axios.get('https://api.pexels.com/v1/search?', {
      params: { query, per_page },
      headers: { Authorization: PEXELS_API }
    });
    return res || [];
  } catch (error) {
    console.error('Pexels Error:', error);
    return [];
  }
}

export async function fetchGIFs(
  query,
  per_page = 20,
) {
  try {
    const res = await axios.get(
      'https://api.giphy.com/v1/gifs/search',
      {
        params: { api_key: GLIPHY_API, q:query,limit:per_page,rating:'g' }
      }
    )

    return res|| [];
  } catch (error) {
    console.error('Giphy Error:', error);
    return [];
  }
}

export async function fetchVideo(query, per_page = 20) {
  try {
    const res = await axios.get('https://api.pexels.com/videos/search', {
      params: { query, per_page },
      headers: { Authorization: PEXELS_API }
    });

    return res || [];
  } catch (error) {
    console.error('Pexels Error:', error);
    return [];
  }
}