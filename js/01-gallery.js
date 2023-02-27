import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// -------------------------------- Варіант 1 --------------------------------

// const galleryEl = document.querySelector(".gallery");
// const galleryMarkup = createGalleryMarkup(galleryItems);
// galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

// galleryEl.addEventListener("click", handleImageClick);

// function createGalleryMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//         <div class = "gallery__item">
//             <a class="gallery__link" href="#">
//                 <img
//                     class = "gallery__image"
//                     src = "${preview}"
//                     data-source = "${original}"
//                     alt = "${description}">
//             </a>
//         </div>`;
//     })
//     .join("");
// }

// function handleImageClick(evt) {
//   evt.preventDefault();
//   if (!evt.target.classList.contains("gallery__image")) {
//     return;
//   }

//   const instance = basicLightbox.create(
//     `<img src="${evt.target.getAttribute("data-source")}">`
//   );

//   instance.show();

//   galleryEl.addEventListener("keydown", handleEscClose);

//   function handleEscClose(evt) {
//     if (evt.key === "Escape") {
//       instance.close();
//     }
//   }
// }

// -------------------------------- Варіант 2 --------------------------------

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.append(...galleryMarkup);
galleryEl.addEventListener("click", handleImageClick);

function createGalleryMarkup(galleryItems) {
  const items = [];
  galleryItems.map((el) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery__item";

    const galleryLink = document.createElement("a");
    galleryLink.className = "gallery__link";
    galleryLink.href = "#";

    const galleryImage = document.createElement("img");
    galleryImage.className = "gallery__image";
    galleryImage.src = el.preview;
    galleryImage.setAttribute("data-source", el.original);
    galleryImage.alt = el.description;

    galleryItem.append(galleryLink);
    galleryLink.append(galleryImage);
    items.push(galleryItem);
  });
  return items;
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
