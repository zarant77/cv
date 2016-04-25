'use strict';

$(function () {
    $('nav a').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });

    var adjustLayout = function () {
        var height = $(window).height();

        $('#general').height(height);
        $('#download').height(height);
    };

    $(window).resize(adjustLayout);

    adjustLayout();
});
