"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[964,699,359,105,336],{3008:function(t,a,s){s.d(a,{A:function(){return l}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[t._m(0),a("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},t._l(t.urlData,(function(s){return a("el-breadcrumb-item",{attrs:{to:{path:s.path}}},[a("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),t._v(" "+t._s(s.name)+" ")])})),1)],1)},i=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:s(8605)}})])}],n={name:"Breadcrumb",props:["urlData"],mounted(){}},r=n,o=s(1656),c=(0,o.A)(r,e,i,!1,null,"0b00c7bb",null),l=c.exports},1383:function(t,a,s){s.d(a,{A:function(){return l}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"bgs"}),a("div",{staticClass:"f"},[a("div",{staticClass:"hTop"},[t._m(0),a("div",{staticClass:"right"},[a("div",{staticClass:"search"},[a("i",{staticClass:"iconfont icon-sousuo scarchI"}),a("el-input",{staticClass:"searchIn",attrs:{placeholder:t.$t("headernav.search")},model:{value:t.searchInp,callback:function(a){t.searchInp=a},expression:"searchInp"}})],1),a("div",{staticClass:"rightList"},[a("div",{staticClass:"login"},[a("a",{attrs:{href:"login"}},[t._v(t._s(t.$t("headernav.Login")))])]),a("div",{staticClass:"loginO"}),a("div",{staticClass:"sed"},[t._v(t._s(t.$t("headernav.Be our merber")))]),a("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:t.changeLang}},[a("div",{staticClass:"lang"},[t._v(t._s(t.lang))]),t._m(1)])])])]),a("div",{ref:"changeLangue",class:"中文"===t.$store.state.lang.langs?"zhBottom":"enBottom"},[a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/about"===t.$route.path},attrs:{to:"/about"}},[t._v(" "+t._s(t.$t("headernav.Aboutus"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/meet"===t.$route.path},attrs:{to:"/meet"}},[t._v(" "+t._s(t.$t("headernav.Conferenceactivity"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/media"===t.$route.path},attrs:{to:"/media"}},[t._v(" "+t._s(t.$t("headernav.Mediacenter"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/research"===t.$route.path},attrs:{to:"/research"}},[t._v(" "+t._s(t.$t("headernav.Academicresearch"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/project"===t.$route.path},attrs:{to:"/project"}},[t._v(" "+t._s(t.$t("headernav.Publicwelfareproject"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/prize"===t.$route.path},attrs:{to:"/prize"}},[t._v(" "+t._s(t.$t("headernav.InternationalGreenAward"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/wgdo"===t.$route.path},attrs:{to:"/wgdo"}},[t._v(" "+t._s(t.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn},attrs:{to:"http://lyb.wgdo.net/"}},[t._v(" "+t._s(t.$t("headernav.Greenleaflabel"))+" ")])],1)])])},i=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("div",{staticClass:"logo"},[a("img",{staticClass:"logoImg",attrs:{src:"https://img.js.design/assets/img/656e8dc581ed4034e8a418ee.png#680cdd771a71f03f8da7ef2659786ac3"}}),a("div",{staticClass:"logoDsc"},[a("div",{staticClass:"logoDscTop"},[t._v("世界绿色设计组织")]),a("div",{staticClass:"logoDscBot"},[t._v("World Green Design Organization")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"langO",staticStyle:{display:"none"}},[a("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],n={name:"HeaderNav",data(){let t="",a="中文";return{searchInp:t,lang:a}},created(){this.lang=this.$store.state.lang.langs,"中文"===this.$store.state.lang.langs?(this.$refs.changeLangue.classList.add("enBottom"),this.$refs.changeLanguea.classList.add("ens")):(this.$refs.changeLangue.classList.add("zhBottom"),this.$refs.changeLanguea.classList.add("zhs"))},mounted(){this.lang=this.$store.state.lang.langs},methods:{changeLang(){this.$store.commit("getLocalLang"),this.$store.commit("getVersion")}},watch:{"$store.state.lang.isText1Visible":{handler(){this.lang=this.$store.state.lang.langs}}}},r=n,o=s(1656),c=(0,o.A)(r,e,i,!1,null,"26582865",null),l=c.exports},4587:function(t,a,s){s.d(a,{A:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("el-tabs",{staticClass:"ets",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[t._l(t.tabName,(function(s){return[a("el-tab-pane",{staticClass:"etp",attrs:{label:s,name:s}},[a("Breadcrumb",{attrs:{urlData:t.urlData}})],1)]}))],2)],1)},i=[],n=(s(4114),s(3008)),r=s(2964),o=(s(1981),{components:{Breadcrumb:n.A},props:["tabName"],data(){return{activeName:"",tabDatas:[],routesData:[],currentRoute:[],urlData:[],aboutmap:{"组织介绍":"1","组织架构":"2","重要人物":"3","联系我们":"4"},meetmap:{"活动预告":"1","正在进行":"2","历届回顾":"3","活动详情":"4"},mediamap:{"组织动态":"1","论坛视频":"2","媒体报告":"3","动态详情":"4","报告详情":"5"},researchmap:{"绿色设计报告":"1","绿色设计国际标准":"2","绿色设计国际实验室":"3","共享资源":"4","绿色设计报告详情":"5"},projectmap:{"绿叶之家":"1","绿丝带":"2","绿丝带物资到货记录":"3","绿丝带行动捐赠光荣榜":"5","可信供方清单":"4","抗疫宣传":"7","联系方式":"6"},prizemap:{"绿色设计国际大奖":"1","绿色设计国际贡献奖":"3","评定规则":"2","获奖个人":"5","获奖机构":"5"},Mapping:{"机构简介":"1","分支拓建":"2","品牌服务":"3","绿色政策":"4","绿色设计培训":"5"},Map:{...this.aboutmap,...this.meetmap,...this.mediamap,...this.researchmap,...this.projectmap,...this.prizemap,...this.Mapping}}},mounted(){this.routesData=this.$router.options.routes,this.currentRoute=this.$router.history.current,this.routesData.forEach((t=>{t.name===this.currentRoute.name&&this.urlData.push(t)}))},methods:{handleClick(t,a){this.urlData.length>1&&this.urlData.pop();let s=t.$options.propsData.name;this.urlData.push({name:s});for(const e in this.Map)if(e===this.urlData[1].name)return this.getHomeAllTitleData(this.Map[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.aboutmap)if(e===this.urlData[1].name)return this.getAboutusData(this.aboutmap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.meetmap)if(e===this.urlData[1].name)return this.getMeetData(this.meetmap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.mediamap)if(e===this.urlData[1].name)return this.getMediaData(this.mediamap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.researchmap)if(e===this.urlData[1].name)return this.getResearchData(this.researchmap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.projectmap)if(e===this.urlData[1].name)return this.getProjectData(this.projectmap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.prizemap)if(e===this.urlData[1].name)return this.getPrizeData(this.prizemap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.Mapping)if(e===this.urlData[1].name)return this.getWgdoData(this.Mapping[e]),void this.$emit("tabclickDatas",this.urlData[1].name)},getAboutusData(t){(0,r.aJ)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Aboutus",this.tabDatas)}))},getMeetData(t){(0,r.wk)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Meet",this.tabDatas)}))},getMediaData(t){(0,r.$U)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Media",this.tabDatas)}))},getResearchData(t){(0,r.is)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Research",this.tabDatas)}))},getProjectData(t){(0,r.MM)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Project",this.tabDatas)}))},getPrizeData(t){(0,r.zE)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Prize",this.tabDatas)}))},getWgdoData(t){(0,r.Ev)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("WgdoData",this.tabDatas)}))},getHomeAllTitleData(t){(0,r.rk)({parentId:t}).then((t=>{this.tabDatas=t.data.rows,this.$emit("getHomeAllTitle",this.tabDatas)}))}}}),c=o,l=s(1656),h=(0,l.A)(c,e,i,!1,null,"5409106d",null),d=h.exports},8105:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("meet.doing")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line"}),a("div",{staticClass:"dynamic-dsc"},t._l(t.doingDatas,(function(s){return a("a",{key:s.conferenceId,staticClass:"doing-in",attrs:{href:s.externalLink}},[a("div",{staticClass:"doing-img"},[a("img",{attrs:{src:"http://106.3.97.14:9002"+s.cover,alt:""}})]),a("p",{staticClass:"doing-intro"},[t._v(t._s(s.title))])])})),0)])])])},i=[],n=s(2964),r=s(1981),o={name:"Doing",props:["tabDatas"],data(){return{doingDatas:[...this.tabDatas]}},mounted(){this.getMeetData()},methods:{getMeetData(t=this.$store.state.lang.version){(0,n.wk)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.doingDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getMeetData(),this.$store.state.lang.version)}}}},c=o,l=s(1656),h=(0,l.A)(c,e,i,!1,null,"7cf02b5c",null),d=h.exports},5310:function(t,a,s){s.r(a),s.d(a,{default:function(){return b}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("Headers"),a("div",{staticClass:"content"},[a("TabControl",{attrs:{tabName:t.tabName},on:{getHomeAllTitle:t.getMeetData,tabclickDatas:t.getTabName}}),"活动预告"===t.tabclickDatas?a("Preview",{attrs:{tabDatas:t.tabDatas}}):t._e(),"活动详情"===t.tabclickDatas?a("Info",{attrs:{tabDatas:t.tabDatas}}):t._e(),"正在进行"===t.tabclickDatas?a("Doing",{attrs:{tabDatas:t.tabDatas}}):t._e(),"历届回顾"===t.tabclickDatas?a("Lookback",{attrs:{tabDatas:t.tabDatas}}):t._e()],1),a("div",{staticClass:"foot"},[a("Footers")],1)],1)},i=[],n=s(1383),r=s(4587),o=s(7329),c=s(2964),l=s(2693),h=s(8774),d=s(8105),u=s(2336),g=s(1981),m={name:"Meet",components:{Headers:n.A,TabControl:r.A,Footers:o.A,Preview:l["default"],Info:h["default"],Doing:d["default"],Lookback:u["default"]},props:["urlData"],data(){return{tabName:[],MeetDatas:[],tabDatas:[],tabclickDatas:"活动预告",name:[]}},mounted(){this.getMeetData("活动预告"),this.getTabNameData()},methods:{getMeetData(t=this.$store.state.lang.version){(0,c.wk)({parentId:"3"}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.tabDatas=t.data.rows)})),(0,c.wk)({parentId:"145"}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.tabDatas=t.data.rows)}))},getTabNameData(t=this.$store.state.lang.version){(0,c.rk)({parentId:"3",version:t}).then((t=>{if(t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0){let a=t.data.rows[0].children;this.tabName=a.map((t=>t.classifyName))}})),(0,c.rk)({parentId:"145",version:t}).then((t=>{if(t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0){let a=t.data.rows[0].children;this.tabName=a.map((t=>t.classifyName))}}))},getTabName(t){this.tabclickDatas=t}},watch:{"$store.state.lang.version":{handler(){(0,g.A)(this.getTabNameData(),this.$store.state.lang.version)}}}},p=m,v=s(1656),D=(0,v.A)(p,e,i,!1,null,"594b0bb5",null),b=D.exports},2336:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("meet.lookback")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.lookbackDatas,(function(s){return a("a",{key:s.conferenceId,staticClass:"doing-in",attrs:{href:s.externalLink}},[a("div",{staticClass:"doing-img"},[a("img",{attrs:{src:"http://106.3.97.14:9002"+s.cover,alt:""}})]),a("p",{staticClass:"doing-intro"},[t._v(t._s(s.title))])])})),0),a("div",{staticClass:"dynamic-data"},[a("div",{staticClass:"dynamic-data-num"},[a("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),a("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),a("div",{staticClass:"devide-page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a},"current-change":t.handlePageChange}},[t._v("> ")])],1)])])])])},i=[],n=s(2964),r=s(1981),o={name:"Lookback",props:["tabDatas"],data(){return{lookbackDatas:[...this.tabDatas],currentPage:1,totalItems:0,pageSize:9}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.lookbackDatas.slice(t,a)}},mounted(){this.getLookbackData()},methods:{getLookbackData(t=this.$store.state.lang.version){(0,n.wk)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.lookbackDatas=t.data.rows,this.totalItems=t.data.rows.length)}))},handlePageChange(t){this.currentPage=t}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getLookbackData(),this.$store.state.lang.version)}}}},c=o,l=s(1656),h=(0,l.A)(c,e,i,!1,null,"f75e1172",null),d=h.exports},2693:function(t,a,s){s.r(a),s.d(a,{default:function(){return u}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("meet.previewact")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.previewDatas,(function(s,e){return a("a",{key:s.conferenceId,staticClass:"dynamic-content",attrs:{href:t.isSecondLink(e)?"/meet/preview/info":s.externalLink}},[a("div",{staticClass:"dynamic-img"},[a("img",{attrs:{src:"http://106.3.97.14:9002"+s.cover,alt:""}})]),a("div",{staticClass:"dynamic-dscall"},[a("div",{staticClass:"dscall-top"},[a("div",{staticClass:"dscall-title"},[t._v(t._s(s.title))]),a("div",{staticClass:"dscall-content"},[t._v(t._s(s.intro))])]),a("div",{staticClass:"dscall-time"},[t._v(t._s(s.releaseTime))])])])})),0),a("div",{staticClass:"dynamic-data"},[a("div",{staticClass:"dynamic-data-num"},[a("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),a("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),a("div",{staticClass:"devide-page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a},"current-change":t.handlePageChange}},[t._v("> ")])],1)])])])])},i=[],n=s(2964),r=s(8774),o=s(1981),c={name:"Preview",props:["tabDatas"],components:{Info:r.Info},data(){return{previewDatas:[...this.tabDatas],currentPage:1,totalItems:0,pageSize:10}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.previewDatas.slice(t,a)}},mounted(){this.getPreviewData()},methods:{isSecondLink(t){return 1===t},getPreviewData(t=this.$store.state.lang.version){(0,n.wk)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.previewDatas=t.data.rows,this.totalItems=t.data.rows.length)}))},handlePageChange(t){this.currentPage=t}},watch:{"$store.state.lang.version":{handler(){(0,o.A)(this.getPreviewData(),this.$store.state.lang.version)}}}},l=c,h=s(1656),d=(0,h.A)(l,e,i,!1,null,"afd358b8",null),u=d.exports},8605:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=964.4df044ad.js.map