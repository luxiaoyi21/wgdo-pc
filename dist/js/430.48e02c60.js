"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[430,557,38,759],{3329:function(t,a,e){e.d(a,{A:function(){return l}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[t._m(0),a("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},t._l(t.urlData,(function(e){return a("el-breadcrumb-item",{attrs:{to:{path:e.path}}},[a("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),t._v(" "+t._s(e.name)+" ")])})),1)],1)},i=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:e(8605)}})])}],n=(e(2964),{name:"Breadcrumb",props:["urlData"],data(){return{}},mounted(){},computed:{},methods:{addBreadcrumb(t){const a={name:"组织动态详情",path:`${t.path}/dynamicinfo`};this.$emit("update:urlData",[...this.urlData,a])}}}),r=n,o=e(1656),c=(0,o.A)(r,s,i,!1,null,"3b7e43d3",null),l=c.exports},3038:function(t,a,e){e.d(a,{A:function(){return l}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"bgs"}),a("div",{staticClass:"f"},[a("div",{staticClass:"hTop"},[a("a",{attrs:{href:"/"}},[a("div",{staticClass:"logo"},[a("img",{style:t.getLogoStyle(),attrs:{src:t.getLogoPath(),alt:"Logo"}})])]),a("div",{staticClass:"right"},[a("div",{staticClass:"search"},[a("i",{staticClass:"iconfont icon-sousuo scarchI"}),a("el-input",{staticClass:"searchIn",attrs:{placeholder:t.$t("headernav.search")},model:{value:t.searchInp,callback:function(a){t.searchInp=a},expression:"searchInp"}})],1),a("div",{staticClass:"rightList"},[a("div",{staticClass:"login"},[a("a",{attrs:{href:"login"}},[t._v(t._s(t.$t("headernav.Login")))])]),a("div",{staticClass:"loginO"}),a("div",{staticClass:"sed"},[t._v(t._s(t.$t("headernav.Be our merber")))]),a("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:t.changeLang}},[a("div",{staticClass:"lang"},[t._v(t._s(t.lang))]),t._m(0)])])])]),a("div",{ref:"changeLangue",class:"中文"===t.$store.state.lang.langs?"zhBottom":"enBottom"},[a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/about"===t.$route.path},attrs:{to:"/about"}},[t._v(" "+t._s(t.$t("headernav.Aboutus"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/meet"===t.$route.path},attrs:{to:"/meet"}},[t._v(" "+t._s(t.$t("headernav.Conferenceactivity"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/media"===t.$route.path},attrs:{to:"/media"}},[t._v(" "+t._s(t.$t("headernav.Mediacenter"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/research"===t.$route.path},attrs:{to:"/research"}},[t._v(" "+t._s(t.$t("headernav.Academicresearch"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/project"===t.$route.path},attrs:{to:"/project"}},[t._v(" "+t._s(t.$t("headernav.Publicwelfareproject"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/prize"===t.$route.path},attrs:{to:"/prize"}},[t._v(" "+t._s(t.$t("headernav.InternationalGreenAward"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/wgdo"===t.$route.path},attrs:{to:"/wgdo"}},[t._v(" "+t._s(t.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn},attrs:{to:"http://lyb.wgdo.net/"}},[t._v(" "+t._s(t.$t("headernav.Greenleaflabel"))+" ")])],1)])])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"langO",staticStyle:{display:"none"}},[a("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],n={name:"HeaderNav",data(){let t="",a="中文";return{searchInp:t,lang:a,currentRoute:""}},created(){this.lang=this.$store.state.lang.langs},mounted(){this.$nextTick((()=>{const t="中文"===this.lang?"zhBottom":"enBottom",a="中文"===this.lang?"ens":"zhs";this.$refs.changeLangue&&this.$refs.changeLangue.classList.add(t),this.$refs.changeLanguea&&this.$refs.changeLanguea.length&&this.$refs.changeLanguea.forEach((t=>{t.classList.add(a)}))}))},methods:{changeLang(){this.$store.commit("getLocalLang"),this.$store.commit("getVersion")},getLogoPath(){return"en"===this.$store.state.lang.isEn?e(6140):e(5158)},getLogoStyle(){return"en"===this.$store.state.lang.isEn?{transform:"scale(0.78) translateX(-54px)"}:null},setCurrentRoute(t){this.currentRoute=t}},watch:{"$store.state.lang.isText1Visible":{handler(){this.lang=this.$store.state.lang.langs}}}},r=n,o=e(1656),c=(0,o.A)(r,s,i,!1,null,"2055e38b",null),l=c.exports},1247:function(t,a,e){e.d(a,{A:function(){return l}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"dynamic-data"},[a("div",{staticClass:"dynamic-data-num"},[a("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),a("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),a("div",{staticClass:"devide-page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a},"current-change":t.handlePageChange}},[t._v("> ")])],1)])},i=[],n={name:"Pagination",props:["tabDatas","currentPage","totalItems","pageSize"],data(){return{}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.tabDatas.slice(t,a)}},methods:{handlePageChange(t){this.currentPage=t}}},r=n,o=e(1656),c=(0,o.A)(r,s,i,!1,null,"787f8041",null),l=c.exports},4557:function(t,a,e){e.r(a),e.d(a,{default:function(){return h}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},t._l(t.dynamicinfoDatas,(function(e){return t.dynamicinfoDatas.length>0?a("div",{key:e.mediacenterId,staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(e.title))]),a("div",{staticClass:"info"},[a("div",{staticClass:"info-browser"},[t._v(t._s(t.$t("meet.browser"))+"："+t._s(e.clickVolume))]),a("div",{staticClass:"info-create"},[t._v(t._s(t.$t("meet.create"))+"："+t._s(e.releaseTime))])]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},[a("div",{staticClass:"intro",domProps:{innerHTML:t._s(e.contentDetails)}})])]):t._e()})),0)])},i=[],n=e(2964),r=e(1981),o={name:"Dynamicinfo",props:["tabDatas","id"],data(){return{dynamicinfoDatas:[]}},mounted(){this.getDynamicinfoData()},methods:{getDynamicinfoData(){const t=this.$route.query.id,a=this.$store.state.lang.version;(0,n.$U)({status:"1",version:a,id:t}).then((a=>{a.data&&Array.isArray(a.data.rows)&&a.data.rows.length>0&&(this.dynamicinfoDatas=a.data.rows.filter((a=>a.mediacenterId===t)))}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getDynamicinfoData(),this.$store.state.lang.version)}},"$route.query.id":{handler(){this.getDynamicinfoData()},immediate:!0}}},c=o,l=e(1656),d=(0,l.A)(c,s,i,!1,null,"4a7d2b44",null),h=d.exports},8430:function(t,a,e){e.r(a),e.d(a,{default:function(){return U}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("Headers"),a("div",{staticClass:"content"},[(t.tabName,t.tabDatas?a("newTabControl",{attrs:{tabName:t.tabName,tabDatas:t.tabDatas},on:{gindex:t.getGindex}}):t._e())],1),a("div",{staticClass:"foot"},[a("Footers")],1)],1)},i=[],n=e(3038),r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("el-tabs",{staticClass:"ets",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},t._l(t.tabName,(function(e,s){return a("el-tab-pane",{key:s,staticClass:"etp",attrs:{label:e,name:e}},[a("Breadcrumb",{attrs:{urlData:t.urlData}})],1)})),1)],1)},o=[],c=(e(4114),e(3329)),l=e(2964),d=e(1981),h={components:{Breadcrumb:c.A},props:["tabName"],data(){return{activeName:"",tabDatas:[],routesData:[],currentRoute:[],urlData:[],aboutmap:{"组织介绍":"1","组织架构":"2","重要人物":"3","联系我们":"4"},meetmap:{"活动预告":"1","正在进行":"2","历届回顾":"3"},mediamap:{"组织动态":"1","论坛视频":"2","媒体报道":"3","动态详情":"4","报告详情":"5"},researchmap:{"绿色设计报告":"1","绿色设计国际标准":"2","绿色设计国际实验室":"3","共享资源":"4","绿色设计报告详情":"5"},projectmap:{"绿叶之家":"1","绿丝带":"2","绿丝带物资到货记录":"3","绿丝带行动捐赠光荣榜":"5","可信供方清单":"4","抗疫宣传":"7","联系方式":"6"},prizemap:{"绿色设计国际大奖":"1","绿色设计国际贡献大奖":"3","评定规则":"2","获奖个人":"6","获奖机构":"5"},Mapping:{"机构简介":"1","分支扩建":"2","品牌服务":"3","绿色政策":"5","绿色设计培训":"4"},Map:{...this.aboutmap,...this.meetmap,...this.mediamap,...this.researchmap,...this.projectmap,...this.prizemap,...this.Mapping}}},mounted(){this.activeName=this.tabName[0],this.routesData=this.$router.options.routes,this.currentRoute=this.$router.history.current,this.routesData.forEach((t=>{t.name===this.currentRoute.name&&this.urlData.push(t)})),this.handleClick({$options:{propsData:{name:this.activeName}}})},methods:{handleClick(t,a){this.urlData.length>1&&this.urlData.pop();let e=t.$options.propsData.name;this.urlData.push({name:e}),this.Map[e]?(this.getHomeAllTitleData(this.Map[e]),this.$emit("tabclickDatas",e)):this.aboutmap[e]?(this.getAboutusData(this.aboutmap[e]),this.$emit("tabclickDatas",e)):this.meetmap[e]?(this.getMeetData(this.meetmap[e]),this.$emit("tabclickDatas",e)):this.mediamap[e]?(this.getMediaData(this.mediamap[e]),this.$emit("tabclickDatas",e)):this.researchmap[e]?(this.getResearchData(this.researchmap[e]),this.$emit("tabclickDatas",e)):this.projectmap[e]?(this.getProjectData(this.projectmap[e]),this.$emit("tabclickDatas",e)):this.prizemap[e]?(this.getPrizeData(this.prizemap[e]),this.$emit("tabclickDatas",e)):this.Mapping[e]&&(this.getWgdoData(this.Mapping[e]),this.$emit("tabclickDatas",e))},getAboutusData(t){(0,l.aJ)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Aboutus",this.tabDatas)}))},getMeetData(t){(0,l.wk)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Meet",this.tabDatas)}))},getMediaData(t){(0,l.$U)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Media",this.tabDatas)}))},getResearchData(t){(0,l.is)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Research",this.tabDatas)}))},getProjectData(t){(0,l.MM)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Project",this.tabDatas)}))},getPrizeData(t){(0,l.zE)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Prize",this.tabDatas)}))},getWgdoData(t){(0,l.Ev)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("WgdoData",this.tabDatas)}))},getHomeAllTitleData(t){(0,l.rk)({parentId:t}).then((t=>{this.tabDatas=t.data.rows,this.$emit("getHomeAllTitle",this.tabDatas)}))}},watch:{tabName(t){t&&t.length>0&&(this.activeName=t[0],this.handleClick({$options:{propsData:{name:this.activeName}}}))}}},m=h,u=e(1656),g=(0,u.A)(m,r,o,!1,null,"7548fa57",null),p=g.exports,v=function(){var t=this,a=t._self._c;return a("div",{staticClass:"tc"},[a("el-tabs",{staticClass:"ets",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[t._l(t.tabName[0]?.children,(function(e,s){return a("el-tab-pane",{key:s,staticClass:"etp",attrs:{label:e.classifyName,name:e.classifyName}},[a("Breadcrumb",{attrs:{urlData:t.urlData}})],1)})),1===t.currentNum?a("Dynamic",{attrs:{tabDatas:t.localDatas}}):t._e(),2===t.currentNum?a("Video",{attrs:{tabDatas:t.localDatas}}):t._e(),3===t.currentNum?a("Report",{attrs:{tabDatas:t.localDatas}}):t._e()],2)],1)},D=[],b=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[t.showChild?a("router-view"):t._e(),t.showChild?t._e():a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("dynamic.dynamics")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line"}),t._l(t.dynamicDatas,(function(e){return a("div",{key:e.mediacenterId,staticClass:"dynamic-dsc"},[a("router-link",{staticClass:"dynamic-content",attrs:{to:{name:"Dynamicinfo",query:{id:e.mediacenterId}}},nativeOn:{click:function(a){return t.handleLinkClick()}}},[a("div",{staticClass:"dynamic-time"},[a("div",{staticClass:"dynamic-time-top"},[t._v(t._s(e.timer))]),a("div",{staticClass:"dynamic-time-buttom"},[t._v(t._s(e.year))])]),a("div",{staticClass:"dynamic-blank"},[a("div",{staticClass:"dynamic-blankin"})]),a("div",{staticClass:"dynamic-dscall"},[a("div",{staticClass:"dynamic-dscall-top"},[t._v(t._s(e.title))]),a("div",{staticClass:"dynamic-dscall-buttom",attrs:{title:e.intro}},[t._v(t._s(e.intro))])])])],1)})),a("Pagination",{attrs:{tabDatas:t.tabDatas,pageSize:t.pageSize,currentPage:t.currentPage,totalItems:t.totalItems},on:{currentTabDatas:t.currentTabDatas}})],2)])],1)},f=[],C=e(1247),y={name:"Dynamic",props:["tabDatas"],components:{Pagination:C.A},data(){return{dynamicDatas:[],currentPage:1,totalItems:0,pageSize:10,time:[],day:[],showChild:!1}},mounted(){this.getMediaData()},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.dynamicDatas.slice(t,a)}},methods:{getMediaData(t=this.$store.state.lang.version){(0,l.$U)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.dynamicDatas=t.data.rows.map((t=>{const a=this.gettime(t.releaseTime);return{...t,year:a.year,timer:a.timer}})),this.totalItems=t.data.rows.length)}))},gettime(t){const a=new Date(t),e=a.getFullYear(),s=("0"+(a.getMonth()+1)).slice(-2),i=("0"+a.getDate()).slice(-2);return{year:e,timer:s+"-"+i}},handlePageChange(t){this.currentPage=t},handleLinkClick(t){this.showChild=!0;const a=this.$route.query;a||this.$router.push({name:"Dynamicinfo"})}},watch:{"$store.state.lang.version":{handler(){(0,d.A)(this.getMediaData(),this.$store.state.lang.version)}}}},$=y,_=(0,u.A)($,b,f,!1,null,"62a333fe",null),A=_.exports,N=e(4038),w=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[t.showChild?a("router-view"):t._e(),t.showChild?t._e():a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("dynamic.report")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.reportDatas,(function(e){return a("router-link",{key:e.mediacenterId,staticClass:"dynamic-content",attrs:{to:{name:"Reportinfo",query:{id:e.mediacenterId}}},nativeOn:{click:function(a){return t.handleLinkClick()}}},[a("div",{staticClass:"dynamic-time"},[a("div",{staticClass:"dynamic-time-top"},[t._v(t._s(e.timer))]),a("div",{staticClass:"dynamic-time-buttom"},[t._v(t._s(e.year))])]),a("div",{staticClass:"dynamic-blank"},[a("div",{staticClass:"dynamic-blankin"})]),a("div",{staticClass:"dynamic-dscall"},[a("div",{staticClass:"dynamic-dscall-top"},[t._v(t._s(e.title))]),a("div",{staticClass:"dynamic-dscall-buttom",attrs:{title:e.intro}},[t._v(t._s(e.intro))])])])})),1)])])],1)},k=[],x={name:"Report",props:["tabDatas"],data(){return{reportDatas:[],showChild:!1}},mounted(){this.getReportData()},methods:{getReportData(t=this.$store.state.lang.version){(0,l.$U)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.reportDatas=t.data.rows.map((t=>{const a=this.gettime(t.releaseTime);return{...t,year:a.year,timer:a.timer}})))}))},gettime(t){const a=new Date(t),e=a.getFullYear(),s=("0"+(a.getMonth()+1)).slice(-2),i=("0"+a.getDate()).slice(-2);return{year:e,timer:s+"-"+i}},handleLinkClick(t){const a=this.$route.query;this.showChild=!0,a||this.$router.push({name:"Reportinfo"})}},watch:{"$store.state.lang.version":{handler(){(0,d.A)(this.getReportData(),this.$store.state.lang.version)}}}},I=x,T=(0,u.A)(I,w,k,!1,null,"48f33be2",null),S=T.exports,E={name:"Tc",components:{Breadcrumb:c.A,Dynamic:A,Video:N["default"],Report:S},props:["tabName","tabDatas"],data(){return{activeName:"",currentNum:1,localName:[],localDatas:[],routesData:[],currentRoute:[],urlData:[]}},mounted(){this.getCurrentData(),setTimeout((()=>{this.activeName=this.tabName[0]?.children[0]?.classifyName,this.handleClick({$options:{propsData:{name:this.activeName}}})}),500),this.routesData=this.$router.options.routes,this.currentRoute=this.$router.history.current,this.routesData.forEach((t=>{t.name===this.currentRoute.name&&this.urlData.push(t)}))},methods:{handleClick(t){this.currentNum=Number(t.index)+1,sessionStorage.setItem("currentNums",this.currentNum),this.urlData.length>1&&this.urlData.pop();let a=t.$options.propsData.name;this.urlData.push({name:a})},getCurrentData(){let t=sessionStorage.getItem("currentNums");this.localName=this.tabName,this.localDatas=this.tabDatas;let a=JSON.parse(sessionStorage.getItem("ln"));if(!a){sessionStorage.setItem("ln",JSON.stringify(this.localName));JSON.parse(sessionStorage.getItem("ln"))}this.$emit("gindex",this.currentNum),void 0===t?(this.currentNum=1,this.activeName=a[0].children[0].classifyName):(this.currentNum=t,a[0].children.forEach(((t,a)=>{Number(a)+1==this.currentNum&&(this.activeName=t.classifyName)})))},getTabNameData(t){"4"===t?(0,l.rk)({parentId:4}).then((t=>{this.localName=t.data.rows,sessionStorage.setItem("ln",JSON.stringify(this.localName))})):"146"===t&&(0,l.rk)({parentId:146}).then((t=>{this.localName=t.data.rows,sessionStorage.setItem("ln",JSON.stringify(this.localName))}))}},watch:{currentNum:{handler(){this.$emit("gindex",this.currentNum);let t=JSON.parse(sessionStorage.getItem("ln"));if(t&&t[0]&&t[0].children&&t[0].children.length>0){let a=t[0].children.find((t=>Number(t.index)===Number(this.currentNum)));a&&(this.activeName=a.classifyName)}}},tabDatas:{handler(t){this.localDatas=t}},"$store.state.lang.version":{handler(){"en"===this.$store.state.lang.isEn?this.getTabNameData("146"):this.getTabNameData("4")}}},beforeRouteLeave(t,a,e){sessionStorage.removeItem("currentNums"),sessionStorage.removeItem("ln"),e()}},P=E,R=(0,u.A)(P,v,D,!1,null,"5c764dc3",null),L=R.exports,z=e(5341),M=e(4557),B=e(759),V={name:"Media",components:{Headers:n.A,newTabControl:L,TabControl:p,Footers:z.A,Dynamic:A,Video:N["default"],Report:S,Dynamicinfo:M["default"],Reportinfo:B["default"]},props:["urlData"],data(){return{MediaDatas:[],tabDatas:[],currentNum:1,name:[],tabName:[],gindex:-1}},mounted(){this.getTabNameData("组织动态"),"en"===this.$store.state.lang.isEn?this.getTabNameData("146"):this.getTabNameData("4"),this.getMediaData()},methods:{getTabNameData(t){"4"===t?(0,l.rk)({parentId:4}).then((t=>{this.tabName=t.data.rows})):"146"===t&&(0,l.rk)({parentId:146}).then((t=>{this.tabName=t.data.rows}))},getMediaData(t,a=this.$store.state.lang.version){(0,l.$U)({moduleType:t,version:a,status:"1"}).then((t=>{this.tabDatas=t.data.rows}))},getGindex(t){this.gindex=t}},watch:{"$store.state.lang.version":{handler(){(0,d.A)(this.getTabNameData(),this.$store.state.lang.version),"en"===this.$store.state.lang.isEn?this.getTabNameData("146"):this.getTabNameData("4"),this.getMediaData(this.gindex,this.$store.state.lang.version)}},gindex:{handler(){this.getMediaData(this.gindex,this.$store.state.lang.version)}}}},j=V,O=(0,u.A)(j,s,i,!1,null,"a57c6a46",null),U=O.exports},759:function(t,a,e){e.r(a),e.d(a,{default:function(){return h}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},t._l(t.reportinfoData,(function(e){return t.reportinfoData.length>0?a("div",{key:e.mediacenterId,staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(e.title))]),a("div",{staticClass:"info"},[a("div",{staticClass:"info-browser"},[t._v(t._s(t.$t("meet.browser"))+"："+t._s(e.clickVolume))]),a("div",{staticClass:"info-create"},[t._v(t._s(t.$t("meet.create"))+"："+t._s(e.releaseTime))])]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},[a("div",{staticClass:"intro",domProps:{innerHTML:t._s(e.contentDetails)}})])]):t._e()})),0)])},i=[],n=e(2964),r=e(1981),o={name:"Reportinfo",props:["tabDatas"],data(){return{reportinfoData:[]}},mounted(){this.getReportinfoData(),this.ImageStyles()},methods:{getReportinfoData(t=this.$store.state.lang.version){const a=this.$route.query.id;(0,n.$U)({moduleType:"3",status:"1",version:t,id:a}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.reportinfoData=t.data.rows.filter((t=>t.mediacenterId===a)))}))},ImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .intro img {\n                    width: 100%;\n                    \n                    background-size: cover;\n                    background-position: center;\n                }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getReportinfoData(),this.$store.state.lang.version)}}}},c=o,l=e(1656),d=(0,l.A)(c,s,i,!1,null,"818a9e9c",null),h=d.exports},4038:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("dynamic.video")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.videoDatas,(function(e){return a("div",{key:e.mediacenterId,staticClass:"doing-in"},[a("div",{staticClass:"doing-img"},[a("img",{attrs:{src:"http://www.wgdo.net"+e.cover,alt:""}})]),a("p",{staticClass:"doing-intro"},[t._v(t._s(e.title))])])})),0),a("Pagination",{attrs:{tabDatas:t.tabDatas,pageSize:t.pageSize,currentPage:t.currentPage,totalItems:t.totalItems},on:{currentTabDatas:t.currentTabDatas}})],1)])])},i=[],n=e(2964),r=e(1981),o=e(1247),c={name:"Video",props:["tabDatas"],components:{Pagination:o.A},data(){return{videoDatas:[],currentPage:1,totalItems:0,pageSize:9}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.videoDatas.slice(t,a)}},mounted(){this.getVideoData()},methods:{getVideoData(t=this.$store.state.lang.version){(0,n.$U)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.videoDatas=t.data.rows,this.totalItems=t.data.rows.length)}))},handlePageChange(t){this.currentPage=t}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getVideoData(),this.$store.state.lang.version)}}}},l=c,d=e(1656),h=(0,d.A)(l,s,i,!1,null,"329792a4",null),m=h.exports},8605:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="},6140:function(t,a,e){t.exports=e.p+"img/logoen.b57f11d2.png"}}]);
//# sourceMappingURL=430.48e02c60.js.map