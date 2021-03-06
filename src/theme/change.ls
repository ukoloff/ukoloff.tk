timeout = set-timeout
data = theme!
inject!

function theme
  links = document.get-elements-by-tag-name \link
  for link in links by -1 when \stylesheet == link.rel
    if /.*\/(.*?)\//.exec link.href
      return
        link: link,
        theme: that[1]
  {}

!function inject
  form = document.forms[* - 1]
  form.onsubmit = submit
  for input in form
    switch input.type
      case \button
        input.onclick = back
      case \radio
        input.onclick = click
        if input.value == data.theme
          input.checked = true
          input.focus!

function submit
  window.local-storage?.theme = data.theme
  back!
  false

!function back
  history.back!

var onfinish

!function click
  theme = @value
  if theme == data.theme or !data.link
    return

  data.theme = theme;
  onfinish || timeout
    .. <| start
  onfinish := register-finish

  var next
  style = document.body.style

  !function register-finish
    next = it

  !function start
    style.transition = 'opacity 120ms'
    style.opacity = 0
    <-! timeout _, 120
    data.link.href = data.link.href.replace /(.*)\/.*?\// "$1/#{data.theme}/"
    <-! timeout _, 210
    style.opacity = 1.0
    <-! timeout _, 120
    if next and data.theme != theme
      next!
    else
      onfinish := void
