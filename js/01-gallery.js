import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryDivRef = document.querySelector('.gallery');
let instance;

// Функція для створення елемента галереї

const makeGalleryItem = ({ preview, original, description } = {}) =>
  `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;

// Створення масиву рядків із елементами

const makeGallery = galleryItems.map(makeGalleryItem).join('');

// Вставка елементів на сторінку

galleryDivRef.insertAdjacentHTML('beforeend', makeGallery);

// Делегування та отримання url великого зображення

const handleGalleryDivclick = e => {
  e.preventDefault();

  const { target } = e;
  if (target.nodeName !== 'IMG') {
    return;
  }

  const largeImageUrl = target.dataset.source;
  instance = basicLightbox.create(`<img src="${largeImageUrl}"/>`);
  instance.show();

  if (instance.visible()) {
    document.addEventListener('keydown', handleEscBtnPress);
  }
};

// Функція закриття модального вікна

const handleEscBtnPress = e => {
  if (e.key === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', handleEscBtnPress);
  }
};

galleryDivRef.addEventListener('click', handleGalleryDivclick);
