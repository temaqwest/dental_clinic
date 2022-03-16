/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */
import gulpImagemin from "gulp-imagemin";

export const imagesProcess = () => {
    return app.gulp.src(app.path.src.img)

        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Images",
                message: "Error: <%= error.message %>",
            })
        ))
        .pipe(app.plugins.newer(app.path.build.img))
        .pipe(gulpImagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3, // 0 - 7
        }))
        .pipe(app.gulp.dest(app.path.build.img))
        .pipe(app.gulp.src(app.path.src.svg))

        .pipe(app.gulp.dest(app.path.build.img))
        .pipe(app.plugins.browserSync.stream());
}