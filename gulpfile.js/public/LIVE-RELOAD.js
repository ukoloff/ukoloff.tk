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
  setTimeout(quitter, 300)

  function quitter() {
    document.getElementById('dev-server-close').onclick = quit
  }

  function quit() {
    ws.send('<QUIT>')
    setTimeout(winClose, 1)
    return false
  }
  function winClose() {
    window.close()
  }
}()
