module.exports = function (gulp, $, options) {
    'use strict';

    var fs = require('fs');

    gulp.task('jade', function () {
        var jadeVars = {
            pretty: !$.util.env.production,
            locals: {
                experience: JSON.parse(fs.readFileSync(__dirname + '/../src/content/experience.json')),
                skills: JSON.parse(fs.readFileSync(__dirname + '/../src/content/skills.json')),
                technologies: JSON.parse(fs.readFileSync(__dirname + '/../src/content/technologies.json'))
            }
        };

        return gulp.src(options.dir.src + '/index.jade')
            .pipe($.jade(jadeVars))
            .pipe(gulp.dest(options.dir.dest))
            .pipe($.connect.reload());
    });
};
