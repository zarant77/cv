module.exports = function (gulp, $, options) {
    'use strict';

    var _ = require('lodash');
    var path = require('path');
    var fs = require('fs');

    var templateVars = function (vars) {
        var locals = {
            inline: function (file) {
                return fs.readFileSync(path.join(__dirname, '/../tmp/', file));
            },
            svg: function (file) {
                var filename = path.join(__dirname, '/../src/icons/', file + '.svg');

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

    gulp.task('html', function () {
        return gulp.src(options.dir.src + '/index.pug')
            .pipe($.pug(templateVars()))
            .pipe(gulp.dest(options.dir.dest))
            .pipe($.connect.reload());
    });

    gulp.task('html-pdf', function () {
        return gulp.src(options.dir.src + '/index.pug')
            .pipe($.pug(templateVars({
                isPdf: true,
                directory: options.dir.dest
            })))
            .pipe($.rename('index.pdf.html'))
            .pipe(gulp.dest(options.dir.dest));
    });
};
