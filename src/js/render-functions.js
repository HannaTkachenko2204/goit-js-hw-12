export function createMarkup(arr) {
  return arr
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
        `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
            <ul class="box-list">
              <li>
                <h2 class="box-title">Likes</h2>
                <p class="box-text">${likes}</p>
              </li>
              <li>
                <h2 class="box-title">Views</h2>
                <p class="box-text">${views}</p>
              </li>
              <li class="box-item">
                <h2 class="box-title">Comments</h2>
                <p class="box-text">${comments}</p>
              </li>
              <li class="box-item">
                <h2 class="box-title">Downloads</h2>
                <p class="box-text">${downloads}</p>
              </li>
            </ul>
          </a>
        </li>`
    )
    .join('');
}
