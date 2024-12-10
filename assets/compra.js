var swiper = new Swiper(".productsCarousel", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      700: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      1300: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  const container = document.querySelector(".container-logoCarousel");

  var swiper = new Swiper(".logoCarousel", {
    slidesPerView: 7,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    speed: 800,
    freeMode: true,
    allowTouchMove: false,
    autoplay: {
      delay: 1500,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      700: {
        slidesPerView: 5.5,
        spaceBetween: 25,
      },
      1300: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
    },
  });