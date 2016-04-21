module.exports = function (gulp, $, options) {
    'use strict';

    gulp.task('copy-images', function () {
        return gulp.src(options.dir.src + '/images/**/*').pipe(gulp.dest(options.dir.dest + '/images'));
    });

    gulp.task('copy-fonts', function () {
        return gulp.src([
            options.dir.modules + '/roboto-fontface/fonts/*.*',
            options.dir.src + '/fonts/*.*'
        ]).pipe(gulp.dest(options.dir.dest + '/fonts'));
    });

    gulp.task('copy', gulp.parallel('copy-images', 'copy-fonts'));
};
