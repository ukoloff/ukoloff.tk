require! <[
  fs-extra
  gulp gulp-if gulp-markdown gulp-sourcemaps gulp-terser gulp-debug
  ./matter ./livescript ./without ./extract ./layout ./site ./serve
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
    www
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

!function watch(done)
  require! \./serve
  gulp.watch \src gulp.series do
    pages
    serve.reload
  serve.final done

function github
  do require \./github

!function flag(done)
  require \./serve
  done!

!function www(done)
  require \./serve .www <| done


