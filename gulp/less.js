module.exports = function (gulp, $, options) {
    'use strict';

    gulp.task('less', function () {
        return gulp.src(options.dir.src + '/stylesheets/*.less')
            .pipe($.less())
            .pipe($.util.env.production ? $.minifyCss() : $.util.noop())
            .pipe(gulp.dest(options.dir.tmp))
            .pipe($.connect.reload());
    });
};
