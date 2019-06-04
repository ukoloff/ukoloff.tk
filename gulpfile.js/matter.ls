# Extract Front Matter
require! <[ through2 gray-matter ./buf ]>
is-utf8 = require \valid-8

module.exports = !->
  return through2.obj matter

  !function matter(file, _, done)
    if is-utf8 file.contents
      info = gray-matter content: file.contents
      file <<<
        contents: buf info.content
        front-matter: info.data
    done void file
