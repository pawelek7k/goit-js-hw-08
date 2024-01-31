import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryList = document.querySelector('.gallery');

const galleryItem = galleryItems
  .map(
    item => `<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}"/>
</a>
</li>`
  )
  .join('');

galleryList.innerHTML = galleryItem;

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

// // Change code below this line

console.log(galleryItems);
