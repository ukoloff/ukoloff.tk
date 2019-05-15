!function() {
  var ws = new WebSocket(location.href.replace(/^http/, 'ws'))
  ws.onmessage = reload
  setInterval(ping, 12345)

  function ping() {
    ws.send('.')
  }

  function reload() {
    location.reload()
  }
}()
