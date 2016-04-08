# DocPad Configuration File
# http://docpad.org/docs/config

# @poweredByDocPad = false

@collections =
  entitled: ->
    @getCollection "html"
    .findAllLive 'title': $type: 'string'
    .on "add", (model) ->
      model.setMetaDefaults layout:"default"

@plugins =
  less:
    parseOptions:
      paths: "#{__dirname}/node_modules"
  copy:
    raw:
      src: 'raw'
    fonts:
      src: '../node_modules/font-awesome/fonts'
      out: 'fonts'
