module.exports = function (gulp, $, options) {
    'use strict';

    gulp.task('copy-images', function () {
        return gulp.src(options.dir.src + '/images/**/*').pipe(gulp.dest(options.dir.dest + '/images'));
    });

    gulp.task('copy-fonts', function () {
        return gulp.src([
            options.dir.modules + '/devicon/fonts/*.*',
            options.dir.modules + '/font-awesome/fonts/fontawesome-webfont.*',
            options.dir.modules + '/roboto-fontface/fonts/*.*'
        ]).pipe(gulp.dest(options.dir.dest + '/fonts'));
    });

    gulp.task('copy', gulp.parallel('copy-images', 'copy-fonts'));
};
