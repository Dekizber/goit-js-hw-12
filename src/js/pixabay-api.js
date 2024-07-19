export default function fetchImages(q) {
    const params = new URLSearchParams({
        key: '44997411-463a4997c6162e49e75a100fc',
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });



    return fetch(`https://pixabay.com/api/?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }).then(data => data.hits);
}