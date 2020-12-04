/*
* Index Scripts
*/

$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
        }
    });

    wow = new WOW(
        {
            duration: '4s',
            animateClass: 'animated', // default
        }
    )
    wow.init();

});
