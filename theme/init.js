!function(){var e,t
;t=window.localStorage,/\/\w+$/.test(location.pathname)&&(location.href+="/"),
t&&(e=t.theme),
e||(e="spacelab"),document.writeln('<link rel="stylesheet" href="/css/'+e+'/bootstrap.min.css" />')
}();