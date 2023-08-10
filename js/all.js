$(document).ready(function () {
    //dropdown
    $('.dropdown').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('.dropdown_open').slideToggle();
        $(this).parent().siblings().find('.dropdown_open').slideUp(); 
    });

    //swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 500,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
          },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
      });

    //lightbox
    lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true,
        'showImageNumberLabel': false,
    });

    //top
    $(window).scroll(function (e) {
        var scrollY = window.scrollY;
        if (scrollY > 250) {
            $('.top').fadeIn();
        } else{
            $('.top').fadeOut();
        }});

    $('.top').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0}, 500);
    });
});