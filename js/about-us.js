/*
* About Us Scripts
*/

$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
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
