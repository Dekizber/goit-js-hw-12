const imageList = document.querySelector('.images-list');
const loaderEl = document.querySelector('.loader');

export const renderImages = (images) => {
  const gallery = images.map(({
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads
  }) => `<li class="images-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
          />
          
          <div class="property">
          <p><span class="weight">Likes</span> ${likes}</p>
          <p><span class="weight">Views</span> ${views}</p>
          <p><span class="weight">Comments</span> ${comments}</p>
          <p><span class="weight">Downloads</span> ${downloads}</p>
          </div>
        </a>
      </li>`).join('');

  imageList.insertAdjacentHTML('beforeend', gallery);

}

export const clearResult = () => imageList.innerHTML = '';
export const toggleLoader = (show = false) => {
  if (show) return loaderEl.classList.add('loader-open');
  loaderEl.classList.remove('loader-open');
}