import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__item" href="${original}">
                <img
                    class = "gallery__image"
                    src = "${preview}"
                    alt = "${description}">
            </a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
