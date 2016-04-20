module.exports = function (gulp, $, options) {
    'use strict';

    var _ = require('lodash');
    var fs = require('fs');

    var jadeVars = function (vars) {
        var locals = {
            experience: JSON.parse(fs.readFileSync(__dirname + '/../src/content/experience.json')),
            settings: JSON.parse(fs.readFileSync(__dirname + '/../src/content/settings.json')),
            skills: JSON.parse(fs.readFileSync(__dirname + '/../src/content/skills.json')),
            technologies: JSON.parse(fs.readFileSync(__dirname + '/../src/content/technologies.json'))
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
                baseUrl: 'http://' + options.serverHost + ':' + options.serverPort + '/'
            })))
            .pipe($.rename('index.pdf.html'))
            .pipe(gulp.dest(options.dir.dest));
    });
};
