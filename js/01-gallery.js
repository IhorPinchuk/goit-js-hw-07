import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEl.addEventListener("click", handleImageClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class = "gallery__item">
            <a class="gallery__link" href="#">
                <img
                    class = "gallery__image"
                    src = "${preview}"
                    data-source = "${original}"
                    alt = "${description}">
            </a>
        </div>`;
    })
    .join("");
}

function handleImageClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.getAttribute("data-source")}">`
  );

  instance.show();

  galleryEl.addEventListener("keydown", handleEscClose);

  function handleEscClose(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
}
