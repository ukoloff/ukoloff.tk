require! <[ through2 without ]>

module.exports = with-out

!function with-out(options)
  return through2.obj compile

  !function compile(file, _, done)
    try
      args = [].concat file.front-matter?.with-out?.args || [] .join!
      t = without new Function args, file.contents.to-string!
      t.$ = options.$
      file.extname = ''
      t.id = file.relative
      file.with-out = t
      done void file
    catch err
      done err
