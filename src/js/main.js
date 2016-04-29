'use strict';

jQuery(function ($) {
    var slides = {};

    for (var i = 0, a = $('section'); i < a.length; i++) {
        slides[$(a[i]).attr('id')] = $(a[i]);
    }

    var adjustLayout = function () {
        var height = $(window).height();
        $('section').css('min-height', (height < 800) ? 800 : height);
    };

    var navigate = function (name) {
        $('html, body').animate({
            scrollTop: slides[name].offset().top
        }, 500);

        var nav = $('nav');
        nav.find('a').removeClass('active');
        nav.find('a[href=#' + name + ']').addClass('active');
    };

    $('nav a').click(function (e) {
        e.preventDefault();
        navigate($(this).attr('href').replace('#', ''));
    });

    $(window).on('resize', function () {
        adjustLayout();
    });

    $(window).on('orientationchange', function () {
        adjustLayout();
    });

    adjustLayout();

    new WOW().init();
});
