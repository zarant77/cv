module.exports = function (gulp, $, options) {
    'use strict';

    var jadeVars = {
        pretty: !$.util.env.production,
        locals: {}
    };

    gulp.task('jade', function () {
        return gulp.src(options.dir.src + '/index.jade')
            .pipe($.jade(jadeVars))
            .pipe(gulp.dest(options.dir.dest))
            .pipe($.connect.reload());
    });
};
