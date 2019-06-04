require! <[ through2 ./buf ]>

module.exports = layout

!function layout(options)
  return through2.obj wrap-up

  !function wrap-up(file, _, done)
    if options.filter file
      options.fragments
      .then process
      .then !->
        done void file
      .catch done
    else
      done void file

    function process(fragments)
      params =
        document: file
        site: options.site
        partial: partial
      if file.with-out
        file.contents = buf that params

      layout = file.front-matter?.layout or options.layout
      unless t = fragments.layout[layout]
          throw Error "Layout not found: #{ layout or \??? }"

      file.contents = buf t params

      function partial(name)
        unless t = fragments.partial[name]
          throw Error "Partial not found: #{name}"
        args = [].slice.call &
        args[0] = params
        return t.apply params, args
