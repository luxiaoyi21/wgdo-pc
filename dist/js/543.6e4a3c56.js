"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[543,445,769,940],{3329:function(t,a,e){e.d(a,{A:function(){return l}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[t._m(0),a("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},t._l(t.urlData,(function(e){return a("el-breadcrumb-item",{attrs:{to:{path:e.path}}},[a("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),t._v(" "+t._s(e.name)+" ")])})),1)],1)},n=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:e(8605)}})])}],i=(e(2964),{name:"Breadcrumb",props:["urlData"],data(){return{}},mounted(){},computed:{},methods:{addBreadcrumb(t){const a={name:"组织动态详情",path:`${t.path}/dynamicinfo`};this.$emit("update:urlData",[...this.urlData,a])}}}),r=i,o=e(1656),c=(0,o.A)(r,s,n,!1,null,"3b7e43d3",null),l=c.exports},3038:function(t,a,e){e.d(a,{A:function(){return l}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"bgs"}),a("div",{staticClass:"f"},[a("div",{staticClass:"hTop"},[a("a",{attrs:{href:"/"}},[a("div",{staticClass:"logo"},[a("img",{style:t.getLogoStyle(),attrs:{src:t.getLogoPath(),alt:"Logo"}})])]),a("div",{staticClass:"right"},[a("div",{staticClass:"search"},[a("i",{staticClass:"iconfont icon-sousuo scarchI"}),a("el-input",{staticClass:"searchIn",attrs:{placeholder:t.$t("headernav.search")},model:{value:t.searchInp,callback:function(a){t.searchInp=a},expression:"searchInp"}})],1),a("div",{staticClass:"rightList"},[a("div",{staticClass:"login"},[a("a",{attrs:{href:"login"}},[t._v(t._s(t.$t("headernav.Login")))])]),a("div",{staticClass:"loginO"}),a("div",{staticClass:"sed"},[t._v(t._s(t.$t("headernav.Be our merber")))]),a("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:t.changeLang}},[a("div",{staticClass:"lang"},[t._v(t._s(t.lang))]),t._m(0)])])])]),a("div",{ref:"changeLangue",class:"中文"===t.$store.state.lang.langs?"zhBottom":"enBottom"},[a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/about"===t.$route.path},attrs:{to:"/about"}},[t._v(" "+t._s(t.$t("headernav.Aboutus"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/meet"===t.$route.path},attrs:{to:"/meet"}},[t._v(" "+t._s(t.$t("headernav.Conferenceactivity"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/media"===t.$route.path},attrs:{to:"/media"}},[t._v(" "+t._s(t.$t("headernav.Mediacenter"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/research"===t.$route.path},attrs:{to:"/research"}},[t._v(" "+t._s(t.$t("headernav.Academicresearch"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/project"===t.$route.path},attrs:{to:"/project"}},[t._v(" "+t._s(t.$t("headernav.Publicwelfareproject"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/prize"===t.$route.path},attrs:{to:"/prize"}},[t._v(" "+t._s(t.$t("headernav.InternationalGreenAward"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/wgdo"===t.$route.path},attrs:{to:"/wgdo"}},[t._v(" "+t._s(t.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn},attrs:{to:"http://lyb.wgdo.net/"}},[t._v(" "+t._s(t.$t("headernav.Greenleaflabel"))+" ")])],1)])])},n=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"langO",staticStyle:{display:"none"}},[a("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],i={name:"HeaderNav",data(){let t="",a="中文";return{searchInp:t,lang:a,currentRoute:""}},created(){this.lang=this.$store.state.lang.langs},mounted(){this.$nextTick((()=>{const t="中文"===this.lang?"zhBottom":"enBottom",a="中文"===this.lang?"ens":"zhs";this.$refs.changeLangue&&this.$refs.changeLangue.classList.add(t),this.$refs.changeLanguea&&this.$refs.changeLanguea.length&&this.$refs.changeLanguea.forEach((t=>{t.classList.add(a)}))}))},methods:{changeLang(){this.$store.commit("getLocalLang"),this.$store.commit("getVersion")},getLogoPath(){return"en"===this.$store.state.lang.isEn?e(6140):e(5158)},getLogoStyle(){return"en"===this.$store.state.lang.isEn?{transform:"scale(0.78) translateX(-54px)"}:null},setCurrentRoute(t){this.currentRoute=t}},watch:{"$store.state.lang.isText1Visible":{handler(){this.lang=this.$store.state.lang.langs}}}},r=i,o=e(1656),c=(0,o.A)(r,s,n,!1,null,"2055e38b",null),l=c.exports},1247:function(t,a,e){e.d(a,{A:function(){return l}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"dynamic-data"},[a("div",{staticClass:"dynamic-data-num"},[a("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),a("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),a("div",{staticClass:"devide-page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a},"current-change":t.handlePageChange}},[t._v("> ")])],1)])},n=[],i={name:"Pagination",props:["tabDatas","currentPage","totalItems","pageSize"],data(){return{}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.tabDatas.slice(t,a)}},methods:{handlePageChange(t){this.currentPage=t}}},r=i,o=e(1656),c=(0,o.A)(r,s,n,!1,null,"787f8041",null),l=c.exports},6644:function(t,a,e){e.r(a),e.d(a,{default:function(){return M}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("Headers"),a("div",{staticClass:"content"},[(t.tabName,t.tabDatas?a("newTabControl",{attrs:{tabName:t.tabName,tabDatas:t.tabDatas},on:{gindex:t.getGindex}}):t._e())],1),a("div",{staticClass:"foot"},[a("Footers")],1)],1)},n=[],i=e(3038),r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"tc"},[a("el-tabs",{staticClass:"ets",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[t._l(t.tabName[0]?.children,(function(e,s){return a("el-tab-pane",{key:s,staticClass:"etp",attrs:{label:e.classifyName,name:e.classifyName}},[a("Breadcrumb",{attrs:{urlData:t.urlData}})],1)})),1===t.currentNum?a("Preview",{attrs:{tabDatas:t.localDatas}}):t._e(),2===t.currentNum?a("Doing",{attrs:{tabDatas:t.localDatas}}):t._e(),3===t.currentNum?a("Lookback",{attrs:{tabDatas:t.localDatas}}):t._e()],2)],1)},o=[],c=(e(4114),e(2964)),l=e(3329),h=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[t.showChild?a("router-view"):t._e(),t.showChild?t._e():a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("meet.previewact")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{}}),a("div",{staticClass:"dynamic-dsc"},[t._l(t.previewDatas,(function(e,s){return a("router-link",{key:e.conferenceId,staticClass:"dynamic-content",attrs:{to:t.isSecondLink(s)?{name:"Previewinfo",query:{id:e.conferenceId}}:{path:e.externalLink}},nativeOn:{click:function(a){return t.handleLinkClick()}}},[a("div",{staticClass:"dynamic-img"},[a("img",{attrs:{src:"http://www.wgdo.net"+e.cover,alt:""}})]),a("div",{staticClass:"dynamic-dscall"},[a("div",{staticClass:"dscall-top"},[a("div",{staticClass:"dscall-title"},[t._v(t._s(e.title))]),a("div",{staticClass:"dscall-content",attrs:{title:e.intro}},[t._v(t._s(e.intro))])]),a("div",{staticClass:"dscall-time"},[t._v(t._s(e.releaseTime))])])])})),a("Pagination",{attrs:{tabDatas:t.tabDatas,pageSize:t.pageSize,currentPage:t.currentPage,totalItems:t.totalItems},on:{currentTabDatas:t.currentTabDatas}})],2)])])],1)},u=[],d=e(8540),g=e(1247),m=e(1981),v={name:"Preview",props:["tabDatas"],components:{Previewinfo:d.Previewinfo,Pagination:g.A},data(){return{previewDatas:[],currentPage:1,totalItems:0,pageSize:5,conferenceId:0,showChild:!1}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.previewDatas.slice(t,a)}},mounted(){this.getPreviewData()},created(){},methods:{isSecondLink(t){return t%2===0},getPreviewData(t=this.$store.state.lang.version){(0,c.wk)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.previewDatas=t.data.rows,this.totalItems=t.data.rows.length)}))},handlePageChange(t){this.currentPage=t},handleLinkClick(t){const a=this.$route.query;this.showChild=!0,a||this.$router.push({name:"Previewinfo"})}},watch:{"$store.state.lang.version":{handler(){(0,m.A)(this.getPreviewData(),this.$store.state.lang.version)}},immediate:!0}},p=v,f=e(1656),b=(0,f.A)(p,h,u,!1,null,"7a7e1ac1",null),C=b.exports,D=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[t.showChild?a("router-view"):t._e(),t.showChild?t._e():a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("meet.doing")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line"}),a("div",{staticClass:"dynamic-dsc"},t._l(t.doingDatas,(function(e,s){return a("router-link",{key:e.conferenceId,staticClass:"doing-in",attrs:{to:t.isSecondLink(s)?{name:"Doinginfo",query:{id:e.conferenceId}}:{path:e.externalLink}},nativeOn:{click:function(a){return t.handleLinkClick()}}},[a("div",{staticClass:"doing-img"},[a("img",{attrs:{src:"http://www.wgdo.net"+e.cover,alt:""}})]),a("p",{staticClass:"doing-intro"},[t._v(t._s(e.title))])])})),1)])])],1)},k=[],w={name:"Doing",props:["tabDatas"],data(){return{doingDatas:[],showChild:!1}},mounted(){this.getDoingData()},methods:{isSecondLink(t){return t%2===0},getDoingData(t=this.$store.state.lang.version){(0,c.wk)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.doingDatas=t.data.rows)}))},handleLinkClick(t){const a=this.$route.query;this.showChild=!0,a||this.$router.push({name:"Doinginfo"})}},watch:{"$store.state.lang.version":{handler(){(0,m.A)(this.getDoingData(),this.$store.state.lang.version)}}}},$=w,_=(0,f.A)($,D,k,!1,null,"d2ac326c",null),N=_.exports,A=e(5423),y=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[t.showChild?a("router-view"):t._e(),t.showChild?t._e():a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("meet.lookback")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.lookbackDatas,(function(e,s){return a("router-link",{key:e.conferenceId,staticClass:"doing-in",attrs:{to:t.isSecondLink(s)?{name:"Lookbackinfo",query:{id:e.conferenceId}}:{path:e.externalLink}},nativeOn:{click:function(a){return t.handleLinkClick()}}},[a("div",{staticClass:"doing-img"},[a("img",{attrs:{src:"http://www.wgdo.net"+e.cover,alt:""}})]),a("p",{staticClass:"doing-intro"},[t._v(t._s(e.title))])])})),1),a("Pagination",{attrs:{tabDatas:t.tabDatas,pageSize:t.pageSize,currentPage:t.currentPage,totalItems:t.totalItems},on:{currentTabDatas:t.currentTabDatas}})],1)])],1)},L=[],I={name:"Lookback",props:["tabDatas"],components:{Pagination:g.A},data(){return{lookbackDatas:[],currentPage:1,totalItems:0,pageSize:9,showChild:!1}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.lookbackDatas.slice(t,a)}},mounted(){this.getLookbackData()},methods:{isSecondLink(t){return t%2===0},getLookbackData(t=this.$store.state.lang.version){(0,c.wk)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.lookbackDatas=t.data.rows,this.totalItems=t.data.rows.length)}))},handlePageChange(t){this.c,urrentPage=t},handleLinkClick(t){const a=this.$route.query;this.showChild=!0,a||this.$router.push({name:"Lookbackinfo"})}},watch:{"$store.state.lang.version":{handler(){(0,m.A)(this.getLookbackData(),this.$store.state.lang.version)}}}},S=I,x=(0,f.A)(S,y,L,!1,null,"31db2f15",null),P=x.exports,E=e(9772),T={name:"Tc",components:{Breadcrumb:l.A,Preview:C,Doing:N,Lookback:P},props:["tabName","tabDatas"],data(){return{activeName:"",currentNum:1,localName:[],localDatas:[],routesData:[],currentRoute:[],urlData:[]}},mounted(){this.getCurrentData(),setTimeout((()=>{this.activeName=this.tabName[0]?.children[0]?.classifyName,this.handleClick({$options:{propsData:{name:this.activeName}}})}),500),this.routesData=this.$router.options.routes,this.currentRoute=this.$router.history.current,this.routesData.forEach((t=>{t.name===this.currentRoute.name&&this.urlData.push(t)}))},methods:{handleClick(t){this.currentNum=Number(t.index)+1,sessionStorage.setItem("currentNums",this.currentNum),this.urlData.length>1&&this.urlData.pop();let a=t.$options.propsData.name;this.urlData.push({name:a})},getCurrentData(){let t=sessionStorage.getItem("currentNums");this.localName=this.tabName,this.localDatas=this.tabDatas;let a=JSON.parse(sessionStorage.getItem("ln"));if(!a){sessionStorage.setItem("ln",JSON.stringify(this.localName));JSON.parse(sessionStorage.getItem("ln"))}this.$emit("gindex",this.currentNum),void 0===t?(this.currentNum=1,this.activeName=a[0].children[0].classifyName):(this.currentNum=t,a[0].children.forEach(((t,a)=>{Number(a)+1==this.currentNum&&(this.activeName=t.classifyName)})))},getTabNameData(t){"3"===t?(0,c.rk)({parentId:3}).then((t=>{this.localName=t.data.rows,sessionStorage.setItem("ln",JSON.stringify(this.localName))})):"145"===t&&(0,c.rk)({parentId:145}).then((t=>{this.localName=t.data.rows,sessionStorage.setItem("ln",JSON.stringify(this.localName))}))}},watch:{currentNum:{handler(){this.$emit("gindex",this.currentNum);let t=JSON.parse(sessionStorage.getItem("ln"));if(t&&t[0]&&t[0].children&&t[0].children.length>0){let a=t[0].children.find((t=>Number(t.index)===Number(this.currentNum)));a&&(this.activeName=a.classifyName)}}},tabDatas:{handler(t){this.localDatas=t}},"$store.state.lang.version":{handler(){"en"===this.$store.state.lang.isEn?this.getTabNameData("145"):this.getTabNameData("3")}}},beforeRouteLeave(t,a,e){sessionStorage.removeItem("currentNums"),sessionStorage.removeItem("ln"),e()}},z=T,R=(0,f.A)(z,r,o,!1,null,"8e9cd6b6",null),B=R.exports,O=e(5341),J={name:"Meet",components:{Headers:i.A,newTabControl:B,Footers:O.A,Preview:C,Previewinfo:d["default"],Doing:N,Doinginfo:A["default"],Lookback:P,Lookbackinfo:E["default"]},props:["urlData"],data(){return{tabName:[],MeetDatas:[],tabDatas:[],currentNum:1,name:[],gindex:-1}},created(){},mounted(){"en"===this.$store.state.lang.isEn?this.getTabNameData("145"):this.getTabNameData("3"),this.getMeetData()},methods:{getTabNameData(t){"3"===t?(0,c.rk)({parentId:3}).then((t=>{this.tabName=t.data.rows})):"145"===t&&(0,c.rk)({parentId:145}).then((t=>{this.tabName=t.data.rows}))},getMeetData(t,a=this.$store.state.lang.version){(0,c.wk)({moduleType:t,version:a,status:"1"}).then((t=>{this.tabDatas=t.data.rows}))},getGindex(t){this.gindex=t}},watch:{"$store.state.lang.version":{handler(){(0,m.A)(this.getTabNameData(),this.$store.state.lang.version),"en"===this.$store.state.lang.isEn?this.getTabNameData("145"):this.getTabNameData("3"),this.getMeetData(this.gindex,this.$store.state.lang.version)}},gindex:{handler(){this.getMeetData(this.gindex,this.$store.state.lang.version)}}}},q=J,G=(0,f.A)(q,s,n,!1,null,"f845dbc2",null),M=G.exports},8605:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="},6140:function(t,a,e){t.exports=e.p+"img/logoen.b57f11d2.png"}}]);
//# sourceMappingURL=543.6e4a3c56.js.map