function fa
  classes = \fa
  for x in arguments  # cannot use ... inside WithOut :-(
    classes += " fa-#{x}"
  i class: classes
  text ' '

nav class: "navbar navbar-inverse navbar-static-top", !->
  div class: \container-fluid, !->
    div class: \navbar-header, !->
      button do
        type: \button
        class: "navbar-toggle collapsed"
        data:
          toggle: \collapse
          target: \#navbar
        !->
          span class: \sr-only, "Toggle navigation"
          for til 3
            span class: \icon-bar
      a do
        class: \navbar-brand
        href: \/
        \Hello!
    div id: \navbar, class: "collapse navbar-collapse", !->
      ul class: "nav navbar-nav", !->
        li class: \dropdown, !->
          a do
            href: \#
            class: \dropdown-toggle
            data: toggle: \dropdown
            role: \button
            \@Net
            !-> span class: \caret
          ul class: \dropdown-menu, role: \menu, !->
            li !-> a do
              href: \https://github.com/ukoloff
              !-> fa \github
              \GitHub
            li !-> a do
              href: \https://bitbucket.org/ukoloff/
              !-> fa \bitbucket
              \Bitbucket
            li !-> a do
              href: \https://gitlab.com/u/ukoloff/projects
              !-> fa \gitlab
              \GitLab
            li class: \divider
            li !-> a do
              href: \https://rubygems.org/profiles/ukoloff
              !-> fa \diamond
              \RubyGems
            li !-> a do
              href: \https://www.npmjs.com/~ukoloff
              !-> fa \spinner \spin
              \NPM
        li class: \dropdown, !->
          a do
            href: \#
            class: \dropdown-toggle
            data: toggle: \dropdown
            role: \button
            \Projects
            !-> span class: \caret
          ul class: \dropdown-menu, role: \menu, !->
            li class: \dropdown, !->
              a do
                href: \#
                class: \dropdown-toggle
                data: toggle: \dropdown
                role: \button
                !-> fa \bicycle
                \JavaScript
                !-> span class: \caret
              ul class: \dropdown-menu, role: \menu, !->
                li do
                  role: \presentation
                  class: \dropdown-header
                  !-> fa \bicycle
                  \JavaScript
                li !-> a do
                  href: \https://github.com/ukoloff/win-ca
                  !-> fa \certificate
                  "Root Certificates on Windows"
                li !-> a do
                  href: \https://github.com/ukoloff/nvms
                  !-> fa \plug
                  "NVM for M$ Windows"
                li !-> a do
                  href: \http://coffee.ukoloff.tk/
                  !-> fa \coffee
                  "Online Coffee compiler & minifier"
                li !-> a do
                  href: \https://github.com/ukoloff/without
                  !-> fa \file-word-o
                  "WithOut template engine"
                li !-> a do
                  href: \/bkrs/
                  !-> fa \book
                  "BKRS 2 DSL & Dictan converter"
                li !-> a do
                  href: \https://github.com/ukoloff/valid-8
                  !-> fa \language
                  "UTF-8 validator"
                li !-> a do
                  href: \https://github.com/ukoloff/appveyor-mocha
                  !-> fa \binoculars
                  "AppVeyor reporting for mocha"
            li class: \dropdown, !->
              a do
                href: \#
                class: \dropdown-toggle
                data: toggle: \dropdown
                role: \button
                !-> fa \truck
                \Ruby
                !-> span class: \caret
              ul class: \dropdown-menu, role: \menu, !->
                li do
                  role: \presentation
                  class: \dropdown-header
                  !-> fa \truck
                  \Ruby
                li !-> a do
                  href: \https://github.com/ukoloff/em-wssh
                  !-> fa \random
                  "Proxy SSH thru nginx"
                li !-> a do
                  href: \https://github.com/ukoloff/assets-watchify
                  !-> fa \cogs
                  "Watchify for Rails"
                li !-> a do
                  href: \https://github.com/ukoloff/execjs-xtrn
                  !-> fa \cubes
                  "JavaScript engine"
                li !-> a do
                  href: \https://github.com/ukoloff/openssl-win-root
                  !-> fa \certificate
                  "Root Certificates on Windows"
                li !-> a do
                  href: \https://github.com/ukoloff/appveyor-worker
                  !-> fa \binoculars
                  "AppVeyor reporting"
            li class: \dropdown, !->
              a do
                href: \#
                class: \dropdown-toggle
                data: toggle: \dropdown
                role: \button
                !-> fa \moon-o
                "Lua @ Ruby"
                !-> span class: \caret
              ul class: \dropdown-menu, role: \menu, !->
                li do
                  role: \presentation
                  class: \dropdown-header
                  !-> fa \moon-o
                  "Lua @ Ruby"
                li !-> a do
                  href: \https://github.com/ukoloff/rufus-lua-win
                  !-> fa \windows
                  \Rufus::Lua::Win
                li !-> a do
                  href: \https://github.com/ukoloff/rufus-lua-moon
                  !-> fa \file-code-o
                  \Rufus::Lua::Moon
            li class: \divider
            li !-> a do
              href: \https://github.com/ukoloff/ukoloff.tk
              !-> fa \code
              "This site"
      ul class: "nav navbar-nav navbar-right", !->
        li class: \dropdown, !->
          a do
            href: \#
            class: \dropdown-toggle
            data: toggle: \dropdown
            role: \button
            !-> fa \wrench
            \Setup
            !-> span class: \caret
          ul class: \dropdown-menu, role: \menu, !->
            li !-> a do
              href: \/theme
              !-> fa \eye
              \Themes
