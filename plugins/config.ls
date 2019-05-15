# DocPad Configuration File
# http://docpad.org/docs/config

# @poweredByDocPad = false
require! <[ path ]>

exports.plugin-paths = <[
  assets
  livescript
  terser
  devserver
]>.map -> path.join __dirname, "docpad-plugin-#{it}"

exports.collections =
  entitled: ->
    @get-collection \html
    .find-all-live title: $type: \string
    .on \add !->
      it.setMetaDefaults layout: \default

exports.plugins =
#   less:
#     parseOptions:
#       paths: "#{__dirname}/node_modules"
#   copy:
#     raw:
#       src: 'raw'
#     fonts:
#       src: '../node_modules/font-awesome/fonts'
#       out: 'fonts'
#   webpack:
#     entry:
#       the: './the'
  livescript:
    $: {require}
  assets:
    fonts:
      src:
        module: \font-awesome
        extra: \fonts
      dst: \fonts
    css:
      src:
        module: \font-awesome
        extra: \css
        file: \font-awesome.min.css
      dst: \css
    bootstrap-native:
      src:
        module: \bootstrap.native
        extra: \dist
        file: <[ bootstrap-native.min.js polyfill.min.js ]>
      dst: \js
    themes:
      src:
        module: \bootswatch
        file: \bootstrap.min.css
      dst: \css
