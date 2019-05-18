require! <[ path http ws serve-static send opener ]>

module.exports = ->
  var started

  !function www(files, metal-smith, done)
    done!
    if started
      return
    started := true

    getters =
      serve-static do
        root = metal-smith.destination!
        dotfiles: \allow
      serve-static do
        path.join __dirname, \public
        extensions: <[ js ]>

    server = http.create-server get
    .listen !->
      port = @address!port
      console.log "Point your browser to:" url = "http://localhost:#{port}"
      opener url

    !function get(req, res)
      i = 0
      do !function attempt
        if i < getters.length
          getters[i++] req, res, attempt
        else
          res.status-code = 404
          send req, \404.html, root: root
          .on \error !->
            res.end \404
          .pipe res
