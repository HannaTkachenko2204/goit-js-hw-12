import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { imageSearch } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');
const loaderEl = document.querySelector('.loader');
const btnMore = document.querySelector('.btn');

let inputEl;
let page = 1;

loaderEl.style.display = 'none';
btnMore.style.display = 'none';

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  inputEl = form.elements.imgname.value;
  console.log(inputEl);
  if (inputEl === '') {
    iziToast.show({
      message: 'Field must be filled in!',
      position: 'topRight',
      backgroundColor: 'red',
      messageColor: '#FFFFFF',
      transitionIn: 'fadeln',
      timeout: 4000,
    });
    return;
  }

  loaderEl.style.display = 'block';

  imageSearch(inputEl, page)
    .then(data => {
      //console.log(data.hits.length);
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: 'red',
          messageColor: '#FFFFFF',
          transitionIn: 'fadeln',
          timeout: 4000,
        });
        loaderEl.style.display = 'none';
        btnMore.style.display = 'none';
        ulEl.innerHTML = '';
        return;
      }

      loaderEl.style.display = 'none';

      ulEl.innerHTML = createMarkup(data.hits);

      // deltaPage = data.totalHits / data.hits.length;
      // console.log(deltaPage);
      // console.log(data.totalHits);
      // console.log(deltaPage);
      // if (page >= deltaPage) {
      //   btnMore.style.display = 'none';
      //   iziToast.show({
      //     message:
      //       "We're sorry, but you've reached the end of search results.",
      //     position: 'topRight',
      //     backgroundColor: 'green',
      //     messageColor: '#FFFFFF',
      //     transitionIn: 'fadeln',
      //     timeout: 4000,
      //   });
      // }

      //console.log(ulEl);
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
      btnMore.style.display = 'block';
    })
    .catch(error => alert(error))
    .finally(() => form.reset());
}

btnMore.addEventListener('click', handleClick);

function handleClick() {
    btnMore.style.display = 'none';
    loaderEl.style.display = 'block';
    page += 1;
    imageSearch(inputEl, page)
    .then(data => {
      loaderEl.style.display = 'none';
      ulEl.insertAdjacentHTML('beforeend', createMarkup(data.hits));
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
      btnMore.style.display = 'block';
    })
    .catch(error => alert(error));
}
