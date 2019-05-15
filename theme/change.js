!function(){var e=function(){
for(var e=document.getElementsByTagName("link"),t=e.length-1;t>=0;--t){
var n=e[t];if("stylesheet"==n.rel){var r=/.*\/(.*?)\//.exec(n.href)
;if(r)return{link:n,theme:r[1]}}}return{}}();function t(){
var t=window.localStorage;return t&&(t.theme=e.theme),n(),!1}
function n(){history.back()}function r(){
e.theme=this.value,e.link&&(e.link.href=e.link.href.replace(/(.*)\/.*?\//,"$1/"+e.theme+"/"))
}!function(){var c=document.forms;(c=c[c.length-1]).onsubmit=t
;for(var i=c.length-1;i>=0;--i){var o=c[i];switch(o.type){case"button":
o.onclick=n;break;case"radio":
o.onclick=r,o.value==e.theme&&(o.checked=!0,o.focus())}}}()}();