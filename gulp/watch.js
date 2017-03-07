module.exports = function (gulp, $, options) {
  'use strict';

  gulp.task('watch-html', function () {
    return gulp.watch(
      [
        options.dir.src + '/**/*.pug',
        options.dir.src + '/**/*.json'
      ],
      gulp.parallel('html')
    );
  });

  gulp.task('watch-less', function () {
    return gulp.watch(options.dir.src + '/stylesheets/**/*.less', gulp.parallel('less'));
  });

  gulp.task('watch-scripts', function () {
    return gulp.watch(options.dir.src + '/js/**/*.js', gulp.parallel('scripts'));
  });

  gulp.task('watch-images', function () {
    return gulp.watch(options.dir.src + '/images/**/*', gulp.parallel('copy-images'));
  });

  gulp.task('server', function (done) {
    $.connect.server({
      root: options.dir.dest,
      livereload: true
    });

    done();
  });

  gulp.task('watch', gulp.series(
    'clean',
    gulp.parallel('copy', 'html', 'less', 'scripts'),
    'server',
    'pdf',
    gulp.parallel('watch-html', 'watch-less', 'watch-scripts')
  ));
};
