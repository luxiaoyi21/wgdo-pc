"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[630],{6630:function(t,s,a){a.r(s),a.d(s,{default:function(){return A}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"item"},[s("div",{staticClass:"content"},[s("div",{staticClass:"content-in"},[s("p",{staticClass:"aintro"},[t._v("联系我们")]),s("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),s("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),t._l(t.contactDatas,(function(a){return s("div",{staticClass:"content-dsc"},[s("div",{staticStyle:{"margin-bottom":"50px",opacity:"1","font-size":"15px","font-weight":"400","letter-spacing":"0px","line-height":"25px",color:"rgba(51, 51, 51, 1)","text-align":"justify","vertical-align":"top"},domProps:{innerHTML:t._s(a.contentDetails)}})])}))],2),s("div",{staticClass:"enroll"},[s("div",{staticClass:"enroll-in"},[s("p",{staticClass:"message"},[t._v(t._s(t.$t("about.welcome")))]),s("div",{staticClass:"enroll-input"},[s("el-input",{staticClass:"enroll-content",attrs:{placeholder:"",type:"textarea",autosize:{minRows:1.8}},model:{value:t.input,callback:function(s){t.input=s},expression:"input"}}),s("el-button",{attrs:{type:"success"},on:{click:t.Send}},[s("img",{attrs:{src:a(794),alt:""}})])],1)])])])])},n=[],i=a(2964),o=a(1981),l={name:"Contact",props:["tabDatas"],data(){return{contactDatas:[...this.tabDatas],input:""}},mounted(){this.getContactData()},methods:{getContactData(t=this.$store.state.lang.version){(0,i.aJ)({moduleType:"4",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(console.log(t.data.rows),this.contactDatas=t.data.rows)}))},async Send(){if(""!==this.input.trim())try{const t=await Message({message:this.input});console.log("服务器响应:",t.data),this.$message({message:"信息发送成功",type:"success"}),this.input=""}catch(t){console.error("发送信息时出错:",t),this.$message({message:"信息发送失败",type:"error"})}else this.$message({message:"输入内容不能为空",type:"warning"})},watch:{"$store.state.lang.version":{handler(){(0,o.A)(this.getContactData(),this.$store.state.lang.version)}}}}},c=l,r=a(1656),g=(0,r.A)(c,e,n,!1,null,"98464630",null),A=g.exports},794:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAG4SURBVFiFzZhRlsMgCEWxZ/Y1dmVjV2Z29uZjjMcgRkUyiV9thMcVKLV19LAFIBZvP7eB8AUgoF6x73k9mAcQBTgAwBPBQvn8LjixnAB82r+nxI2sZbDCLmfzTjARINnm/a9/gItE5NnjjYg+zrlNcOG216xenw362cPOlLMH+CiwQieaA2rL2dDK/hZgQ2NDCRiswbqiOI4Q39nXAa6Us3eYJUDmPF1OlnGxv6AZMdpyzsJxQI1wN8AKHLftiZqMjRk4Zi/bnpRzCkwDl3xk+xOwMAumhWOAoXy49OnswA1nH60Rg2O/qcEErWE4wTf7vYjoh9l6DWQ6dan1btz35oWFEudUY6APVzInabQ2ee9UsFfBJZ0cf+QkQz+ireCSVjPOmZMvgD3bkw5R2SkAg8ZfEjzr3R12KBgsrlmCaCxEy9fTwOyw9oAsUC+z+4FyO6AxA4mI3Aogpd+wzrlKJwXag/FZ21xc66UFHFzfRdA3/f3ft53Y2/0fKJW42DuUueG/t0PE4lfsMCDkW1EwDawFbHw47oHjgELW7Eu2CPiMrJUL9UX3kqyp5yBRvgMSEW0mdz9h/QLlolDN5MVElQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=630.82f99321.js.map