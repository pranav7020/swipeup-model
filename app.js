const popup = document.querySelector('.popup');
const container = document.querySelector('.dummy');
const close = document.querySelector('.close');
const swipeUp = document.querySelector('.swipeup-container');

let touchCount = 0;

swipeUp.addEventListener('touchmove', touchmove, false);

function touchmove(e) {
    touchCount += e.touches.length;
    if (touchCount > 3)
        swipeup()
}

const swipeup = () => {
    popup.classList.toggle('active');
    container.classList.toggle('blur')
    close.classList.toggle('rotate');
    touchCount = 0;
}