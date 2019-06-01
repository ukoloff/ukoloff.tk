require! <[ through2 livescript vinyl-sourcemaps-apply ./buf ]>

module.exports = ->
  through2.obj live-script

!function live-script(file, _, done)
  try
    js = livescript.compile do
      src = file.contents.to-string!
      bare: true
      map: \linked
      filename: file.relative
      output-filename: ''

    file.contents = buf js.code
    if file.source-map
      # Dirty fix
      map = js.map.toJSON!
      map <<<
        file: file.relative
        sourceRoot: \/
        sources: [file.relative]
        sourcesContent: [src]
      vinyl-sourcemaps-apply file, map
    file.extname = \.js
    done void file
  catch err
    done err
