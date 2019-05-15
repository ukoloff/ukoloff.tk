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

function extend(base)
  ``class DevServer extends base{}``

!function populate-collections
  if @get-config!active
    @docpad.get-block \scripts
      .add \/DEV-SERVER

!function write-after
  console.log \WRITE-AFTER

!function run-after
  console.log \RUN-AFTER

!function docpad-destroy
  console.log \DOCPAD-DESTROY

