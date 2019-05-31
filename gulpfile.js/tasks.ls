require! <[
  fs-extra
  gulp gulp-if gulp-markdown gulp-sourcemaps gulp-terser gulp-debug
  ./matter ./livescript ./without ./extract ./layout ./site
  ./assets
]>

build = gulp.parallel do
  pages
  assets

exports <<< {
  clean
  pages
  assets
  build
  github
  watch
  default: build
  dev: gulp.series do
    flag
    build
    watch
}

function clean
  fs-extra.empty-dir \out

function pages
  gulp.src do
    \src/**/*
    dot: true
    nodir: true
  .pipe matter!
  .pipe gulp-if /[.]md$/ gulp-markdown!
  .pipe gulp-if /[.](?:ls|js)$/ gulp-sourcemaps.init!
  .pipe gulp-if /[.]ls$/ livescript!
  .pipe gulp-if /[.]html?[.]js$/ without $: {require}
  .pipe gulp-if '{layouts,partials}/*' do fragments = extract!
  .pipe gulp-if /[.]html?$/ layout do
    filter: (.front-matter?.title)
    layout: \default
    site: site
    fragments: fragments.promise
  .pipe gulp-if /[.]js$/ gulp-terser do
    enclose: true
    output:
      max_line_len: 72
  .pipe gulp-if site.is-dev, gulp-sourcemaps.write \.
  .pipe gulp.dest \out
  .pipe gulp-debug do
    title: \Pages
    show-files: false

function watch
  gulp.watch \src pages

function flag(done)
  site.is-dev = true
  done!

function github
  do require \./github
