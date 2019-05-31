require! <[
  fs-extra
  gulp gulp-if gulp-markdown gulp-front-matter gulp-terser gulp-debug
  ./livescript ./without ./extract ./layout
]>

exports <<<
  default: pages
  clean: clean

function clean
  fs-extra.empty-dir \out

function pages
  gulp.src \src/**/* dot: true
  .pipe gulp-front-matter!
  .pipe gulp-if /[.]md$/ gulp-markdown!
  .pipe gulp-if /[.]ls$/ livescript!
  .pipe gulp-if /[.]html?[.]js$/ without $: {require}
  .pipe gulp-if '{layouts,partials}/*' do fragments = extract!
  .pipe gulp-if /[.]html?$/ layout do
    filter: (.front-matter?.title)
    layout: \default
    site: require \./site
    fragments: fragments.promise
  .pipe gulp-if /[.]js$/ gulp-terser do
    enclose: true
    output:
      max_line_len: 72
  .pipe gulp.dest \out
  .pipe gulp-debug do
    title: \Pages
    show-files: false
