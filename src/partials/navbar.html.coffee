fa = ->
  classes = "fa"
  classes += " fa-#{x}" for x in arguments  # cannot use ... inside WithOut :-(
  i class: classes
  text ' '

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
              -> fa 'github'
              "GitHub"
            li -> a
              href: "https://bitbucket.org/ukoloff/"
              -> fa 'bitbucket'
              "Bitbucket"
            li -> a
              href: "https://gitlab.com/u/ukoloff/projects"
              -> fa 'gitlab'
              "GitLab"
            li class: "divider"
            li -> a
              href: "https://rubygems.org/profiles/ukoloff"
              -> fa 'diamond'
              "RubyGems"
            li -> a
              href: "https://www.npmjs.com/~ukoloff"
              -> fa 'spinner', 'spin'
              "NPM"
        li class: "dropdown", ->
          a
            href: "#"
            class: "dropdown-toggle"
            data: toggle: "dropdown"
            role: "button"
            "Projects"
            -> span class: "caret"
          ul class: "dropdown-menu", role: "menu", ->
            li
              role: "presentation"
              class: "dropdown-header"
              -> fa 'bicycle'
              "JavaScript"
            li -> a
              href: "http://coffee.ukoloff.tk/"
              -> fa 'coffee'
              "Online Coffee compiler & minifier"
            li -> a
              href: "https://github.com/ukoloff/without"
              -> fa 'file-word-o'
              "WithOut template engine"
            li -> a
              href: "/bkrs/"
              -> fa 'book'
              "BKRS 2 DSL & Dictan converter"
            li -> a
              href: 'https://github.com/ukoloff/valid-8'
              -> fa 'language'
              "UTF-8 validator"
            li -> a
              href: 'https://github.com/ukoloff/nvms'
              -> fa 'plug'
              "NVM for M$ Windows"
            li class: "divider"
            li
              role: "presentation"
              class: "dropdown-header"
              -> fa 'truck'
              "Ruby"
            li -> a
              href: "https://github.com/ukoloff/em-wssh"
              -> fa 'random'
              "Proxy SSH thru nginx"
            li -> a
              href: "https://github.com/ukoloff/assets-watchify"
              -> fa 'cogs'
              "Watchify for Rails"
            li -> a
              href: "https://github.com/ukoloff/execjs-xtrn"
              -> fa 'cubes'
              "JavaScript engine"
            li -> a
              href: "https://github.com/ukoloff/openssl-win-root"
              -> fa 'certificate'
              "Root Certificates on Windows"
            li -> a
              href: 'https://github.com/ukoloff/appveyor-worker'
              -> fa 'binoculars'
              "AppVeyor reporting"
            li class: "divider"
            li
              role: "presentation"
              class: "dropdown-header"
              -> fa 'moon-o'
              "Lua @ Ruby"
            li -> a
              href: "https://github.com/ukoloff/rufus-lua-win"
              -> fa 'windows'
              "Rufus::Lua::Win"
            li -> a
              href: "https://github.com/ukoloff/rufus-lua-moon"
              -> fa 'file-code-o'
              "Rufus::Lua::Moon"
