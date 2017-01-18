module.exports = function (gulp, $, options) {
    'use strict';

    var _ = require('lodash');
    var path = require('path');
    var fs = require('fs');

    var jadeVars = function (vars) {
        var locals = {
            svg: function (file) {
                var filename = path.join(__dirname, '/../src/images/icons/', file + '.svg');

                if (fs.existsSync(filename)) {
                    return fs.readFileSync(filename);
                } else {
                    console.error('File not found: "%s"', filename);
                    return '';
                }
            },
            experience: JSON.parse(fs.readFileSync(__dirname + '/../src/content/experience.json')),
            generalInfo: JSON.parse(fs.readFileSync(__dirname + '/../src/content/general-info.json')),
            settings: JSON.parse(fs.readFileSync(__dirname + '/../src/content/settings.json')),
            skills: JSON.parse(fs.readFileSync(__dirname + '/../src/content/skills.json'))
        };

        return {
            pretty: !$.util.env.production,
            locals: _.extend({}, locals, vars)
        };
    };

    gulp.task('jade', function () {
        return gulp.src(options.dir.src + '/index.jade')
            .pipe($.jade(jadeVars()))
            .pipe(gulp.dest(options.dir.dest))
            .pipe($.connect.reload());
    });

    gulp.task('jade-pdf', function () {
        return gulp.src(options.dir.src + '/index.jade')
            .pipe($.jade(jadeVars({
                isPdf: true,
                directory: options.dir.dest
            })))
            .pipe($.rename('index.pdf.html'))
            .pipe(gulp.dest(options.dir.dest));
    });
};
