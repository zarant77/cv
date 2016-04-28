var Layout = new function () {
    var slides = {};
    var keys = [];
    var currentSlide = 0;

    this.init = function () {
        slides = {};

        _.each($('section'), function (item) {
            slides[$(item).attr('id')] = $(item);
        });

        keys = Object.keys(slides);

        this.adjust();
        //this.navigate(keys[0]);
    };

    this.adjust = function () {
        var height = $(window).height();
        $('section').css('min-height', (height < 800) ? 800 : height);
    };

    this.navigate = function (name) {
        currentSlide = keys.indexOf(name);

        $('html, body').animate({
            scrollTop: slides[name].offset().top
        }, 500);

        var nav = $('nav');
        nav.find('a').removeClass('active');
        nav.find('a[href=#' + name + ']').addClass('active');
    };

    this.move = function (isNext) {
        if (isNext) {
            currentSlide++;
        }
        else {
            currentSlide--;
        }

        if (currentSlide < 0) {
            currentSlide = 0;
        }

        if (currentSlide >= keys.length) {
            currentSlide = keys.length - 1;
        }

        this.navigate(keys[currentSlide]);
    };
}();
