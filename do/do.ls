require! <[
  path
  metalsmith
  metalsmith-build-info
  metalsmith-markdown
  metalsmith-summary
  ./livescript
  ./without
]>

metalsmith path.join __dirname, \..
.source \src
.destination \out
.clean true
.use metalsmith-summary.init!
.use metalsmith-build-info!
.use metalsmith-markdown!
.use livescript!
.use without $: {require}
.use metalsmith-summary.print!
.build result

function result(error)
  if error
    throw error
