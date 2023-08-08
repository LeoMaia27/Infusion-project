function Carousel(config) {
    this.container = (typeof config.container === "string") ? document.querySelector(config.container)
    : config.container;

    this.itens = (typeof config.itens === "string") ? document.querySelectorAll(config.itens) :
    config.itens;

    this.btnPrev = (typeof config.btnPrev === "string") ? document.querySelector(config.btnPrev) :
    config.btnPrev;

    this.btnNext = (typeof config.btnNext === "string") ? document.querySelector(config.btnNext) :
    config.btnNext;

    const _this = this;
    let _currentSlide = 0;

    init();

    function init() {
        let _show = _this.container.querySelectorAll('.show');

        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('show');
        })
        _this.itens[0].classList.add('show');
        _this.btnPrev.removeAttribute('style');
        _this.btnNext.removeAttribute('style');

        addListeners();
    }

    function addListeners() {
        _this.btnPrev.addEventListener("click", showPrevSlide);
        _this.btnNext.addEventListener("click", showNextSlide);
    }

    function showPrevSlide() {
        _currentSlide--;
        showSlide();
    }

    function showNextSlide() {
        _currentSlide++;
        // console.log(_currentSlide)
        showSlide();
    }

    function showSlide() {
        let qtd = _this.itens.length;
        let slider = _currentSlide % qtd;
        slider = Math.abs(slider);

        _this.container.querySelector('.show').classList.remove('show');
        _this.itens[slider].classList.add('show');
    }
}