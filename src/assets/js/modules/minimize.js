/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */

export const minimize = () => {
    const allPics = document.querySelectorAll('.minimized');

    [...allPics].forEach((i) => {
        i.addEventListener('click', openOverlay.bind(i))
    })

    function openOverlay() {
        const overlay = document.createElement('div');
        overlay.setAttribute('id', 'overlay');
        overlay.style.display = 'block';

        const magnify = document.createElement('div');
        magnify.setAttribute('id', 'magnify');

        magnify.style.display = 'block';
        magnify.style.left = '50%';
        magnify.style.top = '50%';
        magnify.style.transform = 'translate(-50%, -50%)';
        magnify.innerHTML = `<img src="${this.getAttribute('src')}">`;

        const closePopup = document.createElement('div');
        closePopup.setAttribute('id', 'close-popup');
        closePopup.innerHTML = '<i></i>';
        closePopup.addEventListener('click', () => { magnify.remove(); overlay.remove(); })

        magnify.appendChild(closePopup);

        document.body.append(overlay, magnify);
        console.log('Success');
    }

};