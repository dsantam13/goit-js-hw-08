// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Descrito en la documentación
import SimpleLightbox from "simplelightbox";
// Importación adicional de estilos
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const galleryImages = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
    `).join("");

gallery.innerHTML = galleryImages;
gallery.style.listStyle = "none";

const lightbox = new SimpleLightbox('.gallery__link', { 
    captionsData: "alt",
    captionDelay: 250
});
