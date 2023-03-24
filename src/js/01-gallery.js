import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
const galleryContainer = document.querySelector('.gallery')

const galleryMarkup = createGalleryItems(galleryItems);

galleryContainer.innerHTML = galleryMarkup;

let lightbox = new SimpleLightbox('.gallery a', { 
    caption: true,
    captionPosition: "bottom",
    captionDelay: 250,
 });

function createGalleryItems(gallery) {
        
    return gallery
        .map(({ preview, original, description }) => {       
            return `            
                <a class="gallery__item" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}" 
                        alt="${description}" 
                        title="${description}"                        
                    />
                </a>            
            `;        
        })
    .join('');
}
