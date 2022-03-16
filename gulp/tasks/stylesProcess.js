/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const stylesProcess = () => {
    return app.gulp.src(app.path.src.style, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>",
            })
        ))
        .pipe(sass({
            outputStyle: 'expanded' //compressed || expanded
        }))
        .pipe(groupCssMediaQueries())
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true,
        }))
        // Uncomment if you are looking for not minified duplicate
        //.pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCSS({
            level: {
                2: {
                    all: true,
                }
            }
        }))
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.style))
        .pipe(app.plugins.browserSync.stream());
};