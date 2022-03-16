/**
 * @author Tatevosyan Artem (@teqst)
 */

/**
 * Description: Search and replace by regular expression
 * Usage example: app.plugins.replace(/@dist\//g, 'dist/')
 */
import replace from "gulp-replace";
/**
 * Description: Prevent pipe breaking caused by errors from gulp plugins
 */
import plumber from "gulp-plumber";
/**
 * Description: Notification plugin for gulp
 */
import notify from "gulp-notify";
/**
 * Description: Local Server & Live-Reload plugin
 */
import browserSync from "browser-sync";
/**
 * Description: It checks if picture was updated
 */
import newer from "gulp-newer";
/**
 * Description: gulp-rename provides simple file renaming methods.
 */
import rename from "gulp-rename";

export const plugins = {
    replace,
    rename,
    plumber,
    notify,
    browserSync,
    newer,
}