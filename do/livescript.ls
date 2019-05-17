require! <[ livescript ./buf ]>

module.exports = ->
  !function transform(files, metal-smith, done)
    var error
    Object.keys files
    .for-each !->
      if /[.]ls$/.test it
        try
          file = files[it]
          js = livescript.compile do
            file.contents.to-string!
            bare: true
            map: true
          delete files[it]
          file<<<
            contents: buf js.code
            map: js.map
          files[it.replace /[.][^.]*$/ \.js] = file
        catch e
          error ||:= e
    done error
