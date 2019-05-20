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
          self =
            document: file = files[it]
            metal-smith: metal-smith
            partial: partial

          if file.with-out?.t
            file.contents = buf that self

          if filter file
            file.contents = buf layout self

        catch e
          error ||:= e

      function partial(name)
        unless t = partials[name]
          throw Error "Partial not found: #{name}"
        args = [].slice.call &
        args[0] = self
        return t.apply self, args

    done error

    function get-templates(name)
      {[
        path.basename file.path .replace /\W.*/ ''
        that
        ] for file in metal-smith.metadata!collections[name]
          when file.with-out?.t}

