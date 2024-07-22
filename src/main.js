import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import fetchImages from './js/pixabay-api';
import { clearResult, renderImages, toggleLoader } from "./js/render-functions";


const formEl = document.querySelector('#search_img');
const inputEl = document.querySelector('#search_img input');
const loadMoreBtn = document.querySelector('.loadBtn');
const cardEl = document.querySelector(".images-list");

let page;
const limit = 15;
let maxPages = 0;
let queryValue;
const gallery = new SimpleLightbox('.images-list a', {
    captionsData: 'alt',
    captionDelay: 250,
});
const searchImg = () => {
    queryValue = inputEl.value.trim();
    formEl.reset();
    loadMore();
}

const onSubmit = (e) => {
    e.preventDefault();
    page = 0;
    clearResult();
    searchImg();
}

const loadMore = async () => {
    page += 1;
    try {
        toggleLoader(true);
        const images = await fetchImages(queryValue, page, limit);
        if (images.hits.length === 0) {
            toggleLoader();
            iziToast.warning({
                title: 'Warning',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                color: 'red',
                position: 'bottomRight',
            });
            return;
        }
        renderImages(images);
        toggleLoader();
        gallery.refresh();
        maxPages = Math.ceil(images.totalHits / limit);
        if (page >= maxPages) {
            loadMoreBtn.classList.remove('loadBtn-open');
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                color: 'yellow',
                position: 'bottomCenter',
            });
        } else {
            loadMoreBtn.classList.add('loadBtn-open');
        }
        if (page !== 1) {
            const firstCard = cardEl.firstElementChild;
            const firstCardHeight = firstCard.getBoundingClientRect().height;
            scrollBy({
                top: firstCardHeight * 2,
                behavior: "smooth",
            });
        }
    } catch (error) {
        toggleLoader();
        iziToast.error({
            title: 'Error',
            message: `Something went wrong: ${err.message}`,
            color: 'red',
            position: 'bottomRight',
        });
    }
}

const onLoadMore = () => {
    loadMore();
}

formEl.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);
