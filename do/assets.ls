require! <[ fs-extra path glob ]>

module.exports = plugin

function plugin(options)
  !function assets(files, metal-smith, done)
    count = 0
    for , v of options
      for line in [].concat v
        if \string == typeof line
          line = '': line
        for dst, src of line
          count += fetch do
            path.join metal-smith.destination!, dst
            src
    console.log "Copying assets:", count
    done!

function fetch(dst, src)
  folder = ''
  [module, pattern] = split \/ src
  [folder, pattern] = split \/./ pattern
  src = path.join do
    require.resolve "#{module}/package"
    \..
    folder

  for let file in files = glob.sync pattern, cwd: src
    file-from = path.join src, file
    file-to = path.join dst, file
    fs-extra.mkdirp path.dirname file-to
    .then ->
      fs-extra.copy file-from, file-to
    # .catch ->

  files.length

function split(pattern, text)
  i = text.index-of pattern
  if i < 0
    ['' text]
  else
    [
      text.slice 0 i
      text.slice i + pattern.length
    ]
