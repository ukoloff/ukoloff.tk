!function(){var e,t,n;function o(){var e
;return null!=(e=window.localStorage)&&(e.theme=t.theme),i(),!1}
function i(){history.back()}function c(){var o,i
;(o=this.value)!==t.theme&&t.link&&(t.theme=o,(n||e)((function(){
i.transition="opacity 120ms",i.opacity=0,e((function(){
t.link.href=t.link.href.replace(/(.*)\/.*?\//,"$1/"+t.theme+"/"),
e((function(){i.opacity=1,e((function(){n=void 0}),120)}),210)}),120)
})),n=function(e){e},i=document.body.style)}e=setTimeout,t=function(){
var e,t,n,o
;for(e=document.getElementsByTagName("link"),t=e.length-1;t>=0;--t)if("stylesheet"===(n=e[t]).rel&&(o=/.*\/(.*?)\//.exec(n.href)))return{
link:n,theme:o[1]};return{}}(),function(){var e,n,r,u,a
;for((e=(n=document.forms)[n.length-1]).onsubmit=o,
r=0,u=e.length;r<u;++r)switch((a=e[r]).type){case"button":a.onclick=i
;break;case"radio":
a.onclick=c,a.value===t.theme&&(a.checked=!0,a.focus())}}()}();