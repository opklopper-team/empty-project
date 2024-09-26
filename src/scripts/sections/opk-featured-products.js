import '../../styles/sections/opk-featured-products.scss';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

const sliderFeaturedProducts = () => {
    const SELECTORS = {
        slider: '.js-featured-products-slider',
        prevBtn: '.js-featured-products-slider-prev',
        nextBtn: '.js-featured-products-slider-next',
    }

    const $sliders = document.querySelectorAll(SELECTORS.slider);
    if (!$sliders.length) return;    

    $sliders.forEach(($slider) => {
        const $nextBtn = document.querySelector(SELECTORS.nextBtn);
        const $prevBtn = document.querySelector(SELECTORS.prevBtn);        

        const swiper = new Swiper($slider, {
            modules: [ Navigation ],
            loop: true,    
            slidesPerView: 1.1,  
            spaceBetween: 10,                 
            watchOverflow: true,
            // freeMode: true,
            navigation: {
                nextEl: SELECTORS.nextBtn,
                prevEl: SELECTORS.prevBtn,
            },
            breakpoints: {                
                768: {
                    slidesPerView: 2                    
                },
                1024: {
                    slidesPerView: 3                    
                },
                1200: {
                    slidesPerView: 4                    
                }
            },
        });
    })
};

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        sliderFeaturedProducts();

    }, 1000)
});