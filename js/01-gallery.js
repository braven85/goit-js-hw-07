import { galleryItems } from './gallery-items.js';

for (const item of galleryItems) {
  const gallery = document.querySelector(".gallery");

  // creating div
  const galleryImageDiv = document.createElement("div");
  galleryImageDiv.className = "gallery__item";
  gallery.append(galleryImageDiv);

  //creating link
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  galleryLink.setAttribute("href", item.original);
  galleryImageDiv.append(galleryLink);

  //creating image
  const galleryImageImg = document.createElement("img");
  galleryImageImg.className = "gallery__image";
  galleryImageImg.setAttribute("src", item.preview);
  galleryImageImg.setAttribute("data-source", item.original);
  galleryImageImg.setAttribute("alt", item.description);
  galleryLink.append(galleryImageImg);
}

//preventing default browser action on clicking a link
const galleryLink = document.querySelectorAll(".gallery__link");
for (const link of galleryLink) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  })
}

const galleryImage = document.querySelectorAll(".gallery__image");
for (const image of galleryImage) {
  image.addEventListener("click", () => {
    
    const instance = basicLightbox.create(`
    <img src="${image.getAttribute("data-source")}" width="100%" height="100%">
    `,
    
    {onShow: (instance) => {document.addEventListener("keydown", event => {
      console.log(event);
      if (event.key === 'Escape') {
        instance.close();
      }
    })},

    onClose: (instance) => {document.removeEventListener("keydown", event => {
      console.log(event);
      if (event.key === 'Escape') {
        instance.close();
      }
    })}
    });

    instance.show();

  })

}

console.log(galleryItems);