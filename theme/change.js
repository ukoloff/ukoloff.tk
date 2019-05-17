!function(){var e,t=function(){
for(var e=document.getElementsByTagName("link"),t=e.length-1;t>=0;--t){
var n=e[t];if("stylesheet"==n.rel){var i=/.*\/(.*?)\//.exec(n.href)
;if(i)return{link:n,theme:i[1]}}}return{}}();function n(){
var e=window.localStorage;return e&&(e.theme=t.theme),i(),!1}
function i(){history.back()}function o(){var n=this.value
;if(n!=t.theme&&t.link){var i;t.theme=n,(e||setTimeout)(function(){
o.transition="opacity 120ms",o.opacity=0,setTimeout(c,120)
}),e=function(e){i=e};var o=document.body.style}function c(){
t.link.href=t.link.href.replace(/(.*)\/.*?\//,"$1/"+t.theme+"/"),
setTimeout(r,210)}function r(){o.opacity=1,setTimeout(a,120)}
function a(){i&&t.theme!=n?i():e=0}}!function(){var e=document.forms
;(e=e[e.length-1]).onsubmit=n;for(var c=e.length-1;c>=0;--c){var r=e[c]
;switch(r.type){case"button":r.onclick=i;break;case"radio":
r.onclick=o,r.value==t.theme&&(r.checked=!0,r.focus())}}}()}();