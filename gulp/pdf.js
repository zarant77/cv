module.exports = function (gulp, $, options) {
  'use strict';

  var fs = require('fs');

  gulp.task('remove-index-pdf', function () {
    return $.del([
      options.dir.dest + '/index.pdf.html'
    ]);
  });

  gulp.task('make-pdf', function () {
    var settings = JSON.parse(fs.readFileSync(__dirname + '/../src/content/settings.json'));

    var config = {
      format: 'A4',
      orientation: 'portrait',
      base: 'file://' + options.dir.dest + '/'
    };

    return gulp.src(options.dir.dest + '/index.pdf.html')
      .pipe($.htmlPdf(config))
      .pipe($.rename(settings.cvFilename))
      .pipe(gulp.dest(options.dir.dest));
  });

  gulp.task('pdf', gulp.series(
    'html-pdf',
    'make-pdf',
    'remove-index-pdf'
  ));
};
