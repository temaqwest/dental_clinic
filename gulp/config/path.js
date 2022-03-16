/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */

import * as nodePath from 'path';
const rootDir = nodePath.basename(nodePath.resolve());

const buildDir = './dist/';
const srcDir = './src/';

export const path = {
    build: {
        html: buildDir,
        style: buildDir + 'assets/css/',
        js: buildDir + 'assets/js/',
        fonts: buildDir + 'assets/fonts/',
        img: buildDir + 'assets/img/',
        files: buildDir + 'assets/files/'
    },
    src: {
        html: {
            modules: srcDir + 'markup_modules/*.html',
            pages: srcDir + '*.html',
        },
        style: srcDir + 'assets/scss/main.scss',
        js: srcDir + 'assets/js/app.js',
        fonts: srcDir + 'assets/fonts/*.*',
        img: srcDir + 'assets/media/**/*.{jpg,jpeg,JPEG,png,gif}',
        svg: srcDir + 'assets/media/**/*.svg',
        files: srcDir + 'assets/files/**/*.*'
    },
    watch: {
        html: {
            modules: srcDir + 'markup_modules/*.html',
            pages: srcDir + '*.html',
        },
        style: srcDir + 'assets/scss/**/*.scss',
        js: {
            modules: srcDir + 'assets/scripts/modules/*.js',
            main: srcDir + 'assets/scripts/app.js',
        },
        fonts: srcDir + 'assets/fonts/*.*',
        img: srcDir + 'assets/media/**/*.{jpg,jpeg,png,gif,svg,ico}',
        files: srcDir + 'assets/files/**/*.*'
    },
    buildDir,
    srcDir,
    rootDir,
    clean: buildDir
}