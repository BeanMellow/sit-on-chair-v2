// Slider

function slider() {
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
}

slider();


// -------------------------------------------------------------------------------------
// Dropdown menu

function dropdownMenu() {
    var dropdown = document.querySelector('.menu--dropdown');
    var about = document.querySelector('.menu li:first-of-type');
    about.addEventListener('mouseover', function () {
        dropdown.style.display = 'block';
    });
    about.addEventListener('mouseout', function () {
        dropdown.style.display = 'none';
    });
}

dropdownMenu();

// -------------------------------------------------------------------------------------
// Gallery interaction

// function galleryInteraction() {
//     var pictures = document.querySelectorAll('.chairs .main__width div:not(:last-of-type)');
//
//     pictures.forEach(function (el) {
//         el.addEventListener('mouseover', function () {
//             var text = this.querySelector('h4');
//             text.style.display = 'none';
//             this.style.transform = 'scale(1.2)';
//         });
//
//         el.addEventListener('mouseout', function () {
//             var text = this.querySelector('h4');
//             this.style.transition = '2s';
//             text.style.display = 'block';
//             this.style.transform = 'scale(1)';
//         });
//     });
// }

function galleryInteraction() {
    var pictures = document.querySelectorAll('.chairs .main__width div:not(:last-of-type)');

    pictures.forEach(function (el) {
        el.addEventListener('mouseover', function () {
            this.style.zIndex = '2';

            var text = this.querySelector('h4');
            this.style.transition = '2s';
            this.style.transform = 'scale(1.2)';

            text.style.animation = 'fade 2s forwards';
        });

        el.addEventListener('mouseout', function () {
            this.style.zIndex = '1';

            var text = this.querySelector('h4');
            this.style.transition = '2s';
            this.style.transform = 'scale(1)';

            text.style.animation = 'appear 2s forwards';
        });
    });
}

galleryInteraction();