const gulp = require('gulp')

const pug2html = require("./week6 - SOM/gulp/tasks/pug2html")
const styles = require("./week6 - SOM/gulp/tasks/styles")

module.exports.start = gulp.series(pug2html, styles)