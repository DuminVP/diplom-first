
var btn = $('.header-menu__button');
var menu = $('.header-mobile-menu');
var btn2 = $('.header-menu__button-mobile');

/* меню при нажатии кнопки большой*/
btn.click(function() {
    menu.slideToggle();
    btn.toggleClass('close');
});

/* меню при нажатии кнопки малой*/
btn2.click(function() {
    menu.slideToggle();
    btn2.toggleClass('close');
});