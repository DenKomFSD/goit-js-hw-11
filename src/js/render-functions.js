export function renderGalleryImages(images) {
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
    return '';
  }
  return images
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
}