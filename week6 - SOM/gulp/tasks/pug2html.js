const gulp = require('gulp')
const pug = require('gulp-pug')

module.exports = function pug2html(cb) {
    return gulp.src('./week6 - SOM/src/html/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('./week6 - SOM/build'))
}