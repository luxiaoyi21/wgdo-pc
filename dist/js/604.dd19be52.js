(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[604],{604:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return p}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"item"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-in"},[e("p",{staticClass:"aintro"},[t._v(t._s(t.$t("about.contact")))]),e("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"10px","margin-bottom":"5px"}}),e("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),t._l(t.contactDatas,(function(s){return e("div",{staticClass:"content-dsc"},[e("div",{staticClass:"intro",staticStyle:{"margin-bottom":"50px"},domProps:{innerHTML:t._s(s.contentDetails)}})])}))],2),e("div",{staticClass:"enroll"},[e("div",{staticClass:"enroll-in"},[e("p",{staticClass:"message"},[t._v(t._s(t.$t("about.welcome")))]),e("div",{staticClass:"enroll-input"},[e("el-input",{staticClass:"enroll-content",attrs:{placeholder:"",type:"textarea",autosize:{minRows:1.8,maxRows:1.8}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),e("el-button",{attrs:{type:"submit"},on:{click:t.Send}},[e("img",{attrs:{src:s(794),alt:""}})])],1)])])])])},o=[],i=s(5596),r=s.n(i),a=s(2964),l=s(1981),c={name:"Contact",props:["tabDatas"],data(){return{contactDatas:[],input:""}},mounted(){this.getContactData()},methods:{getContactData(t=this.$store.state.lang.version){(0,a.aJ)({moduleType:"4",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.contactDatas=t.data.rows)}))},async Send(){if(""!==this.input.trim())try{await(0,a.QB)({message:this.input});r()({message:"信息发送成功",type:"success"}),this.input=""}catch(t){r()({message:"信息发送失败",type:"error"})}else r()({message:"输入内容不能为空",type:"warning"})}},watch:{"$store.state.lang.version":{handler(){(0,l.A)(this.getContactData(),this.$store.state.lang.version)}}}},u=c,f=s(1656),d=(0,f.A)(u,n,o,!1,null,"0b4faf7e",null),p=d.exports},5596:function(t,e,s){s(4114),t.exports=function(t){var e={};function s(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/dist/",s(s.s=81)}({0:function(t,e,s){"use strict";function n(t,e,s,n,o,i,r,a){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:c}}s.d(e,"a",(function(){return n}))},13:function(t,e){t.exports=s(2752)},17:function(t,e){t.exports=s(7012)},23:function(t,e){t.exports=s(9699)},7:function(t,e){t.exports=s(6848)},81:function(t,e,s){"use strict";s.r(e);var n=s(7),o=s.n(n),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"el-message-fade"},on:{"after-leave":t.handleAfterLeave}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],class:["el-message",t.type&&!t.iconClass?"el-message--"+t.type:"",t.center?"is-center":"",t.showClose?"is-closable":"",t.customClass],style:t.positionStyle,attrs:{role:"alert"},on:{mouseenter:t.clearTimer,mouseleave:t.startTimer}},[t.iconClass?s("i",{class:t.iconClass}):s("i",{class:t.typeClass}),t._t("default",[t.dangerouslyUseHTMLString?s("p",{staticClass:"el-message__content",domProps:{innerHTML:t._s(t.message)}}):s("p",{staticClass:"el-message__content"},[t._v(t._s(t.message))])]),t.showClose?s("i",{staticClass:"el-message__closeBtn el-icon-close",on:{click:t.close}}):t._e()],2)])},r=[];i._withStripped=!0;var a={success:"success",info:"info",warning:"warning",error:"error"},l={data:function(){return{visible:!1,message:"",duration:3e3,type:"info",iconClass:"",customClass:"",onClose:null,showClose:!1,closed:!1,verticalOffset:20,timer:null,dangerouslyUseHTMLString:!1,center:!1}},computed:{typeClass:function(){return this.type&&!this.iconClass?"el-message__icon el-icon-"+a[this.type]:""},positionStyle:function(){return{top:this.verticalOffset+"px"}}},watch:{closed:function(t){t&&(this.visible=!1)}},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.closed=!0,"function"===typeof this.onClose&&this.onClose(this)},clearTimer:function(){clearTimeout(this.timer)},startTimer:function(){var t=this;this.duration>0&&(this.timer=setTimeout((function(){t.closed||t.close()}),this.duration))},keydown:function(t){27===t.keyCode&&(this.closed||this.close())}},mounted:function(){this.startTimer(),document.addEventListener("keydown",this.keydown)},beforeDestroy:function(){document.removeEventListener("keydown",this.keydown)}},c=l,u=s(0),f=Object(u["a"])(c,i,r,!1,null,null,null);f.options.__file="packages/message/src/main.vue";var d=f.exports,p=s(13),m=s(23),g=s(17),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},v=o.a.extend(d),y=void 0,C=[],A=1,b=function t(e){if(!o.a.prototype.$isServer){e=e||{},"string"===typeof e&&(e={message:e});var s=e.onClose,n="message_"+A++;e.onClose=function(){t.close(n,s)},y=new v({data:e}),y.id=n,Object(m["isVNode"])(y.message)&&(y.$slots.default=[y.message],y.message=null),y.$mount(),document.body.appendChild(y.$el);var i=e.offset||20;return C.forEach((function(t){i+=t.$el.offsetHeight+16})),y.verticalOffset=i,y.visible=!0,y.$el.style.zIndex=p["PopupManager"].nextZIndex(),C.push(y),y}};["success","warning","info","error"].forEach((function(t){b[t]=function(e){return Object(g["isObject"])(e)&&!Object(m["isVNode"])(e)?b(h({},e,{type:t})):b({type:t,message:e})}})),b.close=function(t,e){for(var s=C.length,n=-1,o=void 0,i=0;i<s;i++)if(t===C[i].id){o=C[i].$el.offsetHeight,n=i,"function"===typeof e&&e(C[i]),C.splice(i,1);break}if(!(s<=1||-1===n||n>C.length-1))for(var r=n;r<s-1;r++){var a=C[r].$el;a.style["top"]=parseInt(a.style["top"],10)-o-16+"px"}},b.closeAll=function(){for(var t=C.length-1;t>=0;t--)C[t].close()};var w=b;e["default"]=w}})},9699:function(t,e,s){"use strict";e.__esModule=!0;var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.isVNode=i;var o=s(2125);function i(t){return null!==t&&"object"===("undefined"===typeof t?"undefined":n(t))&&(0,o.hasOwn)(t,"componentOptions")}},794:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAG4SURBVFiFzZhRlsMgCEWxZ/Y1dmVjV2Z29uZjjMcgRkUyiV9thMcVKLV19LAFIBZvP7eB8AUgoF6x73k9mAcQBTgAwBPBQvn8LjixnAB82r+nxI2sZbDCLmfzTjARINnm/a9/gItE5NnjjYg+zrlNcOG216xenw362cPOlLMH+CiwQieaA2rL2dDK/hZgQ2NDCRiswbqiOI4Q39nXAa6Us3eYJUDmPF1OlnGxv6AZMdpyzsJxQI1wN8AKHLftiZqMjRk4Zi/bnpRzCkwDl3xk+xOwMAumhWOAoXy49OnswA1nH60Rg2O/qcEErWE4wTf7vYjoh9l6DWQ6dan1btz35oWFEudUY6APVzInabQ2ee9UsFfBJZ0cf+QkQz+ireCSVjPOmZMvgD3bkw5R2SkAg8ZfEjzr3R12KBgsrlmCaCxEy9fTwOyw9oAsUC+z+4FyO6AxA4mI3Aogpd+wzrlKJwXag/FZ21xc66UFHFzfRdA3/f3ft53Y2/0fKJW42DuUueG/t0PE4lfsMCDkW1EwDawFbHw47oHjgELW7Eu2CPiMrJUL9UX3kqyp5yBRvgMSEW0mdz9h/QLlolDN5MVElQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=604.dd19be52.js.map