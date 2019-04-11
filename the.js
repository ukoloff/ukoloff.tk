!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),
o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){n(2)},function(t,e,n){var i,o;!function(e,n){"object"==typeof t&&"object"==typeof t.exports?t.exports=e.document?n(e,!0):function(t){
if(!t.document)throw new Error("jQuery requires a window with a document");return n(t)}:n(e)}("undefined"!=typeof window?window:this,function(n,r){
function s(t){var e=!!t&&"length"in t&&t.length,n=vt.type(t);return"function"!==n&&!vt.isWindow(t)&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t);
}function a(t,e,n){if(vt.isFunction(e))return vt.grep(t,function(t,i){return!!e.call(t,i,t)!==n});if(e.nodeType)return vt.grep(t,function(t){
return t===e!==n});if("string"==typeof e){if(Nt.test(e))return vt.filter(e,t,n);e=vt.filter(e,t)}return vt.grep(t,function(t){return vt.inArray(t,e)>-1!==n;
})}function l(t,e){do t=t[e];while(t&&1!==t.nodeType);return t}function u(t){var e={};return vt.each(t.match(Ot)||[],function(t,n){
e[n]=!0}),e}function c(){at.addEventListener?(at.removeEventListener("DOMContentLoaded",d),n.removeEventListener("load",d)):(at.detachEvent("onreadystatechange",d),
n.detachEvent("onload",d))}function d(){(at.addEventListener||"load"===n.event.type||"complete"===at.readyState)&&(c(),vt.ready());
}function f(t,e,n){if(void 0===n&&1===t.nodeType){var i="data-"+e.replace(_t,"-$1").toLowerCase();if(n=t.getAttribute(i),"string"==typeof n){
try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Ft.test(n)?vt.parseJSON(n):n)}catch(t){}vt.data(t,e,n)}else n=void 0;
}return n}function p(t){var e;for(e in t)if(("data"!==e||!vt.isEmptyObject(t[e]))&&"toJSON"!==e)return!1;return!0}function h(t,e,n,i){
if(Rt(t)){var o,r,s=vt.expando,a=t.nodeType,l=a?vt.cache:t,u=a?t[s]:t[s]&&s;if(u&&l[u]&&(i||l[u].data)||void 0!==n||"string"!=typeof e)return u||(u=a?t[s]=st.pop()||vt.guid++:s),
l[u]||(l[u]=a?{}:{toJSON:vt.noop}),"object"!=typeof e&&"function"!=typeof e||(i?l[u]=vt.extend(l[u],e):l[u].data=vt.extend(l[u].data,e)),
r=l[u],i||(r.data||(r.data={}),r=r.data),void 0!==n&&(r[vt.camelCase(e)]=n),"string"==typeof e?(o=r[e],null==o&&(o=r[vt.camelCase(e)])):o=r,
o}}function g(t,e,n){if(Rt(t)){var i,o,r=t.nodeType,s=r?vt.cache:t,a=r?t[vt.expando]:vt.expando;if(s[a]){if(e&&(i=n?s[a]:s[a].data)){
vt.isArray(e)?e=e.concat(vt.map(e,vt.camelCase)):e in i?e=[e]:(e=vt.camelCase(e),e=e in i?[e]:e.split(" ")),o=e.length;for(;o--;)delete i[e[o]];
if(n?!p(i):!vt.isEmptyObject(i))return}(n||(delete s[a].data,p(s[a])))&&(r?vt.cleanData([t],!0):gt.deleteExpando||s!=s.window?delete s[a]:s[a]=void 0);
}}}function m(t,e,n,i){var o,r=1,s=20,a=i?function(){return i.cur()}:function(){return vt.css(t,e,"")},l=a(),u=n&&n[3]||(vt.cssNumber[e]?"":"px"),c=(vt.cssNumber[e]||"px"!==u&&+l)&&Pt.exec(vt.css(t,e));
if(c&&c[3]!==u){u=u||c[3],n=n||[],c=+l||1;do r=r||".5",c/=r,vt.style(t,e,c+u);while(r!==(r=a()/l)&&1!==r&&--s)}return n&&(c=+c||+l||0,
o=n[1]?c+(n[1]+1)*n[2]:+n[2],i&&(i.unit=u,i.start=c,i.end=o)),o}function v(t){var e=Yt.split("|"),n=t.createDocumentFragment();if(n.createElement)for(;e.length;)n.createElement(e.pop());
return n}function y(t,e){var n,i,o=0,r="undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e||"*"):"undefined"!=typeof t.querySelectorAll?t.querySelectorAll(e||"*"):void 0;
if(!r)for(r=[],n=t.childNodes||t;null!=(i=n[o]);o++)!e||vt.nodeName(i,e)?r.push(i):vt.merge(r,y(i,e));return void 0===e||e&&vt.nodeName(t,e)?vt.merge([t],r):r;
}function b(t,e){for(var n,i=0;null!=(n=t[i]);i++)vt._data(n,"globalEval",!e||vt._data(e[i],"globalEval"))}function x(t){zt.test(t.type)&&(t.defaultChecked=t.checked);
}function w(t,e,n,i,o){for(var r,s,a,l,u,c,d,f=t.length,p=v(e),h=[],g=0;g<f;g++)if(s=t[g],s||0===s)if("object"===vt.type(s))vt.merge(h,s.nodeType?[s]:s);else if(Jt.test(s)){
for(l=l||p.appendChild(e.createElement("div")),u=(Ut.exec(s)||["",""])[1].toLowerCase(),d=Gt[u]||Gt._default,l.innerHTML=d[1]+vt.htmlPrefilter(s)+d[2],
r=d[0];r--;)l=l.lastChild;if(!gt.leadingWhitespace&&Vt.test(s)&&h.push(e.createTextNode(Vt.exec(s)[0])),!gt.tbody)for(s="table"!==u||Kt.test(s)?"<table>"!==d[1]||Kt.test(s)?0:l:l.firstChild,
r=s&&s.childNodes.length;r--;)vt.nodeName(c=s.childNodes[r],"tbody")&&!c.childNodes.length&&s.removeChild(c);for(vt.merge(h,l.childNodes),
l.textContent="";l.firstChild;)l.removeChild(l.firstChild);l=p.lastChild}else h.push(e.createTextNode(s));for(l&&p.removeChild(l),
gt.appendChecked||vt.grep(y(h,"input"),x),g=0;s=h[g++];)if(i&&vt.inArray(s,i)>-1)o&&o.push(s);else if(a=vt.contains(s.ownerDocument,s),
l=y(p.appendChild(s),"script"),a&&b(l),n)for(r=0;s=l[r++];)Xt.test(s.type||"")&&n.push(s);return l=null,p}function T(){return!0}function C(){
return!1}function E(){try{return at.activeElement}catch(t){}}function k(t,e,n,i,o,r){var s,a;if("object"==typeof e){"string"!=typeof n&&(i=i||n,
n=void 0);for(a in e)k(t,a,n,i,e[a],r);return t}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,
i=n,n=void 0)),o===!1)o=C;else if(!o)return t;return 1===r&&(s=o,o=function(t){return vt().off(t),s.apply(this,arguments)},o.guid=s.guid||(s.guid=vt.guid++)),
t.each(function(){vt.event.add(this,e,o,i,n)})}function S(t,e){return vt.nodeName(t,"table")&&vt.nodeName(11!==e.nodeType?e:e.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t;
}function N(t){return t.type=(null!==vt.find.attr(t,"type"))+"/"+t.type,t}function $(t){var e=le.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),
t}function A(t,e){if(1===e.nodeType&&vt.hasData(t)){var n,i,o,r=vt._data(t),s=vt._data(e,r),a=r.events;if(a){delete s.handle,s.events={};
for(n in a)for(i=0,o=a[n].length;i<o;i++)vt.event.add(e,n,a[n][i])}s.data&&(s.data=vt.extend({},s.data))}}function D(t,e){var n,i,o;
if(1===e.nodeType){if(n=e.nodeName.toLowerCase(),!gt.noCloneEvent&&e[vt.expando]){o=vt._data(e);for(i in o.events)vt.removeEvent(e,i,o.handle);
e.removeAttribute(vt.expando)}"script"===n&&e.text!==t.text?(N(e).text=t.text,$(e)):"object"===n?(e.parentNode&&(e.outerHTML=t.outerHTML),
gt.html5Clone&&t.innerHTML&&!vt.trim(e.innerHTML)&&(e.innerHTML=t.innerHTML)):"input"===n&&zt.test(t.type)?(e.defaultChecked=e.checked=t.checked,
e.value!==t.value&&(e.value=t.value)):"option"===n?e.defaultSelected=e.selected=t.defaultSelected:"input"!==n&&"textarea"!==n||(e.defaultValue=t.defaultValue);
}}function L(t,e,n,i){e=ut.apply([],e);var o,r,s,a,l,u,c=0,d=t.length,f=d-1,p=e[0],h=vt.isFunction(p);if(h||d>1&&"string"==typeof p&&!gt.checkClone&&ae.test(p))return t.each(function(o){
var r=t.eq(o);h&&(e[0]=p.call(this,o,r.html())),L(r,e,n,i)});if(d&&(u=w(e,t[0].ownerDocument,!1,t,i),o=u.firstChild,1===u.childNodes.length&&(u=o),
o||i)){for(a=vt.map(y(u,"script"),N),s=a.length;c<d;c++)r=u,c!==f&&(r=vt.clone(r,!0,!0),s&&vt.merge(a,y(r,"script"))),n.call(t[c],r,c);
if(s)for(l=a[a.length-1].ownerDocument,vt.map(a,$),c=0;c<s;c++)r=a[c],Xt.test(r.type||"")&&!vt._data(r,"globalEval")&&vt.contains(l,r)&&(r.src?vt._evalUrl&&vt._evalUrl(r.src):vt.globalEval((r.text||r.textContent||r.innerHTML||"").replace(ue,"")));
u=o=null}return t}function j(t,e,n){for(var i,o=e?vt.filter(e,t):t,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||vt.cleanData(y(i)),i.parentNode&&(n&&vt.contains(i.ownerDocument,i)&&b(y(i,"script")),
i.parentNode.removeChild(i));return t}function O(t,e){var n=vt(e.createElement(t)).appendTo(e.body),i=vt.css(n[0],"display");return n.detach(),
i}function I(t){var e=at,n=pe[t];return n||(n=O(t,e),"none"!==n&&n||(fe=(fe||vt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),
e=(fe[0].contentWindow||fe[0].contentDocument).document,e.write(),e.close(),n=O(t,e),fe.detach()),pe[t]=n),n}function H(t,e){return{
get:function(){return t()?void delete this.get:(this.get=e).apply(this,arguments)}}}function R(t){if(t in $e)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=Ne.length;n--;)if(t=Ne[n]+e,
t in $e)return t}function F(t,e){for(var n,i,o,r=[],s=0,a=t.length;s<a;s++)i=t[s],i.style&&(r[s]=vt._data(i,"olddisplay"),n=i.style.display,
e?(r[s]||"none"!==n||(i.style.display=""),""===i.style.display&&Wt(i)&&(r[s]=vt._data(i,"olddisplay",I(i.nodeName)))):(o=Wt(i),(n&&"none"!==n||!o)&&vt._data(i,"olddisplay",o?n:vt.css(i,"display"))));
for(s=0;s<a;s++)i=t[s],i.style&&(e&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=e?r[s]||"":"none"));return t;
}function _(t,e,n){var i=Ee.exec(e);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):e}function q(t,e,n,i,o){for(var r=n===(i?"border":"content")?4:"width"===e?1:0,s=0;r<4;r+=2)"margin"===n&&(s+=vt.css(t,n+Mt[r],!0,o)),
i?("content"===n&&(s-=vt.css(t,"padding"+Mt[r],!0,o)),"margin"!==n&&(s-=vt.css(t,"border"+Mt[r]+"Width",!0,o))):(s+=vt.css(t,"padding"+Mt[r],!0,o),
"padding"!==n&&(s+=vt.css(t,"border"+Mt[r]+"Width",!0,o)));return s}function P(t,e,n){var i=!0,o="width"===e?t.offsetWidth:t.offsetHeight,r=ye(t),s=gt.boxSizing&&"border-box"===vt.css(t,"boxSizing",!1,r);
if(o<=0||null==o){if(o=be(t,e,r),(o<0||null==o)&&(o=t.style[e]),ge.test(o))return o;i=s&&(gt.boxSizingReliable()||o===t.style[e]),
o=parseFloat(o)||0}return o+q(t,e,n||(s?"border":"content"),i,r)+"px"}function M(t,e,n,i,o){return new M.prototype.init(t,e,n,i,o);
}function W(){return n.setTimeout(function(){Ae=void 0}),Ae=vt.now()}function B(t,e){var n,i={height:t},o=0;for(e=e?1:0;o<4;o+=2-e)n=Mt[o],
i["margin"+n]=i["padding"+n]=t;return e&&(i.opacity=i.width=t),i}function z(t,e,n){for(var i,o=(V.tweeners[e]||[]).concat(V.tweeners["*"]),r=0,s=o.length;r<s;r++)if(i=o[r].call(n,e,t))return i;
}function U(t,e,n){var i,o,r,s,a,l,u,c,d=this,f={},p=t.style,h=t.nodeType&&Wt(t),g=vt._data(t,"fxshow");n.queue||(a=vt._queueHooks(t,"fx"),
null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,d.always(function(){d.always(function(){
a.unqueued--,vt.queue(t,"fx").length||a.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],
u=vt.css(t,"display"),c="none"===u?vt._data(t,"olddisplay")||I(t.nodeName):u,"inline"===c&&"none"===vt.css(t,"float")&&(gt.inlineBlockNeedsLayout&&"inline"!==I(t.nodeName)?p.zoom=1:p.display="inline-block")),
n.overflow&&(p.overflow="hidden",gt.shrinkWrapBlocks()||d.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2];
}));for(i in e)if(o=e[i],Le.exec(o)){if(delete e[i],r=r||"toggle"===o,o===(h?"hide":"show")){if("show"!==o||!g||void 0===g[i])continue;
h=!0}f[i]=g&&g[i]||vt.style(t,i)}else u=void 0;if(vt.isEmptyObject(f))"inline"===("none"===u?I(t.nodeName):u)&&(p.display=u);else{
g?"hidden"in g&&(h=g.hidden):g=vt._data(t,"fxshow",{}),r&&(g.hidden=!h),h?vt(t).show():d.done(function(){vt(t).hide()}),d.done(function(){
var e;vt._removeData(t,"fxshow");for(e in f)vt.style(t,e,f[e])});for(i in f)s=z(h?g[i]:0,i,d),i in g||(g[i]=s.start,h&&(s.end=s.start,
s.start="width"===i||"height"===i?1:0))}}function X(t,e){var n,i,o,r,s;for(n in t)if(i=vt.camelCase(n),o=e[i],r=t[n],vt.isArray(r)&&(o=r[1],
r=t[n]=r[0]),n!==i&&(t[i]=r,delete t[n]),s=vt.cssHooks[i],s&&"expand"in s){r=s.expand(r),delete t[i];for(n in r)n in t||(t[n]=r[n],
e[n]=o)}else e[i]=o}function V(t,e,n){var i,o,r=0,s=V.prefilters.length,a=vt.Deferred().always(function(){delete l.elem}),l=function(){
if(o)return!1;for(var e=Ae||W(),n=Math.max(0,u.startTime+u.duration-e),i=n/u.duration||0,r=1-i,s=0,l=u.tweens.length;s<l;s++)u.tweens[s].run(r);
return a.notifyWith(t,[u,r,n]),r<1&&l?n:(a.resolveWith(t,[u]),!1)},u=a.promise({elem:t,props:vt.extend({},e),opts:vt.extend(!0,{specialEasing:{},
easing:vt.easing._default},n),originalProperties:e,originalOptions:n,startTime:Ae||W(),duration:n.duration,tweens:[],createTween:function(e,n){
var i=vt.Tween(t,u.opts,e,n,u.opts.specialEasing[e]||u.opts.easing);return u.tweens.push(i),i},stop:function(e){var n=0,i=e?u.tweens.length:0;
if(o)return this;for(o=!0;n<i;n++)u.tweens[n].run(1);return e?(a.notifyWith(t,[u,1,0]),a.resolveWith(t,[u,e])):a.rejectWith(t,[u,e]),
this}}),c=u.props;for(X(c,u.opts.specialEasing);r<s;r++)if(i=V.prefilters[r].call(u,t,c,u.opts))return vt.isFunction(i.stop)&&(vt._queueHooks(u.elem,u.opts.queue).stop=vt.proxy(i.stop,i)),
i;return vt.map(c,z,u),vt.isFunction(u.opts.start)&&u.opts.start.call(t,u),vt.fx.timer(vt.extend(l,{elem:t,anim:u,queue:u.opts.queue
})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function Y(t){return vt.attr(t,"class")||"";
}function G(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var i,o=0,r=e.toLowerCase().match(Ot)||[];if(vt.isFunction(n))for(;i=r[o++];)"+"===i.charAt(0)?(i=i.slice(1)||"*",
(t[i]=t[i]||[]).unshift(n)):(t[i]=t[i]||[]).push(n)}}function J(t,e,n,i){function o(a){var l;return r[a]=!0,vt.each(t[a]||[],function(t,a){
var u=a(e,n,i);return"string"!=typeof u||s||r[u]?s?!(l=u):void 0:(e.dataTypes.unshift(u),o(u),!1)}),l}var r={},s=t===nn;return o(e.dataTypes[0])||!r["*"]&&o("*");
}function K(t,e){var n,i,o=vt.ajaxSettings.flatOptions||{};for(i in e)void 0!==e[i]&&((o[i]?t:n||(n={}))[i]=e[i]);return n&&vt.extend(!0,t,n),
t}function Q(t,e,n){for(var i,o,r,s,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===o&&(o=t.mimeType||e.getResponseHeader("Content-Type"));
if(o)for(s in a)if(a[s]&&a[s].test(o)){l.unshift(s);break}if(l[0]in n)r=l[0];else{for(s in n){if(!l[0]||t.converters[s+" "+l[0]]){
r=s;break}i||(i=s)}r=r||i}if(r)return r!==l[0]&&l.unshift(r),n[r]}function Z(t,e,n,i){var o,r,s,a,l,u={},c=t.dataTypes.slice();if(c[1])for(s in t.converters)u[s.toLowerCase()]=t.converters[s];
for(r=c.shift();r;)if(t.responseFields[r]&&(n[t.responseFields[r]]=e),!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=r,r=c.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){
if(s=u[l+" "+r]||u["* "+r],!s)for(o in u)if(a=o.split(" "),a[1]===r&&(s=u[l+" "+a[0]]||u["* "+a[0]])){s===!0?s=u[o]:u[o]!==!0&&(r=a[0],
c.unshift(a[1]));break}if(s!==!0)if(s&&t.throws)e=s(e);else try{e=s(e)}catch(t){return{state:"parsererror",error:s?t:"No conversion from "+l+" to "+r
}}}return{state:"success",data:e}}function tt(t){return t.style&&t.style.display||vt.css(t,"display")}function et(t){if(!vt.contains(t.ownerDocument||at,t))return!0;
for(;t&&1===t.nodeType;){if("none"===tt(t)||"hidden"===t.type)return!0;t=t.parentNode}return!1}function nt(t,e,n,i){var o;if(vt.isArray(e))vt.each(e,function(e,o){
n||ln.test(t)?i(t,o):nt(t+"["+("object"==typeof o&&null!=o?e:"")+"]",o,n,i)});else if(n||"object"!==vt.type(e))i(t,e);else for(o in e)nt(t+"["+o+"]",e[o],n,i);
}function it(){try{return new n.XMLHttpRequest}catch(t){}}function ot(){try{return new n.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}
}function rt(t){return vt.isWindow(t)?t:9===t.nodeType&&(t.defaultView||t.parentWindow)}var st=[],at=n.document,lt=st.slice,ut=st.concat,ct=st.push,dt=st.indexOf,ft={},pt=ft.toString,ht=ft.hasOwnProperty,gt={},mt="1.12.4",vt=function(t,e){
return new vt.fn.init(t,e)},yt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bt=/^-ms-/,xt=/-([\da-z])/gi,wt=function(t,e){return e.toUpperCase();
};vt.fn=vt.prototype={jquery:mt,constructor:vt,selector:"",length:0,toArray:function(){return lt.call(this)},get:function(t){return null!=t?t<0?this[t+this.length]:this[t]:lt.call(this);
},pushStack:function(t){var e=vt.merge(this.constructor(),t);return e.prevObject=this,e.context=this.context,e},each:function(t){
return vt.each(this,t)},map:function(t){return this.pushStack(vt.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){
return this.pushStack(lt.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){
var e=this.length,n=+t+(t<0?e:0);return this.pushStack(n>=0&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor();
},push:ct,sort:st.sort,splice:st.splice},vt.extend=vt.fn.extend=function(){var t,e,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,u=!1;
for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||vt.isFunction(s)||(s={}),a===l&&(s=this,a--);a<l;a++)if(null!=(o=arguments[a]))for(i in o)t=s[i],
n=o[i],s!==n&&(u&&n&&(vt.isPlainObject(n)||(e=vt.isArray(n)))?(e?(e=!1,r=t&&vt.isArray(t)?t:[]):r=t&&vt.isPlainObject(t)?t:{},s[i]=vt.extend(u,r,n)):void 0!==n&&(s[i]=n));
return s},vt.extend({expando:"jQuery"+(mt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},
isFunction:function(t){return"function"===vt.type(t)},isArray:Array.isArray||function(t){return"array"===vt.type(t)},isWindow:function(t){
return null!=t&&t==t.window},isNumeric:function(t){var e=t&&t.toString();return!vt.isArray(t)&&e-parseFloat(e)+1>=0},isEmptyObject:function(t){
var e;for(e in t)return!1;return!0},isPlainObject:function(t){var e;if(!t||"object"!==vt.type(t)||t.nodeType||vt.isWindow(t))return!1;
try{if(t.constructor&&!ht.call(t,"constructor")&&!ht.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}if(!gt.ownFirst)for(e in t)return ht.call(t,e);
for(e in t);return void 0===e||ht.call(t,e)},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?ft[pt.call(t)]||"object":typeof t;
},globalEval:function(t){t&&vt.trim(t)&&(n.execScript||function(t){n.eval.call(n,t)})(t)},camelCase:function(t){return t.replace(bt,"ms-").replace(xt,wt);
},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e){var n,i=0;if(s(t))for(n=t.length;i<n&&e.call(t[i],i,t[i])!==!1;i++);else for(i in t)if(e.call(t[i],i,t[i])===!1)break;
return t},trim:function(t){return null==t?"":(t+"").replace(yt,"")},makeArray:function(t,e){var n=e||[];return null!=t&&(s(Object(t))?vt.merge(n,"string"==typeof t?[t]:t):ct.call(n,t)),
n},inArray:function(t,e,n){var i;if(e){if(dt)return dt.call(e,t,n);for(i=e.length,n=n?n<0?Math.max(0,i+n):n:0;n<i;n++)if(n in e&&e[n]===t)return n;
}return-1},merge:function(t,e){for(var n=+e.length,i=0,o=t.length;i<n;)t[o++]=e[i++];if(n!==n)for(;void 0!==e[i];)t[o++]=e[i++];return t.length=o,
t},grep:function(t,e,n){for(var i,o=[],r=0,s=t.length,a=!n;r<s;r++)i=!e(t[r],r),i!==a&&o.push(t[r]);return o},map:function(t,e,n){
var i,o,r=0,a=[];if(s(t))for(i=t.length;r<i;r++)o=e(t[r],r,n),null!=o&&a.push(o);else for(r in t)o=e(t[r],r,n),null!=o&&a.push(o);
return ut.apply([],a)},guid:1,proxy:function(t,e){var n,i,o;if("string"==typeof e&&(o=t[e],e=t,t=o),vt.isFunction(t))return n=lt.call(arguments,2),
i=function(){return t.apply(e||this,n.concat(lt.call(arguments)))},i.guid=t.guid=t.guid||vt.guid++,i},now:function(){return+new Date;
},support:gt}),"function"==typeof Symbol&&(vt.fn[Symbol.iterator]=st[Symbol.iterator]),vt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){
ft["[object "+e+"]"]=e.toLowerCase()});var Tt=function(t){function e(t,e,n,i){var o,r,s,a,l,u,d,p,h=e&&e.ownerDocument,g=e?e.nodeType:9;
if(n=n||[],"string"!=typeof t||!t||1!==g&&9!==g&&11!==g)return n;if(!i&&((e?e.ownerDocument||e:P)!==j&&L(e),e=e||j,I)){if(11!==g&&(u=vt.exec(t)))if(o=u[1]){
if(9===g){if(!(s=e.getElementById(o)))return n;if(s.id===o)return n.push(s),n}else if(h&&(s=h.getElementById(o))&&_(e,s)&&s.id===o)return n.push(s),
n}else{if(u[2])return Q.apply(n,e.getElementsByTagName(t)),n;if((o=u[3])&&w.getElementsByClassName&&e.getElementsByClassName)return Q.apply(n,e.getElementsByClassName(o)),
n}if(w.qsa&&!U[t+" "]&&(!H||!H.test(t))){if(1!==g)h=e,p=t;else if("object"!==e.nodeName.toLowerCase()){for((a=e.getAttribute("id"))?a=a.replace(bt,"\\$&"):e.setAttribute("id",a=q),
d=k(t),r=d.length,l=ft.test(a)?"#"+a:"[id='"+a+"']";r--;)d[r]=l+" "+f(d[r]);p=d.join(","),h=yt.test(t)&&c(e.parentNode)||e}if(p)try{
return Q.apply(n,h.querySelectorAll(p)),n}catch(t){}finally{a===q&&e.removeAttribute("id")}}}return N(t.replace(at,"$1"),e,n,i)}function n(){
function t(n,i){return e.push(n+" ")>T.cacheLength&&delete t[e.shift()],t[n+" "]=i}var e=[];return t}function i(t){return t[q]=!0,
t}function o(t){var e=j.createElement("div");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),
e=null}}function r(t,e){for(var n=t.split("|"),i=n.length;i--;)T.attrHandle[n[i]]=e}function s(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||V)-(~t.sourceIndex||V);
if(i)return i;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function a(t){return function(e){var n=e.nodeName.toLowerCase();
return"input"===n&&e.type===t}}function l(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t;
}}function u(t){return i(function(e){return e=+e,i(function(n,i){for(var o,r=t([],n.length,e),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]));
})})}function c(t){return t&&"undefined"!=typeof t.getElementsByTagName&&t}function d(){}function f(t){for(var e=0,n=t.length,i="";e<n;e++)i+=t[e].value;
return i}function p(t,e,n){var i=e.dir,o=n&&"parentNode"===i,r=W++;return e.first?function(e,n,r){for(;e=e[i];)if(1===e.nodeType||o)return t(e,n,r);
}:function(e,n,s){var a,l,u,c=[M,r];if(s){for(;e=e[i];)if((1===e.nodeType||o)&&t(e,n,s))return!0}else for(;e=e[i];)if(1===e.nodeType||o){
if(u=e[q]||(e[q]={}),l=u[e.uniqueID]||(u[e.uniqueID]={}),(a=l[i])&&a[0]===M&&a[1]===r)return c[2]=a[2];if(l[i]=c,c[2]=t(e,n,s))return!0;
}}}function h(t){return t.length>1?function(e,n,i){for(var o=t.length;o--;)if(!t[o](e,n,i))return!1;return!0}:t[0]}function g(t,n,i){
for(var o=0,r=n.length;o<r;o++)e(t,n[o],i);return i}function m(t,e,n,i,o){for(var r,s=[],a=0,l=t.length,u=null!=e;a<l;a++)(r=t[a])&&(n&&!n(r,i,o)||(s.push(r),
u&&e.push(a)));return s}function v(t,e,n,o,r,s){return o&&!o[q]&&(o=v(o)),r&&!r[q]&&(r=v(r,s)),i(function(i,s,a,l){var u,c,d,f=[],p=[],h=s.length,v=i||g(e||"*",a.nodeType?[a]:a,[]),y=!t||!i&&e?v:m(v,f,t,a,l),b=n?r||(i?t:h||o)?[]:s:y;
if(n&&n(y,b,a,l),o)for(u=m(b,p),o(u,[],a,l),c=u.length;c--;)(d=u[c])&&(b[p[c]]=!(y[p[c]]=d));if(i){if(r||t){if(r){for(u=[],c=b.length;c--;)(d=b[c])&&u.push(y[c]=d);
r(null,b=[],u,l)}for(c=b.length;c--;)(d=b[c])&&(u=r?tt(i,d):f[c])>-1&&(i[u]=!(s[u]=d))}}else b=m(b===s?b.splice(h,b.length):b),r?r(null,s,b,l):Q.apply(s,b);
})}function y(t){for(var e,n,i,o=t.length,r=T.relative[t[0].type],s=r||T.relative[" "],a=r?1:0,l=p(function(t){return t===e},s,!0),u=p(function(t){
return tt(e,t)>-1},s,!0),c=[function(t,n,i){var o=!r&&(i||n!==$)||((e=n).nodeType?l(t,n,i):u(t,n,i));return e=null,o}];a<o;a++)if(n=T.relative[t[a].type])c=[p(h(c),n)];else{
if(n=T.filter[t[a].type].apply(null,t[a].matches),n[q]){for(i=++a;i<o&&!T.relative[t[i].type];i++);return v(a>1&&h(c),a>1&&f(t.slice(0,a-1).concat({
value:" "===t[a-2].type?"*":""})).replace(at,"$1"),n,a<i&&y(t.slice(a,i)),i<o&&y(t=t.slice(i)),i<o&&f(t))}c.push(n)}return h(c)}function b(t,n){
var o=n.length>0,r=t.length>0,s=function(i,s,a,l,u){var c,d,f,p=0,h="0",g=i&&[],v=[],y=$,b=i||r&&T.find.TAG("*",u),x=M+=null==y?1:Math.random()||.1,w=b.length;
for(u&&($=s===j||s||u);h!==w&&null!=(c=b[h]);h++){if(r&&c){for(d=0,s||c.ownerDocument===j||(L(c),a=!I);f=t[d++];)if(f(c,s||j,a)){
l.push(c);break}u&&(M=x)}o&&((c=!f&&c)&&p--,i&&g.push(c))}if(p+=h,o&&h!==p){for(d=0;f=n[d++];)f(g,v,s,a);if(i){if(p>0)for(;h--;)g[h]||v[h]||(v[h]=J.call(l));
v=m(v)}Q.apply(l,v),u&&!i&&v.length>0&&p+n.length>1&&e.uniqueSort(l)}return u&&(M=x,$=y),g};return o?i(s):s}var x,w,T,C,E,k,S,N,$,A,D,L,j,O,I,H,R,F,_,q="sizzle"+1*new Date,P=t.document,M=0,W=0,B=n(),z=n(),U=n(),X=function(t,e){
return t===e&&(D=!0),0},V=1<<31,Y={}.hasOwnProperty,G=[],J=G.pop,K=G.push,Q=G.push,Z=G.slice,tt=function(t,e){for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n;
return-1},et="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",nt="[\\x20\\t\\r\\n\\f]",it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ot="\\["+nt+"*("+it+")(?:"+nt+"*([*^$|!~]?=)"+nt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+it+"))|)"+nt+"*\\]",rt=":("+it+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ot+")*)|.*)\\)|)",st=new RegExp(nt+"+","g"),at=new RegExp("^"+nt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+nt+"+$","g"),lt=new RegExp("^"+nt+"*,"+nt+"*"),ut=new RegExp("^"+nt+"*([>+~]|"+nt+")"+nt+"*"),ct=new RegExp("="+nt+"*([^\\]'\"]*?)"+nt+"*\\]","g"),dt=new RegExp(rt),ft=new RegExp("^"+it+"$"),pt={
ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it+"|[*])"),ATTR:new RegExp("^"+ot),PSEUDO:new RegExp("^"+rt),
CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+nt+"*(even|odd|(([+-]|)(\\d*)n|)"+nt+"*(?:([+-]|)"+nt+"*(\\d+)|))"+nt+"*\\)|)","i"),
bool:new RegExp("^(?:"+et+")$","i"),needsContext:new RegExp("^"+nt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+nt+"*((?:-\\d)?\\d*)"+nt+"*\\)|)(?=[^-]|$)","i")
},ht=/^(?:input|select|textarea|button)$/i,gt=/^h\d$/i,mt=/^[^{]+\{\s*\[native \w/,vt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,yt=/[+~]/,bt=/'|\\/g,xt=new RegExp("\\\\([\\da-f]{1,6}"+nt+"?|("+nt+")|.)","ig"),wt=function(t,e,n){
var i="0x"+e-65536;return i!==i||n?e:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},Tt=function(){
L()};try{Q.apply(G=Z.call(P.childNodes),P.childNodes),G[P.childNodes.length].nodeType}catch(t){Q={apply:G.length?function(t,e){K.apply(t,Z.call(e));
}:function(t,e){for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}w=e.support={},E=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;
return!!e&&"HTML"!==e.nodeName},L=e.setDocument=function(t){var e,n,i=t?t.ownerDocument||t:P;return i!==j&&9===i.nodeType&&i.documentElement?(j=i,
O=j.documentElement,I=!E(j),(n=j.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Tt,!1):n.attachEvent&&n.attachEvent("onunload",Tt)),
w.attributes=o(function(t){return t.className="i",!t.getAttribute("className")}),w.getElementsByTagName=o(function(t){return t.appendChild(j.createComment("")),
!t.getElementsByTagName("*").length}),w.getElementsByClassName=mt.test(j.getElementsByClassName),w.getById=o(function(t){return O.appendChild(t).id=q,
!j.getElementsByName||!j.getElementsByName(q).length}),w.getById?(T.find.ID=function(t,e){if("undefined"!=typeof e.getElementById&&I){
var n=e.getElementById(t);return n?[n]:[]}},T.filter.ID=function(t){var e=t.replace(xt,wt);return function(t){return t.getAttribute("id")===e;
}}):(delete T.find.ID,T.filter.ID=function(t){var e=t.replace(xt,wt);return function(t){var n="undefined"!=typeof t.getAttributeNode&&t.getAttributeNode("id");
return n&&n.value===e}}),T.find.TAG=w.getElementsByTagName?function(t,e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t):w.qsa?e.querySelectorAll(t):void 0;
}:function(t,e){var n,i=[],o=0,r=e.getElementsByTagName(t);if("*"===t){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i}return r;
},T.find.CLASS=w.getElementsByClassName&&function(t,e){if("undefined"!=typeof e.getElementsByClassName&&I)return e.getElementsByClassName(t);
},R=[],H=[],(w.qsa=mt.test(j.querySelectorAll))&&(o(function(t){O.appendChild(t).innerHTML="<a id='"+q+"'></a><select id='"+q+"-\r\\' msallowcapture=''><option selected=''></option></select>",
t.querySelectorAll("[msallowcapture^='']").length&&H.push("[*^$]="+nt+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||H.push("\\["+nt+"*(?:value|"+et+")"),
t.querySelectorAll("[id~="+q+"-]").length||H.push("~="),t.querySelectorAll(":checked").length||H.push(":checked"),t.querySelectorAll("a#"+q+"+*").length||H.push(".#.+[+~]");
}),o(function(t){var e=j.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&H.push("name"+nt+"*[*^$|!~]?="),
t.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),H.push(",.*:")})),(w.matchesSelector=mt.test(F=O.matches||O.webkitMatchesSelector||O.mozMatchesSelector||O.oMatchesSelector||O.msMatchesSelector))&&o(function(t){
w.disconnectedMatch=F.call(t,"div"),F.call(t,"[s!='']:x"),R.push("!=",rt)}),H=H.length&&new RegExp(H.join("|")),R=R.length&&new RegExp(R.join("|")),
e=mt.test(O.compareDocumentPosition),_=e||mt.test(O.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;
return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){
if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},X=e?function(t,e){if(t===e)return D=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;
return n?n:(n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&n||!w.sortDetached&&e.compareDocumentPosition(t)===n?t===j||t.ownerDocument===P&&_(P,t)?-1:e===j||e.ownerDocument===P&&_(P,e)?1:A?tt(A,t)-tt(A,e):0:4&n?-1:1);
}:function(t,e){if(t===e)return D=!0,0;var n,i=0,o=t.parentNode,r=e.parentNode,a=[t],l=[e];if(!o||!r)return t===j?-1:e===j?1:o?-1:r?1:A?tt(A,t)-tt(A,e):0;
if(o===r)return s(t,e);for(n=t;n=n.parentNode;)a.unshift(n);for(n=e;n=n.parentNode;)l.unshift(n);for(;a[i]===l[i];)i++;return i?s(a[i],l[i]):a[i]===P?-1:l[i]===P?1:0;
},j):j},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==j&&L(t),n=n.replace(ct,"='$1']"),
w.matchesSelector&&I&&!U[n+" "]&&(!R||!R.test(n))&&(!H||!H.test(n)))try{var i=F.call(t,n);if(i||w.disconnectedMatch||t.document&&11!==t.document.nodeType)return i;
}catch(t){}return e(n,j,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==j&&L(t),_(t,e)},e.attr=function(t,e){
(t.ownerDocument||t)!==j&&L(t);var n=T.attrHandle[e.toLowerCase()],i=n&&Y.call(T.attrHandle,e.toLowerCase())?n(t,e,!I):void 0;return void 0!==i?i:w.attributes||!I?t.getAttribute(e):(i=t.getAttributeNode(e))&&i.specified?i.value:null;
},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,n=[],i=0,o=0;if(D=!w.detectDuplicates,
A=!w.sortStable&&t.slice(0),t.sort(X),D){for(;e=t[o++];)e===t[o]&&(i=n.push(o));for(;i--;)t.splice(n[i],1)}return A=null,t},C=e.getText=function(t){
var e,n="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=C(t);
}else if(3===o||4===o)return t.nodeValue}else for(;e=t[i++];)n+=C(e);return n},T=e.selectors={cacheLength:50,createPseudo:i,match:pt,
attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{
dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(xt,wt),t[3]=(t[3]||t[4]||t[5]||"").replace(xt,wt),"~="===t[2]&&(t[3]=" "+t[3]+" "),
t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),
t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return pt.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&dt.test(n)&&(e=k(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),
t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(xt,wt).toLowerCase();return"*"===t?function(){return!0;
}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=B[t+" "];return e||(e=new RegExp("(^|"+nt+")"+t+"("+nt+"|$)"))&&B(t,function(t){
return e.test("string"==typeof t.className&&t.className||"undefined"!=typeof t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,n,i){
return function(o){var r=e.attr(o,t);return null==r?"!="===n:!n||(r+="","="===n?r===i:"!="===n?r!==i:"^="===n?i&&0===r.indexOf(i):"*="===n?i&&r.indexOf(i)>-1:"$="===n?i&&r.slice(-i.length)===i:"~="===n?(" "+r.replace(st," ")+" ").indexOf(i)>-1:"|="===n&&(r===i||r.slice(0,i.length+1)===i+"-"));
}},CHILD:function(t,e,n,i,o){var r="nth"!==t.slice(0,3),s="last"!==t.slice(-4),a="of-type"===e;return 1===i&&0===o?function(t){return!!t.parentNode;
}:function(e,n,l){var u,c,d,f,p,h,g=r!==s?"nextSibling":"previousSibling",m=e.parentNode,v=a&&e.nodeName.toLowerCase(),y=!l&&!a,b=!1;
if(m){if(r){for(;g;){for(f=e;f=f[g];)if(a?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;h=g="only"===t&&!h&&"nextSibling"}
return!0}if(h=[s?m.firstChild:m.lastChild],s&&y){for(f=m,d=f[q]||(f[q]={}),c=d[f.uniqueID]||(d[f.uniqueID]={}),u=c[t]||[],p=u[0]===M&&u[1],
b=p&&u[2],f=p&&m.childNodes[p];f=++p&&f&&f[g]||(b=p=0)||h.pop();)if(1===f.nodeType&&++b&&f===e){c[t]=[M,p,b];break}}else if(y&&(f=e,
d=f[q]||(f[q]={}),c=d[f.uniqueID]||(d[f.uniqueID]={}),u=c[t]||[],p=u[0]===M&&u[1],b=p),b===!1)for(;(f=++p&&f&&f[g]||(b=p=0)||h.pop())&&((a?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++b||(y&&(d=f[q]||(f[q]={}),
c=d[f.uniqueID]||(d[f.uniqueID]={}),c[t]=[M,b]),f!==e)););return b-=o,b===i||b%i===0&&b/i>=0}}},PSEUDO:function(t,n){var o,r=T.pseudos[t]||T.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);
return r[q]?r(n):r.length>1?(o=[t,t,"",n],T.setFilters.hasOwnProperty(t.toLowerCase())?i(function(t,e){for(var i,o=r(t,n),s=o.length;s--;)i=tt(t,o[s]),
t[i]=!(e[i]=o[s])}):function(t){return r(t,0,o)}):r}},pseudos:{not:i(function(t){var e=[],n=[],o=S(t.replace(at,"$1"));return o[q]?i(function(t,e,n,i){
for(var r,s=o(t,null,i,[]),a=t.length;a--;)(r=s[a])&&(t[a]=!(e[a]=r))}):function(t,i,r){return e[0]=t,o(e,null,r,n),e[0]=null,!n.pop();
}}),has:i(function(t){return function(n){return e(t,n).length>0}}),contains:i(function(t){return t=t.replace(xt,wt),function(e){return(e.textContent||e.innerText||C(e)).indexOf(t)>-1;
}}),lang:i(function(t){return ft.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(xt,wt).toLowerCase(),function(e){var n;do if(n=I?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),
n===t||0===n.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;
return n&&n.slice(1)===e.id},root:function(t){return t===O},focus:function(t){return t===j.activeElement&&(!j.hasFocus||j.hasFocus())&&!!(t.type||t.href||~t.tabIndex);
},enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0},checked:function(t){var e=t.nodeName.toLowerCase();
return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,
t.selected===!0},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!T.pseudos.empty(t);
},header:function(t){return gt.test(t.nodeName)},input:function(t){return ht.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();
return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase());
},first:u(function(){return[0]}),last:u(function(t,e){return[e-1]}),eq:u(function(t,e,n){return[n<0?n+e:n]}),even:u(function(t,e){
for(var n=0;n<e;n+=2)t.push(n);return t}),odd:u(function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t}),lt:u(function(t,e,n){for(var i=n<0?n+e:n;--i>=0;)t.push(i);
return t}),gt:u(function(t,e,n){for(var i=n<0?n+e:n;++i<e;)t.push(i);return t})}},T.pseudos.nth=T.pseudos.eq;for(x in{radio:!0,checkbox:!0,
file:!0,password:!0,image:!0})T.pseudos[x]=a(x);for(x in{submit:!0,reset:!0})T.pseudos[x]=l(x);return d.prototype=T.filters=T.pseudos,
T.setFilters=new d,k=e.tokenize=function(t,n){var i,o,r,s,a,l,u,c=z[t+" "];if(c)return n?0:c.slice(0);for(a=t,l=[],u=T.preFilter;a;){
i&&!(o=lt.exec(a))||(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),i=!1,(o=ut.exec(a))&&(i=o.shift(),r.push({value:i,type:o[0].replace(at," ")
}),a=a.slice(i.length));for(s in T.filter)!(o=pt[s].exec(a))||u[s]&&!(o=u[s](o))||(i=o.shift(),r.push({value:i,type:s,matches:o}),
a=a.slice(i.length));if(!i)break}return n?a.length:a?e.error(t):z(t,l).slice(0)},S=e.compile=function(t,e){var n,i=[],o=[],r=U[t+" "];
if(!r){for(e||(e=k(t)),n=e.length;n--;)r=y(e[n]),r[q]?i.push(r):o.push(r);r=U(t,b(o,i)),r.selector=t}return r},N=e.select=function(t,e,n,i){
var o,r,s,a,l,u="function"==typeof t&&t,d=!i&&k(t=u.selector||t);if(n=n||[],1===d.length){if(r=d[0]=d[0].slice(0),r.length>2&&"ID"===(s=r[0]).type&&w.getById&&9===e.nodeType&&I&&T.relative[r[1].type]){
if(e=(T.find.ID(s.matches[0].replace(xt,wt),e)||[])[0],!e)return n;u&&(e=e.parentNode),t=t.slice(r.shift().value.length)}for(o=pt.needsContext.test(t)?0:r.length;o--&&(s=r[o],
!T.relative[a=s.type]);)if((l=T.find[a])&&(i=l(s.matches[0].replace(xt,wt),yt.test(r[0].type)&&c(e.parentNode)||e))){if(r.splice(o,1),
t=i.length&&f(r),!t)return Q.apply(n,i),n;break}}return(u||S(t,d))(i,e,!I,n,!e||yt.test(t)&&c(e.parentNode)||e),n},w.sortStable=q.split("").sort(X).join("")===q,
w.detectDuplicates=!!D,L(),w.sortDetached=o(function(t){return 1&t.compareDocumentPosition(j.createElement("div"))}),o(function(t){
return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||r("type|href|height|width",function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2);
}),w.attributes&&o(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value");
})||r("value",function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),o(function(t){return null==t.getAttribute("disabled");
})||r(et,function(t,e,n){var i;if(!n)return t[e]===!0?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null}),e}(n);
vt.find=Tt,vt.expr=Tt.selectors,vt.expr[":"]=vt.expr.pseudos,vt.uniqueSort=vt.unique=Tt.uniqueSort,vt.text=Tt.getText,vt.isXMLDoc=Tt.isXML,
vt.contains=Tt.contains;var Ct=function(t,e,n){for(var i=[],o=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(o&&vt(t).is(n))break;
i.push(t)}return i},Et=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},kt=vt.expr.match.needsContext,St=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Nt=/^.[^:#\[\.,]*$/;
vt.filter=function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?vt.find.matchesSelector(i,t)?[i]:[]:vt.find.matches(t,vt.grep(e,function(t){
return 1===t.nodeType}))},vt.fn.extend({find:function(t){var e,n=[],i=this,o=i.length;if("string"!=typeof t)return this.pushStack(vt(t).filter(function(){
for(e=0;e<o;e++)if(vt.contains(i[e],this))return!0}));for(e=0;e<o;e++)vt.find(t,i[e],n);return n=this.pushStack(o>1?vt.unique(n):n),
n.selector=this.selector?this.selector+" "+t:t,n},filter:function(t){return this.pushStack(a(this,t||[],!1))},not:function(t){return this.pushStack(a(this,t||[],!0));
},is:function(t){return!!a(this,"string"==typeof t&&kt.test(t)?vt(t):t||[],!1).length}});var $t,At=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,Dt=vt.fn.init=function(t,e,n){
var i,o;if(!t)return this;if(n=n||$t,"string"==typeof t){if(i="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:At.exec(t),
!i||!i[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);if(i[1]){if(e=e instanceof vt?e[0]:e,vt.merge(this,vt.parseHTML(i[1],e&&e.nodeType?e.ownerDocument||e:at,!0)),
St.test(i[1])&&vt.isPlainObject(e))for(i in e)vt.isFunction(this[i])?this[i](e[i]):this.attr(i,e[i]);return this}if(o=at.getElementById(i[2]),
o&&o.parentNode){if(o.id!==i[2])return $t.find(t);this.length=1,this[0]=o}return this.context=at,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,
this.length=1,this):vt.isFunction(t)?"undefined"!=typeof n.ready?n.ready(t):t(vt):(void 0!==t.selector&&(this.selector=t.selector,
this.context=t.context),vt.makeArray(t,this))};Dt.prototype=vt.fn,$t=vt(at);var Lt=/^(?:parents|prev(?:Until|All))/,jt={children:!0,
contents:!0,next:!0,prev:!0};vt.fn.extend({has:function(t){var e,n=vt(t,this),i=n.length;return this.filter(function(){for(e=0;e<i;e++)if(vt.contains(this,n[e]))return!0;
})},closest:function(t,e){for(var n,i=0,o=this.length,r=[],s=kt.test(t)||"string"!=typeof t?vt(t,e||this.context):0;i<o;i++)for(n=this[i];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&vt.find.matchesSelector(n,t))){
r.push(n);break}return this.pushStack(r.length>1?vt.uniqueSort(r):r)},index:function(t){return t?"string"==typeof t?vt.inArray(this[0],vt(t)):vt.inArray(t.jquery?t[0]:t,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1;
},add:function(t,e){return this.pushStack(vt.uniqueSort(vt.merge(this.get(),vt(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t));
}}),vt.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return Ct(t,"parentNode");
},parentsUntil:function(t,e,n){return Ct(t,"parentNode",n)},next:function(t){return l(t,"nextSibling")},prev:function(t){return l(t,"previousSibling");
},nextAll:function(t){return Ct(t,"nextSibling")},prevAll:function(t){return Ct(t,"previousSibling")},nextUntil:function(t,e,n){return Ct(t,"nextSibling",n);
},prevUntil:function(t,e,n){return Ct(t,"previousSibling",n)},siblings:function(t){return Et((t.parentNode||{}).firstChild,t)},children:function(t){
return Et(t.firstChild)},contents:function(t){return vt.nodeName(t,"iframe")?t.contentDocument||t.contentWindow.document:vt.merge([],t.childNodes);
}},function(t,e){vt.fn[t]=function(n,i){var o=vt.map(this,e,n);return"Until"!==t.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=vt.filter(i,o)),
this.length>1&&(jt[t]||(o=vt.uniqueSort(o)),Lt.test(t)&&(o=o.reverse())),this.pushStack(o)}});var Ot=/\S+/g;vt.Callbacks=function(t){
t="string"==typeof t?u(t):vt.extend({},t);var e,n,i,o,r=[],s=[],a=-1,l=function(){for(o=t.once,i=e=!0;s.length;a=-1)for(n=s.shift();++a<r.length;)r[a].apply(n[0],n[1])===!1&&t.stopOnFalse&&(a=r.length,
n=!1);t.memory||(n=!1),e=!1,o&&(r=n?[]:"")},c={add:function(){return r&&(n&&!e&&(a=r.length-1,s.push(n)),function e(n){vt.each(n,function(n,i){
vt.isFunction(i)?t.unique&&c.has(i)||r.push(i):i&&i.length&&"string"!==vt.type(i)&&e(i)})}(arguments),n&&!e&&l()),this},remove:function(){
return vt.each(arguments,function(t,e){for(var n;(n=vt.inArray(e,r,n))>-1;)r.splice(n,1),n<=a&&a--}),this},has:function(t){return t?vt.inArray(t,r)>-1:r.length>0;
},empty:function(){return r&&(r=[]),this},disable:function(){return o=s=[],r=n="",this},disabled:function(){return!r},lock:function(){
return o=!0,n||c.disable(),this},locked:function(){return!!o},fireWith:function(t,n){return o||(n=n||[],n=[t,n.slice?n.slice():n],
s.push(n),e||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!i}};return c},vt.extend({
Deferred:function(t){var e=[["resolve","done",vt.Callbacks("once memory"),"resolved"],["reject","fail",vt.Callbacks("once memory"),"rejected"],["notify","progress",vt.Callbacks("memory")]],n="pending",i={
state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var t=arguments;return vt.Deferred(function(n){
vt.each(e,function(e,r){var s=vt.isFunction(t[e])&&t[e];o[r[1]](function(){var t=s&&s.apply(this,arguments);t&&vt.isFunction(t.promise)?t.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this===i?n.promise():this,s?[t]:arguments);
})}),t=null}).promise()},promise:function(t){return null!=t?vt.extend(t,i):i}},o={};return i.pipe=i.then,vt.each(e,function(t,r){
var s=r[2],a=r[3];i[r[1]]=s.add,a&&s.add(function(){n=a},e[1^t][2].disable,e[2][2].lock),o[r[0]]=function(){return o[r[0]+"With"](this===o?i:this,arguments),
this},o[r[0]+"With"]=s.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(t){var e,n,i,o=0,r=lt.call(arguments),s=r.length,a=1!==s||t&&vt.isFunction(t.promise)?s:0,l=1===a?t:vt.Deferred(),u=function(t,n,i){
return function(o){n[t]=this,i[t]=arguments.length>1?lt.call(arguments):o,i===e?l.notifyWith(n,i):--a||l.resolveWith(n,i)}};if(s>1)for(e=new Array(s),
n=new Array(s),i=new Array(s);o<s;o++)r[o]&&vt.isFunction(r[o].promise)?r[o].promise().progress(u(o,n,e)).done(u(o,i,r)).fail(l.reject):--a;
return a||l.resolveWith(i,r),l.promise()}});var It;vt.fn.ready=function(t){return vt.ready.promise().done(t),this},vt.extend({isReady:!1,
readyWait:1,holdReady:function(t){t?vt.readyWait++:vt.ready(!0)},ready:function(t){(t===!0?--vt.readyWait:vt.isReady)||(vt.isReady=!0,
t!==!0&&--vt.readyWait>0||(It.resolveWith(at,[vt]),vt.fn.triggerHandler&&(vt(at).triggerHandler("ready"),vt(at).off("ready"))))}}),
vt.ready.promise=function(t){if(!It)if(It=vt.Deferred(),"complete"===at.readyState||"loading"!==at.readyState&&!at.documentElement.doScroll)n.setTimeout(vt.ready);else if(at.addEventListener)at.addEventListener("DOMContentLoaded",d),
n.addEventListener("load",d);else{at.attachEvent("onreadystatechange",d),n.attachEvent("onload",d);var e=!1;try{e=null==n.frameElement&&at.documentElement;
}catch(t){}e&&e.doScroll&&!function t(){if(!vt.isReady){try{e.doScroll("left")}catch(e){return n.setTimeout(t,50)}c(),vt.ready()}
}()}return It.promise(t)},vt.ready.promise();var Ht;for(Ht in vt(gt))break;gt.ownFirst="0"===Ht,gt.inlineBlockNeedsLayout=!1,vt(function(){
var t,e,n,i;n=at.getElementsByTagName("body")[0],n&&n.style&&(e=at.createElement("div"),i=at.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
n.appendChild(i).appendChild(e),"undefined"!=typeof e.style.zoom&&(e.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
gt.inlineBlockNeedsLayout=t=3===e.offsetWidth,t&&(n.style.zoom=1)),n.removeChild(i))}),function(){var t=at.createElement("div");gt.deleteExpando=!0;
try{delete t.test}catch(t){gt.deleteExpando=!1}t=null}();var Rt=function(t){var e=vt.noData[(t.nodeName+" ").toLowerCase()],n=+t.nodeType||1;
return(1===n||9===n)&&(!e||e!==!0&&t.getAttribute("classid")===e)},Ft=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,_t=/([A-Z])/g;vt.extend({cache:{},
noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(t){return t=t.nodeType?vt.cache[t[vt.expando]]:t[vt.expando],
!!t&&!p(t)},data:function(t,e,n){return h(t,e,n)},removeData:function(t,e){return g(t,e)},_data:function(t,e,n){return h(t,e,n,!0);
},_removeData:function(t,e){return g(t,e,!0)}}),vt.fn.extend({data:function(t,e){var n,i,o,r=this[0],s=r&&r.attributes;if(void 0===t){
if(this.length&&(o=vt.data(r),1===r.nodeType&&!vt._data(r,"parsedAttrs"))){for(n=s.length;n--;)s[n]&&(i=s[n].name,0===i.indexOf("data-")&&(i=vt.camelCase(i.slice(5)),
f(r,i,o[i])));vt._data(r,"parsedAttrs",!0)}return o}return"object"==typeof t?this.each(function(){vt.data(this,t)}):arguments.length>1?this.each(function(){
vt.data(this,t,e)}):r?f(r,t,vt.data(r,t)):void 0},removeData:function(t){return this.each(function(){vt.removeData(this,t)})}}),vt.extend({
queue:function(t,e,n){var i;if(t)return e=(e||"fx")+"queue",i=vt._data(t,e),n&&(!i||vt.isArray(n)?i=vt._data(t,e,vt.makeArray(n)):i.push(n)),
i||[]},dequeue:function(t,e){e=e||"fx";var n=vt.queue(t,e),i=n.length,o=n.shift(),r=vt._queueHooks(t,e),s=function(){vt.dequeue(t,e);
};"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===e&&n.unshift("inprogress"),delete r.stop,o.call(t,s,r)),!i&&r&&r.empty.fire()},_queueHooks:function(t,e){
var n=e+"queueHooks";return vt._data(t,n)||vt._data(t,n,{empty:vt.Callbacks("once memory").add(function(){vt._removeData(t,e+"queue"),
vt._removeData(t,n)})})}}),vt.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?vt.queue(this[0],t):void 0===e?this:this.each(function(){
var n=vt.queue(this,t,e);vt._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&vt.dequeue(this,t)})},dequeue:function(t){return this.each(function(){
vt.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,i=1,o=vt.Deferred(),r=this,s=this.length,a=function(){
--i||o.resolveWith(r,[r])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";s--;)n=vt._data(r[s],t+"queueHooks"),n&&n.empty&&(i++,
n.empty.add(a));return a(),o.promise(e)}}),function(){var t;gt.shrinkWrapBlocks=function(){if(null!=t)return t;t=!1;var e,n,i;return n=at.getElementsByTagName("body")[0],
n&&n.style?(e=at.createElement("div"),i=at.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
n.appendChild(i).appendChild(e),"undefined"!=typeof e.style.zoom&&(e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
e.appendChild(at.createElement("div")).style.width="5px",t=3!==e.offsetWidth),n.removeChild(i),t):void 0}}();var qt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Pt=new RegExp("^(?:([+-])=|)("+qt+")([a-z%]*)$","i"),Mt=["Top","Right","Bottom","Left"],Wt=function(t,e){
return t=e||t,"none"===vt.css(t,"display")||!vt.contains(t.ownerDocument,t)},Bt=function(t,e,n,i,o,r,s){var a=0,l=t.length,u=null==n;
if("object"===vt.type(n)){o=!0;for(a in n)Bt(t,e,a,n[a],!0,r,s)}else if(void 0!==i&&(o=!0,vt.isFunction(i)||(s=!0),u&&(s?(e.call(t,i),
e=null):(u=e,e=function(t,e,n){return u.call(vt(t),n)})),e))for(;a<l;a++)e(t[a],n,s?i:i.call(t[a],a,e(t[a],n)));return o?t:u?e.call(t):l?e(t[0],n):r;
},zt=/^(?:checkbox|radio)$/i,Ut=/<([\w:-]+)/,Xt=/^$|\/(?:java|ecma)script/i,Vt=/^\s+/,Yt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
!function(){var t=at.createElement("div"),e=at.createDocumentFragment(),n=at.createElement("input");t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
gt.leadingWhitespace=3===t.firstChild.nodeType,gt.tbody=!t.getElementsByTagName("tbody").length,gt.htmlSerialize=!!t.getElementsByTagName("link").length,
gt.html5Clone="<:nav></:nav>"!==at.createElement("nav").cloneNode(!0).outerHTML,n.type="checkbox",n.checked=!0,e.appendChild(n),gt.appendChecked=n.checked,
t.innerHTML="<textarea>x</textarea>",gt.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,e.appendChild(t),n=at.createElement("input"),
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),gt.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,
gt.noCloneEvent=!!t.addEventListener,t[vt.expando]=1,gt.attributes=!t.getAttribute(vt.expando)}();var Gt={option:[1,"<select multiple='multiple'>","</select>"],
legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],
col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:gt.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]
};Gt.optgroup=Gt.option,Gt.tbody=Gt.tfoot=Gt.colgroup=Gt.caption=Gt.thead,Gt.th=Gt.td;var Jt=/<|&#?\w+;/,Kt=/<tbody/i;!function(){
var t,e,i=at.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})e="on"+t,(gt[t]=e in n)||(i.setAttribute(e,"t"),gt[t]=i.attributes[e].expando===!1);
i=null}();var Qt=/^(?:input|select|textarea)$/i,Zt=/^key/,te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ee=/^(?:focusinfocus|focusoutblur)$/,ne=/^([^.]*)(?:\.(.+)|)/;
vt.event={global:{},add:function(t,e,n,i,o){var r,s,a,l,u,c,d,f,p,h,g,m=vt._data(t);if(m){for(n.handler&&(l=n,n=l.handler,o=l.selector),
n.guid||(n.guid=vt.guid++),(s=m.events)||(s=m.events={}),(c=m.handle)||(c=m.handle=function(t){return"undefined"==typeof vt||t&&vt.event.triggered===t.type?void 0:vt.event.dispatch.apply(c.elem,arguments);
},c.elem=t),e=(e||"").match(Ot)||[""],a=e.length;a--;)r=ne.exec(e[a])||[],p=g=r[1],h=(r[2]||"").split(".").sort(),p&&(u=vt.event.special[p]||{},
p=(o?u.delegateType:u.bindType)||p,u=vt.event.special[p]||{},d=vt.extend({type:p,origType:g,data:i,handler:n,guid:n.guid,selector:o,
needsContext:o&&vt.expr.match.needsContext.test(o),namespace:h.join(".")},l),(f=s[p])||(f=s[p]=[],f.delegateCount=0,u.setup&&u.setup.call(t,i,h,c)!==!1||(t.addEventListener?t.addEventListener(p,c,!1):t.attachEvent&&t.attachEvent("on"+p,c))),
u.add&&(u.add.call(t,d),d.handler.guid||(d.handler.guid=n.guid)),o?f.splice(f.delegateCount++,0,d):f.push(d),vt.event.global[p]=!0);
t=null}},remove:function(t,e,n,i,o){var r,s,a,l,u,c,d,f,p,h,g,m=vt.hasData(t)&&vt._data(t);if(m&&(c=m.events)){for(e=(e||"").match(Ot)||[""],
u=e.length;u--;)if(a=ne.exec(e[u])||[],p=g=a[1],h=(a[2]||"").split(".").sort(),p){for(d=vt.event.special[p]||{},p=(i?d.delegateType:d.bindType)||p,
f=c[p]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=r=f.length;r--;)s=f[r],!o&&g!==s.origType||n&&n.guid!==s.guid||a&&!a.test(s.namespace)||i&&i!==s.selector&&("**"!==i||!s.selector)||(f.splice(r,1),
s.selector&&f.delegateCount--,d.remove&&d.remove.call(t,s));l&&!f.length&&(d.teardown&&d.teardown.call(t,h,m.handle)!==!1||vt.removeEvent(t,p,m.handle),
delete c[p])}else for(p in c)vt.event.remove(t,p+e[u],n,i,!0);vt.isEmptyObject(c)&&(delete m.handle,vt._removeData(t,"events"))}},
trigger:function(t,e,i,o){var r,s,a,l,u,c,d,f=[i||at],p=ht.call(t,"type")?t.type:t,h=ht.call(t,"namespace")?t.namespace.split("."):[];
if(a=c=i=i||at,3!==i.nodeType&&8!==i.nodeType&&!ee.test(p+vt.event.triggered)&&(p.indexOf(".")>-1&&(h=p.split("."),p=h.shift(),h.sort()),
s=p.indexOf(":")<0&&"on"+p,t=t[vt.expando]?t:new vt.Event(p,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
t.result=void 0,t.target||(t.target=i),e=null==e?[t]:vt.makeArray(e,[t]),u=vt.event.special[p]||{},o||!u.trigger||u.trigger.apply(i,e)!==!1)){
if(!o&&!u.noBubble&&!vt.isWindow(i)){for(l=u.delegateType||p,ee.test(l+p)||(a=a.parentNode);a;a=a.parentNode)f.push(a),c=a;c===(i.ownerDocument||at)&&f.push(c.defaultView||c.parentWindow||n);
}for(d=0;(a=f[d++])&&!t.isPropagationStopped();)t.type=d>1?l:u.bindType||p,r=(vt._data(a,"events")||{})[t.type]&&vt._data(a,"handle"),
r&&r.apply(a,e),r=s&&a[s],r&&r.apply&&Rt(a)&&(t.result=r.apply(a,e),t.result===!1&&t.preventDefault());if(t.type=p,!o&&!t.isDefaultPrevented()&&(!u._default||u._default.apply(f.pop(),e)===!1)&&Rt(i)&&s&&i[p]&&!vt.isWindow(i)){
c=i[s],c&&(i[s]=null),vt.event.triggered=p;try{i[p]()}catch(t){}vt.event.triggered=void 0,c&&(i[s]=c)}return t.result}},dispatch:function(t){
t=vt.event.fix(t);var e,n,i,o,r,s=[],a=lt.call(arguments),l=(vt._data(this,"events")||{})[t.type]||[],u=vt.event.special[t.type]||{};
if(a[0]=t,t.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,t)!==!1){for(s=vt.event.handlers.call(this,t,l),e=0;(o=s[e++])&&!t.isPropagationStopped();)for(t.currentTarget=o.elem,
n=0;(r=o.handlers[n++])&&!t.isImmediatePropagationStopped();)t.rnamespace&&!t.rnamespace.test(r.namespace)||(t.handleObj=r,t.data=r.data,
i=((vt.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,a),void 0!==i&&(t.result=i)===!1&&(t.preventDefault(),t.stopPropagation()));
return u.postDispatch&&u.postDispatch.call(this,t),t.result}},handlers:function(t,e){var n,i,o,r,s=[],a=e.delegateCount,l=t.target;
if(a&&l.nodeType&&("click"!==t.type||isNaN(t.button)||t.button<1))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==t.type)){
for(i=[],n=0;n<a;n++)r=e[n],o=r.selector+" ",void 0===i[o]&&(i[o]=r.needsContext?vt(o,this).index(l)>-1:vt.find(o,this,null,[l]).length),
i[o]&&i.push(r);i.length&&s.push({elem:l,handlers:i})}return a<e.length&&s.push({elem:this,handlers:e.slice(a)}),s},fix:function(t){
if(t[vt.expando])return t;var e,n,i,o=t.type,r=t,s=this.fixHooks[o];for(s||(this.fixHooks[o]=s=te.test(o)?this.mouseHooks:Zt.test(o)?this.keyHooks:{}),
i=s.props?this.props.concat(s.props):this.props,t=new vt.Event(r),e=i.length;e--;)n=i[e],t[n]=r[n];return t.target||(t.target=r.srcElement||at),
3===t.target.nodeType&&(t.target=t.target.parentNode),t.metaKey=!!t.metaKey,s.filter?s.filter(t,r):t},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),
t}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
filter:function(t,e){var n,i,o,r=e.button,s=e.fromElement;return null==t.pageX&&null!=e.clientX&&(i=t.target.ownerDocument||at,o=i.documentElement,
n=i.body,t.pageX=e.clientX+(o&&o.scrollLeft||n&&n.scrollLeft||0)-(o&&o.clientLeft||n&&n.clientLeft||0),t.pageY=e.clientY+(o&&o.scrollTop||n&&n.scrollTop||0)-(o&&o.clientTop||n&&n.clientTop||0)),
!t.relatedTarget&&s&&(t.relatedTarget=s===t.target?e.toElement:s),t.which||void 0===r||(t.which=1&r?1:2&r?3:4&r?2:0),t}},special:{
load:{noBubble:!0},focus:{trigger:function(){if(this!==E()&&this.focus)try{return this.focus(),!1}catch(t){}},delegateType:"focusin"
},blur:{trigger:function(){if(this===E()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(vt.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),
!1},_default:function(t){return vt.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result);
}}},simulate:function(t,e,n){var i=vt.extend(new vt.Event,n,{type:t,isSimulated:!0});vt.event.trigger(i,null,e),i.isDefaultPrevented()&&n.preventDefault();
}},vt.removeEvent=at.removeEventListener?function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)}:function(t,e,n){var i="on"+e;
t.detachEvent&&("undefined"==typeof t[i]&&(t[i]=null),t.detachEvent(i,n))},vt.Event=function(t,e){return this instanceof vt.Event?(t&&t.type?(this.originalEvent=t,
this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&t.returnValue===!1?T:C):this.type=t,e&&vt.extend(this,e),
this.timeStamp=t&&t.timeStamp||vt.now(),void(this[vt.expando]=!0)):new vt.Event(t,e)},vt.Event.prototype={constructor:vt.Event,isDefaultPrevented:C,
isPropagationStopped:C,isImmediatePropagationStopped:C,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=T,
t&&(t.preventDefault?t.preventDefault():t.returnValue=!1)},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=T,
t&&!this.isSimulated&&(t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0)},stopImmediatePropagation:function(){var t=this.originalEvent;
this.isImmediatePropagationStopped=T,t&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),this.stopPropagation()}},vt.each({
mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){vt.event.special[t]={
delegateType:e,bindType:e,handle:function(t){var n,i=this,o=t.relatedTarget,r=t.handleObj;return o&&(o===i||vt.contains(i,o))||(t.type=r.origType,
n=r.handler.apply(this,arguments),t.type=e),n}}}),gt.submit||(vt.event.special.submit={setup:function(){return!vt.nodeName(this,"form")&&void vt.event.add(this,"click._submit keypress._submit",function(t){
var e=t.target,n=vt.nodeName(e,"input")||vt.nodeName(e,"button")?vt.prop(e,"form"):void 0;n&&!vt._data(n,"submit")&&(vt.event.add(n,"submit._submit",function(t){
t._submitBubble=!0}),vt._data(n,"submit",!0))})},postDispatch:function(t){t._submitBubble&&(delete t._submitBubble,this.parentNode&&!t.isTrigger&&vt.event.simulate("submit",this.parentNode,t));
},teardown:function(){return!vt.nodeName(this,"form")&&void vt.event.remove(this,"._submit")}}),gt.change||(vt.event.special.change={
setup:function(){return Qt.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(vt.event.add(this,"propertychange._change",function(t){
"checked"===t.originalEvent.propertyName&&(this._justChanged=!0)}),vt.event.add(this,"click._change",function(t){this._justChanged&&!t.isTrigger&&(this._justChanged=!1),
vt.event.simulate("change",this,t)})),!1):void vt.event.add(this,"beforeactivate._change",function(t){var e=t.target;Qt.test(e.nodeName)&&!vt._data(e,"change")&&(vt.event.add(e,"change._change",function(t){
!this.parentNode||t.isSimulated||t.isTrigger||vt.event.simulate("change",this.parentNode,t)}),vt._data(e,"change",!0))})},handle:function(t){
var e=t.target;if(this!==e||t.isSimulated||t.isTrigger||"radio"!==e.type&&"checkbox"!==e.type)return t.handleObj.handler.apply(this,arguments);
},teardown:function(){return vt.event.remove(this,"._change"),!Qt.test(this.nodeName)}}),gt.focusin||vt.each({focus:"focusin",blur:"focusout"
},function(t,e){var n=function(t){vt.event.simulate(e,t.target,vt.event.fix(t))};vt.event.special[e]={setup:function(){var i=this.ownerDocument||this,o=vt._data(i,e);
o||i.addEventListener(t,n,!0),vt._data(i,e,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=vt._data(i,e)-1;o?vt._data(i,e,o):(i.removeEventListener(t,n,!0),
vt._removeData(i,e))}}}),vt.fn.extend({on:function(t,e,n,i){return k(this,t,e,n,i)},one:function(t,e,n,i){return k(this,t,e,n,i,1);
},off:function(t,e,n){var i,o;if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,vt(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),
this;if("object"==typeof t){for(o in t)this.off(o,e,t[o]);return this}return e!==!1&&"function"!=typeof e||(n=e,e=void 0),n===!1&&(n=C),
this.each(function(){vt.event.remove(this,t,n,e)})},trigger:function(t,e){return this.each(function(){vt.event.trigger(t,e,this)});
},triggerHandler:function(t,e){var n=this[0];if(n)return vt.event.trigger(t,e,n,!0)}});var ie=/ jQuery\d+="(?:null|\d+)"/g,oe=new RegExp("<(?:"+Yt+")[\\s/>]","i"),re=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,se=/<script|<style|<link/i,ae=/checked\s*(?:[^=]|=\s*.checked.)/i,le=/^true\/(.*)/,ue=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ce=v(at),de=ce.appendChild(at.createElement("div"));
vt.extend({htmlPrefilter:function(t){return t.replace(re,"<$1></$2>")},clone:function(t,e,n){var i,o,r,s,a,l=vt.contains(t.ownerDocument,t);
if(gt.html5Clone||vt.isXMLDoc(t)||!oe.test("<"+t.nodeName+">")?r=t.cloneNode(!0):(de.innerHTML=t.outerHTML,de.removeChild(r=de.firstChild)),
!(gt.noCloneEvent&&gt.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||vt.isXMLDoc(t)))for(i=y(r),a=y(t),s=0;null!=(o=a[s]);++s)i[s]&&D(o,i[s]);
if(e)if(n)for(a=a||y(t),i=i||y(r),s=0;null!=(o=a[s]);s++)A(o,i[s]);else A(t,r);return i=y(r,"script"),i.length>0&&b(i,!l&&y(t,"script")),
i=a=o=null,r},cleanData:function(t,e){for(var n,i,o,r,s=0,a=vt.expando,l=vt.cache,u=gt.attributes,c=vt.event.special;null!=(n=t[s]);s++)if((e||Rt(n))&&(o=n[a],
r=o&&l[o])){if(r.events)for(i in r.events)c[i]?vt.event.remove(n,i):vt.removeEvent(n,i,r.handle);l[o]&&(delete l[o],u||"undefined"==typeof n.removeAttribute?n[a]=void 0:n.removeAttribute(a),
st.push(o))}}}),vt.fn.extend({domManip:L,detach:function(t){return j(this,t,!0)},remove:function(t){return j(this,t)},text:function(t){
return Bt(this,function(t){return void 0===t?vt.text(this):this.empty().append((this[0]&&this[0].ownerDocument||at).createTextNode(t));
},null,t,arguments.length)},append:function(){return L(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){
var e=S(this,t);e.appendChild(t)}})},prepend:function(){return L(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){
var e=S(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return L(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this);
})},after:function(){return L(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){
for(var t,e=0;null!=(t=this[e]);e++){for(1===t.nodeType&&vt.cleanData(y(t,!1));t.firstChild;)t.removeChild(t.firstChild);t.options&&vt.nodeName(t,"select")&&(t.options.length=0);
}return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return vt.clone(this,t,e)})},html:function(t){
return Bt(this,function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t)return 1===e.nodeType?e.innerHTML.replace(ie,""):void 0;
if("string"==typeof t&&!se.test(t)&&(gt.htmlSerialize||!oe.test(t))&&(gt.leadingWhitespace||!Vt.test(t))&&!Gt[(Ut.exec(t)||["",""])[1].toLowerCase()]){
t=vt.htmlPrefilter(t);try{for(;n<i;n++)e=this[n]||{},1===e.nodeType&&(vt.cleanData(y(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t);
},null,t,arguments.length)},replaceWith:function(){var t=[];return L(this,arguments,function(e){var n=this.parentNode;vt.inArray(this,t)<0&&(vt.cleanData(y(this)),
n&&n.replaceChild(e,this))},t)}}),vt.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"
},function(t,e){vt.fn[t]=function(t){for(var n,i=0,o=[],r=vt(t),s=r.length-1;i<=s;i++)n=i===s?this:this.clone(!0),vt(r[i])[e](n),
ct.apply(o,n.get());return this.pushStack(o)}});var fe,pe={HTML:"block",BODY:"block"},he=/^margin/,ge=new RegExp("^("+qt+")(?!px)[a-z%]+$","i"),me=function(t,e,n,i){
var o,r,s={};for(r in e)s[r]=t.style[r],t.style[r]=e[r];o=n.apply(t,i||[]);for(r in e)t.style[r]=s[r];return o},ve=at.documentElement;
!function(){function t(){var t,c,d=at.documentElement;d.appendChild(l),u.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
e=o=a=!1,i=s=!0,n.getComputedStyle&&(c=n.getComputedStyle(u),e="1%"!==(c||{}).top,a="2px"===(c||{}).marginLeft,o="4px"===(c||{width:"4px"
}).width,u.style.marginRight="50%",i="4px"===(c||{marginRight:"4px"}).marginRight,t=u.appendChild(at.createElement("div")),t.style.cssText=u.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
t.style.marginRight=t.style.width="0",u.style.width="1px",s=!parseFloat((n.getComputedStyle(t)||{}).marginRight),u.removeChild(t)),
u.style.display="none",r=0===u.getClientRects().length,r&&(u.style.display="",u.innerHTML="<table><tr><td></td><td>t</td></tr></table>",
u.childNodes[0].style.borderCollapse="separate",t=u.getElementsByTagName("td"),t[0].style.cssText="margin:0;border:0;padding:0;display:none",
r=0===t[0].offsetHeight,r&&(t[0].style.display="",t[1].style.display="none",r=0===t[0].offsetHeight)),d.removeChild(l)}var e,i,o,r,s,a,l=at.createElement("div"),u=at.createElement("div");
u.style&&(u.style.cssText="float:left;opacity:.5",gt.opacity="0.5"===u.style.opacity,gt.cssFloat=!!u.style.cssFloat,u.style.backgroundClip="content-box",
u.cloneNode(!0).style.backgroundClip="",gt.clearCloneStyle="content-box"===u.style.backgroundClip,l=at.createElement("div"),l.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
u.innerHTML="",l.appendChild(u),gt.boxSizing=""===u.style.boxSizing||""===u.style.MozBoxSizing||""===u.style.WebkitBoxSizing,vt.extend(gt,{
reliableHiddenOffsets:function(){return null==e&&t(),r},boxSizingReliable:function(){return null==e&&t(),o},pixelMarginRight:function(){
return null==e&&t(),i},pixelPosition:function(){return null==e&&t(),e},reliableMarginRight:function(){return null==e&&t(),s},reliableMarginLeft:function(){
return null==e&&t(),a}}))}();var ye,be,xe=/^(top|right|bottom|left)$/;n.getComputedStyle?(ye=function(t){var e=t.ownerDocument.defaultView;
return e&&e.opener||(e=n),e.getComputedStyle(t)},be=function(t,e,n){var i,o,r,s,a=t.style;return n=n||ye(t),s=n?n.getPropertyValue(e)||n[e]:void 0,
""!==s&&void 0!==s||vt.contains(t.ownerDocument,t)||(s=vt.style(t,e)),n&&!gt.pixelMarginRight()&&ge.test(s)&&he.test(e)&&(i=a.width,
o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r),void 0===s?s:s+""}):ve.currentStyle&&(ye=function(t){
return t.currentStyle},be=function(t,e,n){var i,o,r,s,a=t.style;return n=n||ye(t),s=n?n[e]:void 0,null==s&&a&&a[e]&&(s=a[e]),ge.test(s)&&!xe.test(e)&&(i=a.left,
o=t.runtimeStyle,r=o&&o.left,r&&(o.left=t.currentStyle.left),a.left="fontSize"===e?"1em":s,s=a.pixelLeft+"px",a.left=i,r&&(o.left=r)),
void 0===s?s:s+""||"auto"});var we=/alpha\([^)]*\)/i,Te=/opacity\s*=\s*([^)]*)/i,Ce=/^(none|table(?!-c[ea]).+)/,Ee=new RegExp("^("+qt+")(.*)$","i"),ke={
position:"absolute",visibility:"hidden",display:"block"},Se={letterSpacing:"0",fontWeight:"400"},Ne=["Webkit","O","Moz","ms"],$e=at.createElement("div").style;
vt.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=be(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,
columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,
zoom:!0},cssProps:{float:gt.cssFloat?"cssFloat":"styleFloat"},style:function(t,e,n,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){
var o,r,s,a=vt.camelCase(e),l=t.style;if(e=vt.cssProps[a]||(vt.cssProps[a]=R(a)||a),s=vt.cssHooks[e]||vt.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(o=s.get(t,!1,i))?o:l[e];
if(r=typeof n,"string"===r&&(o=Pt.exec(n))&&o[1]&&(n=m(t,e,o),r="number"),null!=n&&n===n&&("number"===r&&(n+=o&&o[3]||(vt.cssNumber[a]?"":"px")),
gt.clearCloneStyle||""!==n||0!==e.indexOf("background")||(l[e]="inherit"),!(s&&"set"in s&&void 0===(n=s.set(t,n,i)))))try{l[e]=n}catch(t){}
}},css:function(t,e,n,i){var o,r,s,a=vt.camelCase(e);return e=vt.cssProps[a]||(vt.cssProps[a]=R(a)||a),s=vt.cssHooks[e]||vt.cssHooks[a],
s&&"get"in s&&(r=s.get(t,!0,n)),void 0===r&&(r=be(t,e,i)),"normal"===r&&e in Se&&(r=Se[e]),""===n||n?(o=parseFloat(r),n===!0||isFinite(o)?o||0:r):r;
}}),vt.each(["height","width"],function(t,e){vt.cssHooks[e]={get:function(t,n,i){if(n)return Ce.test(vt.css(t,"display"))&&0===t.offsetWidth?me(t,ke,function(){
return P(t,e,i)}):P(t,e,i)},set:function(t,n,i){var o=i&&ye(t);return _(t,n,i?q(t,e,i,gt.boxSizing&&"border-box"===vt.css(t,"boxSizing",!1,o),o):0);
}}}),gt.opacity||(vt.cssHooks.opacity={get:function(t,e){return Te.test((e&&t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":e?"1":"";
},set:function(t,e){var n=t.style,i=t.currentStyle,o=vt.isNumeric(e)?"alpha(opacity="+100*e+")":"",r=i&&i.filter||n.filter||"";n.zoom=1,
(e>=1||""===e)&&""===vt.trim(r.replace(we,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===e||i&&!i.filter)||(n.filter=we.test(r)?r.replace(we,o):r+" "+o);
}}),vt.cssHooks.marginRight=H(gt.reliableMarginRight,function(t,e){if(e)return me(t,{display:"inline-block"},be,[t,"marginRight"]);
}),vt.cssHooks.marginLeft=H(gt.reliableMarginLeft,function(t,e){if(e)return(parseFloat(be(t,"marginLeft"))||(vt.contains(t.ownerDocument,t)?t.getBoundingClientRect().left-me(t,{
marginLeft:0},function(){return t.getBoundingClientRect().left}):0))+"px"}),vt.each({margin:"",padding:"",border:"Width"},function(t,e){
vt.cssHooks[t+e]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];i<4;i++)o[t+Mt[i]+e]=r[i]||r[i-2]||r[0];
return o}},he.test(t)||(vt.cssHooks[t+e].set=_)}),vt.fn.extend({css:function(t,e){return Bt(this,function(t,e,n){var i,o,r={},s=0;
if(vt.isArray(e)){for(i=ye(t),o=e.length;s<o;s++)r[e[s]]=vt.css(t,e[s],!1,i);return r}return void 0!==n?vt.style(t,e,n):vt.css(t,e);
},t,e,arguments.length>1)},show:function(){return F(this,!0)},hide:function(){return F(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){
Wt(this)?vt(this).show():vt(this).hide()})}}),vt.Tween=M,M.prototype={constructor:M,init:function(t,e,n,i,o,r){this.elem=t,this.prop=n,
this.easing=o||vt.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=r||(vt.cssNumber[n]?"":"px");
},cur:function(){var t=M.propHooks[this.prop];return t&&t.get?t.get(this):M.propHooks._default.get(this)},run:function(t){var e,n=M.propHooks[this.prop];
return this.options.duration?this.pos=e=vt.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,
this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):M.propHooks._default.set(this),
this}},M.prototype.init.prototype=M.prototype,M.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=vt.css(t.elem,t.prop,""),
e&&"auto"!==e?e:0)},set:function(t){vt.fx.step[t.prop]?vt.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[vt.cssProps[t.prop]]&&!vt.cssHooks[t.prop]?t.elem[t.prop]=t.now:vt.style(t.elem,t.prop,t.now+t.unit);
}}},M.propHooks.scrollTop=M.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},vt.easing={
linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},vt.fx=M.prototype.init,vt.fx.step={};
var Ae,De,Le=/^(?:toggle|show|hide)$/,je=/queueHooks$/;vt.Animation=vt.extend(V,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);
return m(n.elem,t,Pt.exec(e),n),n}]},tweener:function(t,e){vt.isFunction(t)?(e=t,t=["*"]):t=t.match(Ot);for(var n,i=0,o=t.length;i<o;i++)n=t[i],
V.tweeners[n]=V.tweeners[n]||[],V.tweeners[n].unshift(e)},prefilters:[U],prefilter:function(t,e){e?V.prefilters.unshift(t):V.prefilters.push(t);
}}),vt.speed=function(t,e,n){var i=t&&"object"==typeof t?vt.extend({},t):{complete:n||!n&&e||vt.isFunction(t)&&t,duration:t,easing:n&&e||e&&!vt.isFunction(e)&&e
};return i.duration=vt.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in vt.fx.speeds?vt.fx.speeds[i.duration]:vt.fx.speeds._default,
null!=i.queue&&i.queue!==!0||(i.queue="fx"),i.old=i.complete,i.complete=function(){vt.isFunction(i.old)&&i.old.call(this),i.queue&&vt.dequeue(this,i.queue);
},i},vt.fn.extend({fadeTo:function(t,e,n,i){return this.filter(Wt).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){
var o=vt.isEmptyObject(t),r=vt.speed(e,n,i),s=function(){var e=V(this,vt.extend({},t),r);(o||vt._data(this,"finish"))&&e.stop(!0);
};return s.finish=s,o||r.queue===!1?this.each(s):this.queue(r.queue,s)},stop:function(t,e,n){var i=function(t){var e=t.stop;delete t.stop,
e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var e=!0,o=null!=t&&t+"queueHooks",r=vt.timers,s=vt._data(this);
if(o)s[o]&&s[o].stop&&i(s[o]);else for(o in s)s[o]&&s[o].stop&&je.test(o)&&i(s[o]);for(o=r.length;o--;)r[o].elem!==this||null!=t&&r[o].queue!==t||(r[o].anim.stop(n),
e=!1,r.splice(o,1));!e&&n||vt.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var e,n=vt._data(this),i=n[t+"queue"],o=n[t+"queueHooks"],r=vt.timers,s=i?i.length:0;
for(n.finish=!0,vt.queue(this,t,[]),o&&o.stop&&o.stop.call(this,!0),e=r.length;e--;)r[e].elem===this&&r[e].queue===t&&(r[e].anim.stop(!0),
r.splice(e,1));for(e=0;e<s;e++)i[e]&&i[e].finish&&i[e].finish.call(this);delete n.finish})}}),vt.each(["toggle","show","hide"],function(t,e){
var n=vt.fn[e];vt.fn[e]=function(t,i,o){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(B(e,!0),t,i,o)}}),
vt.each({slideDown:B("show"),slideUp:B("hide"),slideToggle:B("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{
opacity:"toggle"}},function(t,e){vt.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}}),vt.timers=[],vt.fx.tick=function(){var t,e=vt.timers,n=0;
for(Ae=vt.now();n<e.length;n++)t=e[n],t()||e[n]!==t||e.splice(n--,1);e.length||vt.fx.stop(),Ae=void 0},vt.fx.timer=function(t){vt.timers.push(t),
t()?vt.fx.start():vt.timers.pop()},vt.fx.interval=13,vt.fx.start=function(){De||(De=n.setInterval(vt.fx.tick,vt.fx.interval))},vt.fx.stop=function(){
n.clearInterval(De),De=null},vt.fx.speeds={slow:600,fast:200,_default:400},vt.fn.delay=function(t,e){return t=vt.fx?vt.fx.speeds[t]||t:t,
e=e||"fx",this.queue(e,function(e,i){var o=n.setTimeout(e,t);i.stop=function(){n.clearTimeout(o)}})},function(){var t,e=at.createElement("input"),n=at.createElement("div"),i=at.createElement("select"),o=i.appendChild(at.createElement("option"));
n=at.createElement("div"),n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
t=n.getElementsByTagName("a")[0],e.setAttribute("type","checkbox"),n.appendChild(e),t=n.getElementsByTagName("a")[0],t.style.cssText="top:1px",
gt.getSetAttribute="t"!==n.className,gt.style=/top/.test(t.getAttribute("style")),gt.hrefNormalized="/a"===t.getAttribute("href"),
gt.checkOn=!!e.value,gt.optSelected=o.selected,gt.enctype=!!at.createElement("form").enctype,i.disabled=!0,gt.optDisabled=!o.disabled,
e=at.createElement("input"),e.setAttribute("value",""),gt.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),
gt.radioValue="t"===e.value}();var Oe=/\r/g,Ie=/[\x20\t\r\n\f]+/g;vt.fn.extend({val:function(t){var e,n,i,o=this[0];{if(arguments.length)return i=vt.isFunction(t),
this.each(function(n){var o;1===this.nodeType&&(o=i?t.call(this,n,vt(this).val()):t,null==o?o="":"number"==typeof o?o+="":vt.isArray(o)&&(o=vt.map(o,function(t){
return null==t?"":t+""})),e=vt.valHooks[this.type]||vt.valHooks[this.nodeName.toLowerCase()],e&&"set"in e&&void 0!==e.set(this,o,"value")||(this.value=o));
});if(o)return e=vt.valHooks[o.type]||vt.valHooks[o.nodeName.toLowerCase()],e&&"get"in e&&void 0!==(n=e.get(o,"value"))?n:(n=o.value,
"string"==typeof n?n.replace(Oe,""):null==n?"":n)}}}),vt.extend({valHooks:{option:{get:function(t){var e=vt.find.attr(t,"value");return null!=e?e:vt.trim(vt.text(t)).replace(Ie," ");
}},select:{get:function(t){for(var e,n,i=t.options,o=t.selectedIndex,r="select-one"===t.type||o<0,s=r?null:[],a=r?o+1:i.length,l=o<0?a:r?o:0;l<a;l++)if(n=i[l],
(n.selected||l===o)&&(gt.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!vt.nodeName(n.parentNode,"optgroup"))){
if(e=vt(n).val(),r)return e;s.push(e)}return s},set:function(t,e){for(var n,i,o=t.options,r=vt.makeArray(e),s=o.length;s--;)if(i=o[s],
vt.inArray(vt.valHooks.option.get(i),r)>-1)try{i.selected=n=!0}catch(t){i.scrollHeight}else i.selected=!1;return n||(t.selectedIndex=-1),
o}}}}),vt.each(["radio","checkbox"],function(){vt.valHooks[this]={set:function(t,e){if(vt.isArray(e))return t.checked=vt.inArray(vt(t).val(),e)>-1;
}},gt.checkOn||(vt.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})});var He,Re,Fe=vt.expr.attrHandle,_e=/^(?:checked|selected)$/i,qe=gt.getSetAttribute,Pe=gt.input;
vt.fn.extend({attr:function(t,e){return Bt(this,vt.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){
vt.removeAttr(this,t)})}}),vt.extend({attr:function(t,e,n){var i,o,r=t.nodeType;if(3!==r&&8!==r&&2!==r)return"undefined"==typeof t.getAttribute?vt.prop(t,e,n):(1===r&&vt.isXMLDoc(t)||(e=e.toLowerCase(),
o=vt.attrHooks[e]||(vt.expr.match.bool.test(e)?Re:He)),void 0!==n?null===n?void vt.removeAttr(t,e):o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:(t.setAttribute(e,n+""),
n):o&&"get"in o&&null!==(i=o.get(t,e))?i:(i=vt.find.attr(t,e),null==i?void 0:i))},attrHooks:{type:{set:function(t,e){if(!gt.radioValue&&"radio"===e&&vt.nodeName(t,"input")){
var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,i,o=0,r=e&&e.match(Ot);if(r&&1===t.nodeType)for(;n=r[o++];)i=vt.propFix[n]||n,
vt.expr.match.bool.test(n)?Pe&&qe||!_e.test(n)?t[i]=!1:t[vt.camelCase("default-"+n)]=t[i]=!1:vt.attr(t,n,""),t.removeAttribute(qe?n:i);
}}),Re={set:function(t,e,n){return e===!1?vt.removeAttr(t,n):Pe&&qe||!_e.test(n)?t.setAttribute(!qe&&vt.propFix[n]||n,n):t[vt.camelCase("default-"+n)]=t[n]=!0,
n}},vt.each(vt.expr.match.bool.source.match(/\w+/g),function(t,e){var n=Fe[e]||vt.find.attr;Pe&&qe||!_e.test(e)?Fe[e]=function(t,e,i){
var o,r;return i||(r=Fe[e],Fe[e]=o,o=null!=n(t,e,i)?e.toLowerCase():null,Fe[e]=r),o}:Fe[e]=function(t,e,n){if(!n)return t[vt.camelCase("default-"+e)]?e.toLowerCase():null;
}}),Pe&&qe||(vt.attrHooks.value={set:function(t,e,n){return vt.nodeName(t,"input")?void(t.defaultValue=e):He&&He.set(t,e,n)}}),qe||(He={
set:function(t,e,n){var i=t.getAttributeNode(n);if(i||t.setAttributeNode(i=t.ownerDocument.createAttribute(n)),i.value=e+="","value"===n||e===t.getAttribute(n))return e;
}},Fe.id=Fe.name=Fe.coords=function(t,e,n){var i;if(!n)return(i=t.getAttributeNode(e))&&""!==i.value?i.value:null},vt.valHooks.button={
get:function(t,e){var n=t.getAttributeNode(e);if(n&&n.specified)return n.value},set:He.set},vt.attrHooks.contenteditable={set:function(t,e,n){
He.set(t,""!==e&&e,n)}},vt.each(["width","height"],function(t,e){vt.attrHooks[e]={set:function(t,n){if(""===n)return t.setAttribute(e,"auto"),
n}}})),gt.style||(vt.attrHooks.style={get:function(t){return t.style.cssText||void 0},set:function(t,e){return t.style.cssText=e+"";
}});var Me=/^(?:input|select|textarea|button|object)$/i,We=/^(?:a|area)$/i;vt.fn.extend({prop:function(t,e){return Bt(this,vt.prop,t,e,arguments.length>1);
},removeProp:function(t){return t=vt.propFix[t]||t,this.each(function(){try{this[t]=void 0,delete this[t]}catch(t){}})}}),vt.extend({
prop:function(t,e,n){var i,o,r=t.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&vt.isXMLDoc(t)||(e=vt.propFix[e]||e,o=vt.propHooks[e]),
void 0!==n?o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:t[e]=n:o&&"get"in o&&null!==(i=o.get(t,e))?i:t[e]},propHooks:{tabIndex:{get:function(t){
var e=vt.find.attr(t,"tabindex");return e?parseInt(e,10):Me.test(t.nodeName)||We.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",
class:"className"}}),gt.hrefNormalized||vt.each(["href","src"],function(t,e){vt.propHooks[e]={get:function(t){return t.getAttribute(e,4);
}}}),gt.optSelected||(vt.propHooks.selected={get:function(t){var e=t.parentNode;return e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex),
null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),vt.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){
vt.propFix[this.toLowerCase()]=this}),gt.enctype||(vt.propFix.enctype="encoding");var Be=/[\t\r\n\f]/g;vt.fn.extend({addClass:function(t){
var e,n,i,o,r,s,a,l=0;if(vt.isFunction(t))return this.each(function(e){vt(this).addClass(t.call(this,e,Y(this)))});if("string"==typeof t&&t)for(e=t.match(Ot)||[];n=this[l++];)if(o=Y(n),
i=1===n.nodeType&&(" "+o+" ").replace(Be," ")){for(s=0;r=e[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");a=vt.trim(i),o!==a&&vt.attr(n,"class",a);
}return this},removeClass:function(t){var e,n,i,o,r,s,a,l=0;if(vt.isFunction(t))return this.each(function(e){vt(this).removeClass(t.call(this,e,Y(this)));
});if(!arguments.length)return this.attr("class","");if("string"==typeof t&&t)for(e=t.match(Ot)||[];n=this[l++];)if(o=Y(n),i=1===n.nodeType&&(" "+o+" ").replace(Be," ")){
for(s=0;r=e[s++];)for(;i.indexOf(" "+r+" ")>-1;)i=i.replace(" "+r+" "," ");a=vt.trim(i),o!==a&&vt.attr(n,"class",a)}return this},
toggleClass:function(t,e){var n=typeof t;return"boolean"==typeof e&&"string"===n?e?this.addClass(t):this.removeClass(t):vt.isFunction(t)?this.each(function(n){
vt(this).toggleClass(t.call(this,n,Y(this),e),e)}):this.each(function(){var e,i,o,r;if("string"===n)for(i=0,o=vt(this),r=t.match(Ot)||[];e=r[i++];)o.hasClass(e)?o.removeClass(e):o.addClass(e);else void 0!==t&&"boolean"!==n||(e=Y(this),
e&&vt._data(this,"__className__",e),vt.attr(this,"class",e||t===!1?"":vt._data(this,"__className__")||""))})},hasClass:function(t){
var e,n,i=0;for(e=" "+t+" ";n=this[i++];)if(1===n.nodeType&&(" "+Y(n)+" ").replace(Be," ").indexOf(e)>-1)return!0;return!1}}),vt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){
vt.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),vt.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t);
}});var ze=n.location,Ue=vt.now(),Xe=/\?/,Ve=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
vt.parseJSON=function(t){if(n.JSON&&n.JSON.parse)return n.JSON.parse(t+"");var e,i=null,o=vt.trim(t+"");return o&&!vt.trim(o.replace(Ve,function(t,n,o,r){
return e&&n&&(i=0),0===i?t:(e=o||n,i+=!r-!o,"")}))?Function("return "+o)():vt.error("Invalid JSON: "+t)},vt.parseXML=function(t){
var e,i;if(!t||"string"!=typeof t)return null;try{n.DOMParser?(i=new n.DOMParser,e=i.parseFromString(t,"text/xml")):(e=new n.ActiveXObject("Microsoft.XMLDOM"),
e.async="false",e.loadXML(t))}catch(t){e=void 0}return e&&e.documentElement&&!e.getElementsByTagName("parsererror").length||vt.error("Invalid XML: "+t),
e};var Ye=/#.*$/,Ge=/([?&])_=[^&]*/,Je=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ke=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Qe=/^(?:GET|HEAD)$/,Ze=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,en={},nn={},on="*/".concat("*"),rn=ze.href,sn=tn.exec(rn.toLowerCase())||[];
vt.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:rn,type:"GET",isLocal:Ke.test(sn[1]),global:!0,processData:!0,async:!0,
contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":on,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",
json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",
text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":vt.parseJSON,"text xml":vt.parseXML
},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?K(K(t,vt.ajaxSettings),e):K(vt.ajaxSettings,t)},ajaxPrefilter:G(en),
ajaxTransport:G(nn),ajax:function(t,e){function i(t,e,i,o){var r,d,y,b,w,C=e;2!==x&&(x=2,l&&n.clearTimeout(l),c=void 0,a=o||"",T.readyState=t>0?4:0,
r=t>=200&&t<300||304===t,i&&(b=Q(f,T,i)),b=Z(f,b,T,r),r?(f.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(vt.lastModified[s]=w),
w=T.getResponseHeader("etag"),w&&(vt.etag[s]=w)),204===t||"HEAD"===f.type?C="nocontent":304===t?C="notmodified":(C=b.state,d=b.data,
y=b.error,r=!y)):(y=C,!t&&C||(C="error",t<0&&(t=0))),T.status=t,T.statusText=(e||C)+"",r?g.resolveWith(p,[d,C,T]):g.rejectWith(p,[T,C,y]),
T.statusCode(v),v=void 0,u&&h.trigger(r?"ajaxSuccess":"ajaxError",[T,f,r?d:y]),m.fireWith(p,[T,C]),u&&(h.trigger("ajaxComplete",[T,f]),
--vt.active||vt.event.trigger("ajaxStop")))}"object"==typeof t&&(e=t,t=void 0),e=e||{};var o,r,s,a,l,u,c,d,f=vt.ajaxSetup({},e),p=f.context||f,h=f.context&&(p.nodeType||p.jquery)?vt(p):vt.event,g=vt.Deferred(),m=vt.Callbacks("once memory"),v=f.statusCode||{},y={},b={},x=0,w="canceled",T={
readyState:0,getResponseHeader:function(t){var e;if(2===x){if(!d)for(d={};e=Je.exec(a);)d[e[1].toLowerCase()]=e[2];e=d[t.toLowerCase()];
}return null==e?null:e},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(t,e){var n=t.toLowerCase();
return x||(t=b[n]=b[n]||t,y[t]=e),this},overrideMimeType:function(t){return x||(f.mimeType=t),this},statusCode:function(t){var e;if(t)if(x<2)for(e in t)v[e]=[v[e],t[e]];else T.always(t[T.status]);
return this},abort:function(t){var e=t||w;return c&&c.abort(e),i(0,e),this}};if(g.promise(T).complete=m.add,T.success=T.done,T.error=T.fail,
f.url=((t||f.url||rn)+"").replace(Ye,"").replace(Ze,sn[1]+"//"),f.type=e.method||e.type||f.method||f.type,f.dataTypes=vt.trim(f.dataType||"*").toLowerCase().match(Ot)||[""],
null==f.crossDomain&&(o=tn.exec(f.url.toLowerCase()),f.crossDomain=!(!o||o[1]===sn[1]&&o[2]===sn[2]&&(o[3]||("http:"===o[1]?"80":"443"))===(sn[3]||("http:"===sn[1]?"80":"443")))),
f.data&&f.processData&&"string"!=typeof f.data&&(f.data=vt.param(f.data,f.traditional)),J(en,f,e,T),2===x)return T;u=vt.event&&f.global,
u&&0===vt.active++&&vt.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Qe.test(f.type),s=f.url,f.hasContent||(f.data&&(s=f.url+=(Xe.test(s)?"&":"?")+f.data,
delete f.data),f.cache===!1&&(f.url=Ge.test(s)?s.replace(Ge,"$1_="+Ue++):s+(Xe.test(s)?"&":"?")+"_="+Ue++)),f.ifModified&&(vt.lastModified[s]&&T.setRequestHeader("If-Modified-Since",vt.lastModified[s]),
vt.etag[s]&&T.setRequestHeader("If-None-Match",vt.etag[s])),(f.data&&f.hasContent&&f.contentType!==!1||e.contentType)&&T.setRequestHeader("Content-Type",f.contentType),
T.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+on+"; q=0.01":""):f.accepts["*"]);
for(r in f.headers)T.setRequestHeader(r,f.headers[r]);if(f.beforeSend&&(f.beforeSend.call(p,T,f)===!1||2===x))return T.abort();w="abort";
for(r in{success:1,error:1,complete:1})T[r](f[r]);if(c=J(nn,f,e,T)){if(T.readyState=1,u&&h.trigger("ajaxSend",[T,f]),2===x)return T;
f.async&&f.timeout>0&&(l=n.setTimeout(function(){T.abort("timeout")},f.timeout));try{x=1,c.send(y,i)}catch(t){if(!(x<2))throw t;i(-1,t);
}}else i(-1,"No Transport");return T},getJSON:function(t,e,n){return vt.get(t,e,n,"json")},getScript:function(t,e){return vt.get(t,void 0,e,"script");
}}),vt.each(["get","post"],function(t,e){vt[e]=function(t,n,i,o){return vt.isFunction(n)&&(o=o||i,i=n,n=void 0),vt.ajax(vt.extend({
url:t,type:e,dataType:o,data:n,success:i},vt.isPlainObject(t)&&t))}}),vt._evalUrl=function(t){return vt.ajax({url:t,type:"GET",dataType:"script",
cache:!0,async:!1,global:!1,throws:!0})},vt.fn.extend({wrapAll:function(t){if(vt.isFunction(t))return this.each(function(e){vt(this).wrapAll(t.call(this,e));
});if(this[0]){var e=vt(t,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstChild&&1===t.firstChild.nodeType;)t=t.firstChild;
return t}).append(this)}return this},wrapInner:function(t){return vt.isFunction(t)?this.each(function(e){vt(this).wrapInner(t.call(this,e));
}):this.each(function(){var e=vt(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=vt.isFunction(t);
return this.each(function(n){vt(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(){return this.parent().each(function(){vt.nodeName(this,"body")||vt(this).replaceWith(this.childNodes);
}).end()}}),vt.expr.filters.hidden=function(t){return gt.reliableHiddenOffsets()?t.offsetWidth<=0&&t.offsetHeight<=0&&!t.getClientRects().length:et(t);
},vt.expr.filters.visible=function(t){return!vt.expr.filters.hidden(t)};var an=/%20/g,ln=/\[\]$/,un=/\r?\n/g,cn=/^(?:submit|button|image|reset|file)$/i,dn=/^(?:input|select|textarea|keygen)/i;
vt.param=function(t,e){var n,i=[],o=function(t,e){e=vt.isFunction(e)?e():null==e?"":e,i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(e);
};if(void 0===e&&(e=vt.ajaxSettings&&vt.ajaxSettings.traditional),vt.isArray(t)||t.jquery&&!vt.isPlainObject(t))vt.each(t,function(){
o(this.name,this.value)});else for(n in t)nt(n,t[n],e,o);return i.join("&").replace(an,"+")},vt.fn.extend({serialize:function(){return vt.param(this.serializeArray());
},serializeArray:function(){return this.map(function(){var t=vt.prop(this,"elements");return t?vt.makeArray(t):this}).filter(function(){
var t=this.type;return this.name&&!vt(this).is(":disabled")&&dn.test(this.nodeName)&&!cn.test(t)&&(this.checked||!zt.test(t))}).map(function(t,e){
var n=vt(this).val();return null==n?null:vt.isArray(n)?vt.map(n,function(t){return{name:e.name,value:t.replace(un,"\r\n")}}):{name:e.name,
value:n.replace(un,"\r\n")}}).get()}}),vt.ajaxSettings.xhr=void 0!==n.ActiveXObject?function(){return this.isLocal?ot():at.documentMode>8?it():/^(get|post|head|put|delete|options)$/i.test(this.type)&&it()||ot();
}:it;var fn=0,pn={},hn=vt.ajaxSettings.xhr();n.attachEvent&&n.attachEvent("onunload",function(){for(var t in pn)pn[t](void 0,!0)}),
gt.cors=!!hn&&"withCredentials"in hn,hn=gt.ajax=!!hn,hn&&vt.ajaxTransport(function(t){if(!t.crossDomain||gt.cors){var e;return{send:function(i,o){
var r,s=t.xhr(),a=++fn;if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(r in t.xhrFields)s[r]=t.xhrFields[r];
t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
for(r in i)void 0!==i[r]&&s.setRequestHeader(r,i[r]+"");s.send(t.hasContent&&t.data||null),e=function(n,i){var r,l,u;if(e&&(i||4===s.readyState))if(delete pn[a],
e=void 0,s.onreadystatechange=vt.noop,i)4!==s.readyState&&s.abort();else{u={},r=s.status,"string"==typeof s.responseText&&(u.text=s.responseText);
try{l=s.statusText}catch(t){l=""}r||!t.isLocal||t.crossDomain?1223===r&&(r=204):r=u.text?200:404}u&&o(r,l,u,s.getAllResponseHeaders());
},t.async?4===s.readyState?n.setTimeout(e):s.onreadystatechange=pn[a]=e:e()},abort:function(){e&&e(void 0,!0)}}}}),vt.ajaxSetup({
accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/
},converters:{"text script":function(t){return vt.globalEval(t),t}}}),vt.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),
t.crossDomain&&(t.type="GET",t.global=!1)}),vt.ajaxTransport("script",function(t){if(t.crossDomain){var e,n=at.head||vt("head")[0]||at.documentElement;
return{send:function(i,o){e=at.createElement("script"),e.async=!0,t.scriptCharset&&(e.charset=t.scriptCharset),e.src=t.url,e.onload=e.onreadystatechange=function(t,n){
(n||!e.readyState||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=null,e.parentNode&&e.parentNode.removeChild(e),
e=null,n||o(200,"success"))},n.insertBefore(e,n.firstChild)},abort:function(){e&&e.onload(void 0,!0)}}}});var gn=[],mn=/(=)\?(?=&|$)|\?\?/;
vt.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=gn.pop()||vt.expando+"_"+Ue++;return this[t]=!0,t}}),vt.ajaxPrefilter("json jsonp",function(t,e,i){
var o,r,s,a=t.jsonp!==!1&&(mn.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&mn.test(t.data)&&"data");
if(a||"jsonp"===t.dataTypes[0])return o=t.jsonpCallback=vt.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(mn,"$1"+o):t.jsonp!==!1&&(t.url+=(Xe.test(t.url)?"&":"?")+t.jsonp+"="+o),
t.converters["script json"]=function(){return s||vt.error(o+" was not called"),s[0]},t.dataTypes[0]="json",r=n[o],n[o]=function(){
s=arguments},i.always(function(){void 0===r?vt(n).removeProp(o):n[o]=r,t[o]&&(t.jsonpCallback=e.jsonpCallback,gn.push(o)),s&&vt.isFunction(r)&&r(s[0]),
s=r=void 0}),"script"}),vt.parseHTML=function(t,e,n){if(!t||"string"!=typeof t)return null;"boolean"==typeof e&&(n=e,e=!1),e=e||at;
var i=St.exec(t),o=!n&&[];return i?[e.createElement(i[1])]:(i=w([t],e,o),o&&o.length&&vt(o).remove(),vt.merge([],i.childNodes))};var vn=vt.fn.load;
vt.fn.load=function(t,e,n){if("string"!=typeof t&&vn)return vn.apply(this,arguments);var i,o,r,s=this,a=t.indexOf(" ");return a>-1&&(i=vt.trim(t.slice(a,t.length)),
t=t.slice(0,a)),vt.isFunction(e)?(n=e,e=void 0):e&&"object"==typeof e&&(o="POST"),s.length>0&&vt.ajax({url:t,type:o||"GET",dataType:"html",
data:e}).done(function(t){r=arguments,s.html(i?vt("<div>").append(vt.parseHTML(t)).find(i):t)}).always(n&&function(t,e){s.each(function(){
n.apply(this,r||[t.responseText,e,t])})}),this},vt.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){
vt.fn[e]=function(t){return this.on(e,t)}}),vt.expr.filters.animated=function(t){return vt.grep(vt.timers,function(e){return t===e.elem;
}).length},vt.offset={setOffset:function(t,e,n){var i,o,r,s,a,l,u,c=vt.css(t,"position"),d=vt(t),f={};"static"===c&&(t.style.position="relative"),
a=d.offset(),r=vt.css(t,"top"),l=vt.css(t,"left"),u=("absolute"===c||"fixed"===c)&&vt.inArray("auto",[r,l])>-1,u?(i=d.position(),
s=i.top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(l)||0),vt.isFunction(e)&&(e=e.call(t,n,vt.extend({},a))),null!=e.top&&(f.top=e.top-a.top+s),
null!=e.left&&(f.left=e.left-a.left+o),"using"in e?e.using.call(t,f):d.css(f)}},vt.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){
vt.offset.setOffset(this,t,e)});var e,n,i={top:0,left:0},o=this[0],r=o&&o.ownerDocument;if(r)return e=r.documentElement,vt.contains(e,o)?("undefined"!=typeof o.getBoundingClientRect&&(i=o.getBoundingClientRect()),
n=rt(r),{top:i.top+(n.pageYOffset||e.scrollTop)-(e.clientTop||0),left:i.left+(n.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}):i},
position:function(){if(this[0]){var t,e,n={top:0,left:0},i=this[0];return"fixed"===vt.css(i,"position")?e=i.getBoundingClientRect():(t=this.offsetParent(),
e=this.offset(),vt.nodeName(t[0],"html")||(n=t.offset()),n.top+=vt.css(t[0],"borderTopWidth",!0),n.left+=vt.css(t[0],"borderLeftWidth",!0)),
{top:e.top-n.top-vt.css(i,"marginTop",!0),left:e.left-n.left-vt.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){
for(var t=this.offsetParent;t&&!vt.nodeName(t,"html")&&"static"===vt.css(t,"position");)t=t.offsetParent;return t||ve})}}),vt.each({
scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var n=/Y/.test(e);vt.fn[t]=function(i){return Bt(this,function(t,i,o){
var r=rt(t);return void 0===o?r?e in r?r[e]:r.document.documentElement[i]:t[i]:void(r?r.scrollTo(n?vt(r).scrollLeft():o,n?o:vt(r).scrollTop()):t[i]=o);
},t,i,arguments.length,null)}}),vt.each(["top","left"],function(t,e){vt.cssHooks[e]=H(gt.pixelPosition,function(t,n){if(n)return n=be(t,e),
ge.test(n)?vt(t).position()[e]+"px":n})}),vt.each({Height:"height",Width:"width"},function(t,e){vt.each({padding:"inner"+t,content:e,
"":"outer"+t},function(n,i){vt.fn[i]=function(i,o){var r=arguments.length&&(n||"boolean"!=typeof i),s=n||(i===!0||o===!0?"margin":"border");
return Bt(this,function(e,n,i){var o;return vt.isWindow(e)?e.document.documentElement["client"+t]:9===e.nodeType?(o=e.documentElement,
Math.max(e.body["scroll"+t],o["scroll"+t],e.body["offset"+t],o["offset"+t],o["client"+t])):void 0===i?vt.css(e,n,s):vt.style(e,n,i,s);
},e,r?i:void 0,r,null)}})}),vt.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e);
},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n);
}}),vt.fn.size=function(){return this.length},vt.fn.andSelf=vt.fn.addBack,i=[],o=function(){return vt}.apply(e,i),!(void 0!==o&&(t.exports=o));
var yn=n.jQuery,bn=n.$;return vt.noConflict=function(t){return n.$===vt&&(n.$=bn),t&&n.jQuery===vt&&(n.jQuery=yn),vt},r||(n.jQuery=n.$=vt),
vt})},function(t,e,n){n(14),n(4),n(5),n(6),n(7),n(8),n(9),n(13),n(10),n(11),n(12),n(3)},function(t,e,n){(function(t){+function(t){
"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.affix"),r="object"==typeof e&&e;o||i.data("bs.affix",o=new n(this,r)),
"string"==typeof e&&o[e]()})}var n=function(e,i){this.options=t.extend({},n.DEFAULTS,i);var o=this.options.target===n.DEFAULTS.target?t(this.options.target):t(document).find(this.options.target);
this.$target=o.on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),
this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};n.VERSION="3.4.1",n.RESET="affix affix-top affix-bottom",
n.DEFAULTS={offset:0,target:window},n.prototype.getState=function(t,e,n,i){var o=this.$target.scrollTop(),r=this.$element.offset(),s=this.$target.height();
if(null!=n&&"top"==this.affixed)return o<n&&"top";if("bottom"==this.affixed)return null!=n?!(o+this.unpin<=r.top)&&"bottom":!(o+s<=t-i)&&"bottom";
var a=null==this.affixed,l=a?o:r.top,u=a?s:e;return null!=n&&o<=n?"top":null!=i&&l+u>=t-i&&"bottom"},n.prototype.getPinnedOffset=function(){
if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(n.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();
return this.pinnedOffset=e.top-t},n.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1);
},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),i=this.options.offset,o=i.top,r=i.bottom,s=Math.max(t(document).height(),t(document.body).height());
"object"!=typeof i&&(r=o=i),"function"==typeof o&&(o=i.top(this.$element)),"function"==typeof r&&(r=i.bottom(this.$element));var a=this.getState(s,e,o,r);
if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var l="affix"+(a?"-"+a:""),u=t.Event(l+".bs.affix");if(this.$element.trigger(u),
u.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix");
}"bottom"==a&&this.$element.offset({top:s-e-r})}};var i=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=n,t.fn.affix.noConflict=function(){
return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var n=t(this),i=n.data();i.offset=i.offset||{},
null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),e.call(n,i)})})}(t)}).call(e,n(1));
},function(t,e,n){(function(t){+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.alert");
o||n.data("bs.alert",o=new i(this)),"string"==typeof e&&o[e].call(n)})}var n='[data-dismiss="alert"]',i=function(e){t(e).on("click",n,this.close);
};i.VERSION="3.4.1",i.TRANSITION_DURATION=150,i.prototype.close=function(e){function n(){s.detach().trigger("closed.bs.alert").remove();
}var o=t(this),r=o.attr("data-target");r||(r=o.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),r="#"===r?[]:r;var s=t(document).find(r);
e&&e.preventDefault(),s.length||(s=o.closest(".alert")),s.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(s.removeClass("in"),
t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n())};var o=t.fn.alert;
t.fn.alert=e,t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",n,i.prototype.close);
}(t)}).call(e,n(1))},function(t,e,n){(function(t){+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.button"),r="object"==typeof e&&e;
o||i.data("bs.button",o=new n(this,r)),"toggle"==e?o.toggle():e&&o.setState(e)})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),
this.isLoading=!1};n.VERSION="3.4.1",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(e){var n="disabled",i=this.$element,o=i.is("input")?"val":"html",r=i.data();
e+="Text",null==r.resetText&&i.data("resetText",i[o]()),setTimeout(t.proxy(function(){i[o](null==r[e]?this.options[e]:r[e]),"loadingText"==e?(this.isLoading=!0,
i.addClass(n).attr(n,n).prop(n,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(n).removeAttr(n).prop(n,!1))},this),0)},n.prototype.toggle=function(){
var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var n=this.$element.find("input");"radio"==n.prop("type")?(n.prop("checked")&&(t=!1),
e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==n.prop("type")&&(n.prop("checked")!==this.$element.hasClass("active")&&(t=!1),
this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),t&&n.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),
this.$element.toggleClass("active")};var i=t.fn.button;t.fn.button=e,t.fn.button.Constructor=n,t.fn.button.noConflict=function(){
return t.fn.button=i,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var i=t(n.target).closest(".btn");
e.call(i,"toggle"),t(n.target).is('input[type="radio"], input[type="checkbox"]')||(n.preventDefault(),i.is("input,button")?i.trigger("focus"):i.find("input:visible,button:visible").first().trigger("focus"));
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type));
})}(t)}).call(e,n(1))},function(t,e,n){(function(t){+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.carousel"),r=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e),s="string"==typeof e?e:r.slide;
o||i.data("bs.carousel",o=new n(this,r)),"number"==typeof e?o.to(e):s?o[s]():r.interval&&o.pause().cycle()})}var n=function(e,n){
this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=null,this.sliding=null,
this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),
"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this));
};n.VERSION="3.4.1",n.TRANSITION_DURATION=600,n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},n.prototype.keydown=function(t){
if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}
t.preventDefault()}},n.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),
this},n.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},n.prototype.getItemForDirection=function(t,e){
var n=this.getItemIndex(e),i="prev"==t&&0===n||"next"==t&&n==this.$items.length-1;if(i&&!this.options.wrap)return e;var o="prev"==t?-1:1,r=(n+o)%this.$items.length;
return this.$items.eq(r)},n.prototype.to=function(t){var e=this,n=this.getItemIndex(this.$active=this.$element.find(".item.active"));
if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",this.$items.eq(t));
},n.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),
this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){if(!this.sliding)return this.slide("next");
},n.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},n.prototype.slide=function(e,i){var o=this.$element.find(".item.active"),r=i||this.getItemForDirection(e,o),s=this.interval,a="next"==e?"left":"right",l=this;
if(r.hasClass("active"))return this.sliding=!1;var u=r[0],c=t.Event("slide.bs.carousel",{relatedTarget:u,direction:a});if(this.$element.trigger(c),
!c.isDefaultPrevented()){if(this.sliding=!0,s&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");
var d=t(this.$indicators.children()[this.getItemIndex(r)]);d&&d.addClass("active")}var f=t.Event("slid.bs.carousel",{relatedTarget:u,
direction:a});return t.support.transition&&this.$element.hasClass("slide")?(r.addClass(e),"object"==typeof r&&r.length&&r[0].offsetWidth,
o.addClass(a),r.addClass(a),o.one("bsTransitionEnd",function(){r.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),
l.sliding=!1,setTimeout(function(){l.$element.trigger(f)},0)}).emulateTransitionEnd(n.TRANSITION_DURATION)):(o.removeClass("active"),
r.addClass("active"),this.sliding=!1,this.$element.trigger(f)),s&&this.cycle(),this}};var i=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=n,
t.fn.carousel.noConflict=function(){return t.fn.carousel=i,this};var o=function(n){var i=t(this),o=i.attr("href");o&&(o=o.replace(/.*(?=#[^\s]+$)/,""));
var r=i.attr("data-target")||o,s=t(document).find(r);if(s.hasClass("carousel")){var a=t.extend({},s.data(),i.data()),l=i.attr("data-slide-to");
l&&(a.interval=!1),e.call(s,a),l&&s.data("bs.carousel").to(l),n.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",o).on("click.bs.carousel.data-api","[data-slide-to]",o),
t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var n=t(this);e.call(n,n.data())})})}(t)}).call(e,n(1));
},function(t,e,n){(function(t){+function(t){"use strict";function e(e){var n,i=e.attr("data-target")||(n=e.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"");
return t(document).find(i)}function n(e){return this.each(function(){var n=t(this),o=n.data("bs.collapse"),r=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);
!o&&r.toggle&&/show|hide/.test(e)&&(r.toggle=!1),o||n.data("bs.collapse",o=new i(this,r)),"string"==typeof e&&o[e]()})}var i=function(e,n){
this.$element=t(e),this.options=t.extend({},i.DEFAULTS,n),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),
this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),
this.options.toggle&&this.toggle()};i.VERSION="3.4.1",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){
var t=this.$element.hasClass("width");return t?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){
var e,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(o&&o.length&&(e=o.data("bs.collapse"),e&&e.transitioning))){
var r=t.Event("show.bs.collapse");if(this.$element.trigger(r),!r.isDefaultPrevented()){o&&o.length&&(n.call(o,"hide"),e||o.data("bs.collapse",null));
var s=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),
this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[s](""),this.transitioning=0,
this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return a.call(this);var l=t.camelCase(["scroll",s].join("-"));
this.$element.one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])}}}},i.prototype.hide=function(){
if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){
var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),
this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
};return t.support.transition?void this.$element[n](0).one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(i.TRANSITION_DURATION):o.call(this);
}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(n,i){
var o=t(i);this.addAriaAndCollapsedClass(e(o),o)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(t,e){var n=t.hasClass("in");
t.attr("aria-expanded",n),e.toggleClass("collapsed",!n).attr("aria-expanded",n)};var o=t.fn.collapse;t.fn.collapse=n,t.fn.collapse.Constructor=i,
t.fn.collapse.noConflict=function(){return t.fn.collapse=o,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){
var o=t(this);o.attr("data-target")||i.preventDefault();var r=e(o),s=r.data("bs.collapse"),a=s?"toggle":o.data();n.call(r,a)})}(t);
}).call(e,n(1))},function(t,e,n){(function(t){+function(t){"use strict";function e(e){var n=e.attr("data-target");n||(n=e.attr("href"),
n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==n?t(document).find(n):null;return i&&i.length?i:e.parent()}
function n(n){n&&3===n.which||(t(o).remove(),t(r).each(function(){var i=t(this),o=e(i),r={relatedTarget:this};o.hasClass("open")&&(n&&"click"==n.type&&/input|textarea/i.test(n.target.tagName)&&t.contains(o[0],n.target)||(o.trigger(n=t.Event("hide.bs.dropdown",r)),
n.isDefaultPrevented()||(i.attr("aria-expanded","false"),o.removeClass("open").trigger(t.Event("hidden.bs.dropdown",r)))))}))}function i(e){
return this.each(function(){var n=t(this),i=n.data("bs.dropdown");i||n.data("bs.dropdown",i=new s(this)),"string"==typeof e&&i[e].call(n);
})}var o=".dropdown-backdrop",r='[data-toggle="dropdown"]',s=function(e){t(e).on("click.bs.dropdown",this.toggle)};s.VERSION="3.4.1",
s.prototype.toggle=function(i){var o=t(this);if(!o.is(".disabled, :disabled")){var r=e(o),s=r.hasClass("open");if(n(),!s){"ontouchstart"in document.documentElement&&!r.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",n);
var a={relatedTarget:this};if(r.trigger(i=t.Event("show.bs.dropdown",a)),i.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),
r.toggleClass("open").trigger(t.Event("shown.bs.dropdown",a))}return!1}},s.prototype.keydown=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)){
var i=t(this);if(n.preventDefault(),n.stopPropagation(),!i.is(".disabled, :disabled")){var o=e(i),s=o.hasClass("open");if(!s&&27!=n.which||s&&27==n.which)return 27==n.which&&o.find(r).trigger("focus"),
i.trigger("click");var a=" li:not(.disabled):visible a",l=o.find(".dropdown-menu"+a);if(l.length){var u=l.index(n.target);38==n.which&&u>0&&u--,
40==n.which&&u<l.length-1&&u++,~u||(u=0),l.eq(u).trigger("focus")}}}};var a=t.fn.dropdown;t.fn.dropdown=i,t.fn.dropdown.Constructor=s,
t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(t){
t.stopPropagation()}).on("click.bs.dropdown.data-api",r,s.prototype.toggle).on("keydown.bs.dropdown.data-api",r,s.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",s.prototype.keydown);
}(t)}).call(e,n(1))},function(t,e,n){(function(t){+function(t){"use strict";function e(e,i){return this.each(function(){var o=t(this),r=o.data("bs.modal"),s=t.extend({},n.DEFAULTS,o.data(),"object"==typeof e&&e);
r||o.data("bs.modal",r=new n(this,s)),"string"==typeof e?r[e](i):s.show&&r.show(i)})}var n=function(e,n){this.options=n,this.$body=t(document.body),
this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,
this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){
this.$element.trigger("loaded.bs.modal")},this))};n.VERSION="3.4.1",n.TRANSITION_DURATION=300,n.BACKDROP_TRANSITION_DURATION=150,
n.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},n.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},n.prototype.show=function(e){
var i=this,o=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,
this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),
this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(i.$element)&&(i.ignoreBackdropClick=!0);
})}),this.backdrop(function(){var o=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),
i.$element.show().scrollTop(0),i.adjustDialog(),o&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();var r=t.Event("shown.bs.modal",{
relatedTarget:e});o?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(r)}).emulateTransitionEnd(n.TRANSITION_DURATION):i.$element.trigger("focus").trigger(r);
}))},n.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,
this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(n.TRANSITION_DURATION):this.hideModal());
},n.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus");
},this))},n.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){
27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},n.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal");
},n.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),
t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},n.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),
this.$backdrop=null},n.prototype.backdrop=function(e){var i=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){
var r=t.support.transition&&o;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+o).appendTo(this.$body),
this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()));
},this)),r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;r?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):e();
}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var s=function(){i.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):s();
}else e&&e()},n.prototype.handleUpdate=function(){this.adjustDialog()},n.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""
})},n.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},n.prototype.checkScrollbar=function(){
var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,
this.scrollbarWidth=this.measureScrollbar()},n.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);
this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",e+n),
t(this.fixedContent).each(function(e,i){var o=i.style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",o).css("padding-right",parseFloat(r)+n+"px");
}))},n.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),t(this.fixedContent).each(function(e,n){
var i=t(n).data("padding-right");t(n).removeData("padding-right"),n.style.paddingRight=i?i:""})},n.prototype.measureScrollbar=function(){
var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),
e};var i=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=n,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){
var i=t(this),o=i.attr("href"),r=i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,""),s=t(document).find(r),a=s.data("bs.modal")?"toggle":t.extend({
remote:!/#/.test(o)&&o},s.data(),i.data());i.is("a")&&n.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){
i.is(":visible")&&i.trigger("focus")})}),e.call(s,a,this)})}(t)}).call(e,n(1))},function(t,e,n){(function(t){+function(t){"use strict";
function e(e){return this.each(function(){var i=t(this),o=i.data("bs.popover"),r="object"==typeof e&&e;!o&&/destroy|hide/.test(e)||(o||i.data("bs.popover",o=new n(this,r)),
"string"==typeof e&&o[e]())})}var n=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
n.VERSION="3.4.1",n.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
}),n.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),n.prototype.constructor=n,n.prototype.getDefaults=function(){return n.DEFAULTS;
},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();if(this.options.html){var i=typeof n;this.options.sanitize&&(e=this.sanitizeHtml(e),
"string"===i&&(n=this.sanitizeHtml(n))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===i?"html":"append"](n);
}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(n);t.removeClass("fade top bottom left right in"),
t.find(".popover-title").html()||t.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent();
},n.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content);
},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var i=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=n,
t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(t)}).call(e,n(1))},function(t,e,n){(function(t){+function(t){"use strict";
function e(n,i){this.$body=t(document.body),this.$scrollElement=t(t(n).is(document.body)?window:n),this.options=t.extend({},e.DEFAULTS,i),
this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,
this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function n(n){return this.each(function(){
var i=t(this),o=i.data("bs.scrollspy"),r="object"==typeof n&&n;o||i.data("bs.scrollspy",o=new e(this,r)),"string"==typeof n&&o[n]();
})}e.VERSION="3.4.1",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight);
},e.prototype.refresh=function(){var e=this,n="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),
t.isWindow(this.$scrollElement[0])||(n="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){
var e=t(this),o=e.data("target")||e.attr("href"),r=/^#./.test(o)&&t(o);return r&&r.length&&r.is(":visible")&&[[r[n]().top+i,o]]||null;
}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){
var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),i=this.options.offset+n-this.$scrollElement.height(),o=this.offsets,r=this.targets,s=this.activeTarget;
if(this.scrollHeight!=n&&this.refresh(),e>=i)return s!=(t=r[r.length-1])&&this.activate(t);if(s&&e<o[0])return this.activeTarget=null,
this.clear();for(t=o.length;t--;)s!=r[t]&&e>=o[t]&&(void 0===o[t+1]||e<o[t+1])&&this.activate(r[t])},e.prototype.activate=function(e){
this.activeTarget=e,this.clear();var n=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',i=t(n).parents("li").addClass("active");
i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){
t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=t.fn.scrollspy;t.fn.scrollspy=n,t.fn.scrollspy.Constructor=e,
t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){
var e=t(this);n.call(e,e.data())})})}(t)}).call(e,n(1))},function(t,e,n){(function(t){+function(t){"use strict";function e(e){return this.each(function(){
var i=t(this),o=i.data("bs.tab");o||i.data("bs.tab",o=new n(this)),"string"==typeof e&&o[e]()})}var n=function(e){this.element=t(e);
};n.VERSION="3.4.1",n.TRANSITION_DURATION=150,n.prototype.show=function(){var e=this.element,n=e.closest("ul:not(.dropdown-menu)"),i=e.data("target");
if(i||(i=e.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var o=n.find(".active:last a"),r=t.Event("hide.bs.tab",{
relatedTarget:e[0]}),s=t.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(r),e.trigger(s),!s.isDefaultPrevented()&&!r.isDefaultPrevented()){
var a=t(document).find(i);this.activate(e.closest("li"),n),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",
relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},n.prototype.activate=function(e,i,o){function r(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),
e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),
e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),
o&&o()}var s=i.find("> .active"),a=o&&t.support.transition&&(s.length&&s.hasClass("fade")||!!i.find("> .fade").length);s.length&&a?s.one("bsTransitionEnd",r).emulateTransitionEnd(n.TRANSITION_DURATION):r(),
s.removeClass("in")};var i=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=n,t.fn.tab.noConflict=function(){return t.fn.tab=i,this};var o=function(n){
n.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o);
}(t)}).call(e,n(1))},function(t,e,n){(function(t){+function(t){"use strict";function e(e,n){var i=e.nodeName.toLowerCase();if(t.inArray(i,n)!==-1)return t.inArray(i,r)===-1||Boolean(e.nodeValue.match(l)||e.nodeValue.match(u));
for(var o=t(n).filter(function(t,e){return e instanceof RegExp}),s=0,a=o.length;s<a;s++)if(i.match(o[s]))return!0;return!1}function n(n,i,o){
if(0===n.length)return n;if(o&&"function"==typeof o)return o(n);if(!document.implementation||!document.implementation.createHTMLDocument)return n;
var r=document.implementation.createHTMLDocument("sanitization");r.body.innerHTML=n;for(var s=t.map(i,function(t,e){return e}),a=t(r.body).find("*"),l=0,u=a.length;l<u;l++){
var c=a[l],d=c.nodeName.toLowerCase();if(t.inArray(d,s)!==-1)for(var f=t.map(c.attributes,function(t){return t}),p=[].concat(i["*"]||[],i[d]||[]),h=0,g=f.length;h<g;h++)e(f[h],p)||c.removeAttribute(f[h].nodeName);else c.parentNode.removeChild(c);
}return r.body.innerHTML}function i(e){return this.each(function(){var n=t(this),i=n.data("bs.tooltip"),o="object"==typeof e&&e;!i&&/destroy|hide/.test(e)||(i||n.data("bs.tooltip",i=new c(this,o)),
"string"==typeof e&&i[e]())})}var o=["sanitize","whiteList","sanitizeFn"],r=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],s=/^aria-[\w-]*$/i,a={
"*":["class","dir","id","lang","role",s],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],
h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],
sup:[],strong:[],u:[],ul:[]},l=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,u=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,c=function(t,e){
this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e);
};c.VERSION="3.4.1",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:a
},c.prototype.init=function(e,n,i){if(this.enabled=!0,this.type=e,this.$element=t(n),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&t(document).find(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),
this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");
for(var o=this.options.trigger.split(" "),r=o.length;r--;){var s=o[r];if("click"==s)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=s){
var a="hover"==s?"mouseenter":"focusin",l="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),
this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{
trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(e){
var i=this.$element.data();for(var r in i)i.hasOwnProperty(r)&&t.inArray(r,o)!==-1&&delete i[r];return e=t.extend({},this.getDefaults(),i,e),
e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e.sanitize&&(e.template=n(e.template,e.whiteList,e.sanitizeFn)),
e},c.prototype.getDelegateOptions=function(){var e={},n=this.getDefaults();return this._options&&t.each(this._options,function(t,i){
n[t]!=i&&(e[t]=i)}),e},c.prototype.enter=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);
return n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),e instanceof t.Event&&(n.inState["focusin"==e.type?"focus":"hover"]=!0),
n.tip().hasClass("in")||"in"==n.hoverState?void(n.hoverState="in"):(clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){
"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show())},c.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;
return!1},c.prototype.leave=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),
t(e.currentTarget).data("bs."+this.type,n)),e instanceof t.Event&&(n.inState["focusout"==e.type?"focus":"hover"]=!1),!n.isInStateTrue())return clearTimeout(n.timeout),
n.hoverState="out",n.options.delay&&n.options.delay.hide?void(n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)):n.hide();
},c.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var n=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(e.isDefaultPrevented()||!n)return;var i=this,o=this.tip(),r=this.getUID(this.type);this.setContent(),o.attr("id",r),this.$element.attr("aria-describedby",r),
this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,l=a.test(s);
l&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(t(document).find(this.options.container)):o.insertAfter(this.$element),
this.$element.trigger("inserted.bs."+this.type);var u=this.getPosition(),d=o[0].offsetWidth,f=o[0].offsetHeight;if(l){var p=s,h=this.getPosition(this.$viewport);
s="bottom"==s&&u.bottom+f>h.bottom?"top":"top"==s&&u.top-f<h.top?"bottom":"right"==s&&u.right+d>h.width?"left":"left"==s&&u.left-d<h.left?"right":s,
o.removeClass(p).addClass(s)}var g=this.getCalculatedOffset(s,u,d,f);this.applyPlacement(g,s);var m=function(){var t=i.hoverState;
i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};t.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",m).emulateTransitionEnd(c.TRANSITION_DURATION):m();
}},c.prototype.applyPlacement=function(e,n){var i=this.tip(),o=i[0].offsetWidth,r=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);
isNaN(s)&&(s=0),isNaN(a)&&(a=0),e.top+=s,e.left+=a,t.offset.setOffset(i[0],t.extend({using:function(t){i.css({top:Math.round(t.top),
left:Math.round(t.left)})}},e),0),i.addClass("in");var l=i[0].offsetWidth,u=i[0].offsetHeight;"top"==n&&u!=r&&(e.top=e.top+r-u);var c=this.getViewportAdjustedDelta(n,e,l,u);
c.left?e.left+=c.left:e.top+=c.top;var d=/top|bottom/.test(n),f=d?2*c.left-o+l:2*c.top-r+u,p=d?"offsetWidth":"offsetHeight";i.offset(e),
this.replaceArrow(f,i[0][p],d)},c.prototype.replaceArrow=function(t,e,n){this.arrow().css(n?"left":"top",50*(1-t/e)+"%").css(n?"top":"left","");
},c.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=n(e,this.options.whiteList,this.options.sanitizeFn)),
t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},c.prototype.hide=function(e){
function n(){"in"!=i.hoverState&&o.detach(),i.$element&&i.$element.removeAttr("aria-describedby").trigger("hidden.bs."+i.type),e&&e();
}var i=this,o=t(this.$tip),r=t.Event("hide.bs."+this.type);if(this.$element.trigger(r),!r.isDefaultPrevented())return o.removeClass("in"),
t.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(c.TRANSITION_DURATION):n(),this.hoverState=null,
this},c.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","");
},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(e){e=e||this.$element;var n=e[0],i="BODY"==n.tagName,o=n.getBoundingClientRect();
null==o.width&&(o=t.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var r=window.SVGElement&&n instanceof window.SVGElement,s=i?{
top:0,left:0}:r?null:e.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},l=i?{width:t(window).width(),
height:t(window).height()}:null;return t.extend({},o,a,l,s)},c.prototype.getCalculatedOffset=function(t,e,n,i){return"bottom"==t?{
top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-i/2,
left:e.left-n}:{top:e.top+e.height/2-i/2,left:e.left+e.width}},c.prototype.getViewportAdjustedDelta=function(t,e,n,i){var o={top:0,
left:0};if(!this.$viewport)return o;var r=this.options.viewport&&this.options.viewport.padding||0,s=this.getPosition(this.$viewport);
if(/right|left/.test(t)){var a=e.top-r-s.scroll,l=e.top+r-s.scroll+i;a<s.top?o.top=s.top-a:l>s.top+s.height&&(o.top=s.top+s.height-l);
}else{var u=e.left-r,c=e.left+r+n;u<s.left?o.left=s.left-u:c>s.right&&(o.left=s.left+s.width-c)}return o},c.prototype.getTitle=function(){
var t,e=this.$element,n=this.options;return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title);
},c.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},c.prototype.tip=function(){
if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");
return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){
this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},
c.prototype.toggle=function(e){var n=this;e&&(n=t(e.currentTarget).data("bs."+this.type),n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),
t(e.currentTarget).data("bs."+this.type,n))),e?(n.inState.click=!n.inState.click,n.isInStateTrue()?n.enter(n):n.leave(n)):n.tip().hasClass("in")?n.leave(n):n.enter(n);
},c.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),
t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},c.prototype.sanitizeHtml=function(t){return n(t,this.options.whiteList,this.options.sanitizeFn);
};var d=t.fn.tooltip;t.fn.tooltip=i,t.fn.tooltip.Constructor=c,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=d,this}}(t);
}).call(e,n(1))},function(t,e,n){(function(t){+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={
WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"
};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,i=this;t(this).one("bsTransitionEnd",function(){
n=!0});var o=function(){n||t(i).trigger(t.support.transition.end)};return setTimeout(o,e),this},t(function(){t.support.transition=e(),
t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){
if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})})}(t)}).call(e,n(1))}]);