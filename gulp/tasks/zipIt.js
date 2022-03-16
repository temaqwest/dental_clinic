/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */

import del from 'del';
import zipPlugin from 'gulp-zip';

export const zipIt = () => {
  del(`./${app.path.rootDir}.zip`);
  return app.gulp.src(`${app.path.buildDir}/**/*.*`, {})
      .pipe(app.plugins.plumber(
          app.plugins.notify.onError({
            title: "Archive (ZIP)",
            message: "Error: <%= error.message %>",
          })
      ))
      .pipe(zipPlugin(`${app.path.rootDir}.zip`))
      .pipe(app.gulp.dest('./'));
};