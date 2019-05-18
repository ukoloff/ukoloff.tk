require! <[ path http ws serve-static send opener chokidar ]>

module.exports = dev-server
dev-server <<< {inject}

!function inject(files, metal-smith, done)
  metal-smith.metadata!
    ..[]js.push \/LIVE-RELOAD
    ..is-dev = true
  done!

function dev-server
  var started, wss

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

      chokidar.watch do
        \.
        cwd: metal-smith.source!
        ignore-initial: true
      .on \all changed

    wss := new ws.Server {server}
    .on \connection !->
      it.on \message !->
        if \<QUIT> == it
          process.exit!

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

    var rebuilding

    !function changed
      unless rebuilding
        rebuilding := new Date
        set-timeout rebuld, 300

    !function rebuld
      console.log \Rebuilding: new Date!to-time-string!replace /\s.*/ ''
      metal-smith
      .metadata {}
      .build result

    !function result(error)
      set-timeout unlock, 100
      if error
        console.error \ERROR error

    !function unlock
      rebuilding := void
      wss.clients.for-each !->
        it.send \reload
