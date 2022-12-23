"use strict";


var swiper__works = new Swiper('.works__wrapper', {
    slidesPerView: 3,
    spaceBetween: 40,
    allowTouchMove: false,
    loop:true,
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3
        }
      }
});

var swiper_diploma = new Swiper('.swiper-diploma', {
    slidesPerView: 3,
    allowTouchMove: true,
    centeredSlides: true,
    loop: true,
    spaceBetween: 0,
    breakpoints: {
        320: {
            slidesPerView: 1,
            pagination: {
                el: ".swiper-pagination",
            },
            centeredSlides: true,
        },
        576: {
            slidesPerView: 3,
            centeredSlides: true,
        }
      }
})

var swiper_diploma_partnerss = new Swiper(".swiper-diploma-parther", {
    spaceBetween: 20,
    slidesPerView: 5,
    loop: true
})

var swipers_works__items = new Swiper('.work__slider', {
    allowTouchMove: true,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
      },
})

var swiper_promo = new Swiper('.promo__slider', {
    slidesPerView: 1,
    allowTouchMove: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
            pagination: {
                el: ".swiper-pagination",
            },
            navigation: false
        },
        991: {
            pagination: false,
        }
      }
})



