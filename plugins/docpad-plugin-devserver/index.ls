module.exports = ->
  extend it
    ..::<<<
      name: \devserver
      write-after: write-after
      run-after: run-after

function write-after
  console.log \WRITE-AFTER

function run-after
  console.log \RUN-AFTER

function extend(base)
  ``class DevServer extends base{}``
