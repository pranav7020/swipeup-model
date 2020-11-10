const popup = document.querySelector('.popup');
const container = document.querySelector('.dummy');
const close = document.querySelector('.close');
const swipeUp = document.querySelector('.swipeup-container');

let gestureX = [];
let gestureY = [];
let tolerance = 100;

swipeUp.addEventListener('wheel', () => {
    swipeup();
});

swipeUp.addEventListener('touchstart', (e) => {
    for (i = 0; i < e.touches.length; i++) {
        gestureX.push(e.touches[i].clientX);
        gestureY.push(e.touches[i].clientY);
    }
});
swipeUp.addEventListener('touchmove', (e) => {
    for (var i = 0; i < e.touches.length; i++) {
        gestureX.push(e.touches[i].clientX);
        gestureY.push(e.touches[i].clientY);
    }
});
swipeUp.addEventListener('touchend', (e) => {
    xTravel = gestureX[gestureX.length - 1] - gestureX[0];
    yTravel = gestureY[gestureY.length - 1] - gestureY[0];
    if (xTravel < tolerance && xTravel > -tolerance && yTravel < -tolerance) {
        swipeup();
    }
    gestureX = [];
    gestureY = [];
    xTravel = yTravel = '';
});

const swipeup = () => {
    popup.classList.toggle('active');
    container.classList.toggle('blur')
    close.classList.toggle('rotate');
};