function Menu(config) {
    this.nav = (typeof config.container === 'string') ? document.querySelector(config.container) :
    config.container;

    this.button = (typeof config.toggleButton === 'string') ? document.querySelector(config.toggleButton)
    : config.toggleButton;

    this.maxWidth = config.widthEnabled || false;

    let _opened = false;
    let _this = this;
    
    this.button.removeAttribute("style");

    //verificando tamanho da tela no browser
    if(this.maxWidth) {
        window.addEventListener('resize', e => {
            if(window.innerWidth > _this.maxWidth) {
                _this.nav.removeAttribute("style");
                _opened = true;
            }
        })
    }

    if(window.innerWidth <= _this.maxWidth) {
        closeMenu();
    }

    this.button.addEventListener('click', openOrClose);

    function openOrClose() {
        if(!_opened) {
            openMenu();
        } else {
            closeMenu();
        }
    }

    function openMenu() {
        const _top = _this.nav.getBoundingClientRect().top + 'px';

        let _style = {
            maxHeight: `calc(100vh - ${_top})`,
            overflow: 'hidden'
        };

        applyStyleToNav(_style);

        _opened = true;
    }

    function applyStyleToNav(_style) {
        Object.keys(_style).forEach( stl =>{
            _this.nav.style[stl] = _style[stl];
        })
    }

    function closeMenu() {
        let _style = {
            maxHeight: 0 + 'px',
            overflow: 'hidden'
        };

        applyStyleToNav(_style);

        _opened = false;
    }
}