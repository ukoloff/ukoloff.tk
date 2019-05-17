require! <[
  path
  metalsmith
  metalsmith-markdown
  ./livescript
  ./without
]>

metalsmith path.join __dirname, \..
.source \./src
.destination \./out
.clean true
.use metalsmith-markdown!
.use livescript!
.use without $: {require}
.build result

function result(error)
  if error
    throw error
