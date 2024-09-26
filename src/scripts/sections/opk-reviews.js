import '../../styles/sections/opk-reviews.scss';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle'; 

const sliderReviews = () => {
    const SELECTORS = {
        slider: '.js-reviews-slider',
        btnNext: '.js-reviews-controls-next', 
        btnPrev: '.js-reviews-controls-prev',
        paginaton: '.js-reviews-slider-pagination'
    }

    const CLASSES = {
        disableState: 'slider_controls--hidden_state'
    }

    const $sliders = document.querySelectorAll(SELECTORS.slider);
    if (!$sliders.length) return;

    $sliders.forEach(($slider) => {
        const swiper = new Swiper($slider, {
            modules:[Navigation, Pagination],            
            loop: true,        
            slidesPerView: 1.1, 
            spaceBetween: 11,   
            watchOverflow: true,
            freeMode: true,            
            navigation: {
                nextEl: SELECTORS.btnNext,
                prevEl: SELECTORS.btnPrev,
            },
            pagination: {
                clickable: true,
                el: SELECTORS.paginaton,
              },

            breakpoints: {                             
                750: {
                    slidesPerView: 3,                    
                },
                1200: {
                    slidesPerView: 4,                    
                },                
            },            
        });
        
        const checkNavigationVisibility = () => {
            const $btnNext = document.querySelector(SELECTORS.btnNext);
            const $btnPrev = document.querySelector(SELECTORS.btnPrev);

            if ($btnNext.classList.contains('swiper-button-disabled') && 
                $btnPrev.classList.contains('swiper-button-disabled')) {
                $btnNext.classList.add(CLASSES.disableState);
                $btnPrev.classList.add(CLASSES.disableState);
            } else {
                $btnNext.classList.remove(CLASSES.disableState);
                $btnPrev.classList.remove(CLASSES.disableState);
            }
        };
        
        checkNavigationVisibility();
        
        swiper.on('slideChange', checkNavigationVisibility);
        swiper.on('resize', checkNavigationVisibility);
    })
};

document.addEventListener("DOMContentLoaded", () => {
    sliderReviews();
});
