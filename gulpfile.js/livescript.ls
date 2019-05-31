require! <[ through2 livescript ./buf ]>

module.exports = ->
  through2.obj live-script

!function live-script(file, _, done)
  try
    js = livescript.compile do
      file.contents.to-string!
      bare: true
      map: \linked
      filename: file.stem
      output-filename: file.stem

    file.contents = buf js.code
    file.extname = \.js
    done void, file
  catch err
    done err
