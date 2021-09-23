const { series, src, dest, watch } = require('gulp')
const fileInclude = require('gulp-file-include')
const sass = require('gulp-sass')(require('sass'))


const html = (cb) => {
  return src('./#src/index.html')
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./build/'))
}

const scss = (cb) => {
  return src('./#src/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./build/'))
}

const js = (cb) => {
  return src('./#src/index.js')
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./build/'))
}

const images = (cb) => {
  return src('./#src/images/**/*')
    .pipe(dest('./build/images/'))
}

const fonts = (cb) => {
  return src('./#src/fonts/**/*')
    .pipe(dest('./build/fonts/'))
}

const watchAll = (cb) => {
  watch('./#src/**/*.html', html)
  watch('./#src/**/*.scss', scss)
  watch('./#src/**/*.js', js)
  // watch('./#src/images/', images)
  // watch('./#src/fonts/**/*', fonts)
}

exports.default = series(html, scss, js, images, fonts, watchAll)
