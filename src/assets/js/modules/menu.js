/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */



export const createMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const navlinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    const line = document.querySelectorAll('.line');

    hamburger.addEventListener('click', () => {
        navlinks.classList.toggle("open");
        line.forEach(line => {
            line.classList.toggle("rot");
        })
        links.forEach(link => {
            link.classList.toggle("fade");
        })
    })
}