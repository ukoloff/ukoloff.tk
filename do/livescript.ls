require! {
  path: {extname}
  livescript
}

module.exports = ->
  !function transform(files, metal-smith, done)
    var error
    Object.keys files
    .for-each !->
      if \.ls == extname it
        try
          file = files[it]
          js = livescript.compile do
            file.contents.to-string!
            bare: true
            map: true
          delete files[it]
          file<<<
            contents: buffer-from js.code
            map: js.map
          files[it.replace /.ls$/ \.js] = file
        catch e
          error ||:= e
    done error

buffer-from = Buffer.from || ->
  new Buffer it
