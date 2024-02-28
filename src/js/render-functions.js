import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './pixabay-api';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', imageFetch);

function imageFetch(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  loader.classList.remove('is-hidden');
  const inputValue = event.currentTarget.elements.search.value.trim();

  if (inputValue === '') {
    iziToast.error({
      title: 'Error',
      message: `Please enter a search query.`,
      backgroundColor: '#EF4040',
      messageColor: '#fff',
      titleColor: '#fff',
      progressBarColor: '#B51B1B',
      position: 'topRight',
    });
    loader.classList.add('is-hidden');
    return;
  }
  loader.classList.remove('is-hidden');

  getImages(inputValue)
    .then(response => {
      renderGalleryImages(response.hits);
      event.target.reset();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `${error}`,
      });
    })
    .finally(() => {
      loader.classList.add('is-hidden');
    });
}
//render gallery
function renderGalleryImages(images) {
  //use simpplelightbox
  const lightbox = new SimpleLightbox('.gallery-item a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });
  //if no images
  if (!images || images.length === 0) {
    iziToast.error({
      title: 'Error',
      message: `Sorry, there are no images matching your search query. Please try again!`,
      backgroundColor: '#EF4040',
      messageColor: '#fff',
      titleColor: '#fff',
      progressBarColor: '#B51B1B',
      position: 'topRight',
    });
    loader.classList.add('is-hidden');
    return;
  }

  const hasImages = images && images.length > 0;
  if (!hasImages) {
    iziToast.error({
      title: 'Error',
      message: `Sorry, there are no images matching your search query. Please try again!`,
      backgroundColor: '#EF4040',
      messageColor: '#fff',
      titleColor: '#fff',
      progressBarColor: '#B51B1B',
      position: 'topRight',
    });
    return;
  }
  const html = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class ='gallery-item'>
            <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-image"
                  src="${webformatURL}"
                  alt="${tags}"
                  width="360"
                  height="152"/>
            </a>  
            <div class='info-block'>
                <div class="info">
                    <h3 class = "head-likes">Likes</h3>
                    <p>${likes}</p>
                </div>
                <div class="info">
                    <h3 class = "head-views">Views</h3>
                    <p>${views}</p>
                </div>
                <div class="info">
                    <h3 class = "head-comments">Comments</h3>
                    <p>${comments}</p>
                </div>
                            <div class="info">
                    <h3 class = "head-downloads">Downloads</h3>
                    <p>${downloads}</p>
                </div>
            </div>
      </li>`
    )
    .join('');

  gallery.innerHTML = html;
  lightbox.refresh();
  loader.classList.add('is-hidden');
}
