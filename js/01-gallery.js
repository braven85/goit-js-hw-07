import { galleryItems } from './gallery-items.js';

for (const item of galleryItems) {
  const gallery = document.querySelector(".gallery");

  // creating div
  const galleryDiv = document.createElement("div");
  galleryDiv.className = "gallery__item";
  gallery.append(galleryDiv);

  //creating link
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  galleryLink.setAttribute("href", item.original);
  galleryDiv.append(galleryLink);

  //creating image
  const galleryImg = document.createElement("img");
  galleryImg.className = "gallery__image";
  galleryImg.setAttribute("src", item.preview);
  galleryImg.setAttribute("data-source", item.original);
  galleryImg.setAttribute("alt", item.description);
  galleryLink.append(galleryImg);
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
    
    {onShow: (instance) => {document.addEventListener("keydown", function keyHandler(e) {
      //console.log(e);
      if (e.key === 'Escape') {
        instance.close();
        document.removeEventListener("keydown", keyHandler);
      }
    })}
    });

    instance.show();

  })

}

console.log(galleryItems);