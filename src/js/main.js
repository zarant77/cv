'use strict';

$(function () {
    $('nav a').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });

    TagCanvas.Start('cloudTech', null, {
        interval: 20,
        textFont: 'Impact,Arial Black,sans-serif',
        textColour: '#ff0000',
        textHeight: 25,
        outlineMethod: 'none',
        maxSpeed: 0.04,
        minBrightness: 0.1,
        depth: 0.92,
        pulsateTo: 0.2,
        pulsateTime: 0.75,
        initial: [0.1, -0.1],
        decel: 0.98,
        reverse: true,
        hideTags: false,
        weight: true,
        weightFrom: 'data-weight',
        fadeIn: 800,
        wheelZoom: false,
        activeCursor: 'auto'
    });
});
