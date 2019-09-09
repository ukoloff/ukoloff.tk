require! <[
  path
  gulp gulp-rename gulp-debug
]>

module.exports = assets

function assets
  children = 0

  dst = gulp.dest \out overwrite: false
    .on \pipe !->
      ++children
    .on \unpipe !->
      unless --children
        @end!

  for stream in [fonts, themes, scripts]
    stream!pipe do
      dst
      end: false

  dst.pipe gulp-debug do
    title: \Assets
    show-files: false

function module-root(name)
  cwd: path.dirname require.resolve "#{name}/package"
  cwdbase: true
  # buffer: false                 # Bug (?) when overwrite: false

function fonts
  gulp.src do
    <[ css/*.min.css fonts/* ]>
    module-root \font-awesome

function themes
  gulp.src do
    \*/bootstrap.min.css
    module-root \bootswatch
  .pipe gulp-rename !->
    it.dirname = path.join \css it.dirname
  .pipe gulp-debug do
    title: \Themes
    show-files: false

function scripts
  gulp.src do
    'dist/{bootstrap-native,polyfill}.min.js'
    module-root \bootstrap.native
  .pipe gulp-rename dirname: \js
