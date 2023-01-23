$(document).ready(function () {

    $(window).on('scroll', function () {

        if($(this).scrollTop() > 90){

            $('.navbar').addClass('navbar-shrink');

        }
        else{
            $('.navbar').removeClass('navbar-shrink');
        }

    })

    $.scrollIt({
        topOffset: -50,
    });

    AOS.init();

    $('.nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

})
/*----- style switcher start -----*/
function styleSwitcherToggle() {
    
    const styleSwitcher = document.querySelector('.js_style_switcher');
    const styleSwitcherToggle = document.querySelector('.js_style_switcher_toggle');

    styleSwitcherToggle.addEventListener('click', function() {
        styleSwitcher.classList.toggle('open');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-cog');
    })

}
styleSwitcherToggle();
/*----- style switcher end -----*/
/*----- theme color start -----*/
function themeColors() {
    const colorStyle = document.querySelector('.js-color-style');
    const thmeeColorContainer = document.querySelector('.js-theme-colors');

    thmeeColorContainer.addEventListener('click', ({target}) =>{
        if(target.classList.contains('js-theme-color-item')){
            localStorage.setItem('color', target.getAttribute('data-js-theme-color'));
            setColor();
        }
    });

    function setColor() {

        let path = colorStyle.getAttribute('href').split('/');
        path = path.slice(0, path.length - 1);
        colorStyle.setAttribute('href', path.join('/') + '/' + localStorage.getItem('color') + '.css');

        if(document.querySelector('.js-theme-color-item.active')){
            document.querySelector('.js-theme-color-item.active').classList.remove('active');
        }
        document.querySelector('[data-js-theme-color = ' + localStorage.getItem('color') + ']').classList.add('active');
    }

}
themeColors();
/*----- theme color end -----*/