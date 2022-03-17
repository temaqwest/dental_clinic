/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */

// Main module (Gulp) ☜(ﾟヮﾟ☜)
import gulp from 'gulp';

// Import all paths
import { path } from './gulp/config/path.js';

// Import plugins
import { plugins } from './gulp/config/plugins.js';


global.app = {
    path,
    plugins,
    gulp
}

// Import tasks
import { copyFiles } from './gulp/tasks/copyFiles.js';
import { cleanDist } from './gulp/tasks/cleanDist.js';
import { templatesBuild } from './gulp/tasks/templatesBuild.js';
import { browserServer } from './gulp/tasks/browserServer.js'
import { stylesProcess } from './gulp/tasks/stylesProcess.js'
import { jsBuild } from "./gulp/tasks/jsBuild.js";
import { imagesProcess } from "./gulp/tasks/imagesProcess.js";
import { getFonts, otfToTtf, ttfToWoff } from "./gulp/tasks/fontsProcess.js";
import { zipIt } from "./gulp/tasks/zipIt.js";

// Watchers
function watcher() {
    gulp.watch(path.watch.files, copyFiles);
    gulp.watch(path.watch.img, imagesProcess);
    gulp.watch([path.watch.html.modules, path.watch.html.pages], templatesBuild);
    gulp.watch(path.watch.style, stylesProcess);
    gulp.watch([path.watch.js.modules, path.watch.js.main], jsBuild);
}

const fontsTasks = gulp.series(otfToTtf, ttfToWoff, getFonts);

const mainTasks = gulp.series(fontsTasks, gulp.parallel(copyFiles, templatesBuild, stylesProcess, jsBuild, imagesProcess));

// Development mode tasks
const dev = gulp.series(cleanDist, mainTasks, gulp.parallel(watcher, browserServer));
gulp.task('dev', dev);

// Release mode tasks
const build = gulp.series(cleanDist, mainTasks);
gulp.task('build', build);

// Create zip archive
const createZip = gulp.series(cleanDist, mainTasks, zipIt);
gulp.task('zip', createZip);



