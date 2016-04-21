module.exports = function (gulp, $, options) {
    'use strict';

    gulp.task('scripts', function () {
        return gulp.src([
                options.dir.modules + '/jquery/dist/jquery.min.js',
                options.dir.modules + '/lodash/dist/lodash.min.js',
                options.dir.src + '/js/*.js'
            ])
            .pipe($.concat('main.js'))
            .pipe(gulp.dest(options.dir.dest + '/js'))
            .pipe($.connect.reload());
    });
};
