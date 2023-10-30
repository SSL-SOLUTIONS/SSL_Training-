var swiper = new Swiper(".swiper-container",
    {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        centerSlide: true,
        fade: true,
        grabCursor: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 3,
            },
            950: {
                slidesPerView: 6,
            },
        },
    });
