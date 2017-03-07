'use strict';

var printPdf = function () {
  var iframe = this._printIframe;

  if (!this._printIframe) {
    iframe = this._printIframe = document.createElement('iframe');

    document.body.appendChild(iframe);

    iframe.style.display = 'none';

    iframe.onload = function () {
      setTimeout(function () {
        iframe.focus();
        iframe.contentWindow.print();
      }, 1);
    };
  }

  iframe.src = 'CV-Anton-Zarubin.pdf';
};

var preloadImages = function () {
  var toPreload = ['avatar.png', 'bg.png', 'companies.png'];
  var images = [];

  for (var i = 0; i < toPreload.length; i++) {
    images[i] = new Image();
    images[i].src = 'images/' + toPreload[i];
  }
};

preloadImages();

jQuery(function ($) {
  AOS.init();

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

  $(window).on('keydown', function (evt) {
    if (evt.ctrlKey && evt.keyCode === 80) {
      evt.preventDefault();
      printPdf();
    }
  });

  adjustLayout();

  new WOW().init();
});
