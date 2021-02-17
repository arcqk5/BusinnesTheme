//= ../../../node_modules/slick-carousel/slick/slick.js

$(function() {

    //= components/slick.js


});

var navigation = document.getElementById('navigation');
var burger = document.getElementById('burgerButton');

burger.addEventListener('click', function (event) {
    event.preventDefault();

    navigation.classList.toggle('show');
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        navigation.classList.remove('show');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};