(function(e){function t(t){for(var r,s,c=t[0],i=t[1],u=t[2],f=0,v=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&v.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(v.length)v.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/incremental-religion/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"85ec":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"formatAsInteger",(function(){return b})),n.d(r,"formatNumber",(function(){return _}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",{attrs:{fluid:""}},[n("GameHeader"),n("v-row",{attrs:{justify:"center"}},[n("v-btn",{staticClass:"mx-1",attrs:{to:"/"}},[e._v(" Followers ")]),n("v-btn",{staticClass:"mx-1",attrs:{to:"/achievements"}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-trophy")]),e._v(" Achievements ")],1),n("v-btn",{staticClass:"mx-1",attrs:{to:"/settings"}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-cog")]),e._v(" Settings ")],1)],1)],1),n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"text-center text-body-2"},[n("span",{staticClass:"text-h4"},[e._v(e._s(e.religionName))]),n("br"),e._v(" You have "),n("span",{staticClass:"text-h5"},[e._v(e._s(e.formatAsInteger(e.followers)))]),e._v(" followers "),n("br"),e._v(" "+e._s(e.formatNumber(10*e.followersPerSecond))+" followers / 10 seconds "),n("br"),e._v(" You have "),n("span",{staticClass:"text-h6"},[e._v(e._s(e.formatAsInteger(e.money)))]),e._v(" money "),n("br"),e._v(" "+e._s(e.formatNumber(e.moneyPerSecond))+" money / second ")])},i=[],u=(n("a630"),n("3ca3"),n("d4ec")),l=n("bee2"),f=function(){function e(t){Object(u["a"])(this,e),this.tier=t,this.count=0}return Object(l["a"])(e,[{key:"convertsPerSecond",get:function(){return.5*this.count}},{key:"costForOne",get:function(){return Math.pow(10,this.tier)*(this.count+1)}}]),e}(),v={religionName:"Your Super Awesome Religion",money:0,get moneyPerSecond(){return.5*Math.floor(this.followers)},followers:0,get followersPerSecond(){return this.convertersTiers[0].convertsPerSecond},convertersTiers:Array.from({length:3},(function(e,t){return new f(t+1)})),achievements:[]},p={update:function(e){var t=e/1e3;v.money+=v.moneyPerSecond*t,v.followers+=v.followersPerSecond*t;for(var n=1;n<v.convertersTiers.length;n++){var r=v.convertersTiers[n];v.convertersTiers[n-1].count+=r.convertsPerSecond*t}}},d={state:v,actions:p},h=n("5530"),m=3;function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=Math.floor(e);return n<Math.pow(10,t-1)?n:n.toPrecision(t)}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m;return e.toPrecision(t)}var y={methods:Object(h["a"])({},r)},g=o["a"].extend({mixins:[y],data:function(){return d.state}}),w=g,x=n("2877"),O=Object(x["a"])(w,c,i,!1,null,null,null),j=O.exports,P=o["a"].extend({components:{GameHeader:j}}),S=P,T=(n("034f"),n("6544")),k=n.n(T),C=n("7496"),I=n("8336"),A=n("a523"),M=n("132d"),V=n("0fd9"),$=Object(x["a"])(S,a,s,!1,null,null,null),E=$.exports;k()($,{VApp:C["a"],VBtn:I["a"],VContainer:A["a"],VIcon:M["a"],VRow:V["a"]});var N=n("8c4f"),R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.convertersTiers,(function(t,r){return n("div",{key:r},[e._v(" Converters Tier "+e._s(r+1)+": "+e._s(e.formatAsInteger(t.count))+" "),n("v-btn",{attrs:{outlined:""},on:{click:function(e){t.count++}}},[e._v(" Buy ")])],1)})),0)},B=[],Y=o["a"].extend({data:function(){return d.state},mixins:[y]}),F=Y,G=Object(x["a"])(F,R,B,!1,null,null,null),H=G.exports;k()(G,{VBtn:I["a"]});var J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("settings component")])},q=[],z={state:{updatesPerSecond:30},actions:{}},D=o["a"].extend({data:function(){return z.state}}),K=D,L=Object(x["a"])(K,J,q,!1,null,null,null),Q=L.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" achievements component ")])},W=[],X={},Z=Object(x["a"])(X,U,W,!1,null,null,null),ee=Z.exports;o["a"].use(N["a"]);var te=[{path:"/",component:H},{path:"/settings",component:Q},{path:"/achievements",component:ee}],ne=new N["a"]({routes:te}),re=ne,oe=n("f309");o["a"].use(oe["a"]);var ae=new oe["a"]({}),se=function(){function e(t){Object(u["a"])(this,e),this.handler=t}return Object(l["a"])(e,[{key:"startOrRestart",value:function(e){var t=this;this.stop();var n=performance.now();this.intervalId=setInterval((function(){var e=performance.now()-n;t.handler(e),n+=e}),1e3/e)}},{key:"stop",value:function(){clearInterval(this.intervalId)}}]),e}();function ce(e){d.actions.update(e)}var ie=new se(ce);o["a"].config.productionTip=!1,new o["a"]({router:re,vuetify:ae,render:function(e){return e(E)}}).$mount("#app"),ie.startOrRestart(z.state.updatesPerSecond)}});
//# sourceMappingURL=app.eca907ce.js.map