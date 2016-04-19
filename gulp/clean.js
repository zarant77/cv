module.exports = function (gulp, $, options) {
    'use strict';

    gulp.task('clean', function () {
        return $.del([options.dir.dest]);
    });
};
