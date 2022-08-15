import Swiper, { Navigation, Autoplay } from "swiper";
import "../../scss/base/swiper.scss";

function initSliders() {
    if (document.querySelector(".mainslider__slider")) {
        new Swiper(".mainslider__slider", {
            modules: [Navigation, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,
            navigation: {
                nextEl: ".mainslider__arrow_next",
                prevEl: ".mainslider__arrow_prev",
            },

            loop: true,

            autoplay: {
                delay: 3000,
                stopOnLastSlide: true,
                disableOnInteraction: false,
            },
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});
