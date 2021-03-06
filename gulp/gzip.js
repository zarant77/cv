module.exports = function (gulp, $, options) {
  'use strict';

  gulp.task('gzip', function () {
    return gulp.src([
      options.dir.dest + '/**/*.html'
    ])
      .pipe($.gzip({gzipOptions: {level: 9}}))
      .pipe(gulp.dest(options.dir.dest));
  });
};
