var data = theme()
inject()

function theme() {
  var links = document.getElementsByTagName('link')
  for (var i = links.length - 1; i >= 0; --i) {
    var link = links[i]
    if (link.rel != 'stylesheet') continue;
    var re = /.*\/(.*?)\//.exec(link.href)
    if (!re) continue
    return {
      link: link,
      theme: re[1]
    }
  }
  return {}
}

function inject() {
  var form = document.forms
  form = form[form.length - 1]
  form.onsubmit = submit
  for (var i = form.length - 1; i >= 0; --i) {
    var input = form[i]
    switch (input.type) {
      case 'button':
        input.onclick = back
        break
      case 'radio':
        input.onclick = click
        if (input.value == data.theme) {
          input.checked = true
          input.focus()
        }
    }
  }
}

function submit() {
  var storage = window.localStorage
  if (storage)
    storage.theme = data.theme
  back()
  return false
}

function back() {
  history.back()
}

var onfinish

function click() {
  var theme = this.value
  if (theme == data.theme || !data.link) return

  data.theme = theme;
  (onfinish || setTimeout)(start)
  onfinish = registerFinish

  var next
  var style = document.body.style

  function registerFinish(fn) {
    next = fn
  }

  function start() {
    style.transition = 'opacity 120ms'
    style.opacity = 0
    setTimeout(modify, 120)
  }

  function modify() {
    data.link.href = data.link.href.replace(/(.*)\/.*?\//, '$1/' + data.theme + '/')
    setTimeout(restore, 210)
  }

  function restore() {
    style.opacity = 1.0
    setTimeout(cleanUp, 120)
  }

  function cleanUp() {
    if (next && data.theme != theme)
      next()
    else
      onfinish = 0
  }
}
