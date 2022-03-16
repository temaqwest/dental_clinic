/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */

import versionNumber from 'gulp-version-number';
import fileInclude from 'gulp-file-include';

export const templatesBuild = () => {
  return app.gulp.src([app.path.src.html.pages])
      .pipe(app.plugins.plumber(
          app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>",
          })
      ))
      .pipe(fileInclude())
      .pipe(versionNumber({
        'value': '%DT%',
        'append': {
          'key': '_v',
          'cover': 0,
          'to': [
            'css',
            'js',
          ]
        },
        'output': {
          'file': 'gulp/version.json'
        }
      }))
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browserSync.stream());
};