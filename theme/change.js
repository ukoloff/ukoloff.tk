!function(){var e,t;function n(){var t
;return null!=(t=window.localStorage)&&(t.theme=e.theme),o(),!1}
function o(){history.back()}function i(){var n,o,i
;(n=this.value)!==e.theme&&e.link&&(e.theme=n,
(t||setTimeout)(function(){
i.transition="opacity 120ms",i.opacity=0,setTimeout(function(){
e.link.href=e.link.href.replace(/(.*)\/.*?\//,"$1/"+e.theme+"/"),
setTimeout(function(){i.opacity=1,setTimeout(function(){
o&&e.theme!==n?o():t=void 0},120)},210)},120)}),t=function(e){e
},i=document.body.style)}e=function(){var e,t,n,o
;for(e=document.getElementsByTagName("link"),
t=e.length-1;t>=0;--t)if("stylesheet"===(n=e[t]).rel&&(o=/.*\/(.*?)\//.exec(n.href)))return{
link:n,theme:o[1]};return{}}(),function(){var t,c,u,r,a
;for((t=(c=document.forms)[c.length-1]).onsubmit=n,
u=0,r=t.length;u<r;++u)switch((a=t[u]).type){case"button":a.onclick=o
;break;case"radio":
a.onclick=i,a.value===e.theme&&(a.checked=!0,a.focus())}}()}();