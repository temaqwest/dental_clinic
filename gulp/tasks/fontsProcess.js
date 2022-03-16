/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */

import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
  return app.gulp.src(`${app.path.srcDir}/assets/fonts/*.otf`, {})
      .pipe(app.plugins.plumber(
          app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>",
          })
      ))
      .pipe(fonter({
        formats: ['ttf']
      }))
      .pipe(app.gulp.dest(app.path.build.fonts))
};

export const ttfToWoff = () => {
  return app.gulp.src(`${app.path.srcDir}/assets/fonts/*.ttf`, {})
      .pipe(app.plugins.plumber(
          app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>",
          })
      ))
      .pipe(fonter({
        formats: ['woff']
      }))
      .pipe(app.gulp.dest(app.path.build.fonts))
      .pipe(app.gulp.src(`${app.path.srcDir}/assets/fonts/*.ttf`))
      .pipe(ttf2woff2())
      .pipe(app.gulp.dest(app.path.build.fonts))
};

export const getFonts = () => {
    return app.gulp.src(app.path.src.fonts)
        .pipe(app.gulp.dest(app.path.build.fonts))
};