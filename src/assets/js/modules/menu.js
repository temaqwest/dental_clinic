/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */



export const createMenu = () => {
    const hamburger = document.querySelector('.menu__hamburger');
    const navlinks = document.querySelector('.menu__nav-links');
    const links = document.querySelectorAll('.menu__nav-links-item');
    const line = document.querySelectorAll('.menu__line');

    hamburger.addEventListener('click', () => {
        document.body.classList.toggle('h--overflow-hidden');
        navlinks.classList.toggle("menu__nav-links--open");
        line.forEach(line => {
            line.classList.toggle("menu__line--active");
        })
        links.forEach(link => {
            link.classList.toggle("menu__nav-links-item--active");
        })
    })
}