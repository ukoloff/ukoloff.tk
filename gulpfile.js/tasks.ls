require! <[
  fs-extra
  gulp gulp-if gulp-markdown gulp-front-matter gulp-debug
  ./livescript ./without ./extract ./layout
]>

exports <<<
  default: hi
  clean: clean

function clean
  fs-extra.empty-dir \out

function hi
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
  .pipe gulp.dest \out
