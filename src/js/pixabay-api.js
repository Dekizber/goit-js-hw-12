import axios from 'axios';
export default async function fetchImages(q, page, per_page) {
    const response = await axios.get(`https://pixabay.com/api/`, {
        params: {
            key: '44997411-463a4997c6162e49e75a100fc',
            q,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page,
            per_page,
        }
    });
    return response.data;
};
