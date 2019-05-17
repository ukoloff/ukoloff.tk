require! <[ path livescript ./buf ]>

module.exports = plugin

function plugin(options)
  filter = options?.filter or -> true

  !function transform(files, metal-smith, done)
    var error

    partials = get-templates \partials
    layouts = get-templates \layouts
    unless layout = layouts[layout-name = options?.layout]
      return done Error "Layout not found: #{layout-name}"

    Object.keys files
    .for-each !->
      if /[.]html?$/.test it
        try
          unless filter file = files[it]
            return
          file <<< {partial}
          file.contents = buf layout file
        catch e
          error ||:= e

      function partial(name)
        unless t = partials[name]
          throw Error "Partial not found: #{name}"
        args = [].slice.call &
        args[0] = file
        return t.apply file, args

    done error

    function get-templates(name)
      {[
        path.basename file.path .replace /\W.*/ ''
        that
        ] for file in metal-smith.metadata!collections[name]
          when file.with-out?.t}

