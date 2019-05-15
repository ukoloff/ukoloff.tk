
module.exports = ->
  extend it
    ..::<<<
      name: \devserver
      config:
        environments:
          development:
            active: true
      populate-collections: populate-collections
      write-after: write-after
      run-after: run-after
      docpad-destroy: docpad-destroy

      active: active

function extend(base)
  ``class DevServer extends base{}``

function active
  @get-config!active

!function populate-collections
  if @active!
    @docpad.get-block \scripts
      .add \/LIVE-RELOAD

!function write-after
  console.log \WRITE-AFTER

!function run-after
  if @active!
    require! <[ path http ws serve-static opener ]>
    getters =
      serve-static do
        @docpad.get-config!out-path
        dotfiles: \allow
      serve-static do
        path.join __dirname, \public
        extensions: <[ js ]>

    @server = http.create-server get
    .listen listen

  function listen
    port = @address!port
    console.log "Point your browser to:" url = "http://localhost:#{port}"
    opener url

  !function get(req, res)
    i = 0
    do function attempt
      if i < getters.length
        getters[i++] req, res, attempt
      else
        res.status-code = 404
        res.end \404

!function docpad-destroy
  console.log \DOCPAD-DESTROY
  @server?.close!
