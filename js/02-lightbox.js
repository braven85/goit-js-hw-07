import { galleryItems } from "./gallery-items.js";

for (const item of galleryItems) {
  const gallery = document.querySelector(".gallery");

  //creating item
  const galleryItem = document.createElement("a");
  galleryItem.className = "gallery__item";
  galleryItem.setAttribute("href", item.original);
  gallery.append(galleryItem);

  //creating image
  const galleryImage = document.createElement("img");
  galleryImage.className = "gallery__image";
  galleryImage.setAttribute("src", item.preview);
  galleryImage.setAttribute("alt", item.description);
  galleryItem.append(galleryImage);
}

//preventing default browser action on clicking a link
const galleryItem = document.querySelectorAll(".gallery__item");
for (const link of galleryItem) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
}

let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
});


console.log(galleryItems);
