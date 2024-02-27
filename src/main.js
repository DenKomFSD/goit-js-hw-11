import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './js/pixabay-api';
import { renderGalleryImages } from './js/render-functions';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
form.addEventListener('submit', imageFetch);

function imageFetch(event) {
  event.preventDefault();
  gallery.innerHTML = '';

  const inputValue = event.currentTarget.elements.search.value.trim();

  if (inputValue === '') {
    iziToast.error({
      title: 'Error',
      message: `Please enter a search query.`,
      position: 'topRight',
    });
    return;
  }

  loader.classList.remove('is-hidden');

  getImages(inputValue)
    .then(response => {
      // if (!response.hits || response.hits.length === 0) {
      //   // Перевірка наявності зображень тут
      //   iziToast.error({
      //     title: 'Error',
      //     message: `Sorry, there are no images matching your search query. Please try again!`,
      //     backgroundColor: '#EF4040',
      //     messageColor: '#fff',
      //     titleColor: '#fff',
      //     progressBarColor: '#B51B1B',
      //     position: 'topRight',
      //   });
      //   return;
      // }

      //new code
      const hasImages = response.hits && response.hits.length > 0;
      const html = renderGalleryImages(response.hits, hasImages);
      gallery.innerHTML = html;
      //new code
      if (hasImages) {
        lightbox.refresh();
      } else {
        iziToast.error({
          title: 'Error',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          backgroundColor: '#EF4040',
          messageColor: '#fff',
          titleColor: '#fff',
          progressBarColor: '#B51B1B',
          position: 'topRight',
        });
      }
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
