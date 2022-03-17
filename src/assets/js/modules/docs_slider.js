/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */

import Swiper, { Navigation } from 'swiper';

export const createSlider = () => {
    Swiper.use([Navigation]);
    const slider = document.querySelector('.docs-slide');

    if (!slider) return false;

    let options = {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.docs-slide__button--next',
            prevEl: '.docs-slide__button--prev',
        },

        slidesPerView: 3,
        breakpoints: {
            900: {
                slidesPerView: 3,
            },
            800: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1,
            }
        }
    };

    const swiper = new Swiper('.docs-slide', options);
}