require! <[ terser ./buf ]>

module.exports = plugin

options =
  enclose: true
  output:
    max_line_len: 72
  source-map:
    content: \inline
    url: \inline
    # include-sources: true

function plugin(dev)
  unless dev
    delete options.source-map

  !function transform(files, metal-smith, done)
    var error
    Object.keys files
    .for-each !->
      if /[.]js$/.test it
        try
          file = files[it]
          js = terser.minify do
            file.contents.to-string!
            options
          file.contents = buf js.code
        catch e
          error ||:= e
    done error
