"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[66,884,586,695,964],{3329:function(t,a,e){e.d(a,{A:function(){return c}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[t._m(0),a("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},t._l(t.urlData,(function(e){return a("el-breadcrumb-item",{attrs:{to:{path:e.path}}},[a("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),t._v(" "+t._s(e.name)+" ")])})),1)],1)},n=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:e(8605)}})])}],i=(e(2964),{name:"Breadcrumb",props:["urlData"],data(){return{}},mounted(){},computed:{},methods:{addBreadcrumb(t){const a={name:"组织动态详情",path:`${t.path}/dynamicinfo`};this.$emit("update:urlData",[...this.urlData,a])}}}),r=i,o=e(1656),l=(0,o.A)(r,s,n,!1,null,"3b7e43d3",null),c=l.exports},3299:function(t,a,e){e.d(a,{A:function(){return c}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"bgs"}),a("div",{staticClass:"f"},[a("div",{staticClass:"hTop"},[t._m(0),a("div",{staticClass:"right"},[a("div",{staticClass:"search"},[a("i",{staticClass:"iconfont icon-sousuo scarchI"}),a("el-input",{staticClass:"searchIn",attrs:{placeholder:t.$t("headernav.search")},model:{value:t.searchInp,callback:function(a){t.searchInp=a},expression:"searchInp"}})],1),a("div",{staticClass:"rightList"},[a("div",{staticClass:"login"},[a("a",{attrs:{href:"login"}},[t._v(t._s(t.$t("headernav.Login")))])]),a("div",{staticClass:"loginO"}),a("div",{staticClass:"sed"},[t._v(t._s(t.$t("headernav.Be our merber")))]),a("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:t.changeLang}},[a("div",{staticClass:"lang"},[t._v(t._s(t.lang))]),t._m(1)])])])]),a("div",{ref:"changeLangue",class:"中文"===t.$store.state.lang.langs?"zhBottom":"enBottom"},[a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/about"===t.$route.path},attrs:{to:"/about"}},[t._v(" "+t._s(t.$t("headernav.Aboutus"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/meet"===t.$route.path},attrs:{to:"/meet"}},[t._v(" "+t._s(t.$t("headernav.Conferenceactivity"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/media"===t.$route.path},attrs:{to:"/media"}},[t._v(" "+t._s(t.$t("headernav.Mediacenter"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/research"===t.$route.path},attrs:{to:"/research"}},[t._v(" "+t._s(t.$t("headernav.Academicresearch"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/project"===t.$route.path},attrs:{to:"/project"}},[t._v(" "+t._s(t.$t("headernav.Publicwelfareproject"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/prize"===t.$route.path},attrs:{to:"/prize"}},[t._v(" "+t._s(t.$t("headernav.InternationalGreenAward"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/wgdo"===t.$route.path},attrs:{to:"/wgdo"}},[t._v(" "+t._s(t.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn},attrs:{to:"http://lyb.wgdo.net/"}},[t._v(" "+t._s(t.$t("headernav.Greenleaflabel"))+" ")])],1)])])},n=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:e(5158),alt:""}})])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"langO",staticStyle:{display:"none"}},[a("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],i={name:"HeaderNav",data(){let t="",a="中文";return{searchInp:t,lang:a}},created(){this.lang=this.$store.state.lang.langs},mounted(){this.$nextTick((()=>{const t="中文"===this.lang?"zhBottom":"enBottom",a="中文"===this.lang?"ens":"zhs";this.$refs.changeLangue&&this.$refs.changeLangue.classList.add(t),this.$refs.changeLanguea&&this.$refs.changeLanguea.length&&this.$refs.changeLanguea.forEach((t=>{t.classList.add(a)}))}))},methods:{changeLang(){this.$store.commit("getLocalLang"),this.$store.commit("getVersion")}},watch:{"$store.state.lang.isText1Visible":{handler(){this.lang=this.$store.state.lang.langs}}}},r=i,o=e(1656),l=(0,o.A)(r,s,n,!1,null,"4244a355",null),c=l.exports},1247:function(t,a,e){e.d(a,{A:function(){return c}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"dynamic-data"},[a("div",{staticClass:"dynamic-data-num"},[a("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),a("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),a("div",{staticClass:"devide-page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a},"current-change":t.handlePageChange}},[t._v("> ")])],1)])},n=[],i={name:"Pagination",props:["tabDatas","currentPage","totalItems","pageSize"],data(){return{}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.tabDatas.slice(t,a)}},methods:{handlePageChange(t){this.currentPage=t}}},r=i,o=e(1656),l=(0,o.A)(r,s,n,!1,null,"787f8041",null),c=l.exports},3884:function(t,a,e){e.r(a),e.d(a,{default:function(){return g}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"aintro"},[t._v(t._s(t.$t("about.Introduction")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),t._l(t.introDatas,(function(e){return a("div",{key:e.aboutusId,staticStyle:{"margin-bottom":"50px"}},[a("div",{staticStyle:{opacity:"1","font-size":"15px","font-weight":"400","letter-spacing":"0px","line-height":"25px",color:"rgba(51, 51, 51, 1)","text-align":"justify","vertical-align":"top"},domProps:{innerHTML:t._s(e.contentDetails)}})])}))],2)])])},n=[],i=e(2964),r=e(1981),o={name:"Aboutintro",props:["tabDatas"],data(){return{introDatas:[...this.tabDatas]}},mounted(){this.getAboutintroData(),this.addImageStyles()},methods:{getAboutintroData(t=this.$store.state.lang.version){(0,i.aJ)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.introDatas=t.data.rows)}))},addImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .content-in img {\n                    width: 100%;\n                    \n                    background-size: cover;\n                    background-position: center;\n                }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getAboutintroData(),this.$store.state.lang.version)}}}},l=o,c=e(1656),u=(0,c.A)(l,s,n,!1,null,"102e4d09",null),g=u.exports},6586:function(t,a,e){e.r(a),e.d(a,{default:function(){return g}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"aintro"},[t._v(t._s(t.$t("about.structure")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),t._l(t.orDatas,(function(e){return a("div",{key:e.aboutusId,staticStyle:{"margin-bottom":"50px"}},[a("div",{staticStyle:{opacity:"1","font-size":"15px","font-weight":"400","letter-spacing":"0px","line-height":"25px",color:"rgba(51, 51, 51, 1)","text-align":"justify","vertical-align":"top"},domProps:{innerHTML:t._s(e.contentDetails)}})])}))],2)])])},n=[],i=e(2964),r=e(1981),o={name:"Aboutor",props:["tabDatas"],data(){return{orDatas:[...this.tabDatas]}},mounted(){this.getAboutorData(),this.addImageStyles()},methods:{getAboutorData(t=this.$store.state.lang.version){(0,i.aJ)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.orDatas=t.data.rows)}))},addImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .content-in img {\n                    width: 100%;\n                    background-size: cover;\n                    background-position: center;\n                }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getAboutorData(),this.$store.state.lang.version)}}}},l=o,c=e(1656),u=(0,c.A)(l,s,n,!1,null,"3d4b155a",null),g=u.exports},1964:function(t,a,e){e.r(a),e.d(a,{default:function(){return g}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"aintro"},[t._v(t._s(t.$t("about.contact")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),t._l(t.contactDatas,(function(e){return a("div",{staticClass:"content-dsc"},[a("div",{staticStyle:{"margin-bottom":"50px",opacity:"1","font-size":"15px","font-weight":"400","letter-spacing":"0px","line-height":"25px",color:"rgba(51, 51, 51, 1)","text-align":"justify","vertical-align":"top"},domProps:{innerHTML:t._s(e.contentDetails)}})])}))],2),a("div",{staticClass:"enroll"},[a("div",{staticClass:"enroll-in"},[a("p",{staticClass:"message"},[t._v(t._s(t.$t("about.welcome")))]),a("div",{staticClass:"enroll-input"},[a("el-input",{staticClass:"enroll-content",attrs:{placeholder:"",type:"textarea",autosize:{minRows:1.8}},model:{value:t.input,callback:function(a){t.input=a},expression:"input"}}),a("el-button",{attrs:{type:"success"},on:{click:t.Send}},[a("img",{attrs:{src:e(794),alt:""}})])],1)])])])])},n=[],i=e(2964),r=e(1981),o={name:"Contact",props:["tabDatas"],data(){return{contactDatas:[...this.tabDatas],input:""}},mounted(){this.getContactData()},methods:{getContactData(t=this.$store.state.lang.version){(0,i.aJ)({moduleType:"4",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.contactDatas=t.data.rows)}))},async Send(){if(""!==this.input.trim())try{const t=await Message({message:this.input});console.log("服务器响应:",t.data),this.$message({message:"信息发送成功",type:"success"}),this.input=""}catch(t){console.error("发送信息时出错:",t),this.$message({message:"信息发送失败",type:"error"})}else this.$message({message:"输入内容不能为空",type:"warning"})}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getContactData(),this.$store.state.lang.version)}}}},l=o,c=e(1656),u=(0,c.A)(l,s,n,!1,null,"70c0fe44",null),g=u.exports},7066:function(t,a,e){e.r(a),e.d(a,{default:function(){return _}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("Headers"),a("div",{staticClass:"content"},[(t.tabName,t.tabDatas?a("newTabControl",{attrs:{tabName:t.tabName,tabDatas:t.tabDatas},on:{gindex:t.getGindex}}):t._e())],1),a("div",{staticClass:"foot"},[a("Footers")],1)],1)},n=[],i=e(3299),r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"tc"},[a("el-tabs",{staticClass:"ets",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[t._l(t.tabName[0]?.children,(function(e,s){return a("el-tab-pane",{key:s,staticClass:"etp",attrs:{label:e.classifyName,name:e.classifyName}},[a("Breadcrumb",{attrs:{urlData:t.urlData}})],1)})),1===t.currentNum?a("Aboutintro",{attrs:{tabDatas:t.localDatas}}):t._e(),2===t.currentNum?a("Aboutor",{attrs:{tabDatas:t.localDatas}}):t._e(),3===t.currentNum?a("Person",{attrs:{tabDatas:t.localDatas}}):t._e(),4===t.currentNum?a("Contact",{attrs:{tabDatas:t.localDatas}}):t._e()],2)],1)},o=[],l=(e(4114),e(2964)),c=e(3329),u=e(3884),g=e(6586),h=e(6695),d=e(1964),m={name:"Tc",components:{Breadcrumb:c.A,Aboutintro:u["default"],Aboutor:g["default"],Person:h["default"],Contact:d["default"]},props:["tabName","tabDatas"],data(){return{activeName:"",currentNum:1,localName:[],localDatas:[],routesData:[],currentRoute:[],urlData:[]}},mounted(){this.getCurrentData(),setTimeout((()=>{this.activeName=this.tabName[0]?.children[0]?.classifyName,this.handleClick({$options:{propsData:{name:this.activeName}}})}),500),this.routesData=this.$router.options.routes,this.currentRoute=this.$router.history.current,this.routesData.forEach((t=>{t.name===this.currentRoute.name&&this.urlData.push(t)}))},methods:{handleClick(t){this.currentNum=Number(t.index)+1,sessionStorage.setItem("currentNums",this.currentNum),this.urlData.length>1&&this.urlData.pop();let a=t.$options.propsData.name;this.urlData.push({name:a})},getCurrentData(){let t=sessionStorage.getItem("currentNums");this.localName=this.tabName,this.localDatas=this.tabDatas;let a=JSON.parse(sessionStorage.getItem("ln"));if(!a){sessionStorage.setItem("ln",JSON.stringify(this.localName));JSON.parse(sessionStorage.getItem("ln"))}this.$emit("gindex",this.currentNum),void 0===t?(this.currentNum=1,this.activeName=a[0].children[0].classifyName):(this.currentNum=t,a[0].children.forEach(((t,a)=>{Number(a)+1==this.currentNum&&(this.activeName=t.classifyName)})))},getTabNameData(t){"2"===t?(0,l.rk)({parentId:2}).then((t=>{this.localName=t.data.rows,sessionStorage.setItem("ln",JSON.stringify(this.localName))})):"144"===t&&(0,l.rk)({parentId:144}).then((t=>{this.localName=t.data.rows,sessionStorage.setItem("ln",JSON.stringify(this.localName))}))}},watch:{currentNum:{handler(){this.$emit("gindex",this.currentNum);let t=JSON.parse(sessionStorage.getItem("ln"));if(t&&t[0]&&t[0].children&&t[0].children.length>0){let a=t[0].children.find((t=>Number(t.index)===Number(this.currentNum)));a&&(this.activeName=a.classifyName)}}},tabDatas:{handler(t){this.localDatas=t}},"$store.state.lang.version":{handler(){"en"===this.$store.state.lang.isEn?this.getTabNameData("144"):this.getTabNameData("2")}}},beforeRouteLeave(t,a,e){sessionStorage.removeItem("currentNums"),sessionStorage.removeItem("ln"),e()}},p=m,v=e(1656),b=(0,v.A)(p,r,o,!1,null,"c4c1d840",null),A=b.exports,f=e(7329),C=e(1981),D={name:"Aboutus",components:{Headers:i.A,newTabControl:A,Footers:f.A,Aboutintro:u["default"],Aboutor:g["default"],Person:h["default"],Contact:d["default"]},props:["urlData"],data(){return{tabDatas:[],currentNum:1,name:[],tabName:[],gindex:-1}},mounted(){this.getTabNameData(),"en"===this.$store.state.lang.isEn?this.getTabNameData("144"):this.getTabNameData("2"),this.getAboutusData()},methods:{getTabNameData(t){"2"===t?(0,l.rk)({parentId:2}).then((t=>{this.tabName=t.data.rows})):"144"===t&&(0,l.rk)({parentId:144}).then((t=>{this.tabName=t.data.rows}))},getAboutusData(t,a=this.$store.state.lang.version){(0,l.aJ)({moduleType:t,version:a,status:"1"}).then((t=>{this.tabDatas=t.data.rows}))},getGindex(t){this.gindex=t}},watch:{"$store.state.lang.version":{handler(){(0,C.A)(this.getTabNameData(),this.$store.state.lang.version),"en"===this.$store.state.lang.isEn?this.getTabNameData("144"):this.getTabNameData("2"),this.getAboutusData(this.gindex,this.$store.state.lang.version)}},gindex:{handler(){this.getAboutusData(this.gindex,this.$store.state.lang.version)}}}},y=D,N=(0,v.A)(y,s,n,!1,null,"745eae84",null),_=N.exports},6695:function(t,a,e){e.r(a),e.d(a,{default:function(){return h}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("about.figures")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.personDatas,(function(e){return a("div",{key:e.aboutusId,staticClass:"dsc-in"},[a("div",{staticClass:"dsc-left"},[a("img",{attrs:{src:"http://www.wgdo.net"+e.figureHeadportrait,alt:""}})]),a("div",{staticClass:"dsc-right"},[a("p",{staticClass:"person-name"},[t._v(t._s(e.figureName))]),a("p",{staticClass:"person-intro"},[t._v(t._s(e.figureIntroduce)+" ")])])])})),0),a("Pagination",{attrs:{tabDatas:t.tabDatas,pageSize:t.pageSize,currentPage:t.currentPage,totalItems:t.totalItems},on:{currentTabDatas:t.currentTabDatas}})],1)])])},n=[],i=e(2964),r=e(1981),o=e(1247),l={name:"Person",props:["tabDatas"],components:{Pagination:o.A},data(){return{personDatas:[...this.tabDatas],currentPage:1,totalItems:0,pageSize:4}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.personDatas.slice(t,a)}},mounted(){this.getPersonData(),this.handlePageChange()},methods:{getPersonData(t=this.$store.state.lang.version){(0,i.aJ)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.personDatas=t.data.rows,this.totalItems=t.data.rows.length)}))},handlePageChange(t){this.currentPage=t}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getPersonData(),this.$store.state.lang.version)}}}},c=l,u=e(1656),g=(0,u.A)(c,s,n,!1,null,"9e1bb93e",null),h=g.exports},8605:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="},794:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAG4SURBVFiFzZhRlsMgCEWxZ/Y1dmVjV2Z29uZjjMcgRkUyiV9thMcVKLV19LAFIBZvP7eB8AUgoF6x73k9mAcQBTgAwBPBQvn8LjixnAB82r+nxI2sZbDCLmfzTjARINnm/a9/gItE5NnjjYg+zrlNcOG216xenw362cPOlLMH+CiwQieaA2rL2dDK/hZgQ2NDCRiswbqiOI4Q39nXAa6Us3eYJUDmPF1OlnGxv6AZMdpyzsJxQI1wN8AKHLftiZqMjRk4Zi/bnpRzCkwDl3xk+xOwMAumhWOAoXy49OnswA1nH60Rg2O/qcEErWE4wTf7vYjoh9l6DWQ6dan1btz35oWFEudUY6APVzInabQ2ee9UsFfBJZ0cf+QkQz+ireCSVjPOmZMvgD3bkw5R2SkAg8ZfEjzr3R12KBgsrlmCaCxEy9fTwOyw9oAsUC+z+4FyO6AxA4mI3Aogpd+wzrlKJwXag/FZ21xc66UFHFzfRdA3/f3ft53Y2/0fKJW42DuUueG/t0PE4lfsMCDkW1EwDawFbHw47oHjgELW7Eu2CPiMrJUL9UX3kqyp5yBRvgMSEW0mdz9h/QLlolDN5MVElQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=66.989062a9.js.map