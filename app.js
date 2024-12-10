(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');


                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }

        });
    }


    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));



})();


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