require! <[
  path
  metalsmith
  metalsmith-drafts
  metalsmith-markdown
  metalsmith-collections
  metalsmith-summary
  ./livescript
  ./without
  ./drafts
  ./layout
  ./terser
  ./assets
]>

devserver = -> ->
if dev = /^-d|(--)?dev(elopment)?/.test process.argv[2]
  require! <[ ./devserver ]>

metalsmith path.join __dirname, \..
.source \src
.destination \out
.clean true
.use metalsmith-summary.init!
.use metalsmith-drafts!
.use devserver.inject || ->
.use metalsmith-markdown!
.use livescript!
.use without $: {require}
.use metalsmith-collections do
  partials:
    pattern: \partials/*
    refer: false
    metadata:
      draft: true
  layouts:
    pattern: \layouts/*
    refer: false
    metadata:
      draft: true
.use drafts!
.use metalsmith-drafts!
.use layout do
  layout: \default
  filter: (.title)
.use terser dev
.use assets do
  font-awesome:
    \font-awesome/css/*.min.css
    \font-awesome/fonts/*
  bootstrap-native:
    js: 'bootstrap.native/dist/./@(bootstrap-native|polyfill).min.js'
  themes:
    css: \bootswatch/*/bootstrap.min.css
.use metalsmith-summary.print!
.use devserver!
.build result

function result(error)
  if error
    throw error