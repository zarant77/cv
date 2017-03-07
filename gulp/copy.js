module.exports = function (gulp, $, options) {
  'use strict';

  gulp.task('copy-favicon', function () {
    return gulp.src(options.dir.src + '/favicon.ico').pipe(gulp.dest(options.dir.dest));
  });

  gulp.task('copy-images', function () {
    return gulp.src(options.dir.src + '/images/avatar.png').pipe(gulp.dest(options.dir.dest));
  });

  gulp.task('copy', gulp.parallel('copy-favicon', 'copy-images'));
};
