import { galleryItems } from "./gallery-items.js";
// // Change code below this line

const galleryListRef = document.querySelector(".gallery");

const makeGalleryItemRef = ({ preview, original, description } = {}) =>
  `
    <li>
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
            data-source="${original}"
        alt="${description}"
        />
      </a>
    </li>
  `;

const makeGallery = galleryItems.map(makeGalleryItemRef).join("");
galleryListRef.insertAdjacentHTML("beforeend", makeGallery);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
