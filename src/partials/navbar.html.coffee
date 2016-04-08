nav class: "navbar navbar-inverse navbar-static-top", ->
  div class: "container-fluid", ->
    div class: "navbar-header", ->
      button
        type: "button"
        class: "navbar-toggle collapsed"
        data:
          toggle: "collapse"
          target: "#navbar"
        ->
          span class: "sr-only", "Toggle navigation"
          span class: "icon-bar" for n in [1..3]
      a
        class: "navbar-brand"
        href: "/"
        "Hello!"
    div id: "navbar", class: "collapse navbar-collapse", ->
      ul class: "nav navbar-nav", ->
        li class: "dropdown", ->
          a
            href: "#"
            class: "dropdown-toggle"
            data: toggle: "dropdown"
            role: "button"
            "@Net"
            -> span class: "caret"
          ul class: "dropdown-menu", role: "menu", ->
            li -> a
              href: "https://github.com/ukoloff"
              -> i class: 'fa fa-github'
              " GitHub"
            li -> a
              href: "https://rubygems.org/profiles/ukoloff"
              -> i class: 'fa fa-diamond'
              " RubyGems"
            li -> a
              href: "https://www.npmjs.com/~ukoloff"
              -> i class: 'fa fa-spinner fa-spin'
              " NPM"
        li class: "dropdown", ->
          a
            href: "#"
            class: "dropdown-toggle"
            data: toggle: "dropdown"
            role: "button"
            " Projects"
            -> span class: "caret"
          ul class: "dropdown-menu", role: "menu", ->
            li
              role: "presentation"
              class: "dropdown-header"
              -> i class: 'fa fa-bicycle'
              " JavaScript"
            li -> a
              href: "http://coffee.ukoloff.tk/"
              -> i class: 'fa fa-coffee'
              " Online Coffee compiler & minifier"
            li -> a
              href: "https://github.com/ukoloff/without"
              -> i class: 'fa fa-file-word-o'
              " WithOut template engine"
            li -> a
              href: "/bkrs/"
              -> i class: 'fa fa-book'
              " BKRS 2 DSL & Dictan converter"
            li class: "divider"
            li
              role: "presentation"
              class: "dropdown-header"
              -> i class: 'fa fa-truck'
              " Ruby"
            li -> a
              href: "https://github.com/ukoloff/em-wssh"
              -> i class: 'fa fa-random'
              " Proxy SSH thru nginx"
            li -> a
              href: "https://github.com/ukoloff/assets-watchify"
              -> i class: 'fa fa-cogs'
              " Watchify for Rails"
            li -> a
              href: "https://github.com/ukoloff/execjs-xtrn"
              -> i class: 'fa fa-cubes'
              " JavaScript engine"
            li -> a
              href: "https://github.com/ukoloff/openssl-win-root"
              -> i class: 'fa fa-certificate'
              " Root Certificates on Windows"
            li class: "divider"
            li
              role: "presentation"
              class: "dropdown-header"
              -> i class: 'fa fa-moon-o'
              " Lua @ Ruby"
            li -> a
              href: "https://github.com/ukoloff/rufus-lua-win"
              -> i class: 'fa fa-windows'
              " Rufus::Lua::Win"
            li -> a
              href: "https://github.com/ukoloff/rufus-lua-moon"
              -> i class: 'fa fa-file-code-o'
              " Rufus::Lua::Moon"
