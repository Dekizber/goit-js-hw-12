import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import fetchImages from './js/pixabay-api';
import { clearResult, renderImages, toggleLoader } from "./js/render-functions";


const formEl = document.querySelector('#search_img');
const inputEl = document.querySelector('#search_img input');

const searchImg = () => {
    const searchQuery = inputEl.value.trim();
    fetchImages(searchQuery)
        .then(images => {
            console.log(images);
            if (images.length === 0) {
                toggleLoader();
                iziToast.warning({
                    title: 'Warning',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    color: 'red',
                    position: 'bottomRight',
                });
                return;
            }
            toggleLoader();
            renderImages(images);
            new SimpleLightbox('.images-list a', {
                captionsData: 'alt',
                captionDelay: 250,
            }).refresh(); formEl.reset();

        }).catch(err => {
            toggleLoader();
            iziToast.error({
                title: 'Error',
                message: `Something went wrong: ${err.message}`,
                color: 'red',
                position: 'bottomRight',
            });
        });

}
const onSubmit = (e) => {
    e.preventDefault();
    clearResult();
    toggleLoader(true);
    searchImg();
}
formEl.addEventListener('submit', onSubmit);





