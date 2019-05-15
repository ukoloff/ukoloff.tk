
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
      .add \/DEV-SERVER

!function write-after
  console.log \WRITE-AFTER

!function run-after
  if @active!
    require! <[ path http ws serve-static opener ]>
    getter = serve-static @docpad.get-config!out-path, dotfiles: \allow

    @server = http.create-server get
    .listen listen

  function listen
    port = @address!port
    console.log "Point your browser to:" url = "http://localhost:#{port}"
    opener url

  function get(req, res)
    getter req, res, ->
      res.status-code = 404
      res.end \404

!function docpad-destroy
  console.log \DOCPAD-DESTROY
  @server?.close!
