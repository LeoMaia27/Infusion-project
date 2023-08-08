let body = document.querySelector("body");
body.classList.remove("no-js");
body.classList.add("js");

let menu = new Menu( {
    container: '.headerNav',
    toggleButton: '.headerButton',
    widthEnabled: 1024
});

let carouselImgs = new Carousel({
    container: '.containerSlider .showSlide',
    itens: 'figure',
    btnPrev: '.btnPrev',
    btnNext: '.btnNext'
});