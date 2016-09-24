path = require 'path'
webpack = require 'webpack'
extend = require 'extend'

values = (map)->
  v for k, v of map

brk = (s)->
  s.split ' '

plugins =
  globals: new webpack.ProvidePlugin
    $: 'jquery'
    jQuery: 'jquery'

module.exports = (BasePlugin) ->
  BasePlugin.extend
    name: "webpack"

    config:
      output:
        filename: '[name].js'
      module:
        loaders: values
          coffee:
            test: /[.]coffee$/
            loader: "coffee-loader"
          litcoffee:
            test: /[.](litcoffee|coffee[.]md)$/
            loader: "coffee-loader?literate"
      resolve:
        extensions: brk " .js .coffee .litcoffee .coffee.md"
      plugins: values extend
        minimize: new webpack.optimize.UglifyJsPlugin 
          output:
            comments: false
            max_line_len: 128
          compress:
            warnings: false
        reorder: new webpack.optimize.OccurenceOrderPlugin
        plugins
      environments:
        development:
          debug: true
          devtool: 'cheap-source-map'
          output:
            pathinfo: true
          plugins: values plugins

    writeAfter: (opts, next)->
      docpad = @docpad
      cfg = docpad.getConfig()
      config = @getConfig()
      delete config.environments
      config.context = path.resolve cfg.srcPath, 'webpack'
      (config.output ||= {}).path = cfg.outPath

      webpack config
      .run (err, stats)->
        if err
          docpad.log 'error', "Webpack error: #{err}!"

        docpad.log 'info', stats.toString
          colors: true
          hash: false
          # timings: false
          assets: true
          chunks: false
          chunkModules: false
          modules: false
          children: true
        do next
