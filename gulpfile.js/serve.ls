require! <[ path http ws serve-static send opener ./site ]>

exports <<< {
  www
  reload
}

site.is-dev = true
site.[]js.push \/LIVE-RELOAD

var server, wss

!function www(done)
  getters =
    serve-static do
      root = \out
      dotfiles: \allow
    serve-static do
      path.join __dirname, \public
      extensions: <[ js ]>

  server ||:= http.create-server get
  .listen !->
    console.log "Point your browser to:" url = "http://localhost:#{@address!port}"
    opener url
    done!

  wss := new ws.Server {server}
  .on \connection !->
    <-! it.on \message
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

!function reload(done)
  <-! wss.clients.for-each
  it.send \reload
  done!
