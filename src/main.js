import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { imageSearch } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');
const loaderEl = document.querySelector('.loader');
loaderEl.style.display = 'none';

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const inputEl = form.elements.imgname.value;
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

  imageSearch(inputEl)
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
        ulEl.innerHTML = '';
        return;
      }

      loaderEl.style.display = 'none';

      ulEl.innerHTML = createMarkup(data.hits);
      //console.log(ulEl);
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
    })
    .catch(error => alert(error))
    .finally(() => form.reset());
}
