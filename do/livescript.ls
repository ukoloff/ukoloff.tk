require! <[ path livescript ./buf ]>

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
            map: \embedded
            filename: path.basename it
          delete files[it]
          file<<<
            contents: buf js.code
            map: JSON.stringify js.map
          files[it.replace /[.][^.]*$/ \.js] = file
        catch e
          error ||:= e
    done error
