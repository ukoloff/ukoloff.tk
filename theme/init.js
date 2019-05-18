!function(){var t,e
;e=window.localStorage,/\/\w+$/.test(location.pathname)&&(location.href+="/"),
e&&(t=e.theme),
t||(t="flatly"),document.writeln('<link rel="stylesheet" href="/css/'+t+'/bootstrap.min.css" />')
}();