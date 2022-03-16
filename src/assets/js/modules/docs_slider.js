/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */


import Swiper from 'swiper';

const slider = document.querySelector('.docs-slide');

if (!slider) return false;

const swiper = new Swiper('.docs-slide', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});