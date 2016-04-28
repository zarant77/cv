'use strict';

$(function () {
    $('nav a').click(function (e) {
        e.preventDefault();
        Layout.navigate($(this).attr('href').replace('#', ''));
    });

    new WOW().init();

    Layout.init();

    $(window).on('resize', function () {
        Layout.adjust();
    });

    $(window).on('orientationchange', function () {
        Layout.adjust();
    });

    /*$(document).mousewheel(function (evt) {
        if (!evt.ctrlKey && !evt.shiftKey && !evt.altKey) {
            Layout.move(evt.deltaY < 0, evt);
        }
    });

    $(document).on('keydown', function (evt) {
        if ((evt.keyCode === 40 || evt.keyCode === 38) && !evt.ctrlKey && !evt.shiftKey && !evt.altKey) {
            Layout.move(evt.keyCode === 40, evt);
        }
    });

    $('body').swipe({
        fingers: 'all',
        swipe: function (evt, direction, distance, duration, fingerCount) {
            if (direction === 'up' || direction === 'down') {
                console.log(direction);
                Layout.move(direction === 'up', evt);
            }
        }
    });*/
});
