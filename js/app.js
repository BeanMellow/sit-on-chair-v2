var prevPicture = document.querySelector('.slider--button:first-of-type');
var nextPicture = document.querySelector('.slider--button:last-of-type');
var pictures = document.querySelectorAll('.slider__gallery li');
var index = 0;

pictures[index].classList.add('visible');

prevPicture.addEventListener('click', function () {
    pictures[index--].classList.remove('visible');
    if (index < 0) {
        index = pictures.length - 1;
    }
    pictures[index].classList.add('visible');
});

nextPicture.addEventListener('click', function () {
    pictures[index++].classList.remove('visible');
    if (index >= pictures.length) {
        index = 0;
    }
    pictures[index].classList.add('visible');
});