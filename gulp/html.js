module.exports = (gulp, $, options) => {
  const _ = require('lodash');
  const path = require('path');
  const fs = require('fs');
  const base64Img = require('base64-img');

  const templateVars = (vars) => {
    const locals = {
      inline: (file) => {
        return fs.readFileSync(path.join(__dirname, '/../tmp/', file));
      },
      inlineImg: (img) => {
        return base64Img.base64Sync(path.join(__dirname, '../src/images', img));
      },
      svg: (file) => {
        const filename = path.join(__dirname, '/../src/icons/', file + '.svg');

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

  gulp.task('html', () => {
    return gulp.src(options.dir.src + '/index.pug')
      .pipe($.pug(templateVars()))
      .pipe(gulp.dest(options.dir.dest))
      .pipe($.connect.reload());
  });

  gulp.task('html-pdf', () => {
    return gulp.src(options.dir.src + '/index.pug')
      .pipe($.pug(templateVars({
        isPdf: true,
        directory: options.dir.dest
      })))
      .pipe($.rename('index.pdf.html'))
      .pipe(gulp.dest(options.dir.dest));
  });
};
