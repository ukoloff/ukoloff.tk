!function() {
  var timeout = setTimeout

  var ws = new WebSocket(location.href.replace(/^http/, 'ws'))
  ws.onmessage = reload
  setInterval(ping, 12345)
  timeout(quitter, 300)

  function ping() {
    ws.send('.')
  }

  function reload() {
    location.reload()
  }

  function quitter() {
    document.getElementById('dev-server-close').onclick = quit
  }

  function quit() {
    ws.send('<QUIT>')
    timeout(winClose, 1)
    return false
  }

  function winClose() {
    window.close()
  }
}()
