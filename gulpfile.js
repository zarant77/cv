'use strict';

var options = {
    dir: {
        src: __dirname + '/src',
        tmp: __dirname + '/tmp',
        dest: __dirname + '/build',
        modules: __dirname + '/node_modules'
    },
    taskPath: './gulp/',
    livereloadPort: 1234,
    serverHost: 'localhost',
    serverPort: 8080
};

var gulp = require('gulp');

var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'del']
});

var taskList = require('fs').readdirSync(options.taskPath);

taskList.forEach(function (taskFile) {
    require(options.taskPath + taskFile)(gulp, plugins, options);
});

gulp.task('null', function (done) {
    done();
});

gulp.task(
    'default',
    gulp.series(
        'clean',
        'copy',
        'less',
        'scripts',
        'html',
        'pdf',
        (plugins.util.env.production ? 'gzip' : 'null')
    )
);
