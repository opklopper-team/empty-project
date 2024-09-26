import '../../styles/sections/opk-gallery.scss';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const SELECTORS = {
    section: '.js-gallery',
    gallery: '.js-gallery-item'
}

const initGallery = () => {
    const $sections = document.querySelectorAll(SELECTORS.section);
    if (!$sections.length) return;           

    $sections.forEach(($section) => {
        const $galleryItems = $section.querySelectorAll(SELECTORS.gallery);
        if (!$galleryItems) return;   
               

        $galleryItems.forEach(($galleryItem, index) => {                        
            Fancybox.bind(`[data-gallary='gallary-${index}'] a`, {
                groupAll: true,
            });
        });

    })
}
 

 document.addEventListener("DOMContentLoaded", () => {
    initGallery();
});